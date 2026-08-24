import Link from "next/link"
import { ArrowRight, BookOpen, FileSpreadsheet, Calculator, Users, CheckCircle, ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Is this for me if I'm not a numbers person?",
    a: "Absolutely. Everything on this site is designed for business owners, not accountants. We skip the jargon and explain concepts in plain English — with real examples from real businesses. If you can read a bank statement, you can use our courses and templates."
  },
  {
    q: "Do I need any accounting knowledge to get started?",
    a: "None at all. Our courses start from the very basics — what debits and credits actually mean, how to categorize expenses, and how to read a P&L. You'll build real skills from the ground up, at your own pace."
  },
  {
    q: "How is this different from just hiring a CPA?",
    a: "A CPA files your taxes once a year and charges $300–$500/hr for questions. We teach you to understand your own numbers year-round, so you make better decisions every month — and show up to your CPA (if you use one) prepared. Many of our members use both."
  },
  {
    q: "I'm already using QuickBooks. Do I still need this?",
    a: "Yes — QuickBooks is a tool, not a teacher. Most business owners using QuickBooks are still miscategorizing expenses, missing deductions, and misreading their reports. Our courses teach you what the numbers mean and how to use QuickBooks correctly, so you actually trust what you're looking at."
  },
  {
    q: "What if I'm behind on my books or starting from scratch?",
    a: "That's exactly who we built this for. Our Bookkeeping Basics course and catch-up templates walk you through getting organized from any starting point — whether you're three months behind or three years behind."
  },
  {
    q: "Can I cancel my membership anytime?",
    a: "Yes. Month-to-month plans can be cancelled anytime with no fees or penalties. Annual plans are billed once per year and include a 14-day money-back guarantee if you're not satisfied."
  },
  {
    q: "Is this legitimate accounting advice?",
    a: "Our content is created by Allison, a licensed CPA with 10+ years of experience. That said, our courses and templates are educational resources — not a substitute for personalized tax or legal advice for your specific situation. For complex issues, we always recommend working with a licensed professional."
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
            Finally understand your business finances
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools that turn accounting from a terrifying chore into a manageable part of running your business — no accounting degree required.
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
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Start for Free
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Everything you need to run clean books</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Built for freelancers, consultants, and small business owners who want to stop guessing and start knowing.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpen, title: "Courses", desc: "Step-by-step lessons on bookkeeping, taxes, payroll, and more." },
            { icon: FileSpreadsheet, title: "Templates", desc: "Ready-to-use spreadsheets for invoicing, budgeting, and tax prep." },
            { icon: Calculator, title: "Tools", desc: "Calculators for estimated taxes, break-even, and cash flow." },
            { icon: Users, title: "1:1 Sessions", desc: "Book time with Allison for personalized setup and strategy." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                <Icon className="h-5 w-5 text-brand-600" />
              </div>
              <h3 className="font-bold mb-1">{title}</h3>
              <p className="text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social proof */}
      <div className="border-y bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: "I finally understand my P&L. Allison explains things in a way that actually makes sense.", name: "Sarah K.", role: "Freelance Designer" },
              { quote: "Saved me hours every month. The bookkeeping templates alone were worth the price.", name: "Marcus T.", role: "Landscaping Business Owner" },
              { quote: "I used to dread tax season. Now I feel prepared all year long.", name: "Priya M.", role: "Online Boutique Owner" },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-700 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
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
          <p className="text-slate-600">Still on the fence? Here&apos;s what most people ask before they sign up.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white">
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 font-semibold text-slate-900 list-none">
                  <span>{faq.q}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 mb-3">Still have questions?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t bg-brand-600">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to take control of your finances?</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">Join thousands of small business owners who finally understand their numbers.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
            >
              See Plans & Pricing <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-400 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Start for Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
