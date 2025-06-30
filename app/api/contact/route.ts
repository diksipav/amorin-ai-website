import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, msg } = await req.json();

  try {
    await resend.emails.send({
      from: "Contact Form <hello@amorin.ai>",
      to: "hello@amorin.ai",
      subject: "New Contact Form Submission",
      html: `<p><b>Name:</b><br/>${name}</p><p><b>Email:</b> ${email}</p><p><b>Msg:</b><br/>${msg}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
