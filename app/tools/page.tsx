import type { ReactNode } from "react"
import { Calculator, FileCheck, Receipt, DollarSign, Percent, FileSpreadsheet } from "lucide-react"
import Link from "next/link"
import { tools } from "@/lib/content/tools"

const iconMap: Record<string, ReactNode> = {
  Calculator: <Calculator className="h-6 w-6" />,
  FileCheck: <FileCheck className="h-6 w-6" />,
  Receipt: <Receipt className="h-6 w-6" />,
  DollarSign: <DollarSign className="h-6 w-6" />,
  Percent: <Percent className="h-6 w-6" />,
  FileSpreadsheet: <FileSpreadsheet className="h-6 w-6" />,
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Tools</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Tools catalog</h1>
            <p className="text-lg text-slate-600">
              {tools.length} calculators are listed. None of them is live. Each card opens a Coming Soon page so the link does not 404. No charges apply.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div key={tool.id} className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                {iconMap[tool.icon] || <Calculator className="h-6 w-6" />}
              </div>
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold">{tool.title}</h3>
                <span className="shrink-0 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-bold uppercase text-amber-800">Coming Soon</span>
              </div>
              <p className="mb-4 text-sm text-slate-600">{tool.description}</p>
              <Link
                href={`/tools/${tool.id}`}
                className="block w-full rounded-lg border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:bg-slate-50"
              >
                View status
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h2 className="mb-3 text-xl font-bold">Tools from across Empire-HQ</h2>
            <p className="mb-4 text-sm text-slate-600">Sister sites in the same portfolio:</p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              <a href="https://moneymastery.com" className="rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-brand-300">
                <p className="text-sm font-bold">Money Mastery</p>
                <p className="text-xs text-slate-500">Personal finance site</p>
              </a>
              <a href="https://aiforsmb.com" className="rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-brand-300">
                <p className="text-sm font-bold">AI for SMB</p>
                <p className="text-xs text-slate-500">Operations tools</p>
              </a>
              <a href="https://pm101topro.com" className="rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-brand-300">
                <p className="text-sm font-bold">PM101toPro</p>
                <p className="text-xs text-slate-500">Project budgeting</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
