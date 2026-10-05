import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const machine = String(body.machine || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Vyplňte povinná pole." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { message: "Zadejte platný e-mail." },
        { status: 400 }
      );
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.CONTACT_TO_EMAIL
    ) {
      console.error("Chybí SMTP proměnné.");

      return NextResponse.json(
        { message: "E-mailová služba není správně nastavena." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"MS-rent web" <${process.env.SMTP_USER}>`,

      to: process.env.CONTACT_TO_EMAIL,

      replyTo: email,

      subject: `Nová poptávka MS-rent - ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>Nová poptávka z webu MS-rent</h2>

          <p>
            <strong>Jméno:</strong><br>
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>E-mail:</strong><br>
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>Telefon:</strong><br>
            ${escapeHtml(phone || "Neuveden")}
          </p>

          <p>
            <strong>Stroj:</strong><br>
            ${escapeHtml(machine || "Neuveden")}
          </p>

          <hr>

          <h3>Zpráva</h3>

          <p>
            ${escapeHtml(message).replaceAll("\n", "<br>")}
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      message: "Poptávka byla úspěšně odeslána.",
    });

  } catch (error) {
    console.error("Chyba při odesílání e-mailu:", error);

    return NextResponse.json(
      {
        message: "Při odesílání nastala chyba. Zkuste to prosím znovu.",
      },
      { status: 500 }
    );
  }
}