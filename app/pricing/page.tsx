import Link from "next/link"
import { Check, X } from "lucide-react"

const freeFeatures = [
  { label: "Access to all free blog articles", included: true },
  { label: "Basic bookkeeping checklist template", included: true },
  { label: "Quarterly tax due-date calendar", included: true },
  { label: "Free mini-course: Accounting 101", included: true },
  { label: "Email newsletter", included: true },
  { label: "Premium course library (10+ courses)", included: false },
  { label: "Full template vault (25+ templates)", included: false },
  { label: "S-Corp setup & payroll templates", included: false },
  { label: "Priority email support", included: false },
  { label: "Monthly live Q&A sessions", included: false },
  { label: "1:1 Strategy Session (1 hr)", included: false },
  { label: "New templates & courses as released", included: false },
]

const proFeatures = [
  { label: "Access to all free blog articles", included: true },
  { label: "Basic bookkeeping checklist template", included: true },
  { label: "Quarterly tax due-date calendar", included: true },
  { label: "Free mini-course: Accounting 101", included: true },
  { label: "Email newsletter", included: true },
  { label: "Premium course library (10+ courses)", included: true },
  { label: "Full template vault (25+ templates)", included: true },
  { label: "S-Corp setup & payroll templates", included: true },
  { label: "Priority email support", included: true },
  { label: "Monthly live Q&A sessions", included: true },
  { label: "1:1 Strategy Session (1 hr)", included: true },
  { label: "New templates & courses as released", included: true },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple, transparent pricing</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready. No hidden fees, no surprise charges — just the accounting help your business actually needs.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">

        {/* Plan Cards */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">

          {/* Free Plan */}
          <div className="rounded-2xl border border-slate-200 p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">Free</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-bold text-slate-900">$0</span>
                <span className="text-slate-500 mb-2">/month</span>
              </div>
              <p className="text-slate-600 text-sm">Perfect for business owners just getting started with better bookkeeping habits.</p>
            </div>
            <Link
              href="/sign-up"
              className="block w-full rounded-lg border-2 border-slate-300 py-3 text-center text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors mb-8"
            >
              Get started free
            </Link>
            <ul className="space-y-3 flex-1">
              {freeFeatures.map((f) => (
                <li key={f.label} className="flex items-start gap-3">
                  {f.included ? (
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  ) : (
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                  )}
                  <span className={`text-sm ${f.included ? "text-slate-700" : "text-slate-400"}`}>{f.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="rounded-2xl border-2 border-brand-600 bg-brand-50 p-8 flex flex-col relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-brand-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">Most Popular</span>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700 mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-bold text-slate-900">$29</span>
                <span className="text-slate-500 mb-2">/month</span>
              </div>
              <p className="text-slate-600 text-sm">Everything you need to run clean books, reduce your tax bill, and grow with confidence.</p>
            </div>
            <Link
              href="/sign-up"
              className="block w-full rounded-lg bg-brand-600 py-3 text-center text-sm font-semibold text-white hover:bg-brand-700 transition-colors mb-8"
            >
              Start Pro — 7 days free
            </Link>
            <ul className="space-y-3 flex-1">
              {proFeatures.map((f) => (
                <li key={f.label} className="flex items-start gap-3">
                  {f.included ? (
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  ) : (
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                  )}
                  <span className={`text-sm ${f.included ? "text-slate-700" : "text-slate-400"}`}>{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Full feature comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-4 px-6 text-left font-semibold text-slate-700 w-1/2">Feature</th>
                  <th className="py-4 px-6 text-center font-semibold text-slate-700">Free</th>
                  <th className="py-4 px-6 text-center font-semibold text-brand-700">Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Blog articles & guides", free: true, pro: true },
                  { feature: "Free mini-course: Accounting 101", free: true, pro: true },
                  { feature: "Basic bookkeeping checklist", free: true, pro: true },
                  { feature: "Quarterly tax calendar", free: true, pro: true },
                  { feature: "Email newsletter", free: true, pro: true },
                  { feature: "Premium course library (10+ courses)", free: false, pro: true },
                  { feature: "Full template vault (25+ templates)", free: false, pro: true },
                  { feature: "S-Corp setup & payroll templates", free: false, pro: true },
                  { feature: "Cash flow forecasting spreadsheet", free: false, pro: true },
                  { feature: "Priority email support", free: false, pro: true },
                  { feature: "Monthly live Q&A with Allison", free: false, pro: true },
                  { feature: "1:1 Strategy Session (1 hr/year)", free: false, pro: true },
                  { feature: "New content as released", free: false, pro: true },
                ].map((row, i) => (
                  <tr key={row.feature} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                    <td className="py-3 px-6 text-slate-700">{row.feature}</td>
                    <td className="py-3 px-6 text-center">
                      {row.free ? (
                        <Check className="mx-auto h-4 w-4 text-brand-600" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-slate-300" />
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {row.pro ? (
                        <Check className="mx-auto h-4 w-4 text-brand-600" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-slate-300" />
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="bg-white">
                  <td className="py-3 px-6 font-semibold text-slate-900">Monthly price</td>
                  <td className="py-3 px-6 text-center font-bold text-slate-700">$0</td>
                  <td className="py-3 px-6 text-center font-bold text-brand-700">$29</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I cancel anytime?",
                a: "Yes. Cancel your Pro subscription at any time from your account settings. You&apos;ll keep access until the end of your billing period — no questions asked.",
              },
              {
                q: "Is there really a 7-day free trial?",
                a: "Absolutely. Sign up for Pro and you won&apos;t be charged for the first 7 days. If it&apos;s not right for you, cancel before the trial ends and you owe nothing.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit and debit cards (Visa, Mastercard, Amex, Discover) via our secure payment processor.",
              },
              {
                q: "Do you offer annual billing?",
                a: "Yes — pay annually and get 2 months free ($290/year instead of $348). Reach out to hello@allisonsaccounting.com to switch to annual billing.",
              },
              {
                q: "What if I need more than the Pro plan offers?",
                a: "For custom engagements, bookkeeping services, or team plans, contact us at sessions@allisonsaccounting.com and we&apos;ll put together a custom quote.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.a.replace(/&apos;/g, "'") }} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-brand-600 p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to get your books under control?</h2>
          <p className="text-brand-100 mb-6 max-w-xl mx-auto">Join hundreds of small business owners who use Allison&apos;s tools and courses to save time, reduce stress, and keep more of what they earn.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
            >
              Start Pro — 7 days free
            </Link>
            <Link
              href="/learn"
              className="rounded-lg border border-brand-400 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Explore free courses
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
