import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Allison&apos;s Accounting Assistance</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Stop dreading your books.<br />Start running your business.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools built for small business owners who want to get their accounting under control — without hiring a full-time accountant.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Start Learning Free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              View Plans
            </Link>
          </div>
        </div>
      </div>

      {/* Value Props */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Plain-English Courses", desc: "Learn bookkeeping, taxes, and cash flow without drowning in jargon. Built for real business owners, not accountants." },
            { title: "Ready-to-Use Templates", desc: "Spreadsheets and trackers that are already set up — just plug in your numbers and go." },
            { title: "Expert-Backed Guidance", desc: "Every resource is created by Allison, a licensed CPA with 10+ years in public accounting and small business consulting." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases / Results Section */}
      <div className="border-y bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Who It&apos;s For</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Built for your kind of business</h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Whether you&apos;re a solo freelancer or running a growing e-commerce store, we have resources tailored to your exact situation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Freelancers & Consultants",
                outcomes: [
                  "Never miss a quarterly tax payment",
                  "Track deductible home-office & equipment expenses",
                  "Set up a Solo 401(k) to slash your tax bill",
                  "Invoice clients and reconcile income in minutes",
                ],
                cta: "Explore freelancer resources",
                href: "/learn",
              },
              {
                label: "E-commerce Sellers",
                outcomes: [
                  "Separate COGS from operating expenses automatically",
                  "Stay on top of sales-tax obligations by state",
                  "Understand your real profit margin per product",
                  "Prep clean books before peak season",
                ],
                cta: "Explore e-commerce resources",
                href: "/templates",
              },
              {
                label: "Service-Based Businesses",
                outcomes: [
                  "Build a cash-flow forecast that actually works",
                  "Know exactly when to hire your first employee",
                  "Decide if an S-Corp election saves you money",
                  "Close your books in under an hour each month",
                ],
                cta: "Explore service-biz resources",
                href: "/pricing",
              },
            ].map((useCase) => (
              <div key={useCase.label} className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col">
                <h3 className="font-bold text-lg mb-4">{useCase.label}</h3>
                <ul className="space-y-3 flex-1 mb-6">
                  {useCase.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
                <Link
                  href={useCase.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  {useCase.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to get your accounting under control?</h2>
        <p className="text-base text-slate-600 mb-8 max-w-xl mx-auto">
          Join thousands of small business owners who use Allison&apos;s resources to save time, reduce stress, and keep more of what they earn.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            See Pricing <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/templates"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Browse Templates
          </Link>
        </div>
      </div>
    </div>
  )
}
