import Link from "next/link"
import { PaymentWaitlistForm } from "@/components/payment-waitlist"
import {
  offerAvailability,
  PAYMENTS_WAITLIST_HREF,
  paymentsEnabled,
} from "@/lib/payments"

const checkoutOpen = paymentsEnabled()
const availability = offerAvailability()

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Allison's Accounting Assistance Pricing Plans",
  "description": "Affordable accounting courses, templates, and tools for small business owners.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Offer",
        "name": "Starter Plan",
        "description": "Access to free courses and basic templates for small business owners just getting started with accounting.",
        "price": "0",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "0",
          "priceCurrency": "USD",
          "billingIncrement": "month"
        },
        "availability": availability,
        "url": "https://allisonsaccounting.com/pricing"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Offer",
        "name": "Pro Plan",
        "description": "Full access to all accounting courses, premium templates, and tools for growing small businesses.",
        "price": "29",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "29",
          "priceCurrency": "USD",
          "billingIncrement": "month"
        },
        "availability": availability,
        "url": "https://allisonsaccounting.com/pricing"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Offer",
        "name": "Annual Plan",
        "description": "Full access to all accounting courses, premium templates, and tools — billed annually for maximum savings.",
        "price": "249",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "249",
          "priceCurrency": "USD",
          "billingIncrement": "year"
        },
        "availability": availability,
        "url": "https://allisonsaccounting.com/pricing"
      }
    }
  ]
}

function paidHref(liveHref: string) {
  return checkoutOpen ? liveHref : PAYMENTS_WAITLIST_HREF
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white" data-payments={checkoutOpen ? "live" : "gated"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple, transparent pricing</h1>
          <p className="text-lg text-slate-600">
            {checkoutOpen
              ? "No surprise fees. No confusing tiers. Just straightforward access to everything you need to get your accounting under control."
              : "Plans stay listed. Paid checkout is parked on the waitlist until Stripe is enabled."}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12">
        {!checkoutOpen ? (
          <div id="waitlist" className="rounded-xl border border-slate-200 bg-slate-50 p-6 mb-12">
            <h2 className="font-bold text-lg mb-2">Join the waitlist</h2>
            <p className="text-sm text-slate-600 mb-4">
              Buy and Stripe paths are parked, not removed. Nothing is charged today. We will email you when paid checkout opens.
            </p>
            <PaymentWaitlistForm />
          </div>
        ) : null}

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="rounded-xl border border-slate-200 p-6 flex flex-col">
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 mb-1">Starter</p>
              <p className="text-4xl font-bold">Free</p>
              <p className="text-sm text-slate-500 mt-1">Forever</p>
            </div>
            <ul className="space-y-2 text-sm text-slate-700 mb-6 flex-1">
              <li>✓ Free courses</li>
              <li>✓ Basic templates</li>
              <li>✓ Tax calculators</li>
              <li>✓ Blog access</li>
            </ul>
            <Link href="/sign-up" className="block text-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50">
              Get started free
            </Link>
          </div>

          <div className="rounded-xl border-2 border-brand-600 p-6 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 mb-1">Pro</p>
              <p className="text-4xl font-bold">$29</p>
              <p className="text-sm text-slate-500 mt-1">per month</p>
            </div>
            <ul className="space-y-2 text-sm text-slate-700 mb-6 flex-1">
              <li>✓ Everything in Starter</li>
              <li>✓ All premium courses</li>
              <li>✓ All premium templates</li>
              <li>✓ Priority support</li>
              <li>✓ New content as it launches</li>
            </ul>
            <Link
              href={paidHref("/sign-up")}
              className="block text-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
            >
              {checkoutOpen ? "Start Pro plan" : "Join waitlist"}
            </Link>
          </div>

          <div className="rounded-xl border border-slate-200 p-6 flex flex-col">
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 mb-1">Annual</p>
              <p className="text-4xl font-bold">$249</p>
              <p className="text-sm text-slate-500 mt-1">per year — save $99</p>
            </div>
            <ul className="space-y-2 text-sm text-slate-700 mb-6 flex-1">
              <li>✓ Everything in Pro</li>
              <li>✓ Two months free</li>
              <li>✓ Early access to new tools</li>
              <li>✓ Annual tax planning checklist</li>
            </ul>
            <Link
              href={paidHref("/sign-up")}
              className="block text-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
            >
              {checkoutOpen ? "Start Annual plan" : "Join waitlist"}
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 mb-8">
          <h2 className="font-bold text-lg mb-2">Frequently asked questions</h2>
          <div className="space-y-4 mt-4">
            {[
              { q: "Can I cancel anytime?", a: "Yes. Cancel your monthly plan at any time with no penalties. Annual plans are refundable within 30 days." },
              { q: "Is there a free trial?", a: "The Starter plan is free forever. You can explore free courses and templates before upgrading." },
              {
                q: "What payment methods do you accept?",
                a: checkoutOpen
                  ? "We accept all major credit cards via Stripe. No PayPal at this time."
                  : "Card checkout will run through Stripe when payments open. Nothing is charged today — join the waitlist.",
              },
              {
                q: "Do you offer refunds?",
                a: checkoutOpen
                  ? "Yes — if you're not satisfied within 30 days of purchase, we'll refund you in full. No questions asked."
                  : "A 30-day refund will apply once paid checkout is live. There is nothing to charge or refund today.",
              },
            ].map((item) => (
              <div key={item.q}>
                <p className="font-semibold text-sm">{item.q}</p>
                <p className="text-sm text-slate-600 mt-1">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-500">
            Questions about pricing?{" "}
            <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
