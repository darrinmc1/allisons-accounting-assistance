import Link from "next/link"
import { ArrowRight, BookOpen, FileSpreadsheet, Calculator, Star } from "lucide-react"

const testimonials = [
  {
    quote: "I used to dread tax season. After going through Allison's bookkeeping course, I finally understand my own numbers. Saved me over $4,000 in deductions I was missing.",
    name: "Marcus T.",
    business: "Freelance Photographer",
    initials: "MT",
  },
  {
    quote: "The QuickBooks setup template alone was worth 10x the price. I had my books cleaned up in a weekend after two years of chaos. Wish I'd found this sooner.",
    name: "Priya S.",
    business: "Online Boutique Owner",
    initials: "PS",
  },
  {
    quote: "As a contractor, I never knew how much to set aside for quarterly taxes. Allison's calculator and course gave me a system that actually works. No more surprise tax bills.",
    name: "Derek L.",
    business: "Independent Contractor",
    initials: "DL",
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
            Accounting help built for small business owners
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools that turn confusing accounting into something you can actually handle — without hiring a full-time bookkeeper.
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
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              View Plans
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Everything you need to get your books in order</h2>
          <p className="text-slate-600 max-w-xl mx-auto">From beginner basics to advanced tax strategy — we&apos;ve got you covered.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Free Courses",
              desc: "Step-by-step lessons on bookkeeping, taxes, payroll, and more. No jargon, no fluff.",
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
              desc: "Calculators for quarterly taxes, mileage, home office deductions, and more.",
              href: "/tools",
              cta: "Try the tools",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6 hover:border-brand-300 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                <item.icon className="h-5 w-5 text-brand-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
              <Link href={item.href} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
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
            <h2 className="text-3xl font-bold mb-3">Small business owners who got their books under control</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Join thousands of freelancers, contractors, and small business owners who finally understand their finances.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col gap-4">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-sm font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to stop guessing and start knowing?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Start with our free courses, or go all-in with a Pro plan and get every template, tool, and resource we offer.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/learn"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Start for Free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            See Pricing
          </Link>
        </div>
      </div>
    </div>
  )
}
