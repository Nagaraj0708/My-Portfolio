import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { siteConfig } from "@/data/siteConfig";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please provide a valid email address"),
  scope: z.string().trim().min(1).max(100).optional().default("General Inquiry"),
  message: z
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters")
    .max(5000),
  _honey: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]?.message || "Invalid form data";
      return NextResponse.json(
        { ok: false, error: firstIssue },
        { status: 400 }
      );
    }

    const { name, email, scope, message, _honey } = parsed.data;

    // Silent drop for spam bots filling the hidden honeypot field
    if (_honey && _honey.length > 0) {
      return NextResponse.json({ ok: true, provider: "honeypot" });
    }

    // 1. Primary Server-Side Delivery via Resend (if RESEND_API_KEY is configured)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const fromEmail =
        process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [siteConfig.email],
          reply_to: email,
          subject: `[Portfolio • ${scope}] New message from ${name}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #070A12; color: #F8FAFC; border-radius: 16px; border: 1px solid #1E293B;">
              <p style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #FF6600; margin: 0 0 8px 0;">Portfolio Contact Dispatch</p>
              <h2 style="margin: 0 0 20px 0; font-size: 22px; color: #FFFFFF;">New Inquiry: ${scope}</h2>
              <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                <p style="margin: 0 0 8px 0; font-size: 13px; color: #94A3B8;"><strong style="color: #FFFFFF;">From:</strong> ${name}</p>
                <p style="margin: 0; font-size: 13px; color: #94A3B8;"><strong style="color: #FFFFFF;">Email:</strong> <a href="mailto:${email}" style="color: #FF6600;">${email}</a></p>
              </div>
              <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 16px;">
                <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94A3B8;">Message</p>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #E2E8F0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          `,
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        return NextResponse.json(
          { ok: false, error: `Email service error: ${errText}` },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true, provider: "resend" });
    }

    // 2. Fallback: Tell client to relay via FormSubmit.co directly with browser Origin
    return NextResponse.json({
      ok: true,
      provider: "client-relay",
      targetEmail: siteConfig.email,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to process contact request." },
      { status: 500 }
    );
  }
}
