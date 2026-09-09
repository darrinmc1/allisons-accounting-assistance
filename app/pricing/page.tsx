import Link from "next/link"
import { Check, X } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for getting your bearings and learning the basics.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      { label: "Access to free courses", included: true },
      { label: "Basic bookkeeping templates (3)", included: true },
      { label: "Tax deadline calendar", included: true },
      { label: "Community Q&A access", included: true },
      { label: "Premium templates library", included: false },
      { label: "Advanced tax strategy courses", included: false },
      { label: "1:1 Setup Session", included: false },
      { label: "Priority email support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Everything a growing small business needs to stay on top of their books.",
    cta: "Start Pro — $29/mo",
    ctaHref: "/sign-up",
    highlight: true,
    features: [
      { label: "Access to free courses", included: true },
      { label: "Basic bookkeeping templates (3)", included: true },
      { label: "Tax deadline calendar", included: true },
      { label: "Community Q&A access", included: true },
      { label: "Premium templates library (30+)", included: true },
      { label: "Advanced tax strategy courses", included: true },
      { label: "1:1 Setup Session", included: false },
      { label: "Priority email support", included: false },
    ],
  },
  {
    name: "VIP",
    price: "$99",
    period: "/month",
    description: "Hands-on help and full access for business owners who want expert guidance.",
    cta: "Go VIP — $99/mo",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      { label: "Access to free courses", included: true },
      { label: "Basic bookkeeping templates (3)", included: true },
      { label: "Tax deadline calendar", included: true },
      { label: "Community Q&A access", included: true },
      { label: "Premium templates library (30+)", included: true },
      { label: "Advanced tax strategy courses", included: true },
      { label: "Monthly 1:1 Setup Session", included: true },
      { label: "Priority email support", included: true },
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple, transparent pricing</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready. No hidden fees, no confusing tiers — just the accounting help your business actually needs.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
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
              <div className="flex items-end gap-1 mb-3">
                <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                {tier.period && <span className="text-slate-500 mb-1">{tier.period}</span>}
              </div>
              <p className="text-sm text-slate-600 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-slate-300 mt-0.5 shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-slate-700" : "text-slate-400"}`}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={tier.ctaHref}
                className={`block w-full rounded-lg px-5 py-3 text-center text-sm font-bold transition-colors ${
                  tier.highlight
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "bg-slate-900 text-white hover:bg-slate-700"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Full feature comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-4 text-left font-semibold text-slate-700">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-700">Starter</th>
                  <th className="px-6 py-4 text-center font-semibold text-brand-700 bg-brand-50">Pro</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-700">VIP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Free courses", starter: true, pro: true, vip: true },
                  { feature: "Basic templates (3)", starter: true, pro: true, vip: true },
                  { feature: "Tax deadline calendar", starter: true, pro: true, vip: true },
                  { feature: "Community Q&A", starter: true, pro: true, vip: true },
                  { feature: "Premium templates (30+)", starter: false, pro: true, vip: true },
                  { feature: "Advanced tax strategy courses", starter: false, pro: true, vip: true },
                  { feature: "Monthly 1:1 Setup Session", starter: false, pro: false, vip: true },
                  { feature: "Priority email support", starter: false, pro: false, vip: true },
                  { feature: "Custom bookkeeping review", starter: false, pro: false, vip: true },
                ].map((row, i) => (
                  <tr key={row.feature} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}` }>
                    <td className="px-6 py-4 font-medium text-slate-700">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.starter ? <Check className="h-5 w-5 text-brand-600 mx-auto" /> : <X className="h-5 w-5 text-slate-300 mx-auto" />}
                    </td>
                    <td className="px-6 py-4 text-center bg-brand-50/40">
                      {row.pro ? <Check className="h-5 w-5 text-brand-600 mx-auto" /> : <X className="h-5 w-5 text-slate-300 mx-auto" />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.vip ? <Check className="h-5 w-5 text-brand-600 mx-auto" /> : <X className="h-5 w-5 text-slate-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ / Reassurance */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-xl font-bold mb-6">Common questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { q: "Can I cancel anytime?", a: "Yes. Cancel your subscription at any time — no penalties, no questions asked." },
              { q: "Is there a free trial for Pro?", a: "The Starter plan is free forever. Upgrade to Pro or VIP whenever you&apos;re ready." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards via Stripe. Payments are processed securely." },
              { q: "Do you offer refunds?", a: "Yes — if you&apos;re not satisfied within 14 days of upgrading, we&apos;ll issue a full refund." },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold text-slate-800 mb-1">{item.q}</h3>
                <p className="text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">Still have questions? We&apos;re happy to help.</p>
            <Link href="/contact" className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-slate-700 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
