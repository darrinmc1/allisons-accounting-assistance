import Link from "next/link"
import { ArrowRight, CheckCircle, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Allison&apos;s Accounting Assistance</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
            Stop dreading tax season.<br className="hidden md:block" /> Start feeling in control.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Courses, templates, and tools that turn accounting from a terrifying chore into a manageable part of running your business — built by a real CPA.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Browse Free Courses <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* ── EMAIL CAPTURE ── */}
      <div className="bg-brand-700 text-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-3">
                <Mail className="h-3.5 w-3.5" /> Free Resource
              </div>
              <h2 className="text-2xl font-bold mb-2">Get your free Small Business Tax Checklist</h2>
              <p className="text-brand-100 text-sm mb-4">
                Join 2,000+ small business owners who get our weekly accounting tips — plus an instant download of the 27-point tax checklist CPAs use before every filing.
              </p>
              <ul className="space-y-1.5">
                {[
                  "27-point pre-filing tax checklist (PDF)",
                  "Weekly plain-English accounting tips",
                  "Early access to new templates & tools",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-100">
                    <CheckCircle className="h-4 w-4 text-brand-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <form
                action="/api/subscribe"
                method="POST"
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <label htmlFor="email-capture" className="block text-sm font-semibold text-slate-700 mb-1">
                  Your email address
                </label>
                <input
                  id="email-capture"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 mb-3"
                />
                <label htmlFor="first-name-capture" className="block text-sm font-semibold text-slate-700 mb-1">
                  First name <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <input
                  id="first-name-capture"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 mb-4"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
                >
                  Send me the free checklist →
                </button>
                <p className="text-xs text-slate-400 text-center mt-3">No spam. Unsubscribe any time.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ── END EMAIL CAPTURE ── */}

      {/* Value props */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Everything you need to get your books under control</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "📚",
              title: "Plain-English Courses",
              desc: "Step-by-step accounting courses built for business owners, not accountants.",
              href: "/learn",
              cta: "Browse courses",
            },
            {
              icon: "📄",
              title: "Ready-to-Use Templates",
              desc: "Spreadsheets and checklists that take the guesswork out of bookkeeping.",
              href: "/templates",
              cta: "See templates",
            },
            {
              icon: "🛠️",
              title: "Free Tools & Calculators",
              desc: "Estimate quarterly taxes, compare business structures, and more.",
              href: "/tools",
              cta: "Try the tools",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6 flex flex-col">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 flex-1 mb-4">{item.desc}</p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                {item.cta} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Social proof */}
      <div className="border-t bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">What business owners are saying</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "I finally understand my own books. The quarterly tax calculator alone saved me from a $2,400 penalty.",
                name: "Marcus T.",
                role: "Freelance Designer",
              },
              {
                quote: "Allison explains things the way a friend would — no jargon, no judgment. Worth every penny.",
                name: "Priya S.",
                role: "E-commerce Owner",
              },
              {
                quote: "I used to dread tax season. Now I actually feel prepared. The templates are a game-changer.",
                name: "Derek M.",
                role: "Landscaping Business",
              },
            ].map((item) => (
              <div key={item.name} className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-700 leading-relaxed mb-4">&ldquo;{item.quote}&rdquo;</p>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get your finances under control?</h2>
          <p className="text-slate-600 mb-8">Start with a free course or grab a template — no credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Start learning for free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              View all plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
