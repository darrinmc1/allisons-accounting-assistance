import Link from "next/link"
import { Check, X } from "lucide-react"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the basics — no credit card required.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      { label: "Access to free blog articles", included: true },
      { label: "1 free starter template", included: true },
      { label: "Basic tax deduction checklist", included: true },
      { label: "Community Q&A access", included: true },
      { label: "Full course library (5+ courses)", included: false },
      { label: "Premium templates bundle (20+)", included: false },
      { label: "Quarterly tax calculator", included: false },
      { label: "S-Corp savings estimator", included: false },
      { label: "Priority email support", included: false },
      { label: "1:1 Setup Session (1 hr)", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Everything you need to run clean books and minimize your tax bill.",
    cta: "Start Pro — $29/mo",
    ctaHref: "/sign-up",
    highlight: true,
    features: [
      { label: "Access to free blog articles", included: true },
      { label: "1 free starter template", included: true },
      { label: "Basic tax deduction checklist", included: true },
      { label: "Community Q&A access", included: true },
      { label: "Full course library (5+ courses)", included: true },
      { label: "Premium templates bundle (20+)", included: true },
      { label: "Quarterly tax calculator", included: true },
      { label: "S-Corp savings estimator", included: true },
      { label: "Priority email support", included: true },
      { label: "1:1 Setup Session (1 hr)", included: false },
    ],
  },
  {
    name: "VIP",
    price: "$199",
    period: "one-time",
    description: "Pro access plus a hands-on session with Allison to get your books set up right.",
    cta: "Book VIP Session",
    ctaHref: "/contact",
    highlight: false,
    features: [
      { label: "Access to free blog articles", included: true },
      { label: "1 free starter template", included: true },
      { label: "Basic tax deduction checklist", included: true },
      { label: "Community Q&A access", included: true },
      { label: "Full course library (5+ courses)", included: true },
      { label: "Premium templates bundle (20+)", included: true },
      { label: "Quarterly tax calculator", included: true },
      { label: "S-Corp savings estimator", included: true },
      { label: "Priority email support", included: true },
      { label: "1:1 Setup Session (1 hr)", included: true },
    ],
  },
]

const comparisonRows = [
  "Access to free blog articles",
  "1 free starter template",
  "Basic tax deduction checklist",
  "Community Q&A access",
  "Full course library (5+ courses)",
  "Premium templates bundle (20+)",
  "Quarterly tax calculator",
  "S-Corp savings estimator",
  "Priority email support",
  "1:1 Setup Session (1 hr)",
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple, transparent pricing</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready. No hidden fees, no confusing tiers — just the tools you need to keep clean books and pay less tax.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                tier.highlight
                  ? "border-brand-600 bg-brand-50 shadow-lg ring-2 ring-brand-600"
                  : "border-slate-200 bg-white"
              }`}
            >
              {tier.highlight && (
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <h2 className="text-xl font-bold mb-1">{tier.name}</h2>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                <span className="text-slate-500 text-sm mb-1">/ {tier.period}</span>
              </div>
              <p className="text-sm text-slate-600 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-2 text-sm">
                    {f.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                    )}
                    <span className={f.included ? "text-slate-700" : "text-slate-400"}>{f.label}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={tier.ctaHref}
                className={`block rounded-lg px-5 py-3 text-center text-sm font-bold transition-colors ${
                  tier.highlight
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-8">Full feature comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-4 text-left font-semibold text-slate-700 w-1/2">Feature</th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className={`px-6 py-4 text-center font-bold ${
                        tier.highlight ? "text-brand-700" : "text-slate-700"
                      }`}
                    >
                      {tier.name}
                      <div className="text-xs font-normal text-slate-500 mt-0.5">{tier.price}/{tier.period}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row}
                    className={`border-b border-slate-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    }`}
                  >
                    <td className="px-6 py-4 text-slate-700 font-medium">{row}</td>
                    {tiers.map((tier) => {
                      const feature = tier.features.find((f) => f.label === row)
                      return (
                        <td key={tier.name} className="px-6 py-4 text-center">
                          {feature?.included ? (
                            <Check className="mx-auto h-5 w-5 text-brand-600" />
                          ) : (
                            <X className="mx-auto h-5 w-5 text-slate-300" />
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ / Reassurance */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 text-sm">
          {[
            { title: "Cancel anytime", desc: "Pro is month-to-month. No contracts, no cancellation fees. Cancel in two clicks from your account settings." },
            { title: "30-day money-back guarantee", desc: "Not happy with Pro? Email us within 30 days for a full refund — no questions asked." },
            { title: "Secure checkout", desc: "Payments are processed securely. We never store your card details on our servers." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-brand-600 px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to get your books under control?</h2>
          <p className="text-brand-100 mb-6 max-w-xl mx-auto">
            Join hundreds of small business owners who use Allison&apos;s tools to save time, reduce stress, and pay less tax.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-brand-700 hover:bg-brand-50 transition-colors"
            >
              Start Free Today
            </Link>
            <Link
              href="/sign-up"
              className="rounded-lg border border-brand-400 px-6 py-3 text-sm font-bold text-white hover:bg-brand-700 transition-colors"
            >
              Start Pro — $29/mo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
