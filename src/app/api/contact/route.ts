import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, type } = await req.json();

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "srujansamala92@gmail.com",
      subject: `New ${type.toUpperCase()} message from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not provided"}</p>
        <p><b>Type:</b> ${type}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
