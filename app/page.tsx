import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Allison&apos;s Accounting Assistance</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Stop overpaying on taxes.<br className="hidden md:block" /> Start running clean books.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools built by a licensed CPA — so small business owners can handle their accounting with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up?plan=pro"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-bold text-white hover:bg-brand-700 transition-colors"
            >
              Start Pro Free for 7 Days <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Browse Free Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Pricing snapshot */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-2">Pricing</p>
          <h2 className="text-3xl font-bold">Everything you need for $29/month</h2>
          <p className="text-slate-600 mt-2">Or start free — no credit card required.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Free tier */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col">
            <h3 className="text-xl font-bold mb-1">Free</h3>
            <div className="flex items-end gap-1 mb-4">
              <span className="text-3xl font-extrabold text-slate-900">$0</span>
              <span className="text-slate-500 mb-1">/forever</span>
            </div>
            <ul className="space-y-2 mb-8 flex-1">
              {[
                "All free blog articles",
                "1 starter bookkeeping template",
                "Quarterly tax due-date reminders",
                "Basic tax deduction checklist",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                  <Check className="h-4 w-4 shrink-0 text-brand-600" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block w-full rounded-lg border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Get Started Free
            </Link>
          </div>

          {/* Pro tier */}
          <div className="rounded-2xl border-2 border-brand-600 bg-brand-50 p-8 flex flex-col shadow-lg">
            <div className="mb-3">
              <span className="inline-block rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                Most Popular
              </span>
            </div>
            <h3 className="text-xl font-bold mb-1">Pro</h3>
            <div className="flex items-end gap-1 mb-4">
              <span className="text-3xl font-extrabold text-slate-900">$29</span>
              <span className="text-slate-500 mb-1">/month</span>
            </div>
            <ul className="space-y-2 mb-8 flex-1">
              {[
                "Everything in Free",
                "Full template library (20+ templates)",
                "All premium courses",
                "S-Corp savings calculator",
                "Priority email support",
                "1:1 Setup Session (60 min)",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                  <Check className="h-4 w-4 shrink-0 text-brand-600" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up?plan=pro"
              className="block w-full rounded-lg bg-brand-600 px-6 py-3 text-center text-sm font-bold text-white hover:bg-brand-700 transition-colors"
            >
              Start Pro — 7 Days Free
            </Link>
          </div>
        </div>

        {/* ROI note */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Pro costs $348/year. The average member saves <strong className="text-slate-700">$6,400</strong> in missed deductions and tax savings.{" "}
          <Link href="/pricing" className="font-semibold text-brand-600 hover:text-brand-700">See full plan details →</Link>
        </p>
      </div>

      {/* Features */}
      <div className="border-t bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Built for small business owners</h2>
            <p className="text-slate-600 mt-2">Not accountants. Not corporations. You.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Courses in plain English", desc: "No jargon. No gatekeeping. Learn bookkeeping, taxes, and payroll at your own pace.", href: "/learn" },
              { title: "Ready-to-use templates", desc: "Plug-and-play spreadsheets for invoicing, expense tracking, payroll, and more.", href: "/templates" },
              { title: "Tools that do the math", desc: "Calculators for quarterly taxes, S-Corp savings, and break-even analysis.", href: "/tools" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-sm transition-all"
              >
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                <p className="mt-3 text-sm font-semibold text-brand-600">Explore →</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get your books in order?</h2>
          <p className="text-slate-600 mb-8">Join hundreds of small business owners who stopped dreading tax season.</p>
          <Link
            href="/sign-up?plan=pro"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3 text-sm font-bold text-white hover:bg-brand-700 transition-colors"
          >
            Start Pro Free for 7 Days <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-xs text-slate-400 mt-3">No credit card required. Cancel anytime.</p>
        </div>
      </div>
    </div>
  )
}
