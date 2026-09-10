import Link from "next/link"
import { ArrowRight, BookOpen, FileSpreadsheet, Calculator, Star, CheckCircle } from "lucide-react"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Allison's Accounting Assistance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Allison's Accounting Assistance provides bookkeeping courses, accounting templates, and financial tools for small business owners, created by a licensed CPA with over a decade of experience."
      }
    },
    {
      "@type": "Question",
      "name": "Are the bookkeeping courses free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, several courses including Bookkeeping Basics for Small Business and Small Business Tax Prep 101 are completely free. Pro courses and templates are available with a paid subscription."
      }
    },
    {
      "@type": "Question",
      "name": "Who are the courses designed for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The courses are designed for small business owners, freelancers, and self-employed individuals who want to understand their finances without hiring a full-time accountant."
      }
    },
    {
      "@type": "Question",
      "name": "What accounting templates are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Templates include monthly bookkeeping spreadsheets, invoice templates, expense trackers, cash flow forecasts, and tax prep checklists — all built by a licensed CPA."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a Pro subscription cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pro subscription pricing is available on the pricing page. It includes access to all courses, templates, and tools for one low monthly price."
      }
    }
  ]
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-20 md:py-28 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-4">Accounting for real business owners</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6 max-w-3xl mx-auto leading-tight">
            Stop dreading your books. Start understanding them.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools built by a licensed CPA — designed for small business owners who want to get their finances under control without hiring a full-time accountant.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Start learning free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Everything you need to run clean books</h2>
          <p className="text-slate-600">Built for small business owners, freelancers, and self-employed professionals.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Practical Courses",
              desc: "Step-by-step video courses on bookkeeping, taxes, payroll, and cash flow. No jargon, no fluff.",
              href: "/learn",
              cta: "Browse courses",
            },
            {
              icon: FileSpreadsheet,
              title: "Ready-to-Use Templates",
              desc: "CPA-built spreadsheets for bookkeeping, invoicing, expense tracking, and tax prep.",
              href: "/templates",
              cta: "Get templates",
            },
            {
              icon: Calculator,
              title: "Financial Tools",
              desc: "Calculators for estimated taxes, break-even analysis, cash flow forecasting, and more.",
              href: "/tools",
              cta: "Try the tools",
            },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl border border-slate-200 p-6">
              <feature.icon className="h-8 w-8 text-brand-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">{feature.desc}</p>
              <Link href={feature.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                {feature.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">Trusted by small business owners</h2>
            <div className="flex justify-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: "I finally understand my P&L. Allison's bookkeeping course paid for itself in the first month.", name: "Sarah K.", role: "Freelance Designer" },
              { quote: "The tax prep templates saved me hours and my CPA actually complimented how organized my books were.", name: "Marcus T.", role: "Restaurant Owner" },
              { quote: "I was terrified of accounting. Now I check my numbers every week. The courses are that good.", name: "Priya M.", role: "E-commerce Seller" },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Built by a CPA who&apos;s been in your shoes</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Allison is a licensed CPA with over a decade of experience in public accounting and small business consulting.
              She built this site because she got tired of watching talented business owners make the same preventable mistakes.
            </p>
            <ul className="space-y-3">
              {[
                "Plain-English explanations — no accounting degree required",
                "Real-world examples from actual small businesses",
                "Templates and tools you can use immediately",
                "Courses updated for current tax laws",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700 mb-4">Free to start</p>
            <h3 className="text-2xl font-bold mb-3">Start with our free bookkeeping course</h3>
            <p className="text-slate-600 text-sm mb-6">No credit card required. Learn the fundamentals in under 3 hours.</p>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Get started free <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              { q: "Are the bookkeeping courses really free?", a: "Yes — Bookkeeping Basics and Tax Prep 101 are completely free. No credit card needed. Pro courses and all templates are included with a paid subscription." },
              { q: "Who are the courses designed for?", a: "Small business owners, freelancers, and self-employed individuals who want to understand their finances without hiring a full-time accountant." },
              { q: "What accounting templates are included?", a: "Monthly bookkeeping spreadsheets, invoice templates, expense trackers, cash flow forecasts, and tax prep checklists — all built by a licensed CPA." },
              { q: "Do I need any accounting background?", a: "Not at all. Every course starts from the basics and uses plain English. If you can read a bank statement, you can follow along." },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
