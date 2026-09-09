import Link from "next/link"
import { ArrowRight, Download, CheckCircle, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Allison&apos;s Accounting Assistance</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">Stop dreading tax season.<br />Start running smarter books.</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools built for small business owners who want to understand their finances — without hiring a full-time accountant.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/learn" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
              Browse Free Courses <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/templates" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              View Templates
            </Link>
          </div>
        </div>
      </div>

      {/* ===== EMAIL CAPTURE — above fold lead magnet ===== */}
      <div className="bg-brand-700 text-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
                <Download className="h-3 w-3" /> Free Download
              </div>
              <h2 className="text-2xl font-bold mb-3">Get your free Small Business Tax &amp; Bookkeeping Starter Kit</h2>
              <p className="text-brand-100 text-sm mb-5">
                Two ready-to-use resources — a year-round Tax Deduction Checklist and a Monthly Bookkeeping Guide — delivered straight to your inbox. No fluff, just the essentials.
              </p>
              <ul className="space-y-2">
                {[
                  "Annual Tax Deduction Checklist (PDF)",
                  "Monthly Bookkeeping Routine Guide (PDF)",
                  "Bonus: quarterly estimated tax reminder schedule",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-100">
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-green-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 text-slate-800 shadow-lg">
              <h3 className="font-bold text-lg mb-1">Send me the free kit</h3>
              <p className="text-sm text-slate-500 mb-4">Join 2,000+ small business owners. Unsubscribe anytime.</p>
              <form
                action="/api/subscribe"
                method="POST"
                className="space-y-3"
              >
                <div>
                  <label htmlFor="hero-first-name" className="block text-xs font-semibold text-slate-600 mb-1">First name</label>
                  <input
                    id="hero-first-name"
                    name="firstName"
                    type="text"
                    required
                    placeholder="Jane"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label htmlFor="hero-email" className="block text-xs font-semibold text-slate-600 mb-1">Email address</label>
                  <input
                    id="hero-email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@yourbusiness.com"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
                >
                  <Mail className="h-4 w-4" /> Get the free kit
                </button>
                <p className="text-xs text-slate-400 text-center">We respect your privacy. No spam, ever.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ===== END EMAIL CAPTURE ===== */}

      {/* Features */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Everything you need to get your finances under control</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Free Courses", desc: "Step-by-step lessons on bookkeeping, taxes, payroll, and more — written in plain English.", href: "/learn", cta: "Start learning" },
            { title: "Templates", desc: "Spreadsheets and checklists that do the heavy lifting so you can focus on your business.", href: "/templates", cta: "Browse templates" },
            { title: "Tools & Calculators", desc: "Estimate your quarterly taxes, figure out your break-even, and more — in seconds.", href: "/tools", cta: "Try the tools" },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6 hover:border-brand-300 transition-colors">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
              <Link href={item.href} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
                {item.cta} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Social proof */}
      <div className="border-t bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-14">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-8">What small business owners are saying</p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: "I finally understand my own books. The bookkeeping course alone saved me hours every month.", name: "Sarah K., freelance designer" },
              { quote: "The quarterly tax calculator is a lifesaver. No more surprise bills in April.", name: "Marcus T., e-commerce seller" },
              { quote: "Allison explains things the way a real person would. No jargon, no condescension.", name: "Priya M., restaurant owner" },
            ].map((item) => (
              <div key={item.name} className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-700 leading-relaxed mb-4">&ldquo;{item.quote}&rdquo;</p>
                <p className="text-xs font-semibold text-slate-500">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to take control of your finances?</h2>
          <p className="text-slate-600 mb-6">Start with a free course or grab the Starter Kit above — no credit card required.</p>
          <Link href="/pricing" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
            See plans &amp; pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
