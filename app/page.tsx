import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

const testimonials = [
  {
    quote: "I used to spend 12+ hours every month trying to reconcile my books. After going through Allison's course and using her templates, I'm down to under 2 hours. That time goes back into my business now.",
    name: "Marcus T.",
    business: "Owner, MT Landscaping Co.",
    result: "Saved 10+ hours/month",
  },
  {
    quote: "I had no idea I was missing so many deductions. In my first year using Allison's system, my accountant found an extra $4,200 in write-offs I would have completely overlooked.",
    name: "Priya S.",
    business: "Freelance Graphic Designer",
    result: "$4,200 in extra deductions found",
  },
  {
    quote: "Tax season used to give me anxiety for months. Now I actually feel prepared. The quarterly estimated tax tracker alone was worth every penny of the membership.",
    name: "Derek W.",
    business: "Owner, Westside Auto Detailing",
    result: "Zero tax-season surprises",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Allison&apos;s Accounting Assistance</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Stop dreading your books.<br />Start understanding them.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools built for small business owners who want to get their accounting under control — without hiring a full-time bookkeeper.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              See Plans & Pricing <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Browse Free Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Everything you need to run clean books</h2>
          <p className="text-slate-600 max-w-xl mx-auto">From beginner basics to advanced tax strategy — we cover it all in plain English.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Courses",
              desc: "Step-by-step video courses on bookkeeping, taxes, payroll, and more. Learn at your own pace.",
              href: "/learn",
              label: "Browse Courses",
            },
            {
              title: "Templates",
              desc: "Ready-to-use spreadsheets for tracking expenses, invoices, quarterly taxes, and cash flow.",
              href: "/templates",
              label: "Get Templates",
            },
            {
              title: "Tools",
              desc: "Free calculators for estimated taxes, break-even analysis, mileage deductions, and more.",
              href: "/tools",
              label: "Try the Tools",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">{item.desc}</p>
              <Link href={item.href} className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
                {item.label} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="border-y bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-2">Real Results</p>
            <h2 className="text-3xl font-bold mb-3">Small business owners who got their books under control</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Here&apos;s what happens when you stop guessing and start using a system that actually works.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-semibold text-sm text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500 mb-2">{t.business}</p>
                  <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{t.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing CTA */}
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get your accounting under control?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Join hundreds of small business owners who use Allison&apos;s courses, templates, and tools to save time, reduce stress, and keep more of what they earn.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            View Pricing Plans <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            About Allison
          </Link>
        </div>
      </div>
    </div>
  )
}
