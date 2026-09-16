import Link from "next/link"
import { ArrowRight, BookOpen, Receipt, Briefcase, Users, Calculator, FileText, CheckCircle } from "lucide-react"

const features = [
  {
    title: "Bookkeeping without the fog",
    description: "Track income and expenses, reconcile accounts, organise records and understand the reports your business relies on.",
    icon: <BookOpen className="h-8 w-8" />,
  },
  {
    title: "BAS, GST and record keeping",
    description: "Plain-English education around Australian GST, business activity statements and the records you need to keep organised.",
    icon: <Receipt className="h-8 w-8" />,
  },
  {
    title: "Payroll, PAYG and super",
    description: "Understand the workflow around payroll, PAYG withholding, Single Touch Payroll and employer super obligations before you hand the final work to your accounting or payroll system.",
    icon: <Users className="h-8 w-8" />,
  },
  {
    title: "Business setup and structure",
    description: "Learn the practical differences between common Australian business structures and the records each structure needs.",
    icon: <Briefcase className="h-8 w-8" />,
  },
]

const courses = [
  {
    title: "Bookkeeping Basics for Australian Small Business",
    summary: "Charts of accounts, reconciliations, source documents and month-end habits in plain English.",
    difficulty: "Beginner",
    topics: ["Bookkeeping", "Reconciliation", "Records"],
  },
  {
    title: "BAS & GST Fundamentals",
    summary: "Understand the language around GST and BAS so you know what your software and adviser are asking for.",
    difficulty: "Beginner",
    topics: ["GST", "BAS", "ATO"],
  },
  {
    title: "Payroll, STP & PAYG Workflow",
    summary: "A practical overview of paying employees, PAYG withholding, Single Touch Payroll and employer record keeping.",
    difficulty: "Intermediate",
    topics: ["Payroll", "STP", "PAYG"],
  },
  {
    title: "Cash Flow for Small Business",
    summary: "Build a simple cash-flow view so tax, payroll and supplier obligations do not arrive as surprises.",
    difficulty: "Beginner",
    topics: ["Cash Flow", "Budgeting", "Forecasting"],
  },
]

const templates = [
  {
    title: "Income & Expense Tracker",
    description: "A simple workbook for categorising business income and expenses throughout the year.",
    status: "Free",
  },
  {
    title: "BAS Preparation Checklist",
    description: "A pre-lodgement checklist to help gather records and questions before you or your registered adviser prepare a BAS.",
    status: "Free",
  },
  {
    title: "Cash Flow Forecast",
    description: "Plan expected receipts, supplier payments, payroll, tax and other cash movements month by month.",
    status: "Free",
  },
]

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-brand-950 relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/images/hero-allisons.jpg')] bg-cover bg-center opacity-20" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">Accounting tools for Australian small business</p>
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Understand the numbers before they become a problem.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 md:text-xl">
              Practical Australian bookkeeping education, BAS and GST checklists, payroll explainers and spreadsheet tools — written for business owners who want to understand what is happening before they speak to their bookkeeper or accountant.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/learn" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700 transition-colors">Start learning free <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/templates" className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-base font-semibold text-slate-200 hover:bg-white/10 transition-colors">Browse tools & templates</Link>
            </div>
            <p className="text-xs text-slate-400 max-w-2xl">General educational information only. Tax, BAS and accounting obligations depend on your circumstances; use a registered tax or BAS agent where professional advice or lodgement services are required.</p>
          </div>
        </div>
      </section>

      <section className="border-b bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Australian terminology", desc: "ATO, BAS, GST, PAYG, STP and super — not US tax forms copied into an Australian product." },
              { title: "Practical first", desc: "Checklists and spreadsheets designed around the records small businesses actually need to organise." },
              { title: "Know when to escalate", desc: "Education helps you ask better questions; registered advisers handle personalised advice and regulated services." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6"><h3 className="font-bold text-lg mb-2">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 mb-3">What we cover</p><h2 className="text-3xl font-bold tracking-tight md:text-4xl">The financial admin behind a small business</h2></div>
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 rounded-xl border border-slate-200 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">{f.icon}</div>
                <div><h3 className="font-bold text-lg mb-1">{f.title}</h3><p className="text-sm text-slate-600">{f.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 mb-3">Free learning</p><h2 className="text-3xl font-bold tracking-tight md:text-4xl">Start with the Australian basics</h2></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <Link key={course.title} href="/learn" className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700 mb-4"><BookOpen className="h-5 w-5" /></div>
                <p className="text-xs font-medium text-brand-700 mb-2">{course.difficulty}</p>
                <h3 className="font-bold mb-2 group-hover:text-brand-700">{course.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{course.summary}</p>
                <div className="flex flex-wrap gap-1">{course.topics.map((t) => <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{t}</span>)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 mb-3">Templates</p><h2 className="text-3xl font-bold tracking-tight md:text-4xl">Useful files before fancy subscriptions</h2></div>
          <div className="grid gap-4 md:grid-cols-3">
            {templates.map((tpl) => (
              <div key={tpl.title} className="rounded-xl border border-slate-200 p-5">
                <div className="flex items-start justify-between mb-3"><FileText className="h-6 w-6 text-brand-600" /><span className="text-xs font-bold px-2 py-1 rounded bg-green-100 text-green-700">{tpl.status}</span></div>
                <h3 className="font-bold mb-1">{tpl.title}</h3><p className="text-sm text-slate-600">{tpl.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center"><Link href="/templates" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700">Browse all tools <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <Calculator className="h-10 w-10 mx-auto text-brand-600 mb-4" />
          <h2 className="text-3xl font-bold tracking-tight mb-4">Build the toolkit first. Add paid access later.</h2>
          <p className="text-lg text-slate-600 mb-8">The current focus is useful Australian content and working tools. Paid pricing will only be published when checkout is live and tested.</p>
          <Link href="/learn" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white hover:bg-brand-700">Start with the free guides <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  )
}
