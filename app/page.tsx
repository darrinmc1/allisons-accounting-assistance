import Link from "next/link"
import { ArrowRight, BookOpen, Receipt, Briefcase, Users, Calculator, FileText, Shield, DollarSign, CheckCircle } from "lucide-react"

const features = [
  {
    title: "Bookkeeping Made Simple",
    description: "Track income and expenses without the headache. Learn proper categorization, reconciliation, and reporting that keeps the IRS happy.",
    icon: <BookOpen className="h-8 w-8" />,
  },
  {
    title: "Tax Prep That Saves You Money",
    description: "Maximize deductions, understand your tax obligations, and file with confidence. Free courses and pro templates for every filing scenario.",
    icon: <Receipt className="h-8 w-8" />,
  },
  {
    title: "Payroll Without the Paperwork",
    description: "Set up payroll, manage withholdings, and stay compliant with federal and state requirements. Tools that automate the tedious stuff.",
    icon: <Users className="h-8 w-8" />,
  },
  {
    title: "Business Setup from Day One",
    description: "From EIN registration to business bank accounts — get the foundation right so you don't pay for mistakes later.",
    icon: <Briefcase className="h-8 w-8" />,
  },
]

const courses = [
  {
    id: "bookkeeping-basics",
    title: "Bookkeeping Basics for Small Business",
    summary: "Ledgers, journals, charts of accounts — the fundamentals every business owner needs to know.",
    difficulty: "Beginner",
    duration: "20 min",
    topics: ["Chart of Accounts", "Double-Entry", "Reconciliation"],
  },
  {
    id: "tax-deductions-guide",
    title: "The Small Business Tax Deduction Playbook",
    summary: "Every deduction you're entitled to and how to document it properly. No more leaving money on the table.",
    difficulty: "Intermediate",
    duration: "30 min",
    topics: ["Home Office", "Vehicle", "Equipment", "Travel"],
  },
  {
    id: "payroll-setup",
    title: "Setting Up Payroll for Your First Employee",
    summary: "From EIN to pay stubs — everything you need to hire and pay your first employee legally.",
    difficulty: "Intermediate",
    duration: "25 min",
    topics: ["Payroll Taxes", "Withholding", "Forms W-2/1099"],
  },
  {
    id: "business-structure",
    title: "LLC vs S-Corp vs Sole Proprietor",
    summary: "Choose the right entity structure for your business and avoid costly tax mistakes.",
    difficulty: "Beginner",
    duration: "15 min",
    topics: ["Entity Types", "Tax Implications", "Liability"],
  },
  {
    id: "financial-statements",
    title: "Reading Your Financial Statements",
    summary: "Income statements, balance sheets, and cash flow — understand the numbers that drive your business.",
    difficulty: "Beginner",
    duration: "20 min",
    topics: ["P&L", "Balance Sheet", "Cash Flow"],
  },
  {
    id: "quarterly-taxes",
    title: "Estimated Quarterly Taxes Made Easy",
    summary: "Never get hit with a penalty again. Learn to calculate, budget for, and pay quarterly estimated taxes.",
    difficulty: "Intermediate",
    duration: "20 min",
    topics: ["Estimated Payments", "Penalty Avoidance", "Planning"],
  },
]

const templates = [
  {
    id: "income-statement",
    title: "Income Statement Template",
    description: "Professional P&L template with revenue categories, COGS, and expense tracking.",
    tier: "free",
    features: ["Revenue & expense categories", "Gross profit calculation", "Net income summary", "Monthly comparison"],
  },
  {
    id: "invoice-pro",
    title: "Professional Invoice Pack",
    description: "5 invoice templates for different billing scenarios. Hourly, project, retainer, and more.",
    tier: "pro",
    price: "$19",
    features: ["Hourly & project invoices", "Retainer billing template", "Late payment tracking", "Professional branding"],
  },
  {
    id: "tax-worksheet",
    title: "Tax Deduction Worksheet",
    description: "Comprehensive deduction tracker. Categorize and document every write-off throughout the year.",
    tier: "pro",
    price: "$15",
    features: ["All Schedule C categories", "Receipt tracker", "Mileage log", "Home office calculator"],
  },
  {
    id: "balance-sheet",
    title: "Balance Sheet & Cash Flow Bundle",
    description: "Monthly balance sheet and cash flow statement templates. See your financial health at a glance.",
    tier: "pro",
    price: "$19",
    features: ["Asset & liability tracking", "Cash flow forecasting", "Equity statement", "Monthly trending"],
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-brand-950 relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/images/hero-allisons.jpg')] bg-cover bg-center opacity-25" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">
              Accounting help that actually makes sense
            </p>
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Stop guessing about your finances. <br />
              <span className="text-brand-400">Start running your numbers.</span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 md:text-xl">
              Bookkeeping, tax prep, payroll, and business setup — taught in plain English
              by someone who actually worked in public accounting. Free courses, pro templates, and tools.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/learn" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white active:scale-[0.96] transition-transform hover:bg-brand-700 transition-colors">
                Start Learning Free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-transparent px-6 py-3 text-base font-semibold text-slate-200 active:scale-[0.96] transition-transform hover:bg-white/10 transition-colors">
                See Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="border-b bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "No accounting degree required", desc: "Plain English explanations. No jargon, no gatekeeping." },
              { title: "Built by a real CPA", desc: "Created by someone who's done public accounting and runs their own practice." },
              { title: "Grows with your business", desc: "From sole proprietor to 50 employees — we cover every stage." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 mb-3">What We Cover</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Everything you need to manage your business finances</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 rounded-xl border border-slate-200 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-600">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 mb-3">Free Courses</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Learn accounting on your terms</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 6).map((course) => (
              <Link key={course.id} href={`/learn`} className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    course.difficulty === "Beginner" ? "bg-green-100 text-green-700" :
                    course.difficulty === "Intermediate" ? "bg-amber-100 text-amber-700" :
                    "bg-red-100 text-red-700"
                  }`}>
                    {course.difficulty}
                  </span>
                </div>
                <h3 className="font-bold mb-2 group-hover:text-brand-700 transition-colors">{course.title}</h3>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">{course.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {course.topics.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/learn" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700">
              View all courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 mb-3">Templates</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Professional templates that make accounting easier</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((tpl) => (
              <div key={tpl.id} className="rounded-xl border border-slate-200 p-5">
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${tpl.tier === "free" ? "bg-green-100 text-green-700" : "bg-brand-100 text-brand-700"}`}>
                    {tpl.tier === "free" ? "Free" : tpl.price}
                  </span>
                </div>
                <h3 className="font-bold mb-1">{tpl.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{tpl.description}</p>
                <ul className="space-y-1">
                  {tpl.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-slate-500">
                      <CheckCircle className="h-3 w-3 mt-0.5 shrink-0 text-brand-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/templates" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700">
              View all templates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Empire-HQ Cross-Links */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-xl border border-slate-200 bg-white p-8">
            <h2 className="text-xl font-bold mb-4">Part of the Empire-HQ Portfolio</h2>
            <p className="text-sm text-slate-600 mb-6 max-w-2xl">
              Allison&apos;s Accounting Assistance connects with other Empire-HQ sites to give you a complete business toolkit.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { name: "Money Mastery", href: "#", desc: "Personal finance and investing strategy" },
                { name: "AI for SMB", href: "#", desc: "Automate bookkeeping and tax workflows" },
                { name: "PM101toPro", href: "#", desc: "Project scope and client management" },
              ].map((item) => (
                <a key={item.name} href={item.href} className="rounded-lg border border-slate-200 p-4 hover:border-brand-300 transition-colors">
                  <h3 className="font-bold text-sm mb-1">{item.name}</h3>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to take control of your finances?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Free courses to get you started. Pro templates when you&apos;re ready to level up.
            No jargon, no upsells — just clear accounting guidance.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white active:scale-[0.96] transition-transform hover:bg-brand-700 transition-colors"
          >
            See Plans & Pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
