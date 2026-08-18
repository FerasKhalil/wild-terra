import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "x.firashasan@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "WildTerra Contact Form <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `New message from ${name} — WildTerra Contact Form`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; background: #f9fafb; margin: 0; padding: 40px 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
            .header { background: #15803d; padding: 24px 32px; }
            .header h1 { color: #ffffff; margin: 0; font-size: 20px; }
            .body { padding: 32px; }
            .label { font-size: 12px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
            .value { font-size: 16px; color: #111827; margin-bottom: 20px; }
            .message-box { background: #f3f4f6; border-radius: 8px; padding: 16px; font-size: 15px; color: #374151; line-height: 1.6; white-space: pre-wrap; }
            .footer { padding: 16px 32px; border-top: 1px solid #e5e7eb; font-size: 13px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>WildTerra — New Contact Form Message</h1>
            </div>
            <div class="body">
              <div class="label">Name</div>
              <div class="value">${name}</div>

              <div class="label">Email</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>

              <div class="label">Message</div>
              <div class="message-box">${message}</div>
            </div>
            <div class="footer">
              Sent via WildTerra Contact Form — ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
