import Link from "next/link"
import { ArrowRight, BookOpen, FileSpreadsheet, Calculator, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Allison&apos;s Accounting Assistance</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Stop overpaying taxes.<br />Start understanding your books.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools built for small business owners who want to get their accounting under control — without hiring a full-time CPA.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              See Plans & Pricing <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Browse Free Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Everything you need to run your books with confidence</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Plain-English Courses",
              desc: "Step-by-step accounting courses designed for business owners, not accountants.",
              href: "/learn",
              cta: "Browse courses",
            },
            {
              icon: FileSpreadsheet,
              title: "Ready-to-Use Templates",
              desc: "Spreadsheets and checklists that make bookkeeping faster and less painful.",
              href: "/templates",
              cta: "See templates",
            },
            {
              icon: Calculator,
              title: "Free Tools",
              desc: "Tax calculators, payroll estimators, and more — no signup required.",
              href: "/tools",
              cta: "Try the tools",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                <item.icon className="h-5 w-5 text-brand-600" />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
              <Link href={item.href} className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
                {item.cta} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="border-t border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3 text-center">What business owners are saying</p>
          <h2 className="text-2xl font-bold text-center mb-10">Real results from real small business owners</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "I saved over $4,200 on my taxes last year just by following the deductions checklist. I had no idea I was leaving that much money on the table.",
                name: "Marcus T.",
                role: "Freelance Graphic Designer",
              },
              {
                quote: "The bookkeeping templates cut my monthly close from a full weekend down to about two hours. I actually look forward to it now — which I never thought I'd say.",
                name: "Priya S.",
                role: "Owner, Bloom Floral Studio",
              },
              {
                quote: "As a first-time business owner I was terrified of accounting. The courses explained everything in plain English and I finally feel in control of my finances.",
                name: "Derek L.",
                role: "Independent Contractor, Construction",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col gap-4">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get your accounting under control?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Join hundreds of small business owners who use Allison&apos;s Accounting Assistance to save time, reduce taxes, and stress less about their books.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Get Started Today <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Learn About Allison
          </Link>
        </div>
      </div>
    </div>
  )
}
