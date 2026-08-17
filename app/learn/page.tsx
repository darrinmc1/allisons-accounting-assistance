import Link from "next/link"
import HumorBreak from "@/components/humor-break"
import { ArrowRight, BookOpen } from "lucide-react"

const courses = [
  {
    id: "bookkeeping-basics",
    title: "Bookkeeping Basics for Small Business",
    summary: "Ledgers, journals, charts of accounts — the fundamentals every business owner needs to know.",
    icon: "📒",
    difficulty: "Beginner",
    duration: "20 min",
    topics: ["Chart of Accounts", "Double-Entry", "Reconciliation", "Journal Entries"],
  },
  {
    id: "tax-deductions-guide",
    title: "The Small Business Tax Deduction Playbook",
    summary: "Every deduction you're entitled to and how to document it properly. No more leaving money on the table.",
    icon: "💰",
    difficulty: "Intermediate",
    duration: "30 min",
    topics: ["Home Office", "Vehicle", "Equipment", "Travel", "Meals"],
  },
  {
    id: "payroll-setup",
    title: "Setting Up Payroll for Your First Employee",
    summary: "From EIN to pay stubs — everything you need to hire and pay your first employee legally.",
    icon: "👥",
    difficulty: "Intermediate",
    duration: "25 min",
    topics: ["Payroll Taxes", "Withholding", "Forms W-2/1099", "State Compliance"],
  },
  {
    id: "business-structure",
    title: "LLC vs S-Corp vs Sole Proprietor",
    summary: "Choose the right entity structure for your business and avoid costly tax mistakes.",
    icon: "🏢",
    difficulty: "Beginner",
    duration: "15 min",
    topics: ["Entity Types", "Tax Implications", "Liability", "Formation"],
  },
  {
    id: "financial-statements",
    title: "Reading Your Financial Statements",
    summary: "Income statements, balance sheets, and cash flow — understand the numbers that drive your business.",
    icon: "📊",
    difficulty: "Beginner",
    duration: "20 min",
    topics: ["P&L", "Balance Sheet", "Cash Flow", "Ratios"],
  },
  {
    id: "quarterly-taxes",
    title: "Estimated Quarterly Taxes Made Easy",
    summary: "Never get hit with a penalty again. Learn to calculate, budget for, and pay quarterly estimated taxes.",
    icon: "📅",
    difficulty: "Intermediate",
    duration: "20 min",
    topics: ["Estimated Payments", "Penalty Avoidance", "Planning", "Form 1040-ES"],
  },
  {
    id: "invoice-and-billing",
    title: "Invoicing & Billing Best Practices",
    summary: "Get paid faster and track receivables like a pro. Systems and templates for professional billing.",
    icon: "📄",
    difficulty: "Beginner",
    duration: "15 min",
    topics: ["Invoice Structure", "Payment Terms", "Late Fees", "Collections"],
  },
  {
    id: "sales-tax-basics",
    title: "Sales Tax for Online Businesses",
    summary: "Nexus, rates, filing — navigate the confusing world of state sales tax requirements.",
    icon: "🧾",
    difficulty: "Advanced",
    duration: "25 min",
    topics: ["Nexus", "Registration", "Filing", "Exemptions"],
  },
  {
    id: "expense-tracking",
    title: "Expense Tracking That Doesn't Suck",
    summary: "Systems and tools for tracking every deductible expense without spending hours on bookkeeping.",
    icon: "📱",
    difficulty: "Beginner",
    duration: "15 min",
    topics: ["Categories", "Receipts", "Software", "Mileage"],
  },
]

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-amber-100 text-amber-700",
  Advanced: "bg-red-100 text-red-700",
}

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Learn</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Free accounting courses that make sense</h1>
            <p className="text-lg text-slate-600">
              No jargon, no gatekeeping. Practical lessons on bookkeeping, taxes, payroll, and running a real business.
              Written by a CPA who actually enjoys explaining this stuff.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/learn" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white active:scale-[0.96] transition-transform hover:bg-brand-700">
                Start with Bookkeeping <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/templates" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 active:scale-[0.96] transition-transform hover:bg-slate-50">
                Browse Templates
              </Link>
            </div>
          </div>
        </div>
      </section>
      <HumorBreak tag="general" />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <Link key={course.id} href={`/learn`} className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-md transition-all flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-lg">
                  {course.icon}
                </div>
                <div className="flex gap-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyColors[course.difficulty]}`}>
                    {course.difficulty}
                  </span>
                  <span className="text-xs text-slate-500 px-2 py-1 rounded-full bg-slate-100">
                    {course.duration}
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-brand-700 transition-colors">{course.title}</h3>
              <p className="text-sm text-slate-600 mb-3">{course.summary}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {course.topics.map((t) => (
                  <span key={t} className="text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-200">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
