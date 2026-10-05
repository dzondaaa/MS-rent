import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, machine, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Vyplňte povinná pole." },
        { status: 400 }
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
        <h2>Nová poptávka z webu MS-rent</h2>

        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Neuveden"}</p>
        <p><strong>Stroj:</strong> ${machine || "Neuveden"}</p>

        <h3>Zpráva</h3>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      message: "Poptávka byla úspěšně odeslána.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Při odesílání nastala chyba." },
      { status: 500 }
    );
  }
}