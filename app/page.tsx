"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, Star, ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Is this for my type of business?",
    answer: "Yes — our courses, templates, and tools are designed for sole proprietors, freelancers, LLCs, S-Corps, and small service or product-based businesses. Whether you're a consultant, contractor, retailer, or creative, the fundamentals apply to you."
  },
  {
    question: "Do I need accounting knowledge to use these resources?",
    answer: "Not at all. Everything is explained in plain English with zero jargon. We start from the basics and build up — so even if you've never looked at a balance sheet, you'll be able to follow along and apply what you learn immediately."
  },
  {
    question: "I already use QuickBooks / Xero. Will this still help me?",
    answer: "Absolutely. Our templates and courses are software-agnostic. We focus on the underlying accounting concepts and workflows so you can apply them in whatever tool you use — QuickBooks, Xero, Wave, spreadsheets, or anything else."
  },
  {
    question: "How is this different from hiring a bookkeeper or CPA?",
    answer: "A bookkeeper or CPA is great for hands-off help, but they can be expensive and you still need to understand your numbers to make good decisions. Our resources give you the knowledge to stay in control of your finances — and to work more effectively with any professional you do hire."
  },
  {
    question: "What if I buy something and it's not right for me?",
    answer: "We offer a 30-day money-back guarantee on all paid products. If it's not a fit, just email support@allisonsaccounting.com and we'll sort it out — no questions asked."
  },
  {
    question: "When will the full product library be available?",
    answer: "We're launching new courses and templates on a rolling basis. Join the waitlist to get early access and launch pricing before anything goes public."
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-slate-600 leading-relaxed text-sm">{answer}</div>
      )}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-4">Allison&apos;s Accounting Assistance</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Stop guessing at your numbers.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools that help small business owners understand their finances — without the jargon, the overwhelm, or the giant CPA bill.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              See Pricing <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Browse Free Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Everything you need to run your books with confidence</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Plain-English Courses", desc: "Learn bookkeeping, taxes, and cash flow from a real CPA — explained like a human, not a textbook." },
            { title: "Ready-to-Use Templates", desc: "Spreadsheets and trackers built for small businesses. Download, fill in your numbers, and go." },
            { title: "Practical Tools", desc: "Calculators and checklists that answer the questions you actually have, like 'how much should I set aside for taxes?'" },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">What business owners are saying</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: "I finally understand my P&L. I used to just hand everything to my accountant and hope for the best.", name: "Sarah K.", role: "Freelance Designer" },
              { quote: "The quarterly tax calculator alone saved me from a $2,000 underpayment penalty. Worth every penny.", name: "Marcus T.", role: "Landscaping LLC" },
              { quote: "Allison explains things the way a smart friend would — not like she's trying to impress you with credentials.", name: "Priya M.", role: "E-commerce Seller" },
            ].map((item) => (
              <div key={item.name} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">&ldquo;{item.quote}&rdquo;</p>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Built for real small business owners</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Not Fortune 500 finance teams. Not accounting students. You — the person who wears every hat and just needs their books to make sense.
            </p>
            <ul className="space-y-3">
              {[
                "No accounting degree required",
                "Works with any bookkeeping software",
                "Created by a licensed CPA",
                "30-day money-back guarantee",
                "New content added regularly",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="h-4 w-4 text-brand-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700 mb-3">Join the waitlist</p>
            <h3 className="text-xl font-bold mb-2">Get early access + launch pricing</h3>
            <p className="text-sm text-slate-600 mb-4">Be the first to know when new courses and templates drop. Waitlist members get exclusive discounts.</p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              View Plans <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3 text-center">FAQ</p>
          <h2 className="text-2xl font-bold text-center mb-2">Common questions</h2>
          <p className="text-slate-600 text-center mb-10">Everything you need to know before getting started.</p>
          <div className="rounded-xl border border-slate-200 bg-white px-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            Still have questions?{" "}
            <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">Get in touch →</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to take control of your finances?</h2>
          <p className="text-slate-600 mb-6">Join hundreds of small business owners who finally understand their numbers.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Explore Free Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
