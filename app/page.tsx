import Link from "next/link"
import { ArrowRight, BookOpen, Calculator, FileText, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Allison&apos;s Accounting Assistance</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Stop dreading your books.<br />
            <span className="text-brand-700">Start understanding them.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools built for small business owners who want to get their finances under control — without hiring a full-time accountant.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
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

          {/* Social Proof Metrics */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">2,400+</p>
              <p className="text-sm text-slate-500">business owners helped</p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-slate-300" />
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">$3.2M+</p>
              <p className="text-sm text-slate-500">in tax savings identified</p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-slate-300" />
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">4.9 / 5</p>
              <p className="text-sm text-slate-500">average course rating</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid gap-4 sm:grid-cols-3 text-left">
            {[
              {
                quote: "I saved over $5,400 in taxes my first year using Allison&apos;s deduction checklist. I had no idea I was leaving that much on the table.",
                name: "Marcus T.",
                role: "Freelance Designer",
              },
              {
                quote: "The bookkeeping templates cut my monthly close from a full weekend to about two hours. Genuinely life-changing for my sanity.",
                name: "Priya S.",
                role: "E-commerce Owner",
              },
              {
                quote: "Finally understand the difference between profit and cash flow. The courses are clear, no jargon, and actually fun to watch.",
                name: "Derek L.",
                role: "Landscaping Business",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
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
      </div>

      {/* Features */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Everything you need to run your finances with confidence</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Courses",
              desc: "Step-by-step accounting courses built for non-accountants. Start free, go at your own pace.",
              href: "/learn",
              cta: "Browse courses",
            },
            {
              icon: FileText,
              title: "Templates",
              desc: "Ready-to-use spreadsheets for bookkeeping, invoicing, payroll, and more.",
              href: "/templates",
              cta: "See templates",
            },
            {
              icon: Calculator,
              title: "Tools",
              desc: "Free calculators for estimated taxes, break-even analysis, cash flow, and more.",
              href: "/tools",
              cta: "Try the tools",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                <item.icon className="h-5 w-5 text-brand-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
              <Link href={item.href} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800">
                {item.cta} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="border-t bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to get your finances under control?</h2>
          <p className="text-slate-600 mb-6">Join thousands of small business owners who finally feel confident about their books.</p>
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
          >
            Create your free account <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
