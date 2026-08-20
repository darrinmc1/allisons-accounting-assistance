import Link from "next/link"
import { Check, X, Minus } from "lucide-react"

const features = [
  {
    category: "Courses & Learning",
    items: [
      { name: "Accounting Basics course", free: true, pro: true },
      { name: "Bookkeeping Fundamentals course", free: true, pro: true },
      { name: "Tax Prep 101 course", free: false, pro: true },
      { name: "S-Corp & Entity Strategy course", free: false, pro: true },
      { name: "Payroll Setup Masterclass", free: false, pro: true },
      { name: "Advanced Deductions Deep-Dive", free: false, pro: true },
    ],
  },
  {
    category: "Templates & Tools",
    items: [
      { name: "Monthly budget spreadsheet", free: true, pro: true },
      { name: "Invoice template (basic)", free: true, pro: true },
      { name: "Full bookkeeping template bundle (10+)", free: false, pro: true },
      { name: "Quarterly tax estimator calculator", free: false, pro: true },
      { name: "Payroll tracker spreadsheet", free: false, pro: true },
      { name: "Year-end close checklist", free: false, pro: true },
      { name: "Mileage & expense log", free: false, pro: true },
    ],
  },
  {
    category: "Support & Guidance",
    items: [
      { name: "Community forum access", free: true, pro: true },
      { name: "Blog & resource library", free: true, pro: true },
      { name: "Email support (48-hr response)", free: false, pro: true },
      { name: "Priority email support (24-hr response)", free: false, pro: true },
      { name: "Monthly live Q&A with Allison", free: false, pro: true },
      { name: "1-on-1 Setup Session (1 per year)", free: false, pro: true },
    ],
  },
  {
    category: "Updates & Extras",
    items: [
      { name: "New blog posts & guides", free: true, pro: true },
      { name: "Lifetime template updates", free: false, pro: true },
      { name: "New course access as they launch", free: false, pro: true },
      { name: "Tax law change alerts & summaries", free: false, pro: true },
    ],
  },
]

function FeatureCell({ value }: { value: boolean | "partial" }) {
  if (value === true) {
    return (
      <span className="flex items-center justify-center">
        <Check className="h-5 w-5 text-emerald-500" strokeWidth={2.5} />
        <span className="sr-only">Included</span>
      </span>
    )
  }
  if (value === "partial") {
    return (
      <span className="flex items-center justify-center">
        <Minus className="h-5 w-5 text-slate-400" />
        <span className="sr-only">Limited</span>
      </span>
    )
  }
  return (
    <span className="flex items-center justify-center">
      <X className="h-5 w-5 text-slate-300" />
      <span className="sr-only">Not included</span>
    </span>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
            Simple, honest pricing
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready. Pro unlocks every course, template, and tool
            — plus direct access to Allison.
          </p>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {/* Free Plan */}
          <div className="rounded-2xl border border-slate-200 p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-2">Free</p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-bold text-slate-900">$0</span>
                <span className="text-slate-500 mb-1">/month</span>
              </div>
              <p className="text-slate-600 text-sm">
                Get started with the essentials — no credit card required, no time limit.
              </p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Accounting Basics & Bookkeeping Fundamentals courses",
                "Monthly budget spreadsheet",
                "Basic invoice template",
                "Community forum access",
                "Blog & resource library",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Get started free
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="rounded-2xl border-2 border-brand-600 bg-brand-50 p-8 flex flex-col relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-brand-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Most Popular
              </span>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700 mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-bold text-slate-900">$29</span>
                <span className="text-slate-500 mb-1">/month</span>
              </div>
              <p className="text-xs text-slate-500 mb-3">or $249/year — save $99</p>
              <p className="text-slate-600 text-sm">
                Everything in Free, plus every course, template, and tool we offer — and direct access to Allison.
              </p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "All 6 courses including Tax Prep, S-Corp & Payroll",
                "Full template bundle (10+ spreadsheets)",
                "Quarterly tax estimator & payroll tracker",
                "Priority email support (24-hr response)",
                "Monthly live Q&A with Allison",
                "1-on-1 Setup Session (1 per year)",
                "Lifetime template updates & new courses",
                "Tax law change alerts & summaries",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block w-full rounded-lg bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Start Pro — $29/month
            </Link>
            <p className="text-center text-xs text-slate-500 mt-3">Cancel anytime. 14-day money-back guarantee.</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-2">Full feature comparison</h2>
          <p className="text-slate-500 text-center text-sm mb-8">See exactly what&apos;s included in each plan before you decide.</p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left px-6 py-4 font-semibold text-slate-700 w-full">Feature</th>
                  <th className="px-6 py-4 font-semibold text-slate-700 text-center whitespace-nowrap">Free</th>
                  <th className="px-6 py-4 font-semibold text-brand-700 text-center whitespace-nowrap bg-brand-50">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((group, gi) => (
                  <>
                    <tr key={`cat-${gi}`} className="bg-slate-50 border-t border-slate-200">
                      <td colSpan={3} className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-500">
                        {group.category}
                      </td>
                    </tr>
                    {group.items.map((item, ii) => (
                      <tr
                        key={`${gi}-${ii}`}
                        className="border-t border-slate-100 hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-6 py-3.5 text-slate-700">{item.name}</td>
                        <td className="px-6 py-3.5 text-center">
                          <FeatureCell value={item.free} />
                        </td>
                        <td className="px-6 py-3.5 text-center bg-brand-50/40">
                          <FeatureCell value={item.pro} />
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-slate-200 bg-slate-50">
                  <td className="px-6 py-5"></td>
                  <td className="px-6 py-5 text-center">
                    <Link
                      href="/sign-up"
                      className="inline-block rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors whitespace-nowrap"
                    >
                      Get started free
                    </Link>
                  </td>
                  <td className="px-6 py-5 text-center bg-brand-50/40">
                    <Link
                      href="/sign-up"
                      className="inline-block rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-700 transition-colors whitespace-nowrap"
                    >
                      Start Pro
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Common questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I really use the free plan forever?",
                a: "Yes. The free plan has no time limit. You get the two foundational courses, basic templates, and community access for as long as you want.",
              },
              {
                q: "What's the money-back guarantee?",
                a: "If you upgrade to Pro and aren't satisfied within 14 days, email us and we'll refund you in full — no questions asked.",
              },
              {
                q: "What counts as a 1-on-1 Setup Session?",
                a: "It's a 60-minute video call with Allison where you can get your books set up, review your chart of accounts, or work through any accounting challenge specific to your business.",
              },
              {
                q: "Do I get access to new courses and templates automatically?",
                a: "Yes. Pro members get every new course and template we release at no extra charge, for as long as their subscription is active.",
              },
              {
                q: "Can I switch between monthly and annual billing?",
                a: "Absolutely. You can switch to annual billing at any time from your account settings and we'll prorate the difference.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-slate-100 pb-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-brand-600 px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to get your books under control?</h2>
          <p className="text-brand-100 mb-6 max-w-xl mx-auto">
            Join hundreds of small business owners who stopped dreading tax season. Start free today — upgrade whenever it makes sense.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
            >
              Start for free
            </Link>
            <Link
              href="/sign-up"
              className="rounded-lg border border-brand-400 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Start Pro — $29/month
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
