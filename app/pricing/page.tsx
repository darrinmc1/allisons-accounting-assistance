import Link from "next/link"
import { Check } from "lucide-react"

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Allison's Accounting Assistance Pricing Plans",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Offer",
        "name": "Free Plan",
        "description": "Access to free courses and basic templates for small business owners.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Offer",
        "name": "Pro Plan",
        "description": "Full access to all courses, premium templates, and tools for serious small business owners.",
        "price": "29",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "29",
          "priceCurrency": "USD",
          "unitCode": "MON"
        },
        "seller": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Offer",
        "name": "Setup Session",
        "description": "1-on-1 strategy session with Allison to set up your books and accounting system.",
        "price": "197",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance"
        }
      }
    }
  ]
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <div className="min-h-screen bg-white">
        <div className="border-b bg-slate-50">
          <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple, honest pricing</h1>
            <p className="text-lg text-slate-600">
              Start free. Upgrade when you&apos;re ready. No surprise fees, no annual lock-ins.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 md:px-6 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                desc: "Get started with the essentials.",
                features: [
                  "Access to free courses",
                  "Basic templates",
                  "Free tools & calculators",
                  "Blog & resources",
                ],
                cta: "Get started free",
                href: "/sign-up",
                highlight: false,
              },
              {
                name: "Pro",
                price: "$29",
                period: "per month",
                desc: "Everything you need to run clean books.",
                features: [
                  "All free features",
                  "Full course library",
                  "Premium templates",
                  "Priority support",
                  "New content monthly",
                ],
                cta: "Start Pro",
                href: "/sign-up",
                highlight: true,
              },
              {
                name: "Setup Session",
                price: "$197",
                period: "one-time",
                desc: "1-on-1 time with Allison to get set up right.",
                features: [
                  "60-minute video call",
                  "Custom chart of accounts",
                  "Bookkeeping system setup",
                  "30-day follow-up support",
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
                    ? "border-brand-600 bg-brand-50 ring-2 ring-brand-600"
                    : "border-slate-200"
                }`}
              >
                {plan.highlight && (
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2">Most Popular</p>
                )}
                <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
                <div className="mb-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm text-slate-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-sm text-slate-600 mb-6">{plan.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`rounded-lg px-4 py-2.5 text-sm font-semibold text-center transition-colors ${
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

          <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
            <h2 className="font-bold text-lg mb-2">Not sure which plan is right for you?</h2>
            <p className="text-sm text-slate-600 mb-4">
              Start with the free plan and upgrade anytime. Or{" "}
              <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">
                reach out
              </Link>{" "}
              and we&apos;ll help you figure out the best fit.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
