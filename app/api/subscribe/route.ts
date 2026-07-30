import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Valid email address is required" },
        { status: 400 },
      )
    }

    // If Resend is configured, send a welcome / confirmation email
    if (resend) {
      const from =
        process.env.RESEND_FROM_EMAIL || "noreply@allisonsaccounting.com"

      await resend.emails.send({
        from,
        to: email,
        subject: "Welcome to Allison's Accounting Assistance!",
        html: `
          <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
            <h1 style="color: #2563eb;">Welcome!</h1>
            <p>Thanks for subscribing to Allison's Accounting Assistance.</p>
            <p>You'll receive tips, templates, and tools to help with your small business bookkeeping, tax prep, and payroll.</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
            <p style="color: #64748b; font-size: 12px;">
              You received this email because you subscribed at allisonsaccounting.com.
            </p>
          </div>
        `,
      })
    }

    // TODO: Store email in your database (e.g., Supabase, Neon, Vercel KV)
    // await db.insert(subscribers).values({ email, subscribedAt: new Date() })

    return NextResponse.json(
      {
        success: true,
        message: "Subscribed successfully",
      },
      { status: 200 },
    )
  } catch (err) {
    console.error("Subscribe error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    )
  }
}
