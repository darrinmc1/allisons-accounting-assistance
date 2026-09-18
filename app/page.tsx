import Link from "next/link"
import { ArrowRight, CheckCircle, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Allison&apos;s Accounting Assistance</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">Accounting made simple for small business owners</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools built by a licensed CPA — so you can stop stressing about your books and get back to running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/learn" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
              Start Learning Free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              View Pricing &amp; Plans
            </Link>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-2">Pricing</p>
          <h2 className="text-3xl font-bold tracking-tight mb-3">Start free. Upgrade when you&apos;re ready.</h2>
          <p className="text-slate-600 max-w-xl mx-auto">No surprise fees. No confusing tiers. Pick the plan that fits where you are right now.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Free Tier */}
          <div className="rounded-xl border border-slate-200 p-8">
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-1">Free</p>
              <p className="text-4xl font-bold">$0</p>
              <p className="text-slate-500 text-sm mt-1">Forever free — no credit card needed</p>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Access to all free courses",
                "Monthly bookkeeping checklist template",
                "Tax deadline calendar",
                "Weekly accounting tips newsletter",
                "Community Q&A access",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/sign-up" className="block text-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              Get started free
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="rounded-xl border-2 border-brand-600 bg-brand-50 p-8 relative">
            <div className="absolute -top-3 left-6">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                <Zap className="h-3 w-3" /> Most Popular
              </span>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700 mb-1">Pro</p>
              <p className="text-4xl font-bold">$29<span className="text-lg font-medium text-slate-500">/mo</span></p>
              <p className="text-slate-500 text-sm mt-1">Everything in Free, plus:</p>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "All premium courses & workshops",
                "Full template library (50+ templates)",
                "Profit & loss, cash flow, and tax calculators",
                "Priority email support from Allison",
                "Monthly live Q&A sessions",
                "1 free 30-min strategy session/year",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/pricing" className="block text-center rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
              See full plan details
            </Link>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Need a custom plan for your team?{" "}
          <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">Contact us</Link>
        </p>
      </div>

      {/* Features */}
      <div className="border-t bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-2">What&apos;s included</p>
            <h2 className="text-3xl font-bold tracking-tight">Everything you need to run clean books</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: "Courses", desc: "Plain-English accounting courses built for non-accountants. Go from confused to confident.", href: "/learn", cta: "Browse courses" },
              { title: "Templates", desc: "Ready-to-use spreadsheets for bookkeeping, invoicing, payroll, and more.", href: "/templates", cta: "See templates" },
              { title: "Tools", desc: "Calculators and checklists that make tax time and monthly close a breeze.", href: "/tools", cta: "Explore tools" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
                <Link href={item.href} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
                  {item.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
