import Link from "next/link"
import { CheckCircle, ArrowRight, Download, FileText, Receipt, Calculator, DollarSign, Users, FileSpreadsheet } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="h-6 w-6" />,
  Receipt: <Receipt className="h-6 w-6" />,
  Calculator: <Calculator className="h-6 w-6" />,
  DollarSign: <DollarSign className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  FileSpreadsheet: <FileSpreadsheet className="h-6 w-6" />,
}

const templates = [
  {
    id: "income-statement",
    title: "Income Statement Template",
    description: "Professional P&L template with revenue categories, COGS, and expense tracking.",
    icon: "FileText",
    price: "Free",
    tier: "free" as const,
    features: ["Revenue & expense categories", "Gross profit calculation", "Net income summary", "Monthly comparison columns", "Year-to-date totals"],
  },
  {
    id: "balance-sheet",
    title: "Balance Sheet Template",
    description: "Track assets, liabilities, and equity with this clean, professional balance sheet.",
    icon: "FileSpreadsheet",
    price: "Free",
    tier: "free" as const,
    features: ["Asset categorization", "Liability tracking", "Equity section", "Auto-calculating totals", "Monthly comparison"],
  },
  {
    id: "cash-flow",
    title: "Cash Flow Statement Template",
    description: "Understand where your cash is coming from and going to. Operating, investing, and financing sections.",
    icon: "DollarSign",
    price: "Free",
    tier: "free" as const,
    features: ["Operating activities", "Investing activities", "Financing activities", "Net cash change", "Beginning & ending balance"],
  },
  {
    id: "invoice-pro",
    title: "Professional Invoice Pack",
    description: "5 invoice templates for different billing scenarios. Hourly, project, retainer, and more.",
    icon: "Receipt",
    price: "$19",
    tier: "pro" as const,
    features: ["Hourly & project invoices", "Retainer billing template", "Late payment tracking", "Professional branding", "Editable DOCX format"],
  },
  {
    id: "tax-worksheet",
    title: "Tax Deduction Worksheet",
    description: "Comprehensive deduction tracker. Categorize and document every write-off throughout the year.",
    icon: "Calculator",
    price: "$15",
    tier: "pro" as const,
    features: ["All Schedule C categories", "Receipt tracker with notes", "Mileage log with rates", "Home office calculator", "Year-end summary report"],
  },
  {
    id: "payroll-sheets",
    title: "Payroll Register Template",
    description: "Track employee pay, withholdings, and employer taxes. Perfect for small teams.",
    icon: "Users",
    price: "$19",
    tier: "pro" as const,
    features: ["Employee pay tracking", "Tax withholding calculator", "Employer tax tracking", "Pay period summaries", "Year-end W-2 reconciliation"],
  },
  {
    id: "budget-template",
    title: "Business Budget Planner",
    description: "Plan and track your business budget with monthly projections and actuals comparison.",
    icon: "FileSpreadsheet",
    price: "$12",
    tier: "pro" as const,
    features: ["Revenue projections", "Expense categories", "Actual vs budget tracking", "Variance analysis", "Annual summary"],
  },
  {
    id: "chart-of-accounts",
    title: "Chart of Accounts Guide",
    description: "Pre-built chart of accounts for 10 common business types. Customize and import into any accounting software.",
    icon: "FileText",
    price: "$9",
    tier: "pro" as const,
    features: ["10 industry-specific COAs", "Account numbering system", "Standard categories", "QuickBooks/Xero ready", "Customization guide"],
  },
]

export default function TemplatesPage() {
  const freeTemplates = templates.filter((t) => t.tier === "free")
  const proTemplates = templates.filter((t) => t.tier === "pro")

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Templates</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Professional templates that make accounting easier</h1>
            <p className="text-lg text-slate-600">
              Every template is built by a CPA and tested in real accounting workflows. Download, customize, and get back to running your business.
            </p>
          </div>
        </div>
      </section>

      {/* Free Templates */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Free Templates</h2>
          <p className="text-sm text-slate-500">Get started with zero investment.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {freeTemplates.map((tpl) => (
            <div key={tpl.id} className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700">
                  {iconMap[tpl.icon] || <Download className="h-5 w-5" />}
                </div>
                <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded">FREE</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{tpl.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{tpl.description}</p>
              <ul className="space-y-2 mb-6">
                {tpl.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <button className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 active:scale-[0.96] transition-transform hover:bg-slate-50 transition-colors">
                  Download Free
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pro Templates */}
      <section className="bg-white border-t border-b py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold">Pro Templates</h2>
              <span className="text-xs font-bold bg-brand-100 text-brand-700 px-2 py-1 rounded">PRO</span>
            </div>
            <p className="text-sm text-slate-500">Everything you need to manage your business finances like a pro.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proTemplates.map((tpl) => (
              <div key={tpl.id} className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col hover:border-brand-300 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                    {iconMap[tpl.icon] || <FileText className="h-5 w-5" />}
                  </div>
                  <span className="text-sm font-bold text-brand-700">{tpl.price}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{tpl.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{tpl.description}</p>
                <ul className="space-y-2 mb-6">
                  {tpl.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-brand-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <button className="flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white w-full active:scale-[0.96] transition-transform hover:bg-brand-700 transition-colors">
                    Buy Now - {tpl.price} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="rounded-xl bg-slate-100 p-6">
          <p className="text-sm text-slate-600">
            <strong className="text-slate-900">Need help with the tax side?</strong>{' '}
            Pair these templates with <a href="#" className="text-brand-600 hover:text-brand-700 font-semibold">Money Mastery</a> for financial planning,{' '}
            <a href="#" className="text-brand-600 hover:text-brand-700 font-semibold">AI for SMB</a> for automated bookkeeping, and{' '}
            <a href="#" className="text-brand-600 hover:text-brand-700 font-semibold">PM101toPro</a> for project budgeting.
          </p>
        </div>
      </section>
    </div>
  )
}
