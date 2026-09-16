import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Early access</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">No paid pricing until checkout is actually ready</h1>
          <p className="text-lg text-slate-600">
            Allison&apos;s Accounting Assistance is focused on building a useful Australian curriculum and working templates first. Paid prices will be published only after billing is live and tested.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700 mb-2">Available now</p>
            <h2 className="text-2xl font-bold mb-4">Free learning and tools</h2>
            <ul className="space-y-2 text-sm text-slate-700 mb-6">
              <li>✓ Australian bookkeeping guides</li>
              <li>✓ BAS and GST fundamentals</li>
              <li>✓ Payroll, STP and PAYG explainers</li>
              <li>✓ Free spreadsheet templates</li>
              <li>✓ Cash-flow and record-keeping helpers</li>
            </ul>
            <Link href="/learn" className="block text-center rounded-lg border border-green-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-green-100">Start learning free</Link>
          </div>

          <div className="rounded-xl border border-brand-200 bg-brand-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700 mb-2">Coming later</p>
            <h2 className="text-2xl font-bold mb-4">Expanded toolkit</h2>
            <ul className="space-y-2 text-sm text-slate-700 mb-6">
              <li>✓ More downloadable spreadsheets</li>
              <li>✓ Additional Australian workflow checklists</li>
              <li>✓ Deeper learning modules</li>
              <li>✓ Paid access only once checkout works</li>
            </ul>
            <Link href="/contact" className="block text-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">Register interest</Link>
          </div>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 mb-8">
          <h2 className="font-bold text-lg mb-2">A note on professional advice</h2>
          <p className="text-sm text-slate-700">This site provides general educational information and admin tools. Personal tax advice, BAS services and lodgements may require a registered tax or BAS agent depending on the work involved.</p>
        </div>
      </div>
    </div>
  )
}
