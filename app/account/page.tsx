import Link from "next/link"
import { auth } from "@clerk/nextjs/server"
import { getActiveEntitlementIds } from "@/lib/entitlements"
import { CHECKOUT_OFFERS } from "@/lib/offers"

const LABELS: Record<string, string> = {
  [CHECKOUT_OFFERS.early.entitlementId]: `Early Adopter (${CHECKOUT_OFFERS.early.priceLabel})`,
  [CHECKOUT_OFFERS.pro.entitlementId]: `Pro (${CHECKOUT_OFFERS.pro.priceLabel})`,
}

export const dynamic = "force-dynamic"

export default async function AccountPage({
  searchParams,
}: {
  searchParams: Promise<{ purchased?: string }>
}) {
  const { userId } = await auth()
  const params = await searchParams
  const purchased = params.purchased === "early" || params.purchased === "pro" ? params.purchased : null

  if (!userId) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-3">Account</h1>
        <p className="text-slate-600 mb-6">Sign in to see plan access for this account.</p>
        <Link href="/sign-in" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
          Sign in
        </Link>
      </div>
    )
  }

  const ids = await getActiveEntitlementIds(userId)

  return (
    <div className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-3">Account</h1>
      {purchased ? (
        <p className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          Checkout returned for {CHECKOUT_OFFERS[purchased].name}. Access shows here after the webhook confirms the subscription.
        </p>
      ) : null}
      {ids.length === 0 ? (
        <p className="text-slate-600">No active plan on this account.</p>
      ) : (
        <ul className="space-y-2">
          {ids.map((id) => (
            <li key={id} className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold">
              {LABELS[id] ?? id}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-8 text-sm">
        <Link href="/pricing" className="font-semibold text-brand-700 hover:text-brand-800">
          Back to pricing
        </Link>
      </p>
    </div>
  )
}
