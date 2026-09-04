"use server";

import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email and message." };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    console.error("Missing SMTP configuration environment variables.");
    return { status: "error", message: "Sorry, something went wrong. Please try again later." };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"${site.name} Website" <${SMTP_USER}>`,
      to: site.email,
      replyTo: email,
      subject: subject ? `[Contact Form] ${subject}` : `[Contact Form] New message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return { status: "success" };
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return { status: "error", message: "Sorry, something went wrong. Please try again later." };
  }
}
