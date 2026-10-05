import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const machine = clean(body.machine);
    const message = clean(body.message);
    const website = clean(body.website);

    // Honeypot proti jednoduchým botům.
    if (website) {
      return NextResponse.json({ message: "Poptávka byla odeslána." });
    }

    if (name.length < 2 || !isEmail(email) || message.length < 10) {
      return NextResponse.json(
        { message: "Zkontrolujte jméno, e-mail a zprávu." },
        { status: 400 }
      );
    }

    if (name.length > 80 || email.length > 120 || phone.length > 30 || machine.length > 80 || message.length > 2000) {
      return NextResponse.json(
        { message: "Některé pole je příliš dlouhé." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "465");
    const secure = process.env.SMTP_SECURE === "true";
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!host || !user || !pass || !to || !Number.isFinite(port)) {
      console.error("Chybí SMTP proměnné prostředí.");
      return NextResponse.json(
        { message: "E-mailová služba není správně nastavena." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass }
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Neuveden");
    const safeMachine = escapeHtml(machine || "Neuveden");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br>");

    await transporter.sendMail({
      from: `"MS-rent web" <${user}>`,
      to,
      replyTo: email,
      subject: `Nová poptávka MS-rent${machine ? ` – ${machine}` : ""}`,
      text: [
        `Jméno: ${name}`,
        `E-mail: ${email}`,
        `Telefon: ${phone || "Neuveden"}`,
        `Stroj: ${machine || "Neuveden"}`,
        "",
        "Zpráva:",
        message
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;line-height:1.55;color:#171717">
          <h2>Nová poptávka z webu MS-rent</h2>
          <p><strong>Jméno:</strong><br>${safeName}</p>
          <p><strong>E-mail:</strong><br>${safeEmail}</p>
          <p><strong>Telefon:</strong><br>${safePhone}</p>
          <p><strong>Stroj:</strong><br>${safeMachine}</p>
          <hr style="border:0;border-top:1px solid #ddd;margin:24px 0">
          <h3>Zpráva</h3>
          <p>${safeMessage}</p>
        </div>
      `
    });

    return NextResponse.json({ message: "Děkujeme. Poptávka byla odeslána." });
  } catch (error) {
    console.error("Chyba při odesílání formuláře:", error);
    return NextResponse.json(
      { message: "Při odesílání nastala chyba. Zkuste to prosím znovu." },
      { status: 500 }
    );
  }
}
