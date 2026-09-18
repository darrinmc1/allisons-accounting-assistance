import Link from "next/link"
import { Check, X, Zap } from "lucide-react"

const features = [
  { name: "Access to free courses", free: true, pro: true },
  { name: "Basic bookkeeping templates", free: true, pro: true },
  { name: "Monthly newsletter", free: true, pro: true },
  { name: "Blog & educational articles", free: true, pro: true },
  { name: "All premium templates (50+)", free: false, pro: true },
  { name: "Advanced tax planning tools", free: false, pro: true },
  { name: "Quarterly estimated tax calculator", free: false, pro: true },
  { name: "S-Corp election worksheet", free: false, pro: true },
  { name: "Payroll setup checklist & templates", free: false, pro: true },
  { name: "Priority email support", free: false, pro: true },
  { name: "1:1 Setup Session (30 min)", free: false, pro: true },
  { name: "New templates added monthly", free: false, pro: true },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple, transparent pricing</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready. No hidden fees, no confusing tiers — just the tools you need to run your books with confidence.
          </p>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {/* Free Plan */}
          <div className="rounded-xl border border-slate-200 p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">Free</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-bold text-slate-900">$0</span>
                <span className="text-slate-500 mb-1">/month</span>
              </div>
              <p className="text-slate-600 text-sm">Perfect for getting started. No credit card required.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {features.filter(f => f.free).map(f => (
                <li key={f.name} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">{f.name}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block text-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Get started free
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="rounded-xl border-2 border-brand-600 bg-brand-50 p-8 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                <Zap className="h-3 w-3" /> Most Popular
              </span>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700 mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-bold text-slate-900">$19</span>
                <span className="text-slate-500 mb-1">/month</span>
              </div>
              <p className="text-slate-600 text-sm">Everything in Free, plus all templates, tools, and priority support.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {features.map(f => (
                <li key={f.name} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">{f.name}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block text-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Start Pro — $19/mo
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Full feature comparison</h2>
          <div className="rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-6 py-4 font-semibold text-slate-700 w-1/2">Feature</th>
                  <th className="text-center px-6 py-4 font-semibold text-slate-700">Free</th>
                  <th className="text-center px-6 py-4 font-semibold text-brand-700">Pro</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={f.name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-4 text-slate-700">{f.name}</td>
                    <td className="px-6 py-4 text-center">
                      {f.free
                        ? <Check className="h-5 w-5 text-green-500 mx-auto" />
                        : <X className="h-5 w-5 text-slate-300 mx-auto" />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {f.pro
                        ? <Check className="h-5 w-5 text-green-500 mx-auto" />
                        : <X className="h-5 w-5 text-slate-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              { q: "Can I cancel anytime?", a: "Yes. Cancel your Pro subscription at any time from your account settings. You'll keep access until the end of your billing period." },
              { q: "Is there an annual plan?", a: "Yes — pay annually and get 2 months free ($190/year instead of $228). Email us at hello@allisonsaccounting.com to switch." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex) and PayPal via our secure checkout." },
              { q: "Do you offer refunds?", a: "We offer a 14-day money-back guarantee on Pro. If you're not satisfied, contact support@allisonsaccounting.com within 14 days of purchase." },
              { q: "Can I use the templates for multiple businesses?", a: "Pro includes a single-user license. If you need multi-business or team access, contact us for custom pricing." },
            ].map(item => (
              <div key={item.q} className="rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-xl bg-slate-900 text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to take control of your books?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">Join hundreds of small business owners who use Allison&apos;s tools to save time, reduce stress, and stop overpaying on taxes.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Start Pro — $19/mo
            </Link>
            <Link
              href="/sign-up"
              className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
            >
              Try free first
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
