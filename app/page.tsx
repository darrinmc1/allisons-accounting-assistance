import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Allison&apos;s Accounting Assistance</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">Stop dreading your books.<br />Start understanding them.</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools built by a licensed CPA — designed for small business owners who want to get their finances under control without hiring a full-time accountant.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/learn" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
              Start Learning Free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Everything you need to run clean books</h2>
          <p className="text-slate-600">From beginner basics to advanced tax strategy — all in one place.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Courses", desc: "Step-by-step video lessons covering bookkeeping, taxes, payroll, and more. Learn at your own pace.", href: "/learn", cta: "Browse Courses" },
            { title: "Templates", desc: "Ready-to-use spreadsheets for cash flow, invoicing, expense tracking, and quarterly taxes.", href: "/templates", cta: "Get Templates" },
            { title: "Tools", desc: "Free calculators for estimated taxes, S-Corp savings, break-even analysis, and more.", href: "/tools", cta: "Try Tools" },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
              <Link href={item.href} className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
                {item.cta} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="border-t border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Pricing</p>
            <h2 className="text-3xl font-bold mb-3">Simple, transparent pricing</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Start free and upgrade when you&apos;re ready. Most members save more in their first month than the annual plan costs.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {/* Free Tier */}
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">Free</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-slate-500 mb-1">/forever</span>
                </div>
                <p className="text-sm text-slate-600">Get started with the essentials — no credit card required.</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Access to all free courses",
                  "3 starter templates",
                  "Tax & break-even calculators",
                  "Weekly accounting tips newsletter",
                  "Community Q&A access",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/sign-up" className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                Get Started Free
              </Link>
            </div>

            {/* Pro Tier */}
            <div className="rounded-xl border-2 border-brand-600 bg-white p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  <Star className="h-3 w-3" /> Most Popular
                </span>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-700 mb-1">Pro</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-slate-500 mb-1">/month</span>
                </div>
                <p className="text-sm text-slate-600">Everything in Free, plus the full toolkit to run your business like a CFO.</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "All free features included",
                  "Full template library (20+ templates)",
                  "All premium courses & new releases",
                  "Quarterly tax planner & tracker",
                  "Priority email support",
                  "Monthly live Q&A with Allison",
                  "1 free 30-min strategy session/year",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="block w-full rounded-lg bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
                Start Pro — $29/mo
              </Link>
            </div>
          </div>

          {/* ROI Callout */}
          <div className="mt-10 rounded-xl border border-brand-100 bg-brand-50 p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-brand-900 mb-1">The average Pro member saves $4,200+ in their first year</p>
                <p className="text-sm text-brand-800">Between missed deductions found, tax penalties avoided, and hours saved on bookkeeping — the Pro plan pays for itself many times over. That&apos;s less than $1/day to have a CPA in your corner.</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            Not sure which plan is right for you?{" "}
            <Link href="/pricing" className="font-semibold text-brand-600 hover:text-brand-700">See full plan comparison →</Link>
          </p>
        </div>
      </div>

      {/* Social Proof */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Trusted by small business owners</h2>
          <p className="text-slate-600">Real results from real members.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { quote: "I found $3,800 in deductions I had no idea I was missing. The quarterly tax planner alone is worth 10x the price.", name: "Sarah M.", role: "Freelance Designer" },
            { quote: "Allison explains everything in plain English. I finally understand my own finances after 5 years of guessing.", name: "James T.", role: "Restaurant Owner" },
            { quote: "Switched from a $300/month bookkeeper to Pro. Same results, way less money. Wish I found this sooner.", name: "Priya K.", role: "E-commerce Seller" },
          ].map((item) => (
            <div key={item.name} className="rounded-xl border border-slate-200 p-6">
              <p className="text-sm text-slate-700 italic mb-4">&ldquo;{item.quote}&rdquo;</p>
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-slate-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to take control of your finances?</h2>
          <p className="text-slate-600 mb-8">Join thousands of small business owners who use Allison&apos;s to keep clean books, pay less in taxes, and stress less every April.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/sign-up" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
              Start Free Today <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              Learn About Allison
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
