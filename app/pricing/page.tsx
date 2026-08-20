import Link from "next/link"

const features = [
  { name: "Monthly bookkeeping templates", free: true, pro: true },
  { name: "Basic expense tracker", free: true, pro: true },
  { name: "Tax deadline calendar", free: true, pro: true },
  { name: "Intro accounting mini-course", free: true, pro: true },
  { name: "Community Q&A access", free: true, pro: true },
  { name: "Full course library (10+ courses)", free: false, pro: true },
  { name: "Premium template bundle (50+ templates)", free: false, pro: true },
  { name: "Quarterly tax estimator tool", free: false, pro: true },
  { name: "Payroll setup checklist & calculator", free: false, pro: true },
  { name: "S-Corp election decision tool", free: false, pro: true },
  { name: "Year-end close checklist", free: false, pro: true },
  { name: "Priority email support", free: false, pro: true },
  { name: "Monthly live Q&A with Allison", free: false, pro: true },
  { name: "1:1 onboarding session (30 min)", free: false, pro: true },
]

function Check() {
  return (
    <svg className="mx-auto h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function X() {
  return (
    <svg className="mx-auto h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple, honest pricing</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready. No hidden fees, no confusing tiers — just the tools you need to run your books with confidence.
          </p>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {/* Free Plan */}
          <div className="rounded-xl border border-slate-200 p-8 flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">Free</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-bold text-slate-900">$0</span>
              <span className="text-slate-500 mb-2">/month</span>
            </div>
            <p className="text-slate-600 text-sm mb-6">Essential tools to get your accounting off the ground — no credit card required.</p>
            <Link
              href="/sign-up"
              className="block text-center rounded-lg border-2 border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors mt-auto"
            >
              Get started free
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="rounded-xl border-2 border-brand-600 bg-brand-50 p-8 flex flex-col relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</span>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700 mb-2">Pro</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-bold text-slate-900">$29</span>
              <span className="text-slate-500 mb-2">/month</span>
            </div>
            <p className="text-slate-600 text-sm mb-6">Everything in Free, plus the full course library, premium templates, and direct access to Allison.</p>
            <Link
              href="/sign-up"
              className="block text-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors mt-auto"
            >
              Start Pro — 14 days free
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-2">What&apos;s included in each plan</h2>
          <p className="text-slate-500 text-center text-sm mb-8">A full breakdown so you know exactly what you&apos;re getting.</p>

          <div className="rounded-xl border border-slate-200 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
              <div className="px-6 py-4 text-sm font-semibold text-slate-700">Feature</div>
              <div className="px-6 py-4 text-sm font-semibold text-slate-700 text-center">Free</div>
              <div className="px-6 py-4 text-sm font-semibold text-brand-700 text-center">Pro</div>
            </div>

            {/* Section: Core Tools */}
            <div className="grid grid-cols-3 bg-slate-100 border-b border-slate-200">
              <div className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 col-span-3">Core Tools</div>
            </div>
            {features.slice(0, 5).map((feature, i) => (
              <div
                key={feature.name}
                className={`grid grid-cols-3 border-b border-slate-100 ${
                  i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                }`}
              >
                <div className="px-6 py-4 text-sm text-slate-700">{feature.name}</div>
                <div className="px-6 py-4 text-center">{feature.free ? <Check /> : <X />}</div>
                <div className="px-6 py-4 text-center">{feature.pro ? <Check /> : <X />}</div>
              </div>
            ))}

            {/* Section: Pro Features */}
            <div className="grid grid-cols-3 bg-slate-100 border-b border-slate-200">
              <div className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 col-span-3">Pro Exclusives</div>
            </div>
            {features.slice(5).map((feature, i) => (
              <div
                key={feature.name}
                className={`grid grid-cols-3 border-b border-slate-100 last:border-b-0 ${
                  i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                }`}
              >
                <div className="px-6 py-4 text-sm text-slate-700">{feature.name}</div>
                <div className="px-6 py-4 text-center">{feature.free ? <Check /> : <X />}</div>
                <div className="px-6 py-4 text-center">{feature.pro ? <Check /> : <X />}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ / Reassurance */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 mb-12">
          <h2 className="text-xl font-bold mb-6">Common questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I cancel anytime?",
                a: "Yes. Cancel your Pro subscription at any time from your account settings. You keep access until the end of your billing period.",
              },
              {
                q: "Is there a free trial for Pro?",
                a: "Absolutely — Pro comes with a 14-day free trial. No credit card required to start.",
              },
              {
                q: "What happens to my data if I downgrade?",
                a: "Your account and any saved work stays intact. You just lose access to Pro-only features until you re-upgrade.",
              },
              {
                q: "Do you offer annual billing?",
                a: "Yes — pay annually and get 2 months free ($290/year instead of $348). Email us at hello@allisonsaccounting.com to switch.",
              },
            ].map((item) => (
              <div key={item.q}>
                <p className="font-semibold text-slate-900 mb-1">{item.q}</p>
                <p className="text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-600 mb-4">Still not sure? Start free — no credit card needed.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Start Pro free for 14 days
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Talk to Allison
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
