import Link from "next/link"
import { ArrowRight, BookOpen, FileSpreadsheet, Calculator, Star } from "lucide-react"

const testimonials = [
  {
    quote: "I used to spend 10+ hours a month on bookkeeping. After going through Allison's course and using her templates, I'm down to under 2 hours. Game changer.",
    name: "Marcus T.",
    business: "Freelance Photographer",
    result: "Saved 8+ hrs/month",
  },
  {
    quote: "I had no idea I was missing so many deductions. In my first year using this, I saved over $3,400 on my tax bill. Worth every penny.",
    name: "Priya S.",
    business: "Online Boutique Owner",
    result: "$3,400 saved on taxes",
  },
  {
    quote: "As a contractor, quarterly taxes always stressed me out. The estimated tax calculator made it so simple — I finally stopped getting penalties.",
    name: "Derek M.",
    business: "Independent Contractor",
    result: "No more IRS penalties",
  },
  {
    quote: "The bookkeeping templates are incredibly well-organized. My accountant actually complimented how clean my books were at year-end for the first time ever.",
    name: "Janelle R.",
    business: "Event Planning Business",
    result: "Clean books, happy accountant",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Allison&apos;s Accounting Assistance</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Stop dreading your books.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools built for small business owners who want to get their accounting under control — without hiring a full-time accountant.
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
              Start Free
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Everything you need to run clean books</h2>
          <p className="text-slate-600 max-w-xl mx-auto">From beginner courses to professional-grade templates, we&apos;ve got you covered.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Accounting Courses",
              desc: "Plain-English courses that teach you exactly what you need to know — no accounting degree required.",
              href: "/learn",
              cta: "Browse courses",
            },
            {
              icon: FileSpreadsheet,
              title: "Ready-Made Templates",
              desc: "Bookkeeping spreadsheets, tax prep checklists, and financial trackers built for real small businesses.",
              href: "/templates",
              cta: "See templates",
            },
            {
              icon: Calculator,
              title: "Free Tools",
              desc: "Calculators for estimated taxes, break-even analysis, and more — free to use, no signup required.",
              href: "/tools",
              cta: "Try the tools",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6 flex flex-col">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                <item.icon className="h-5 w-5 text-brand-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">{item.desc}</p>
              <Link href={item.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
                {item.cta} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="border-t border-b bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Real Results</p>
            <h2 className="text-3xl font-bold mb-3">Small business owners love it</h2>
            <p className="text-slate-600 max-w-xl mx-auto">See what other business owners have accomplished with Allison&apos;s courses, templates, and tools.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col gap-4">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed text-sm">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.business}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {t.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get your accounting under control?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Join thousands of small business owners who have simplified their books, reduced their tax bill, and stopped dreading April.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            View Plans <ArrowRight className="h-4 w-4" />
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
