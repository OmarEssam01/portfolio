import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // set in .env.local
        pass: process.env.EMAIL_PASS, // set in .env.local
      },
    });

 await transporter.sendMail({
  from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // always your Gmail
  to: process.env.EMAIL_USER, // you receive it
  replyTo: email, // 🔥 this makes replies go to the sender
  subject: subject || "New Contact Form Message",
  text: message,
  html: `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
});


    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Error sending email" });
  }
}
