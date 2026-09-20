import Link from "next/link"
import { Check, X } from "lucide-react"

const features = [
  { label: "Access to free courses", free: true, pro: true },
  { label: "Basic bookkeeping templates", free: true, pro: true },
  { label: "Tax deadline calendar", free: true, pro: true },
  { label: "Community Q&A access", free: true, pro: true },
  { label: "All premium templates (50+)", free: false, pro: true },
  { label: "Advanced tax strategy courses", free: false, pro: true },
  { label: "Payroll & S-Corp setup guides", free: false, pro: true },
  { label: "Monthly live Q&A with Allison", free: false, pro: true },
  { label: "1:1 Setup Session (1 per year)", free: false, pro: true },
  { label: "Priority email support", free: false, pro: true },
  { label: "New templates as they launch", free: false, pro: true },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple, transparent pricing</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready. No hidden fees, no confusing tiers — just the tools you need to get your books under control.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">

        {/* Plan Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">

          {/* Free Plan */}
          <div className="rounded-2xl border border-slate-200 p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">Free</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-bold text-slate-900">$0</span>
                <span className="text-slate-500 mb-2">/month</span>
              </div>
              <p className="text-slate-600 text-sm">Perfect for getting started. Access core resources with no credit card required.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {features.filter(f => f.free).map(f => (
                <li key={f.label} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  {f.label}
                </li>
              ))}
              {features.filter(f => !f.free).map(f => (
                <li key={f.label} className="flex items-start gap-3 text-sm text-slate-400">
                  <X className="h-4 w-4 text-slate-300 mt-0.5 shrink-0" />
                  {f.label}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block w-full rounded-lg border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Get started free
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="rounded-2xl border-2 border-brand-600 bg-brand-50 p-8 flex flex-col relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-brand-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">Most Popular</span>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700 mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-bold text-slate-900">$29</span>
                <span className="text-slate-500 mb-2">/month</span>
              </div>
              <p className="text-slate-600 text-sm">Everything in Free, plus all premium templates, courses, and direct access to Allison.</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {features.map(f => (
                <li key={f.label} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  {f.label}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block w-full rounded-lg bg-brand-600 px-6 py-3 text-center text-sm font-bold text-white hover:bg-brand-700 transition-colors"
            >
              Start Pro — $29/month
            </Link>
            <p className="text-center text-xs text-slate-500 mt-3">Cancel anytime. 14-day money-back guarantee.</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Full feature comparison</h2>
          <div className="rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-6 py-4 font-semibold text-slate-700 w-1/2">Feature</th>
                  <th className="text-center px-6 py-4 font-semibold text-slate-700">Free</th>
                  <th className="text-center px-6 py-4 font-bold text-brand-700">Pro</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={f.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-4 text-slate-700">{f.label}</td>
                    <td className="px-6 py-4 text-center">
                      {f.free
                        ? <Check className="h-4 w-4 text-emerald-500 mx-auto" />
                        : <X className="h-4 w-4 text-slate-300 mx-auto" />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-4 w-4 text-emerald-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-slate-50 border-t border-slate-200">
                  <td className="px-6 py-5"></td>
                  <td className="px-6 py-5 text-center">
                    <Link href="/sign-up" className="inline-block rounded-lg border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
                      Get started free
                    </Link>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Link href="/sign-up" className="inline-block rounded-lg bg-brand-600 px-5 py-2 text-xs font-bold text-white hover:bg-brand-700 transition-colors">
                      Start Pro
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* FAQ / Reassurance */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-xl font-bold mb-6">Common questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { q: "Can I cancel anytime?", a: "Yes. Cancel your Pro subscription at any time from your account settings. No questions asked." },
              { q: "Is there a free trial?", a: "The Free plan is free forever. Pro comes with a 14-day money-back guarantee if you're not satisfied." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards via Stripe. Your payment info is never stored on our servers." },
              { q: "Do templates work with QuickBooks?", a: "Yes — all templates are designed to be compatible with QuickBooks, Excel, and Google Sheets." },
            ].map(item => (
              <div key={item.q}>
                <p className="font-semibold text-slate-800 mb-1">{item.q}</p>
                <p className="text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-600 mb-3">Still have questions? We&apos;re happy to help.</p>
            <Link href="/contact" className="text-sm font-semibold text-brand-600 hover:text-brand-700">Contact us →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
