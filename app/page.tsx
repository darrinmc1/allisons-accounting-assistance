import Link from "next/link"
import { ArrowRight, Check, X } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Allison&apos;s Accounting Assistance</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Accounting help built for small business owners</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and 1-on-1 guidance that turn confusing books into a manageable part of running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/sign-up" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
              Get started free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/learn" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              Browse free courses
            </Link>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h2 className="text-3xl font-bold tracking-tight mb-3">Simple, transparent pricing</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Start free and upgrade when you&apos;re ready. No hidden fees, no surprise invoices.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {/* Free Tier */}
          <div className="rounded-2xl border border-slate-200 p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">Free</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-slate-500 mb-2">/month</span>
              </div>
              <p className="text-slate-600 text-sm">Everything you need to get started and build good habits.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Access to all free courses",
                "3 starter templates (P&L, budget, invoice)",
                "Basic tax deadline calendar",
                "Community Q&A access",
                "Monthly accounting tips newsletter",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
              {[
                "1-on-1 tax guidance sessions",
                "Unlimited premium templates",
                "Priority email support",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-slate-400">
                  <X className="h-4 w-4 text-slate-300 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/sign-up" className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              Create free account
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="rounded-2xl border-2 border-brand-600 bg-brand-50 p-8 flex flex-col relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-brand-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">Most Popular</span>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700 mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-slate-500 mb-2">/month</span>
              </div>
              <p className="text-slate-600 text-sm">Full access for serious business owners who want expert support.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Everything in Free",
                "Unlimited premium templates (50+)",
                "1-on-1 monthly tax guidance session",
                "Priority email support (24 hr response)",
                "Advanced courses: S-Corp, payroll, retirement",
                "Quarterly estimated tax calculator",
                "Year-end tax prep checklist & walkthrough",
                "Early access to new tools & templates",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
              Start Pro — $29/mo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
            <h3 className="font-bold text-lg">Full feature comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-6 py-3 font-semibold text-slate-700 w-1/2">Feature</th>
                  <th className="text-center px-6 py-3 font-semibold text-slate-700">Free</th>
                  <th className="text-center px-6 py-3 font-semibold text-brand-700">Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Free courses", free: true, pro: true },
                  { feature: "Starter templates (3)", free: true, pro: true },
                  { feature: "Tax deadline calendar", free: true, pro: true },
                  { feature: "Community Q&A", free: true, pro: true },
                  { feature: "Newsletter", free: true, pro: true },
                  { feature: "Unlimited premium templates (50+)", free: false, pro: true },
                  { feature: "1-on-1 monthly tax guidance session", free: false, pro: true },
                  { feature: "Priority email support", free: false, pro: true },
                  { feature: "Advanced courses (S-Corp, payroll, retirement)", free: false, pro: true },
                  { feature: "Quarterly estimated tax calculator", free: false, pro: true },
                  { feature: "Year-end tax prep checklist", free: false, pro: true },
                  { feature: "Early access to new tools", free: false, pro: true },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-3 text-slate-700">{row.feature}</td>
                    <td className="px-6 py-3 text-center">
                      {row.free ? <Check className="h-4 w-4 text-brand-600 mx-auto" /> : <X className="h-4 w-4 text-slate-300 mx-auto" />}
                    </td>
                    <td className="px-6 py-3 text-center">
                      {row.pro ? <Check className="h-4 w-4 text-brand-600 mx-auto" /> : <X className="h-4 w-4 text-slate-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Questions about which plan is right for you?{" "}
          <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">Contact us</Link> — we&apos;re happy to help.
        </p>
      </div>

      {/* Features / Value Props */}
      <div className="border-t bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Why small business owners choose us</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Built by a licensed CPA with 10+ years of real-world experience — not a generic SaaS template.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Plain-English guidance", desc: "No jargon, no gatekeeping. Every course and template is written so you actually understand what you&apos;re doing." },
              { title: "Templates that work", desc: "50+ professionally designed spreadsheets for P&L, invoicing, payroll, budgeting, and more — ready to use today." },
              { title: "Real CPA support", desc: "Pro members get monthly 1-on-1 sessions with Allison to review your books, plan for taxes, and answer your questions." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to get your books under control?</h2>
        <p className="text-slate-600 mb-8">Join hundreds of small business owners who stopped dreading tax season.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/sign-up" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
            Start for free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/pricing" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            See full pricing details
          </Link>
        </div>
      </div>
    </div>
  )
}
