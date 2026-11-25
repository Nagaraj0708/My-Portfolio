import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { siteConfig } from "@/data/siteConfig";
import { formatContactPayload } from "@/lib/formatContact";

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

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildPremiumEmailHtml(params: {
  name: string;
  email: string;
  scope: string;
  message: string;
  timestamp: string;
}) {
  const safeName = escapeHtml(params.name);
  const safeEmail = escapeHtml(params.email);
  const safeScope = escapeHtml(params.scope);
  const safeMessage = escapeHtml(params.message);
  const safeTimestamp = escapeHtml(params.timestamp);
  const replySubject = encodeURIComponent(`Re: [${params.scope}] Portfolio Inquiry`);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio Dispatch — ${safeName}</title>
</head>
<body style="margin:0;padding:0;background-color:#05070D;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#F8FAFC;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#05070D;padding:36px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;width:100%;background-color:#0B0F19;border:1px solid #1E293B;border-radius:24px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,0.65);">
          
          <!-- Top Accent Bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#FF5500 0%,#FF7711 60%,#FFA04D 100%);"></td>
          </tr>

          <!-- Header Brand Bar -->
          <tr>
            <td style="padding:28px 32px 20px 32px;border-bottom:1px solid rgba(255,255,255,0.08);">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="left" valign="middle">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#FF5500,#FF7711);text-align:center;vertical-align:middle;font-weight:900;font-size:13px;color:#FFFFFF;letter-spacing:0.5px;">
                          NK
                        </td>
                        <td style="padding-left:12px;">
                          <div style="font-size:12px;font-weight:800;letter-spacing:1.6px;color:#FFFFFF;text-transform:uppercase;">Nagaraj K</div>
                          <div style="font-size:10px;font-weight:700;letter-spacing:1.4px;color:#FF6600;text-transform:uppercase;margin-top:2px;">Portfolio Dispatch Console</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" valign="middle">
                    <span style="display:inline-block;padding:5px 12px;border-radius:999px;background-color:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.3);font-size:10px;font-weight:700;color:#34D399;letter-spacing:0.8px;text-transform:uppercase;">
                      &#9679; Live Inquiry
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero Title -->
          <tr>
            <td style="padding:28px 32px 16px 32px;">
              <div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#94A3B8;margin-bottom:8px;">
                Inbound Collaboration Request
              </div>
              <h1 style="margin:0;font-size:24px;line-height:1.25;font-weight:800;color:#FFFFFF;letter-spacing:-0.3px;">
                ${safeName} reached out regarding <span style="color:#FF6600;">${safeScope}</span>
              </h1>
            </td>
          </tr>

          <!-- Metadata Grid Card -->
          <tr>
            <td style="padding:8px 32px 16px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.09);border-radius:16px;">
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);width:34%;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#94A3B8;">
                    Name
                  </td>
                  <td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px;font-weight:700;color:#FFFFFF;">
                    ${safeName}
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#94A3B8;">
                    Email
                  </td>
                  <td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px;font-weight:600;">
                    <a href="mailto:${safeEmail}" style="color:#FF7711;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#94A3B8;">
                    Inquiry Scope
                  </td>
                  <td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
                    <span style="display:inline-block;padding:4px 12px;border-radius:999px;background-color:#FFFFFF;color:#0A0D14;font-size:11px;font-weight:800;">
                      ${safeScope}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#94A3B8;">
                    Received At
                  </td>
                  <td style="padding:16px 20px;font-size:13px;color:#CBD5E1;">
                    ${safeTimestamp}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Content Card -->
          <tr>
            <td style="padding:4px 32px 24px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.09);border-radius:16px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#FF6600;margin-bottom:10px;">
                      Message
                    </div>
                    <div style="font-size:14px;line-height:1.7;color:#E2E8F0;white-space:pre-wrap;">${safeMessage}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Action CTA -->
          <tr>
            <td align="center" style="padding:0 32px 32px 32px;">
              <a href="mailto:${safeEmail}?subject=${replySubject}" style="display:inline-block;padding:14px 28px;border-radius:14px;background-color:#FFFFFF;color:#070A12;font-size:13px;font-weight:800;text-decoration:none;letter-spacing:0.3px;">
                Reply to ${safeName} &rarr;
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:18px 32px;background-color:rgba(255,255,255,0.02);border-top:1px solid rgba(255,255,255,0.06);text-align:center;font-size:11px;color:#64748B;">
              Dispatched from <strong style="color:#94A3B8;">nagarajk.dev</strong> &bull; Verified Direct Channel
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

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

    const { _honey } = parsed.data;

    // Silent drop for spam bots filling the hidden honeypot field
    if (_honey && _honey.length > 0) {
      return NextResponse.json({ ok: true, provider: "honeypot" });
    }

    const formatted = formatContactPayload(parsed.data);
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }) + " IST";

    // 1. Primary Server-Side Delivery via Gmail SMTP (Custom Space Black HTML Template)
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    if (gmailAppPassword) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const nodemailer = require("nodemailer");
      const gmailUser = process.env.GMAIL_USER || siteConfig.email;
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      await transporter.sendMail({
        from: `"NK Portfolio Dispatch" <${gmailUser}>`,
        to: siteConfig.email,
        replyTo: parsed.data.email.trim(),
        subject: `NK Portfolio • ${formatted.scope} Inquiry from ${formatted.name}`,
        html: buildPremiumEmailHtml({
          ...formatted,
          timestamp,
        }),
      });

      return NextResponse.json({ ok: true, provider: "gmail-smtp", formatted });
    }

    // 2. Alternative Server-Side Delivery via Resend (if RESEND_API_KEY is configured)
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
          reply_to: parsed.data.email.trim(),
          subject: `[Portfolio • ${formatted.scope}] New Inquiry from ${formatted.name}`,
          html: buildPremiumEmailHtml({
            ...formatted,
            timestamp,
          }),
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        return NextResponse.json(
          { ok: false, error: `Email service error: ${errText}` },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true, provider: "resend", formatted });
    }

    // 2. Fallback: Server-side relay via FormSubmit.co (single fast hop for client)
    const origin = req.headers.get("origin") || siteConfig.url;
    const referer = req.headers.get("referer") || `${siteConfig.url}/`;

    const relayRes = await fetch(
      `https://formsubmit.co/ajax/${siteConfig.email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: referer,
        },
        body: JSON.stringify({
          Name: formatted.name,
          Email: formatted.email,
          "Inquiry Scope": formatted.scope,
          Message: formatted.message,
          "Received At": timestamp,
          _subject: `NK Portfolio • ${formatted.scope} Inquiry from ${formatted.name}`,
          _replyto: parsed.data.email.trim(),
          _template: "box",
          _captcha: "false",
        }),
      }
    );

    const relayData = await relayRes.json().catch(() => null);
    if (!relayRes.ok || relayData?.success === "false") {
      return NextResponse.json(
        {
          ok: false,
          error:
            relayData?.message ||
            "Unable to reach mail relay. Please email Naga97raj@gmail.com directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      provider: "formsubmit",
      formatted,
      timestamp,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to process contact request." },
      { status: 500 }
    );
  }
}
