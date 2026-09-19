import Link from "next/link"
import { ArrowRight, BookOpen, FileSpreadsheet, Calculator, CheckCircle, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50 to-white border-b">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-4">Accounting Made Simple</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6 text-slate-900">
            Stop dreading your books.<br />
            <span className="text-brand-600">Start understanding them.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Courses, templates, and tools built for small business owners — by a CPA who&apos;s been in your shoes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-brand-700 transition-colors"
            >
              Start Free Course <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">No credit card required &mdash; free forever</p>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-slate-50 border-b py-6">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-600" />
              <span>2,400+ business owners enrolled</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-500" />
              <span>4.9 / 5 average rating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-600" />
              <span>CPA-created content</span>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-3">Everything you need to run clean books</h2>
        <p className="text-center text-slate-600 mb-12">Pick what you need — or grab everything with a membership.</p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-6 hover:border-brand-300 hover:shadow-md transition-all">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
              <BookOpen className="h-6 w-6 text-brand-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Free Courses</h3>
            <p className="text-sm text-slate-600 mb-4">Plain-English lessons on bookkeeping, taxes, payroll, and more. Start learning today at no cost.</p>
            <Link href="/learn" className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
              Browse courses <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 hover:border-brand-300 hover:shadow-md transition-all">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
              <FileSpreadsheet className="h-6 w-6 text-brand-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Ready-Made Templates</h3>
            <p className="text-sm text-slate-600 mb-4">Spreadsheets and trackers built for real businesses. Download and start using them today.</p>
            <Link href="/templates" className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
              See templates <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 hover:border-brand-300 hover:shadow-md transition-all">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
              <Calculator className="h-6 w-6 text-brand-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Smart Tools</h3>
            <p className="text-sm text-slate-600 mb-4">Calculators for estimated taxes, S-Corp savings, break-even analysis, and more.</p>
            <Link href="/tools" className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
              Try the tools <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mid-Page Pricing CTA */}
      <section className="bg-slate-50 border-y">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Simple Pricing</p>
          <h2 className="text-3xl font-bold mb-4">Get everything for one low price</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            Membership unlocks every course, template, and tool — plus priority support and monthly Q&amp;A sessions.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand-600 bg-white px-8 py-4 text-lg font-bold text-brand-600 hover:bg-brand-600 hover:text-white transition-colors shadow-sm"
          >
            View Pricing <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="mt-4 text-sm text-slate-500">Plans start at $19/month &mdash; cancel anytime</p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-3xl px-4 md:px-6 py-16">
        <div className="rounded-2xl bg-brand-50 border border-brand-100 p-8 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <blockquote className="text-lg font-medium text-slate-800 mb-4">
            &ldquo;I used to dread tax season. After Allison&apos;s bookkeeping course I actually feel in control of my finances. Worth every penny.&rdquo;
          </blockquote>
          <p className="text-sm font-semibold text-slate-600">— Sarah M., freelance designer</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-brand-700">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to take control of your finances?</h2>
          <p className="text-brand-200 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of small business owners who finally understand their numbers.
          </p>
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-brand-700 hover:bg-brand-50 transition-colors shadow-lg"
          >
            Join Now <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="mt-4 text-sm text-brand-300">Free plan available &mdash; no credit card needed</p>
        </div>
      </section>
    </div>
  )
}
