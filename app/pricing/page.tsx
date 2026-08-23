import Link from "next/link"
import { Check, X, Minus } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    price: "Free",
    priceNote: "No credit card required",
    description: "Perfect for freelancers and solopreneurs just getting started with their books.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "Access to free mini-courses",
      "1 downloadable template",
      "Basic tax deadline calendar",
      "Community forum access",
      "Email newsletter",
    ],
  },
  {
    name: "Essential",
    price: "$29",
    priceNote: "per month, billed monthly",
    annualPrice: "$19",
    annualNote: "per month, billed annually — save 34%",
    description: "For small business owners who want clean books and fewer tax surprises.",
    cta: "Start 7-Day Free Trial",
    ctaHref: "/sign-up",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Full course library (10+ courses)",
      "All 25+ templates & spreadsheets",
      "Quarterly tax estimator tool",
      "Payroll setup checklist",
      "Priority email support",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    priceNote: "per month, billed monthly",
    annualPrice: "$59",
    annualNote: "per month, billed annually — save 25%",
    description: "For growing businesses and accountants who need the full toolkit plus 1:1 access.",
    cta: "Start 7-Day Free Trial",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "Everything in Essential",
      "Two 1:1 strategy sessions per year",
      "Custom bookkeeping setup review",
      "S-Corp election analysis worksheet",
      "Early access to new tools & courses",
      "Dedicated Slack support channel",
    ],
  },
]

const featureMatrix = [
  {
    category: "Courses & Learning",
    rows: [
      { feature: "Free mini-courses", starter: true, essential: true, pro: true },
      { feature: "Full course library (10+ courses)", starter: false, essential: true, pro: true },
      { feature: "Early access to new courses", starter: false, essential: false, pro: true },
      { feature: "Downloadable course workbooks", starter: false, essential: true, pro: true },
    ],
  },
  {
    category: "Templates & Tools",
    rows: [
      { feature: "1 free template", starter: true, essential: true, pro: true },
      { feature: "Full template library (25+)", starter: false, essential: true, pro: true },
      { feature: "Quarterly tax estimator", starter: false, essential: true, pro: true },
      { feature: "Payroll setup checklist", starter: false, essential: true, pro: true },
      { feature: "S-Corp election analysis worksheet", starter: false, essential: false, pro: true },
      { feature: "Custom bookkeeping setup review", starter: false, essential: false, pro: true },
    ],
  },
  {
    category: "Support & Access",
    rows: [
      { feature: "Community forum access", starter: true, essential: true, pro: true },
      { feature: "Email newsletter", starter: true, essential: true, pro: true },
      { feature: "Priority email support", starter: false, essential: true, pro: true },
      { feature: "Dedicated Slack support channel", starter: false, essential: false, pro: true },
      { feature: "1:1 strategy sessions (per year)", starter: "—", essential: "—", pro: "2 sessions" },
    ],
  },
]

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term contracts. You can cancel your subscription at any time from your account dashboard. You'll retain access until the end of your current billing period.",
  },
  {
    q: "Is there a free trial?",
    a: "Essential and Pro plans both include a 7-day free trial. No credit card is required to start. If you don't love it, just cancel before the trial ends and you won't be charged.",
  },
  {
    q: "What's the difference between monthly and annual billing?",
    a: "Annual billing gives you a significant discount — Essential drops from $29/mo to $19/mo (save 34%), and Pro drops from $79/mo to $59/mo (save 25%). You're billed once per year upfront.",
  },
  {
    q: "Do the 1:1 strategy sessions roll over?",
    a: "Sessions reset each year on your renewal date. Unused sessions from the prior year do not roll over, so we encourage you to use them!",
  },
  {
    q: "I'm an accountant — is there a plan for my clients?",
    a: "We're working on a multi-seat plan for accounting practices. In the meantime, reach out to partners@allisonsaccounting.com and we'll work something out.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, Amex, Discover) via Stripe. All transactions are encrypted and secure.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately; downgrades take effect at the next billing cycle.",
  },
  {
    q: "Do you offer refunds?",
    a: "If you're not satisfied within the first 14 days of a paid plan, contact support@allisonsaccounting.com and we'll issue a full refund — no questions asked.",
  },
]

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-brand-600" />
  if (value === false) return <X className="mx-auto h-5 w-5 text-slate-300" />
  return <span className="text-sm text-slate-600 font-medium">{value}</span>
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple, transparent pricing</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No hidden fees, no confusing tiers. Pick the plan that fits where your business is today — and upgrade whenever you're ready.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border p-8 flex flex-col ${
                tier.highlight
                  ? "border-brand-600 bg-brand-50 shadow-lg ring-2 ring-brand-600"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-xl font-bold">{tier.name}</h2>
                  {tier.badge && (
                    <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                      {tier.badge}
                    </span>
                  )}
                </div>
                <div className="mb-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Free" && <span className="text-slate-500 text-sm ml-1">/mo</span>}
                </div>
                <p className="text-xs text-slate-500 mb-1">{tier.priceNote}</p>
                {tier.annualPrice && (
                  <p className="text-xs font-semibold text-brand-700">
                    Or {tier.annualPrice}/mo — {tier.annualNote.split("—")[1].trim()}
                  </p>
                )}
                <p className="text-sm text-slate-600 mt-3">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaHref}
                className={`block rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors ${
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

        <p className="text-center text-sm text-slate-500 mt-6">
          All plans include a <span className="font-semibold">14-day money-back guarantee</span>. No questions asked.
        </p>
      </div>

      {/* Feature Comparison Table */}
      <div className="border-t bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-2">Compare all features</h2>
          <p className="text-slate-600 text-center mb-10">See exactly what's included in each plan before you commit.</p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left px-6 py-4 font-semibold text-slate-700 w-1/2">Feature</th>
                  <th className="text-center px-4 py-4 font-semibold text-slate-700">Starter</th>
                  <th className="text-center px-4 py-4 font-semibold text-brand-700 bg-brand-50">Essential</th>
                  <th className="text-center px-4 py-4 font-semibold text-slate-700">Pro</th>
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((section) => (
                  <>
                    <tr key={section.category} className="bg-slate-50">
                      <td colSpan={4} className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                        {section.category}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr key={row.feature} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-3 text-slate-700">{row.feature}</td>
                        <td className="px-4 py-3 text-center">
                          <FeatureValue value={row.starter} />
                        </td>
                        <td className="px-4 py-3 text-center bg-brand-50">
                          <FeatureValue value={row.essential} />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <FeatureValue value={row.pro} />
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-2">Frequently asked questions</h2>
        <p className="text-slate-600 text-center mb-10">Still have questions? <Link href="/contact" className="text-brand-600 font-semibold hover:text-brand-700">Contact us</Link> and we'll get back to you within one business day.</p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to get your books under control?</h2>
          <p className="text-slate-600 mb-8">
            Join hundreds of small business owners who use Allison's Accounting Assistance to save time, reduce tax stress, and finally understand their numbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Start your free trial
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Talk to us first
            </Link>
          </div>
          <p className="text-xs text-slate-500 mt-4">No credit card required for Starter. 7-day free trial on paid plans.</p>
        </div>
      </div>
    </div>
  )
}
