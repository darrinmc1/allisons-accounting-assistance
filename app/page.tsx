import Link from "next/link"
import { ArrowRight, BookOpen, FileSpreadsheet, Calculator, CheckCircle, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Accounting Made Simple</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Stop dreading your books.<br />
            <span className="text-brand-700">Start understanding them.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Courses, templates, and tools built for small business owners — by a CPA who&apos;s been in your shoes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-700 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-brand-800 transition-colors"
            >
              Start Learning Free <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand-700 px-8 py-4 text-base font-bold text-brand-700 hover:bg-brand-50 transition-colors"
            >
              See Plans
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">No credit card required &middot; Free tier available</p>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="border-b bg-white py-6">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-brand-700" /> 2,400+ students enrolled</span>
            <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-brand-700" /> 4.9 / 5 average rating</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-brand-700" /> CPA-created content</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-brand-700" /> Plain-English explanations</span>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">Everything you need to run your books with confidence</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50">
                <BookOpen className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Courses</h3>
              <p className="text-sm text-slate-600 mb-4">Step-by-step lessons on bookkeeping, taxes, payroll, and more — in plain English.</p>
              <Link href="/learn" className="text-sm font-semibold text-brand-700 hover:text-brand-800 inline-flex items-center gap-1">
                Browse courses <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50">
                <FileSpreadsheet className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Templates</h3>
              <p className="text-sm text-slate-600 mb-4">Ready-to-use spreadsheets for invoicing, expense tracking, cash flow, and more.</p>
              <Link href="/templates" className="text-sm font-semibold text-brand-700 hover:text-brand-800 inline-flex items-center gap-1">
                View templates <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50">
                <Calculator className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Tools</h3>
              <p className="text-sm text-slate-600 mb-4">Calculators for estimated taxes, break-even, payroll, and other common small-business math.</p>
              <Link href="/tools" className="text-sm font-semibold text-brand-700 hover:text-brand-800 inline-flex items-center gap-1">
                Try the tools <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="border-y bg-brand-700 py-14">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to take control of your finances?</h2>
          <p className="text-brand-100 mb-8">Join thousands of small business owners who finally understand their numbers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-brand-700 shadow hover:bg-brand-50 transition-colors"
            >
              Start Learning Free <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-brand-800 transition-colors"
            >
              See Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">What small business owners are saying</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: "I finally understand what my accountant is talking about. Worth every penny.", name: "Sarah M.", role: "Freelance Designer" },
              { quote: "The quarterly tax calculator alone saved me from a $2,000 penalty. Incredible.", name: "James T.", role: "Landscaping Business Owner" },
              { quote: "Allison explains things the way a real person would. No jargon, no fluff.", name: "Priya K.", role: "Online Boutique Owner" },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 p-6">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-brand-700 text-brand-700" />)}
                </div>
                <p className="text-sm text-slate-700 mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden border-t border-slate-200 bg-white shadow-lg">
        <Link
          href="/learn"
          className="flex flex-1 items-center justify-center gap-2 bg-brand-700 py-4 text-sm font-bold text-white"
        >
          Start Learning Free <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/pricing"
          className="flex flex-1 items-center justify-center gap-2 border-l border-slate-200 py-4 text-sm font-bold text-brand-700"
        >
          See Plans
        </Link>
      </div>

      {/* Bottom padding so sticky bar doesn't cover content on mobile */}
      <div className="h-16 md:hidden" />
    </div>
  )
}
