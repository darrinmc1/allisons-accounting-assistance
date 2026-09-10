import Link from "next/link"
import { Check } from "lucide-react"

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Allison's Accounting Assistance Pricing Plans",
  "description": "Accounting courses, templates, and tools pricing for small business owners",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "Starter Plan",
        "description": "Essential accounting templates and tools for new small business owners",
        "url": "https://allisonsaccounting.com/pricing",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2027-12-31"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "Pro Plan",
        "description": "Full access to all accounting courses, templates, and priority support",
        "url": "https://allisonsaccounting.com/pricing",
        "offers": {
          "@type": "Offer",
          "price": "29",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2027-12-31",
          "billingIncrement": "P1M"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "Setup Session",
        "description": "1-on-1 accounting setup session with a licensed CPA",
        "url": "https://allisonsaccounting.com/pricing",
        "offers": {
          "@type": "Offer",
          "price": "197",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2027-12-31"
        }
      }
    }
  ]
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple, honest pricing</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No upsells, no surprise fees. Pick the plan that fits where you are right now.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {[
            {
              name: "Starter",
              price: "Free",
              period: "",
              desc: "Get started with the essentials.",
              features: [
                "Access to free courses",
                "Basic templates library",
                "Monthly newsletter",
                "Community access",
              ],
              cta: "Get started free",
              href: "/sign-up",
              highlight: false,
            },
            {
              name: "Pro",
              price: "$29",
              period: "/month",
              desc: "Everything you need to run clean books.",
              features: [
                "All free features",
                "Full template library (50+ templates)",
                "All premium courses",
                "Priority email support",
                "Monthly Q&A calls",
                "New content as it ships",
              ],
              cta: "Start Pro",
              href: "/sign-up",
              highlight: true,
            },
            {
              name: "Setup Session",
              price: "$197",
              period: " one-time",
              desc: "Get your books set up right, once.",
              features: [
                "60-minute 1:1 video call",
                "Chart of accounts setup",
                "Software walkthrough",
                "Custom checklist for your business",
                "30-day follow-up email support",
              ],
              cta: "Book a session",
              href: "/contact",
              highlight: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 flex flex-col ${
                plan.highlight
                  ? "border-brand-600 bg-brand-50 shadow-md"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.highlight && (
                <p className="text-xs font-bold uppercase tracking-widest text-brand-700 mb-2">Most Popular</p>
              )}
              <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
              <div className="mb-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-slate-500 text-sm">{plan.period}</span>
              </div>
              <p className="text-sm text-slate-600 mb-4">{plan.desc}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`block text-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Not sure which plan is right for you?</h2>
          <p className="text-sm text-slate-600 mb-4">
            Start free and upgrade when you&apos;re ready. No credit card required for the Starter plan.
          </p>
          <Link href="/contact" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
            Talk to us →
          </Link>
        </div>
      </div>
    </div>
  )
}
