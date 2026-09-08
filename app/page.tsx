import Link from "next/link"
import { ArrowRight, BookOpen, Calculator, FileText, Star } from "lucide-react"

const testimonials = [
  {
    quote: "I used to dread tax season. After going through Allison's course, I finally understood my tax obligations and stopped guessing. Saved me from a $3,000 mistake my first year.",
    name: "Marcus T.",
    business: "Freelance Graphic Designer",
    initials: "MT",
  },
  {
    quote: "The bookkeeping templates alone saved me at least 10 hours a month. I used to spend entire Sundays catching up on my books. Now it takes me 20 minutes.",
    name: "Priya S.",
    business: "Online Boutique Owner",
    initials: "PS",
  },
  {
    quote: "I had no idea I was missing out on deductions. After the tax course, I found over $6,000 in legitimate write-offs I'd been ignoring for two years.",
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
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold md:text-3xl">Everything you need to get your finances under control</h2>
          <p className="text-slate-600 mt-2">No jargon. No gatekeeping. Just practical accounting help.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Courses",
              desc: "Step-by-step lessons on bookkeeping, taxes, payroll, and more — taught in plain English.",
              href: "/learn",
              cta: "Browse courses",
            },
            {
              icon: FileText,
              title: "Templates",
              desc: "Ready-to-use spreadsheets and checklists so you spend less time building and more time running your business.",
              href: "/templates",
              cta: "Get templates",
            },
            {
              icon: Calculator,
              title: "Tools",
              desc: "Free calculators for estimated taxes, mileage, home office deductions, and more.",
              href: "/tools",
              cta: "Use free tools",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6 flex flex-col">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                <item.icon className="h-5 w-5 text-brand-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 flex-1">{item.desc}</p>
              <Link href={item.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
                {item.cta} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="border-t border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-2">Real Results</p>
            <h2 className="text-2xl font-bold md:text-3xl">Small business owners who got their books under control</h2>
            <p className="text-slate-600 mt-2">Here&apos;s what happens when accounting finally makes sense.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Ready to stop stressing about your books?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Join thousands of small business owners who finally have their accounting under control.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/learn"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Start for Free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </div>
  )
}
