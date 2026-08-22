import Link from "next/link"
import { Check, X, Zap, Star, Crown } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    icon: Zap,
    price: "Free",
    period: "",
    description: "Perfect for getting your feet wet with small business accounting basics.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
    features: [
      { label: "Access to free courses", included: true },
      { label: "Basic bookkeeping templates (3)", included: true },
      { label: "Tax deadline calendar", included: true },
      { label: "Community forum access", included: true },
      { label: "Premium templates (20+)", included: false },
      { label: "Advanced tax calculators", included: false },
      { label: "Monthly Q&A webinars", included: false },
      { label: "1:1 Setup Session (1 hr)", included: false },
      { label: "Priority email support", included: false },
      { label: "Done-for-you bookkeeping review", included: false },
    ],
  },
  {
    name: "Pro",
    icon: Star,
    price: "$29",
    period: "/month",
    description: "Everything a growing small business needs to stay on top of their finances.",
    cta: "Start Pro — $29/mo",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    features: [
      { label: "Access to free courses", included: true },
      { label: "Basic bookkeeping templates (3)", included: true },
      { label: "Tax deadline calendar", included: true },
      { label: "Community forum access", included: true },
      { label: "Premium templates (20+)", included: true },
      { label: "Advanced tax calculators", included: true },
      { label: "Monthly Q&A webinars", included: true },
      { label: "1:1 Setup Session (1 hr)", included: false },
      { label: "Priority email support", included: false },
      { label: "Done-for-you bookkeeping review", included: false },
    ],
  },
  {
    name: "VIP",
    icon: Crown,
    price: "$99",
    period: "/month",
    description: "Hands-on support and expert review for business owners who want it done right.",
    cta: "Upgrade to VIP",
    ctaHref: "/sign-up?plan=vip",
    highlight: false,
    badge: "Best Value",
    features: [
      { label: "Access to free courses", included: true },
      { label: "Basic bookkeeping templates (3)", included: true },
      { label: "Tax deadline calendar", included: true },
      { label: "Community forum access", included: true },
      { label: "Premium templates (20+)", included: true },
      { label: "Advanced tax calculators", included: true },
      { label: "Monthly Q&A webinars", included: true },
      { label: "1:1 Setup Session (1 hr)", included: true },
      { label: "Priority email support", included: true },
      { label: "Done-for-you bookkeeping review", included: true },
    ],
  },
]

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term contracts. Cancel your subscription at any time from your account dashboard and you won't be charged again.",
  },
  {
    q: "Is there a free trial for Pro or VIP?",
    a: "We offer a 7-day free trial on the Pro plan so you can explore all the premium templates and calculators before committing.",
  },
  {
    q: "What's included in a 1:1 Setup Session?",
    a: "It's a 60-minute video call with Allison where she reviews your books, answers your specific questions, and gives you a personalized action plan.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes — pay annually and get two months free. Pro drops to $24/mo and VIP to $82/mo when billed yearly. Contact us to switch.",
  },
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
            No surprise fees. No confusing tiers. Pick the plan that fits where your business is today — and upgrade whenever you&apos;re ready.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-2 text-sm font-semibold text-green-700">
            <Check className="h-4 w-4" />
            7-day free trial on Pro — no credit card required
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl border-2 p-8 flex flex-col ${
                  tier.highlight
                    ? "border-brand-600 bg-brand-50 shadow-xl"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                {tier.badge && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide ${
                      tier.highlight
                        ? "bg-brand-600 text-white"
                        : "bg-slate-800 text-white"
                    }`}
                  >
                    {tier.badge}
                  </div>
                )}

                <div className="mb-6">
                  <div
                    className={`inline-flex items-center justify-center rounded-xl p-3 mb-4 ${
                      tier.highlight ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold mb-1">{tier.name}</h2>
                  <p className="text-sm text-slate-500 mb-4">{tier.description}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                    {tier.period && (
                      <span className="text-slate-500 mb-1 text-base">{tier.period}</span>
                    )}
                  </div>
                </div>

                <Link
                  href={tier.ctaHref}
                  className={`block w-full rounded-xl py-3 px-4 text-center text-sm font-bold transition-colors mb-8 ${
                    tier.highlight
                      ? "bg-brand-600 text-white hover:bg-brand-700"
                      : "bg-slate-900 text-white hover:bg-slate-700"
                  }`}
                >
                  {tier.cta}
                </Link>

                <ul className="space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature.label} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-slate-300 mt-0.5 shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-slate-700" : "text-slate-400"
                        }`}
                      >
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Annual billing nudge */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm font-semibold text-slate-700">
            💡 Save up to 2 months with annual billing.{" "}
            <Link href="/contact" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
              Contact us to switch
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="border-t bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold mb-2 text-center">Full feature comparison</h2>
          <p className="text-slate-500 text-center mb-10 text-sm">See exactly what&apos;s included in each plan side by side.</p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-6 py-4 font-semibold text-slate-700 w-1/2">Feature</th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className={`px-6 py-4 text-center font-bold ${
                        tier.highlight ? "text-brand-700" : "text-slate-700"
                      }`}
                    >
                      {tier.name}
                      <div className={`text-xs font-normal mt-0.5 ${ tier.highlight ? "text-brand-500" : "text-slate-400"}`}>
                        {tier.price}{tier.period}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tiers[0].features.map((feature, i) => (
                  <tr key={feature.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-3 text-slate-700 font-medium">{feature.label}</td>
                    {tiers.map((tier) => (
                      <td key={tier.name} className="px-6 py-3 text-center">
                        {tier.features[i].included ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t bg-brand-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-3">Still not sure which plan is right for you?</h2>
          <p className="text-slate-600 mb-6">
            Start free and upgrade whenever you&apos;re ready. Or reach out — we&apos;re happy to help you pick the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white hover:bg-brand-700 transition-colors"
            >
              Start for free
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
