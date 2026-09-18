import Link from "next/link"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with the basics of small business accounting.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "Access to free blog articles",
      "1 free bookkeeping template",
      "Quarterly tax deadline reminders",
      "Basic tax deduction checklist",
      "Community Q&A access",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Everything you need to keep clean books and stay ahead of taxes all year.",
    cta: "Start Pro — 7 Days Free",
    ctaHref: "/sign-up",
    highlight: true,
    features: [
      "Everything in Free",
      "Full template library (15+ templates)",
      "All self-paced accounting courses",
      "Quarterly estimated tax calculator",
      "S-Corp vs LLC decision tool",
      "Priority email support",
      "Monthly bookkeeping checklist",
    ],
  },
  {
    name: "Premium",
    price: "$79",
    period: "per month",
    description: "Hands-on help from Allison's team — ideal for growing businesses that want expert eyes on their books.",
    cta: "Book a Strategy Call",
    ctaHref: "/contact",
    highlight: false,
    features: [
      "Everything in Pro",
      "Monthly 1:1 strategy session (60 min)",
      "Custom chart of accounts setup",
      "Payroll setup walkthrough",
      "Annual tax prep review",
      "Dedicated account manager",
      "Same-day email support",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple, transparent pricing</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready. No hidden fees, no long-term contracts — cancel any time.
          </p>
        </div>
      </div>

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
                  <span className="inline-block rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <h2 className="text-xl font-bold mb-1">{tier.name}</h2>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                <span className="text-slate-500 text-sm mb-1">/{tier.period}</span>
              </div>
              <p className="text-sm text-slate-600 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.ctaHref}
                className={`block rounded-lg px-5 py-3 text-center text-sm font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "border border-brand-600 text-brand-600 hover:bg-brand-50"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Not sure which plan is right for you?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Book a free 15-minute discovery call and we&apos;ll help you figure out exactly what you need — no pressure, no sales pitch.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Book a Free Discovery Call
          </Link>
        </div>
      </div>
    </div>
  )
}
