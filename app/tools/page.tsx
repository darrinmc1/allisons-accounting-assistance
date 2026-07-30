import { Calculator, FileCheck, Receipt, DollarSign, Percent, FileSpreadsheet, ArrowRight } from "lucide-react"
import Link from "next/link"

const iconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="h-6 w-6" />,
  FileCheck: <FileCheck className="h-6 w-6" />,
  Receipt: <Receipt className="h-6 w-6" />,
  DollarSign: <DollarSign className="h-6 w-6" />,
  Percent: <Percent className="h-6 w-6" />,
  FileSpreadsheet: <FileSpreadsheet className="h-6 w-6" />,
}

const tools = [
  {
    id: "tax-calculator",
    title: "Estimated Tax Calculator",
    description: "Calculate your quarterly estimated tax payments. Includes federal, state, and self-employment tax estimates.",
    icon: "Calculator",
  },
  {
    id: "deduction-finder",
    title: "Deduction Finder",
    description: "Answer a few questions about your business and we'll tell you which deductions you might be missing.",
    icon: "FileCheck",
  },
  {
    id: "invoice-generator",
    title: "Invoice Generator",
    description: "Generate professional invoices with your branding. Auto-calculates totals, tax, and late fees.",
    icon: "Receipt",
  },
  {
    id: "hourly-rate-calc",
    title: "Hourly Rate Calculator",
    description: "Calculate your true hourly rate including overhead, taxes, and desired profit margin.",
    icon: "DollarSign",
  },
  {
    id: "markup-margin-calc",
    title: "Markup & Margin Calculator",
    description: "Convert between markup percentage and margin percentage. Know your numbers before you quote.",
    icon: "Percent",
  },
  {
    id: "depreciation-calc",
    title: "Depreciation Calculator",
    description: "Calculate Section 179, bonus depreciation, and MACRS for your business assets and equipment.",
    icon: "FileSpreadsheet",
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Tools</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Tools that take the math out of accounting</h1>
            <p className="text-lg text-slate-600">
              Calculators, finders, and generators that automate the number-crunching so you can focus on running your business.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div key={tool.id} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 mb-4">
                {iconMap[tool.icon] || <Calculator className="h-6 w-6" />}
              </div>
              <h3 className="font-bold text-lg mb-2">{tool.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{tool.description}</p>
              <button className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 active:scale-[0.96] transition-transform hover:bg-slate-50 hover:border-brand-300 transition-colors">
                Open Tool &rarr;
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h2 className="font-bold text-xl mb-3">Tools from across Empire-HQ</h2>
            <p className="text-sm text-slate-600 mb-4">These tools from our sister sites pair perfectly with Allison&apos;s Accounting:</p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              <a href="#" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-brand-300 transition-colors">
                <p className="font-bold text-sm">Money Mastery</p>
                <p className="text-xs text-slate-500">Tax bracket calculator, retirement projector</p>
              </a>
              <a href="#" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-brand-300 transition-colors">
                <p className="font-bold text-sm">AI for SMB</p>
                <p className="text-xs text-slate-500">Receipt scanner, expense classifier</p>
              </a>
              <a href="#" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-brand-300 transition-colors">
                <p className="font-bold text-sm">PM101toPro</p>
                <p className="text-xs text-slate-500">Budget tracker, invoice generator</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
