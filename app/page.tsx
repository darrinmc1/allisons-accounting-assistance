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
            Courses, templates, and tools that turn confusing bookkeeping into a manageable part of running your business — no accounting degree required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Start Learning Free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Everything you need to stay on top of your books</h2>
          <p className="text-slate-600 max-w-xl mx-auto">From free courses to done-for-you templates, we&apos;ve got you covered at every stage.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Free Courses",
              desc: "Step-by-step lessons on bookkeeping, taxes, payroll, and more — explained in plain English.",
              href: "/learn",
              cta: "Browse courses",
            },
            {
              icon: FileSpreadsheet,
              title: "Ready-Made Templates",
              desc: "Spreadsheets and trackers built for real small businesses. Download and start using today.",
              href: "/templates",
              cta: "See templates",
            },
            {
              icon: Calculator,
              title: "Free Tools",
              desc: "Calculators for estimated taxes, mileage, depreciation, and more — no signup required.",
              href: "/tools",
              cta: "Try the tools",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6 flex flex-col">
              <item.icon className="h-8 w-8 text-brand-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">{item.desc}</p>
              <Link href={item.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
                {item.cta} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <div className="border-y bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Trusted by small business owners</h2>
            <p className="text-slate-600">Real results from real people who were once just as confused as you are.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "I finally understand what my bookkeeper is actually doing. The courses are clear, practical, and don't talk down to you.",
                name: "Sarah M.",
                biz: "Freelance Photographer",
              },
              {
                quote: "The quarterly tax calculator alone saved me from a $2,000 penalty. Worth every penny.",
                name: "James T.",
                biz: "HVAC Contractor",
              },
              {
                quote: "I switched from a $300/month bookkeeper to doing it myself with these templates. Took me about an hour to set up.",
                name: "Priya K.",
                biz: "Online Boutique Owner",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-700 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-bold">{t.name}</p>
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
          <p className="text-slate-600">Still on the fence? Here&apos;s what most people ask before getting started.</p>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "Is this right for my type of business?",
              a: "Yes — our courses, templates, and tools are designed to work for sole proprietors, freelancers, LLCs, S-Corps, service businesses, product businesses, and everything in between. The fundamentals of small business accounting are the same whether you&apos;re a photographer, contractor, retailer, or consultant. Where industry-specific nuances matter, we call them out clearly.",
            },
            {
              q: "Do I need any accounting knowledge to get started?",
              a: "Not at all. We built everything assuming you know nothing about accounting — and that&apos;s totally fine. Our courses start from the very basics (what is a debit, anyway?) and build up from there. If you already have some knowledge, you can skip ahead. There&apos;s no jargon without explanation, and no assumption that you&apos;ve ever taken an accounting class.",
            },
            {
              q: "I already use QuickBooks / FreshBooks / Wave. Is this still useful?",
              a: "Absolutely. Software is just a tool — it still requires you to understand what you&apos;re doing. Our courses teach you the concepts behind the software so you actually know if your books are correct. Our templates work alongside any software as a sanity check, planning tool, or backup. Many of our members use both.",
            },
            {
              q: "What if I already have a bookkeeper or accountant?",
              a: "Even better. Understanding your own books makes you a better client and helps you catch errors before they become expensive problems. Many of our members use our courses to understand what their accountant is telling them — and to ask smarter questions at tax time.",
            },
            {
              q: "Is this a subscription? Can I cancel anytime?",
              a: "Our free courses and tools are always free — no credit card required. Paid plans are billed monthly or annually and can be cancelled at any time from your account dashboard. We don&apos;t do sneaky auto-renewals or hard cancellations. See our pricing page for full details.",
            },
            {
              q: "What if I try it and it&apos;s not for me?",
              a: "We offer a 30-day money-back guarantee on all paid plans. If you&apos;re not happy for any reason, just email us and we&apos;ll refund you — no questions asked. We&apos;d rather you leave happy than stay frustrated.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-base mb-2 flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                {item.q}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed pl-7">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 mb-3">Still have a question we didn&apos;t answer?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
            Reach out — we&apos;re happy to help <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t bg-brand-600">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get your books under control?</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            Start with our free courses — no credit card, no commitment. Just clear, practical accounting help.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
          >
            Start Learning Free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
