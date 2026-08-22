import Link from "next/link"
import { Check, X, Zap } from "lucide-react"

const freeFeatures = [
  { name: "Basic bookkeeping templates (3)", included: true },
  { name: "Free mini-courses (2)", included: true },
  { name: "Tax deadline calendar", included: true },
  { name: "Community Q&A access", included: true },
  { name: "Pro templates library (25+)", included: false },
  { name: "Full course library (10+ courses)", included: false },
  { name: "Quarterly estimated tax calculator", included: false },
  { name: "Payroll setup checklist & templates", included: false },
  { name: "S-Corp election decision toolkit", included: false },
  { name: "Priority email support", included: false },
  { name: "Monthly live Q&A with Allison", included: false },
  { name: "1:1 Setup Session discount (20% off)", included: false },
]

const proFeatures = [
  { name: "Basic bookkeeping templates (3)", included: true },
  { name: "Free mini-courses (2)", included: true },
  { name: "Tax deadline calendar", included: true },
  { name: "Community Q&A access", included: true },
  { name: "Pro templates library (25+)", included: true },
  { name: "Full course library (10+ courses)", included: true },
  { name: "Quarterly estimated tax calculator", included: true },
  { name: "Payroll setup checklist & templates", included: true },
  { name: "S-Corp election decision toolkit", included: true },
  { name: "Priority email support", included: true },
  { name: "Monthly live Q&A with Allison", included: true },
  { name: "1:1 Setup Session discount (20% off)", included: true },
]

const roiPoints = [
  { stat: "10+ hrs/month", desc: "saved with Pro templates vs. building from scratch" },
  { stat: "$2,400+/yr", desc: "average tax savings found using our deduction checklists" },
  { stat: "3× faster", desc: "month-end close using our bookkeeping workflow templates" },
  { stat: "$0 penalties", desc: "when you follow our quarterly estimated tax calculator" },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple, honest pricing</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready. Pro members save an average of 10+ hours per month
            and find thousands in tax savings they were leaving on the table.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {/* Free Tier */}
          <div className="rounded-xl border border-slate-200 p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-2">Free</p>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-slate-500 mb-2">/month</span>
              </div>
              <p className="text-slate-600 text-sm">Get started with the essentials — no credit card required.</p>
            </div>
            <Link
              href="/sign-up"
              className="block text-center rounded-lg border-2 border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors mb-8"
            >
              Get started free
            </Link>
            <ul className="space-y-3 flex-1">
              {freeFeatures.map((f) => (
                <li key={f.name} className="flex items-start gap-3">
                  {f.included ? (
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-slate-300 mt-0.5 shrink-0" />
                  )}
                  <span className={`text-sm ${f.included ? "text-slate-700" : "text-slate-400"}`}>{f.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Tier */}
          <div className="rounded-xl border-2 border-brand-600 p-8 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">
                <Zap className="h-3 w-3" /> Most Popular
              </span>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700 mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-5xl font-bold">$19</span>
                <span className="text-slate-500 mb-2">/month</span>
              </div>
              <p className="text-slate-600 text-sm">Everything you need to run your books like a pro — and save hours every month.</p>
            </div>
            <Link
              href="/sign-up"
              className="block text-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors mb-8"
            >
              Start Pro — 14 days free
            </Link>
            <ul className="space-y-3 flex-1">
              {proFeatures.map((f) => (
                <li key={f.name} className="flex items-start gap-3">
                  {f.included ? (
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-slate-300 mt-0.5 shrink-0" />
                  )}
                  <span className={`text-sm ${f.included ? "text-slate-700 font-medium" : "text-slate-400"}`}>{f.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ROI Section */}
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-2 text-center">Why Pro pays for itself</h2>
          <p className="text-slate-600 text-sm text-center mb-8">At $19/month, Pro members consistently get back far more in time and tax savings.</p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {roiPoints.map((r) => (
              <div key={r.stat} className="text-center">
                <p className="text-3xl font-bold text-brand-700 mb-1">{r.stat}</p>
                <p className="text-sm text-slate-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Full feature comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-6 py-4 font-semibold text-slate-700 w-1/2">Feature</th>
                  <th className="text-center px-6 py-4 font-semibold text-slate-700">Free</th>
                  <th className="text-center px-6 py-4 font-semibold text-brand-700">Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Bookkeeping templates", free: "3 basic", pro: "25+ pro-grade" },
                  { feature: "Courses", free: "2 mini-courses", pro: "10+ full courses" },
                  { feature: "Tax deadline calendar", free: "✓", pro: "✓" },
                  { feature: "Quarterly tax calculator", free: "—", pro: "✓" },
                  { feature: "Payroll setup templates", free: "—", pro: "✓" },
                  { feature: "S-Corp decision toolkit", free: "—", pro: "✓" },
                  { feature: "Deduction checklists", free: "—", pro: "✓" },
                  { feature: "Community Q&A", free: "Read-only", pro: "Full access" },
                  { feature: "Email support", free: "Standard", pro: "Priority (24 hr)" },
                  { feature: "Monthly live Q&A with Allison", free: "—", pro: "✓" },
                  { feature: "1:1 Setup Session", free: "Full price", pro: "20% off" },
                  { feature: "New templates & courses", free: "—", pro: "Included as released" },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-3 text-slate-700 font-medium border-b border-slate-100">{row.feature}</td>
                    <td className="px-6 py-3 text-center text-slate-500 border-b border-slate-100">{row.free}</td>
                    <td className="px-6 py-3 text-center text-brand-700 font-semibold border-b border-slate-100">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Common questions</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              { q: "Can I cancel anytime?", a: "Yes. Cancel anytime from your account settings — no questions asked, no cancellation fees." },
              { q: "What happens to my data if I downgrade?", a: "Your account stays active on the Free plan. You keep access to anything you downloaded while on Pro." },
              { q: "Is the 14-day trial really free?", a: "Absolutely. No charge until day 15. We'll send you a reminder email before your trial ends." },
              { q: "Do you offer annual billing?", a: "Yes — pay annually and get 2 months free ($190/year instead of $228). Email us to switch." },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-200 p-6">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-xl bg-brand-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Ready to stop guessing and start saving?</h2>
          <p className="text-brand-100 mb-6 text-sm">Join hundreds of small business owners who use Allison&apos;s tools to keep clean books and pay less tax.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
            >
              Start Pro free for 14 days
            </Link>
            <Link
              href="/templates"
              className="rounded-lg border border-brand-400 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Browse free templates first
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
