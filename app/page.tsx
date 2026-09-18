import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the essentials at no cost.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      "Free blog articles & guides",
      "1 free bookkeeping template",
      "Tax deadline reminders",
      "Community Q&A access",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ mo",
    description: "Full toolkit to keep clean books all year.",
    cta: "Start Pro — 7 Days Free",
    ctaHref: "/sign-up",
    highlight: true,
    features: [
      "15+ bookkeeping templates",
      "All self-paced courses",
      "Quarterly tax calculator",
      "Priority email support",
    ],
  },
  {
    name: "Premium",
    price: "$79",
    period: "/ mo",
    description: "Expert eyes on your books every month.",
    cta: "Book a Strategy Call",
    ctaHref: "/contact",
    highlight: false,
    features: [
      "Everything in Pro",
      "Monthly 1:1 strategy session",
      "Custom account setup",
      "Same-day email support",
    ],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Allison&apos;s Accounting Assistance</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Accounting help built for small business owners
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools that turn accounting from a terrifying chore into a manageable part of running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Get Started Free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Browse Free Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-2">What we offer</p>
          <h2 className="text-3xl font-bold tracking-tight">Everything you need to stay on top of your books</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Courses", desc: "Self-paced accounting courses written in plain English — no jargon, no gatekeeping.", href: "/learn", label: "Browse courses" },
            { title: "Templates", desc: "Ready-to-use spreadsheets for bookkeeping, payroll, tax prep, and more.", href: "/templates", label: "See templates" },
            { title: "Tools", desc: "Calculators and decision tools to help you make smarter financial choices.", href: "/tools", label: "Explore tools" },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
              <Link href={item.href} className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
                {item.label} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 border-y">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-2">Pricing</p>
            <h2 className="text-3xl font-bold tracking-tight mb-3">Simple, transparent pricing</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Start free and upgrade when you&apos;re ready. No hidden fees, no long-term contracts.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-7 flex flex-col bg-white ${
                  tier.highlight ? "border-brand-600 shadow-lg ring-2 ring-brand-600" : "border-slate-200"
                }`}
              >
                {tier.highlight && (
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl font-extrabold tracking-tight">{tier.price}</span>
                  <span className="text-slate-500 text-sm mb-1">{tier.period}</span>
                </div>
                <p className="text-sm text-slate-600 mb-5">{tier.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.ctaHref}
                  className={`block rounded-lg px-5 py-3 text-center text-sm font-semibold transition-colors ${
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
          <div className="text-center mt-8">
            <Link href="/pricing" className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
              See full plan details <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-4 md:px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to get your books under control?</h2>
        <p className="text-slate-600 mb-8">Join hundreds of small business owners who use Allison&apos;s tools to save time and money every year.</p>
        <Link
          href="/sign-up"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
        >
          Start for Free <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}
