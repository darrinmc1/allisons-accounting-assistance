import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to get started with the basics.",
    features: [
      "All 9 free courses",
      "Free income statement template",
      "Free balance sheet template",
      "Free cash flow template",
      "Tax calculator access",
      "Deduction finder access",
      "Community forum access",
    ],
    cta: "Get Started Free",
    href: "/learn",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For business owners who want professional-grade templates and tools.",
    features: [
      "Everything in Free",
      "All pro template packs",
      "Professional invoice pack",
      "Tax deduction worksheet",
      "Payroll register template",
      "Business budget planner",
      "Chart of Accounts guide",
      "Invoice generator (unlimited)",
      "Depreciation calculator",
      "DOCX format (fully editable)",
      "30-day refund guarantee",
    ],
    cta: "Start Pro - $19/mo",
    href: "/pricing",
    highlighted: true,
  },
  {
    name: "Setup Session",
    price: "$250",
    period: "one-time",
    description: "Get a CPA to set up your books and systems with you.",
    features: [
      "Everything in Pro",
      "60-min 1:1 strategy session",
      "Custom chart of accounts setup",
      "Bookkeeping system review",
      "QuickBooks/Xero setup help",
      "Tax planning overview",
      "Follow-up email support",
    ],
    cta: "Book a Session",
    href: "/contact",
    highlighted: false,
  },
]

const comparisons = [
  { feature: "Free courses & lessons", free: true, pro: true, setup: true },
  { feature: "Free templates (P&L, Balance Sheet, Cash Flow)", free: true, pro: true, setup: true },
  { feature: "Tax calculator", free: true, pro: true, setup: true },
  { feature: "Deduction finder", free: true, pro: true, setup: true },
  { feature: "Invoice generator", free: false, pro: true, setup: true },
  { feature: "Depreciation calculator", free: false, pro: true, setup: true },
  { feature: "Pro Invoice Pack", free: false, pro: true, setup: true },
  { feature: "Tax Deduction Worksheet", free: false, pro: true, setup: true },
  { feature: "Payroll Register Template", free: false, pro: true, setup: true },
  { feature: "Business Budget Planner", free: false, pro: true, setup: true },
  { feature: "Chart of Accounts Guide", free: false, pro: true, setup: true },
  { feature: "DOCX editable format", free: false, pro: true, setup: true },
  { feature: "1:1 CPA Strategy Session", free: false, pro: false, setup: true },
  { feature: "Custom Chart of Accounts", free: false, pro: false, setup: true },
  { feature: "Software Setup Help", free: false, pro: false, setup: true },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4 tabular-nums">Simple pricing. No surprises.</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto tabular-nums">
            Free courses to get started. Pro templates when you&apos;re ready to level up.
            Professional setup when you want a CPA to handle it.
          </p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3 items-start">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-xl border p-6 md:p-8 ${
              plan.highlighted
                ? "border-brand-500 bg-white shadow-lg ring-1 ring-brand-500 scale-105"
                : "border-slate-200 bg-white"
            }`}>
              <h3 className="font-bold text-xl mb-2 tabular-nums">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold tabular-nums">{plan.price}</span>
                <span className="text-sm text-slate-500">{plan.period}</span>
              </div>
              <p className="text-sm text-slate-600 mb-6">{plan.description}</p>
              <Link
                href={plan.href}
                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors mb-8 ${
                  plan.highlighted
                    ? "bg-brand-600 text-white active:scale-[0.96] transition-transform hover:bg-brand-700"
                    : "border border-slate-300 text-slate-700 active:scale-[0.96] transition-transform hover:bg-slate-50"
                }`}
              >
                {plan.cta} <ArrowRight className="h-4 w-4" />
              </Link>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Full Comparison Table */}
      <section className="border-t bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center tabular-nums">Full Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 pr-4 font-semibold">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold w-24">Free</th>
                  <th className="text-center py-3 px-4 font-semibold w-24 text-brand-700">Pro</th>
                  <th className="text-center py-3 px-4 font-semibold w-24">Setup</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature} className="border-b border-slate-100">
                    <td className="py-3 pr-4 text-slate-700">{row.feature}</td>
                    <td className="text-center py-3 px-4">
                      {row.free ? <CheckCircle className="h-4 w-4 inline text-green-500" /> : <span className="text-slate-300"> - </span>}
                    </td>
                    <td className="text-center py-3 px-4">
                      {row.pro ? <CheckCircle className="h-4 w-4 inline text-brand-500" /> : <span className="text-slate-300"> - </span>}
                    </td>
                    <td className="text-center py-3 px-4">
                      {row.setup ? <CheckCircle className="h-4 w-4 inline text-brand-500" /> : <span className="text-slate-300"> - </span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 md:px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center tabular-nums">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Can I buy individual templates instead of a subscription?", a: "Yes — every Pro template is available as a one-time purchase on the templates page. The Pro subscription gives you all templates plus the tools for one low monthly price." },
            { q: "Are there refunds if I'm not satisfied?", a: "30-day no-questions-asked refund on any template pack or monthly subscription. If it doesn't save you time or money, we don't want your money." },
            { q: "What if I need personalized help setting up my books?", a: "The Setup Session includes a 1:1 video call where a CPA helps you set up your chart of accounts, bookkeeping system, or tax planning strategy. Perfect for business owners who want hands-on guidance." },
            { q: "Do the templates work with QuickBooks or Xero?", a: "The templates come in Excel/DOCX format and are designed to complement QuickBooks, Xero, Wave, or any accounting software. The Chart of Accounts guide includes import-ready formats for most platforms." },
            { q: "I'm not a business owner — can I still use this?", a: "Absolutely! Our courses cover personal finance basics, individual tax prep, and freelancer bookkeeping. The Free plan is perfect for getting started." },
          ].map((faq) => (
            <details key={faq.q} className="group rounded-xl border border-slate-200 bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-sm">
                {faq.q}
                <svg className="h-4 w-4 shrink-0 text-slate-500 transition group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-slate-600">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
