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
            Stop dreading your books.<br />
            <span className="text-brand-700">Start understanding your money.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools built for small business owners who want to get their accounting under control — without hiring a full-time accountant.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
            >
              See Plans &amp; Pricing <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Browse Free Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Everything you need to run your books with confidence</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Plain-English Courses",
              desc: "Step-by-step accounting courses designed for business owners, not accountants. No jargon, no fluff.",
              href: "/learn",
              cta: "Browse courses",
            },
            {
              icon: FileSpreadsheet,
              title: "Ready-to-Use Templates",
              desc: "Spreadsheets and checklists that do the heavy lifting — just plug in your numbers and go.",
              href: "/templates",
              cta: "See templates",
            },
            {
              icon: Calculator,
              title: "Free Tools",
              desc: "Tax calculators, break-even analysis, cash flow forecasting, and more — all free to use.",
              href: "/tools",
              cta: "Try the tools",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6 flex flex-col">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                <item.icon className="h-5 w-5 text-brand-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">{item.desc}</p>
              <Link href={item.href} className="mt-4 text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
                {item.cta} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="border-y bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3 text-center">Real Results</p>
          <h2 className="text-2xl font-bold text-center mb-10">Small business owners who got their books under control</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "I used Allison&apos;s quarterly tax template and finally stopped getting hit with penalties. Saved over $5,000 in taxes my first year just by tracking deductions properly.",
                name: "Marcus T.",
                business: "Freelance Photographer",
              },
              {
                quote: "I&apos;d been running my bakery for three years and had no idea if I was actually profitable. After the bookkeeping course, I finally understand my numbers — and I raised my prices.",
                name: "Priya S.",
                business: "Owner, Sweet Provisions Bakery",
              },
              {
                quote: "The S-Corp setup guide alone was worth 10x the subscription price. My accountant confirmed I&apos;ll save around $8k a year in self-employment tax. Wish I&apos;d found this sooner.",
                name: "Derek L.",
                business: "Independent IT Consultant",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-brand-700 text-brand-700" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed flex-1 mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get your accounting under control?</h2>
        <p className="text-lg text-slate-600 mb-8">
          Join hundreds of small business owners who finally understand their books.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
          >
            Get Started Today <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Learn About Allison
          </Link>
        </div>
      </div>
    </div>
  )
}
