import Link from "next/link"
import { ArrowRight, BookOpen, FileSpreadsheet, Calculator, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Allison&apos;s Accounting Assistance</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">Accounting made simple for small business owners</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools that turn confusing bookkeeping into a manageable part of running your business — no accounting degree required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/learn" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
              Start Learning Free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Everything you need to stay on top of your books</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: BookOpen, title: "Practical Courses", desc: "Step-by-step lessons covering taxes, bookkeeping, payroll, and more — taught in plain English." },
            { icon: FileSpreadsheet, title: "Ready-Made Templates", desc: "Download and use professional spreadsheets for invoicing, expense tracking, and quarterly taxes." },
            { icon: Calculator, title: "Smart Tools", desc: "Calculators and checklists that help you make better financial decisions in minutes, not hours." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <item.icon className="h-8 w-8 text-brand-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-slate-50 border-y">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3 text-center">Pricing</p>
          <h2 className="text-3xl font-bold text-center mb-3">Simple, transparent pricing</h2>
          <p className="text-slate-600 text-center mb-10 max-w-xl mx-auto">Start free and upgrade when you&apos;re ready. No hidden fees, no long-term contracts.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Free Tier */}
            <div className="rounded-xl border border-slate-200 bg-white p-8 flex flex-col">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-2">Free</p>
              <p className="text-4xl font-bold mb-1">$0</p>
              <p className="text-sm text-slate-500 mb-6">Forever free</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Access to all free courses",
                  "3 downloadable templates",
                  "Basic tax calculators",
                  "Weekly accounting tips",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/sign-up" className="block text-center rounded-lg border border-brand-600 px-4 py-2.5 text-sm font-semibold text-brand-600 hover:bg-brand-50 transition-colors">
                Get Started Free
              </Link>
            </div>

            {/* Pro Tier */}
            <div className="rounded-xl border-2 border-brand-600 bg-white p-8 flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">Most Popular</span>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700 mb-2">Pro</p>
              <p className="text-4xl font-bold mb-1">$19<span className="text-lg font-normal text-slate-500">/mo</span></p>
              <p className="text-sm text-slate-500 mb-6">Billed monthly</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Everything in Free",
                  "Full template library (30+)",
                  "All premium courses",
                  "Advanced tax calculators",
                  "Priority email support",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/sign-up" className="block text-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
                Start Pro — $19/mo
              </Link>
            </div>

            {/* Premium Tier */}
            <div className="rounded-xl border border-slate-200 bg-white p-8 flex flex-col">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-2">Premium</p>
              <p className="text-4xl font-bold mb-1">$49<span className="text-lg font-normal text-slate-500">/mo</span></p>
              <p className="text-sm text-slate-500 mb-6">Billed monthly</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Everything in Pro",
                  "Monthly 1:1 strategy session",
                  "Custom bookkeeping setup",
                  "Quarterly tax review call",
                  "Dedicated account manager",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
                Talk to Allison
              </Link>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            Not sure which plan is right for you?{" "}
            <Link href="/pricing" className="font-semibold text-brand-600 hover:text-brand-700">See full plan comparison →</Link>
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get your books under control?</h2>
        <p className="text-slate-600 mb-8">Join thousands of small business owners who use Allison&apos;s tools to save time and money every year.</p>
        <Link href="/learn" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
          Browse Free Courses <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
