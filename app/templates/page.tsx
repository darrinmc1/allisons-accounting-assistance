import type { ReactNode } from "react"
import Link from "next/link"
import { CheckCircle, Download, FileText, Receipt, Calculator, DollarSign, Users, FileSpreadsheet } from "lucide-react"
import { templates } from "@/lib/content/templates"

const iconMap: Record<string, ReactNode> = {
  FileText: <FileText className="h-6 w-6" />,
  Receipt: <Receipt className="h-6 w-6" />,
  Calculator: <Calculator className="h-6 w-6" />,
  DollarSign: <DollarSign className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  FileSpreadsheet: <FileSpreadsheet className="h-6 w-6" />,
}

export default function TemplatesPage() {
  const freeTemplates = templates.filter((t) => t.tier === "free")
  const proTemplates = templates.filter((t) => t.tier === "pro")

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Templates</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Template catalog</h1>
            <p className="text-lg text-slate-600">
              {templates.length} listings with stable IDs. No files are attached yet, and there is no checkout on this branch. Every card opens a Coming Soon page instead of a 404 download.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-bold">Free Templates</h2>
          <p className="text-sm text-slate-500">{freeTemplates.length} listed · files Coming Soon</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {freeTemplates.map((tpl) => (
            <div key={tpl.id} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700">
                  {iconMap[tpl.icon] || <Download className="h-5 w-5" />}
                </div>
                <span className="rounded bg-amber-50 px-2 py-1 text-xs font-bold uppercase text-amber-800">Coming Soon</span>
              </div>
              <h3 className="mb-2 text-lg font-bold">{tpl.title}</h3>
              <p className="mb-4 text-sm text-slate-600">{tpl.description}</p>
              <ul className="mb-6 space-y-2">
                {tpl.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link
                  href={`/templates/${tpl.id}`}
                  className="block w-full rounded-lg border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  View status
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-t bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-3">
              <h2 className="text-2xl font-bold">Pro Templates</h2>
              <span className="rounded bg-brand-100 px-2 py-1 text-xs font-bold text-brand-700">PRO</span>
            </div>
            <p className="text-sm text-slate-500">
              {proTemplates.length} listed · catalog prices unchanged · no Stripe and no Buy Now
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proTemplates.map((tpl) => (
              <div key={tpl.id} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-sm">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                    {iconMap[tpl.icon] || <FileText className="h-5 w-5" />}
                  </div>
                  <span className="text-sm font-bold text-slate-500">{tpl.price} · Coming Soon</span>
                </div>
                <h3 className="mb-2 text-lg font-bold">{tpl.title}</h3>
                <p className="mb-4 text-sm text-slate-600">{tpl.description}</p>
                <ul className="mb-6 space-y-2">
                  {tpl.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link
                    href={`/templates/${tpl.id}`}
                    className="flex w-full items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    View status
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="rounded-xl bg-slate-100 p-6">
          <p className="text-sm text-slate-600">
            <strong className="text-slate-900">Need the written side first?</strong>{" "}
            Start with{" "}
            <Link href="/learn/bookkeeping-basics" className="font-semibold text-brand-600 hover:text-brand-700">
              Bookkeeping Basics
            </Link>
            . Sister sites:{" "}
            <a href="https://moneymastery.com" className="font-semibold text-brand-600 hover:text-brand-700">
              Money Mastery
            </a>
            ,{" "}
            <a href="https://aiforsmb.com" className="font-semibold text-brand-600 hover:text-brand-700">
              AI for SMB
            </a>
            , and{" "}
            <a href="https://pm101topro.com" className="font-semibold text-brand-600 hover:text-brand-700">
              PM101toPro
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
