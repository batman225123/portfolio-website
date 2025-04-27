import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Create a transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Define email content
  const mailOptions = {
    from: process.env.GMAIL_USER, // Always use your own verified email here for Gmail
    to: process.env.GMAIL_USER,
    subject: `New message from ${name} via your portfolio`,
    text: message,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <div style="background-color: #10b981; color: white; padding: 20px;">
            <h2 style="margin: 5px;">📩 New Contact Form Submission</h2>
          </div>
          <div style="padding: 30px; color: #333;">
            <p style="margin-bottom: 20px;">You've received a new message from your portfolio contact form:</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0;"><strong>Name:</strong></td>
                <td style="padding: 10px 0;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0;"><strong>Email:</strong></td>
                <td style="padding: 10px 0;">${email}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; vertical-align: top;"><strong>Message:</strong></td>
                <td style="padding: 10px 0;">${message.replace(
                  /\n/g,
                  "<br>"
                )}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #888;">
            Sent from your portfolio – Syed Abu-Talib
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending message" },
      { status: 500 }
    );
  }
}
