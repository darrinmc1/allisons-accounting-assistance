import type { Metadata } from "next"
import ComingSoonSignup from "@/components/coming-soon-signup"

export const metadata: Metadata = {
  title: "Coming soon — Allison's Accounting Assistance",
  description: "Paid plans and template purchases are not available yet. Join the list to be notified.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b bg-white py-16">
        <div className="mx-auto max-w-xl px-4 md:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Coming soon</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Coming soon</h1>
          <p className="text-lg text-slate-600 mb-8">
            Join the list. Paid plans and purchases are not available yet. We will email you when they are.
          </p>
          <ComingSoonSignup />
        </div>
      </section>
    </div>
  )
}
