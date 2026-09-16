import { CheckCircle, Download, FileText, Receipt, Calculator, DollarSign, Users, FileSpreadsheet } from "lucide-react"

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
    id: "income-expense-tracker",
    title: "Income & Expense Tracker",
    description: "A simple workbook for recording business income and expenses throughout the year.",
    icon: "FileSpreadsheet",
    features: ["Income categories", "Expense categories", "Monthly totals", "Notes for source documents", "Year-to-date summary"],
  },
  {
    id: "bas-prep-checklist",
    title: "BAS Preparation Checklist",
    description: "A practical checklist for gathering records and questions before a BAS is prepared or lodged.",
    icon: "Receipt",
    features: ["Sales records", "Purchase records", "GST review prompts", "Payroll/PAYG prompts", "Questions for your adviser"],
  },
  {
    id: "cash-flow-forecast",
    title: "Cash Flow Forecast",
    description: "Map expected receipts and payments so payroll, tax and supplier obligations are easier to see coming.",
    icon: "DollarSign",
    features: ["Opening balance", "Expected receipts", "Supplier payments", "Payroll and tax lines", "Closing cash estimate"],
  },
  {
    id: "payroll-checklist",
    title: "Payroll & STP Checklist",
    description: "A workflow checklist for payroll records, Single Touch Payroll reporting and follow-up tasks.",
    icon: "Users",
    features: ["Employee setup prompts", "Pay-run checklist", "STP reporting prompts", "PAYG withholding checks", "Super follow-up"],
  },
  {
    id: "month-end-checklist",
    title: "Month-End Bookkeeping Checklist",
    description: "A repeatable month-end routine for keeping the books cleaner before BAS or year-end work begins.",
    icon: "Calculator",
    features: ["Bank reconciliation", "Outstanding invoices", "Supplier bills", "Payroll review", "Document filing"],
  },
  {
    id: "invoice-template",
    title: "Australian Invoice Template",
    description: "A simple editable invoice layout with space for ABN, GST treatment, payment terms and line items.",
    icon: "FileText",
    features: ["ABN field", "GST field", "Payment terms", "Line items", "Customer details"],
  },
]

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Australian small-business toolkit</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Useful accounting templates without pretending they replace an adviser</h1>
            <p className="text-lg text-slate-600">Practical spreadsheets and checklists to organise records, cash flow, payroll and BAS preparation. These are educational/admin helpers, not tax or BAS advice.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Free templates</h2>
          <p className="text-sm text-slate-500">No checkout. No fake premium tier. Build the useful library first.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((tpl) => (
            <div key={tpl.id} className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700">{iconMap[tpl.icon] || <Download className="h-5 w-5" />}</div>
                <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded">FREE</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{tpl.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{tpl.description}</p>
              <ul className="space-y-2 mb-6">
                {tpl.features.map((f) => <li key={f} className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-green-500" />{f}</li>)}
              </ul>
              <div className="mt-auto">
                <button className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">Download / preview</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-12">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-950">
          <strong>Important:</strong> Templates help organise information. They do not determine your GST treatment, tax position, employee status, super obligations or what must be lodged. Use current ATO guidance and a registered adviser where appropriate.
        </div>
      </section>
    </div>
  )
}
