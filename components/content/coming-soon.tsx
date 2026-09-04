import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function ComingSoonPanel({
  kicker,
  title,
  description,
  notes,
  backHref,
  backLabel,
}: {
  kicker: string
  title: string
  description: string
  notes: string
  backHref: string
  backLabel: string
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">{kicker}</p>
          <p className="mb-3 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-800">
            Coming Soon
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="text-lg text-slate-600">{description}</p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="mb-2 text-lg font-bold">Not available yet</h2>
          <p className="text-sm leading-relaxed text-slate-600">{notes}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Written courses on Learn are available now. This route exists so catalog links do not 404.
          </p>
        </div>
        <Link
          href={backHref}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
      </div>
    </div>
  )
}
