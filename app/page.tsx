import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-4">Launching Soon</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Accounting help built for small business owners
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Courses, templates, and tools that turn confusing bookkeeping into a manageable part of running your business — no accounting degree required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Browse Free Courses <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              See Pricing
            </Link>
          </div>

          {/* Testimonials */}
          <div className="grid gap-4 sm:grid-cols-3 text-left">
            {[
              {
                quote: "I finally understand my own books. Allison's templates saved me hours every month and probably thousands at tax time.",
                name: "Marcus T.",
                role: "Freelance Photographer",
              },
              {
                quote: "As a first-time business owner I was terrified of accounting. These courses made it click in a way nothing else had.",
                name: "Priya S.",
                role: "Boutique Owner",
              },
              {
                quote: "Worth every penny. I caught a $2,400 deduction I'd been missing for two years after going through the tax course.",
                name: "Derek L.",
                role: "Independent Contractor",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Everything you need to get your finances under control</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Plain-English Courses",
              desc: "Step-by-step lessons on bookkeeping, taxes, payroll, and more — explained without the jargon.",
              href: "/learn",
              cta: "Browse courses",
            },
            {
              title: "Ready-to-Use Templates",
              desc: "Spreadsheets and trackers built for real small businesses. Download, fill in, done.",
              href: "/templates",
              cta: "See templates",
            },
            {
              title: "Free Tools",
              desc: "Calculators and checklists to help you estimate taxes, track expenses, and stay organized.",
              href: "/tools",
              cta: "Try the tools",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
              <Link href={item.href} className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
                {item.cta} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to stop dreading your books?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Join the waitlist and get early access to courses, templates, and tools when we launch.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Get Early Access <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
