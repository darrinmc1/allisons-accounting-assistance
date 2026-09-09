import Link from "next/link"
import { Check, X } from "lucide-react"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the essentials — no credit card required.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      { text: "Access to all free blog articles", included: true },
      { text: "1 starter bookkeeping template", included: true },
      { text: "Quarterly tax due-date reminders", included: true },
      { text: "Basic tax deduction checklist", included: true },
      { text: "Full template library (20+ templates)", included: false },
      { text: "All premium courses", included: false },
      { text: "S-Corp savings calculator", included: false },
      { text: "Priority email support", included: false },
      { text: "1:1 Setup Session (60 min)", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Everything you need to run clean books and stop overpaying on taxes.",
    cta: "Start Pro — 7 Days Free",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    features: [
      { text: "Access to all free blog articles", included: true },
      { text: "1 starter bookkeeping template", included: true },
      { text: "Quarterly tax due-date reminders", included: true },
      { text: "Basic tax deduction checklist", included: true },
      { text: "Full template library (20+ templates)", included: true },
      { text: "All premium courses", included: true },
      { text: "S-Corp savings calculator", included: true },
      { text: "Priority email support", included: true },
      { text: "1:1 Setup Session (60 min)", included: true },
    ],
  },
]

const faqs = [
  {
    q: "How much can Pro members typically save on taxes?",
    a: "Most small business owners who complete our tax strategy course identify $3,000–$12,000 in previously missed deductions. At $29/month, Pro pays for itself many times over.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel anytime from your account dashboard — no questions asked, no cancellation fees.",
  },
  {
    q: "What's included in the 1:1 Setup Session?",
    a: "A 60-minute video call with Allison to review your books, set up your chart of accounts, and build a custom tax-savings plan for your business.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes — pay annually and get 2 months free ($290/year vs $348). Email us at hello@allisonsaccounting.com to switch.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
            Simple pricing. Serious savings.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Most Pro members recover their subscription cost in the first week — just from deductions they didn&apos;t know they were missing.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
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
              <h2 className="text-2xl font-bold mb-1">{tier.name}</h2>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                <span className="text-slate-500 mb-1">/{tier.period}</span>
              </div>
              <p className="text-sm text-slate-600 mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    {f.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                    )}
                    <span
                      className={`text-sm ${
                        f.included ? "text-slate-700" : "text-slate-400"
                      }`}
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaHref}
                className={`block w-full rounded-lg px-6 py-3 text-center text-sm font-bold transition-colors ${
                  tier.highlight
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* ROI callout */}
        <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-2">The math is simple</p>
          <h3 className="text-2xl font-bold mb-3">Pro costs $348/year. The average member saves $6,400.</h3>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            Between missed deductions, cleaner books, and smarter entity structure, our Pro members consistently
            come out thousands ahead — often in the first month.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently asked questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-slate-200 p-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4 text-sm">Still have questions?</p>
          <Link
            href="/contact"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Contact us →
          </Link>
        </div>
      </div>
    </div>
  )
}
