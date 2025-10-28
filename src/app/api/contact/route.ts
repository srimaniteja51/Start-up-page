import { NextResponse } from "next/server";
import { Resend } from "resend";

// Safely initialize Resend only if the API key exists
const resendApiKey = process.env.RESEND_API_KEY;

let resend: Resend | null = null;
if (resendApiKey) {
  resend = new Resend(resendApiKey);
} else {
  console.warn("⚠️ RESEND_API_KEY is missing — email sending disabled.");
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, type } = await req.json();

    // If no API key, skip sending email (avoid build/runtime crash)
    if (!resend) {
      console.error("❌ Missing RESEND_API_KEY. Cannot send email.");
      return NextResponse.json({
        success: false,
        error: "Email service not configured.",
      });
    }

    // Send email
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "srujansamala92@gmail.com",
      subject: `New ${type?.toUpperCase?.() || "GENERAL"} message from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not provided"}</p>
        <p><b>Type:</b> ${type}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error in contact route:", error);
    return NextResponse.json({
      success: false,
      error: error?.message || "Unknown error",
    });
  }
}
