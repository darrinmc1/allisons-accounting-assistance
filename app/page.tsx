import Link from "next/link"
import { ArrowRight, BookOpen, FileSpreadsheet, Calculator, CheckCircle, ChevronDown } from "lucide-react"

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
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Browse Free Courses <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* What we offer */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Everything you need to get your books under control</h2>
          <p className="text-slate-600 max-w-xl mx-auto">From beginner-friendly courses to ready-to-use templates, we&apos;ve got you covered.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <BookOpen className="h-6 w-6 text-brand-600" />,
              title: "Courses",
              desc: "Step-by-step video courses covering bookkeeping basics, tax prep, payroll, and more. Learn at your own pace.",
              href: "/learn",
              cta: "Browse courses",
            },
            {
              icon: <FileSpreadsheet className="h-6 w-6 text-brand-600" />,
              title: "Templates",
              desc: "Plug-and-play spreadsheets for invoicing, expense tracking, cash flow, and quarterly taxes.",
              href: "/templates",
              cta: "See templates",
            },
            {
              icon: <Calculator className="h-6 w-6 text-brand-600" />,
              title: "Tools",
              desc: "Free calculators for estimated taxes, break-even analysis, mileage deductions, and more.",
              href: "/tools",
              cta: "Try free tools",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
              <Link href={item.href} className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
                {item.cta} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Social proof */}
      <div className="border-y bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Built for real small business owners</h2>
            <p className="text-slate-600">Not accountants. Not finance majors. People like you.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: "I finally understand what my bookkeeper is actually doing. Worth every penny.", name: "Sarah M.", biz: "Freelance Designer" },
              { quote: "The quarterly tax calculator alone saved me from a $2,000 penalty. This site pays for itself.", name: "James T.", biz: "Landscaping Business" },
              { quote: "I used to dread tax season. Now I have a system and it actually feels manageable.", name: "Priya K.", biz: "Online Boutique Owner" },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-700 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-slate-500">{t.biz}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">FAQ</p>
          <h2 className="text-3xl font-bold mb-3">Common questions, honest answers</h2>
          <p className="text-slate-600">Not sure if this is right for you? Here&apos;s what most people ask before signing up.</p>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "Is this for my type of business?",
              a: "Yes — our courses and templates are designed for sole proprietors, freelancers, LLCs, and small businesses across all industries. Whether you run a service business, sell products online, or have a brick-and-mortar shop, the fundamentals covered here apply to you.",
            },
            {
              q: "How long are the courses?",
              a: "Most courses are between 60 and 180 minutes of video content, broken into short 5–15 minute lessons. You can watch at your own pace and revisit any lesson whenever you need a refresher. There are no deadlines or expiration dates.",
            },
            {
              q: "Do I need any accounting background to get started?",
              a: "Not at all. Our beginner courses start from scratch — we explain every term in plain English. If you already have some experience, our intermediate and advanced courses will fill in the gaps and sharpen your skills.",
            },
            {
              q: "Do the templates work with QuickBooks or my existing software?",
              a: "Our templates are built in Google Sheets and Excel, so they work alongside any accounting software. Many members use them to organize data before importing into QuickBooks, FreshBooks, or Wave.",
            },
            {
              q: "What if I buy something and it's not right for me?",
              a: "We offer a 30-day money-back guarantee on all courses and template bundles. If you're not satisfied, just email support@allisonsaccounting.com and we'll make it right — no questions asked.",
            },
            {
              q: "Is this a replacement for hiring a CPA?",
              a: "No — and we'll be upfront about that. Our goal is to make you a more informed business owner so you can handle day-to-day bookkeeping yourself and have smarter conversations with your CPA. For complex tax situations, we always recommend working with a licensed professional.",
            },
            {
              q: "When will new courses and templates be available?",
              a: "We launch new content regularly. Join our email list to get notified when new courses, templates, and tools go live. Early subscribers also get first access and launch discounts.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-xl border border-slate-200 p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-base text-slate-900">{item.q}</h3>
                <ChevronDown className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
              </div>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 mb-3">Still have questions?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t bg-brand-600">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get your accounting under control?</h2>
          <p className="text-brand-100 mb-8">Join thousands of small business owners who finally feel confident about their books.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50"
            >
              Get started free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-400 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
            >
              View pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
