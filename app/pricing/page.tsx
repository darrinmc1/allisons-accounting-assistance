import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { BuyButton } from "@/components/buy-button"
import { LegalNotice } from "@/components/legal-notice"
import { CHECKOUT_OFFERS } from "@/lib/offers"
import { REFUND_POLICY } from "@/lib/refund-policy"

const freeFeatures = [
  "All courses and lessons on the site",
  "Basic tools access",
  "Community access",
]

const earlyFeatures = [
  "Everything in Free",
  "Pro template packs, once those files exist",
  "Interactive tools included with this plan",
]

const proFeatures = [
  "Everything in Early Adopter",
  "Advanced features and AI tools, once they exist",
  "New content priority",
  "Priority support",
]

export const metadata = {
  title: "Pricing — Allison's Accounting Assistance",
  description: "Early Adopter is $5/mo and Pro is $10/mo in USD. Checkout is not open yet.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b bg-white py-16 text-center">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple pricing. No surprises.</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free. Early Adopter is {CHECKOUT_OFFERS.early.priceLabel}. Pro is {CHECKOUT_OFFERS.pro.priceLabel}. Checkout stays closed until each plan is ready.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3 items-start">
          <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="font-bold text-xl mb-2">Free</h2>
            <div className="mb-4">
              <span className="text-4xl font-bold">$0</span>
            </div>
            <p className="text-sm text-slate-600 mb-6">Get started with the guides and basic tools. No credit card needed.</p>
            <Link
              href="/learn"
              className="mb-8 flex items-center justify-center rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Get started free
            </Link>
            <ul className="space-y-3">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-brand-500 bg-white p-6 shadow-lg ring-1 ring-brand-500 md:p-8">
            <h2 className="font-bold text-xl mb-2">Early Adopter</h2>
            <div className="mb-4">
              <span className="text-4xl font-bold">{CHECKOUT_OFFERS.early.priceLabel.replace("/mo", "")}</span>
              <span className="text-sm text-slate-500">/month</span>
            </div>
            <p className="text-sm text-slate-600 mb-6">
              Early supporter price for the template packs and tools, once that plan is ready to ship.
            </p>
            <div className="mb-8">
              <BuyButton sku="early" legalNotice />
            </div>
            <ul className="space-y-3">
              {earlyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="font-bold text-xl mb-2">Pro</h2>
            <div className="mb-4">
              <span className="text-4xl font-bold">{CHECKOUT_OFFERS.pro.priceLabel.replace("/mo", "")}</span>
              <span className="text-sm text-slate-500">/month</span>
            </div>
            <p className="text-sm text-slate-600 mb-6">Full access when the extra tools are ready.</p>
            <div className="mb-8">
              <BuyButton sku="pro" legalNotice />
            </div>
            <ul className="space-y-3">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold mb-4">Pricing FAQ</h2>
          <h3 className="font-semibold mb-2">What is the refund policy?</h3>
          <p className="text-sm text-slate-700 mb-6">{REFUND_POLICY}</p>
          <h3 className="font-semibold mb-2">Can I buy a plan today?</h3>
          <p className="text-sm text-slate-700 mb-6">
            No. Both paid plans stay on Coming soon until the files for that plan exist and payments are switched on.
          </p>
          <h3 className="font-semibold mb-2">Are these legal documents?</h3>
          <div className="text-sm text-slate-700">
            <p>The paid plans are access to educational tools and templates. The BAS and payroll checklists are compliance templates.</p>
            <LegalNotice className="mt-2 text-sm leading-relaxed text-slate-700" />
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="font-bold text-lg mb-2">A note on professional advice</h2>
          <p className="text-sm text-slate-700">
            This site provides general educational information and admin tools. Personal tax advice, BAS services and lodgements may require a registered tax or BAS agent depending on the work involved.
          </p>
        </div>
      </section>
    </div>
  )
}
