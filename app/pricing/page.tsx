"use client"

import Link from "next/link"
import { useState } from "react"

const faqs = [
  {
    question: "Is this right for my type of business?",
    answer: "Yes — our courses, templates, and tools are designed for sole proprietors, freelancers, LLCs, S-Corps, and small businesses across all industries. Whether you're a consultant, contractor, retailer, or service provider, the fundamentals of small business accounting are the same. Everything is explained in plain English with real-world examples."
  },
  {
    question: "Do I need accounting knowledge to use this?",
    answer: "Not at all. We built this specifically for business owners who don't have an accounting background. Our courses start from the basics and build up. Our templates are pre-built and ready to use — just fill in your numbers. If you can use a spreadsheet, you can use our tools."
  },
  {
    question: "What's included in Pro?",
    answer: "Pro includes access to all current and future courses, the full template library (bookkeeping, tax prep, payroll, cash flow, and more), all financial calculators, priority email support, and early access to new releases. It's everything on the site, unlocked — for one flat annual price."
  },
  {
    question: "Can I cancel or get a refund?",
    answer: "Yes. We offer a 30-day money-back guarantee on all plans — no questions asked. If you cancel within 30 days of purchase, you'll receive a full refund. After 30 days, you can cancel anytime and you won't be charged again, but we don't prorate partial periods."
  },
  {
    question: "How is this different from hiring a bookkeeper or accountant?",
    answer: "A bookkeeper or accountant does the work for you — which is great, but expensive. We teach you to understand and manage your own books so you can make better decisions, catch errors, and have smarter conversations with your accountant. Many of our members use us alongside their accountant to save money and stay informed."
  },
  {
    question: "Do the templates work with QuickBooks or other software?",
    answer: "Our templates are built in Excel and Google Sheets and work as standalone tools. They're designed to complement any accounting software you use — or replace it entirely if you're just starting out. Many members use our templates to organize data before importing into QuickBooks or similar platforms."
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-900 text-base">{question}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-lg leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="pb-5 text-slate-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple, honest pricing</h1>
          <p className="text-lg text-slate-600">
            No surprise fees. No confusing tiers. Just everything you need to get your accounting under control.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12 space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">Free</p>
            <p className="text-4xl font-bold mb-1">$0</p>
            <p className="text-sm text-slate-500 mb-6">Forever free</p>
            <ul className="space-y-3 mb-8">
              {[
                "Access to free courses",
                "3 starter templates",
                "Basic calculators",
                "Blog & learning resources",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-brand-600 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block w-full rounded-lg border border-slate-300 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Get started free
            </Link>
          </div>

          <div className="rounded-xl border-2 border-brand-600 p-8 relative">
            <span className="absolute -top-3 left-6 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600 mb-2">Pro</p>
            <p className="text-4xl font-bold mb-1">$97</p>
            <p className="text-sm text-slate-500 mb-6">per year</p>
            <ul className="space-y-3 mb-8">
              {[
                "Everything in Free",
                "All courses (current + future)",
                "Full template library",
                "All financial calculators",
                "Priority email support",
                "Early access to new releases",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-brand-600 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="block w-full rounded-lg bg-brand-600 py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Get Pro — $97/yr
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm text-slate-600">
            Need a one-time setup session instead?{" "}
            <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">
              Book a 1:1 session →
            </Link>
          </p>
        </div>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Frequently asked questions</h2>
          <p className="text-slate-600 mb-6">Everything you need to know before signing up. Still have questions? <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">Reach out →</Link></p>
          <div className="rounded-xl border border-slate-200 px-6 divide-y divide-slate-200">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
