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
            Accounting help built for small business owners
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools that turn confusing bookkeeping into a manageable part of running your business — no accounting degree required.
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
        <h2 className="text-2xl font-bold text-center mb-10">Everything you need to get your books under control</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Plain-English Courses",
              desc: "Step-by-step lessons that explain accounting concepts without the jargon. Learn at your own pace.",
              href: "/learn",
              cta: "Browse courses",
            },
            {
              icon: FileSpreadsheet,
              title: "Ready-to-Use Templates",
              desc: "Spreadsheets and checklists built for real small businesses. Download and start using today.",
              href: "/templates",
              cta: "See templates",
            },
            {
              icon: Calculator,
              title: "Free Tools",
              desc: "Tax calculators, expense trackers, and more — free tools to keep your finances on track.",
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
              <Link href={item.href} className="mt-4 text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
                {item.cta} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="border-t border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3 text-center">Real Results</p>
          <h2 className="text-2xl font-bold text-center mb-10">Small business owners who got their books under control</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "I saved over $5,000 on my taxes last year just by following Allison&apos;s deduction checklist. I had no idea I was leaving that much money on the table.",
                name: "Marcus T.",
                business: "Freelance Photographer",
              },
              {
                quote: "I finally understand my own books. The courses are so clear — I went from dreading my monthly reconciliation to actually feeling confident about it.",
                name: "Priya S.",
                business: "Owner, Bloom Candle Co.",
              },
              {
                quote: "The bookkeeping templates alone were worth it. I used to spend a whole weekend every quarter on this stuff. Now it takes me a couple of hours.",
                name: "Derek W.",
                business: "Independent Contractor",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to stop stressing about your books?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Join hundreds of small business owners who use Allison&apos;s courses, templates, and tools to stay on top of their finances year-round.
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
