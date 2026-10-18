"use client"

import { useState } from "react"
import { LegalNotice } from "@/components/legal-notice"
import { MerchantOfRecordDisclosure } from "@/components/merchant-of-record-disclosure"
import { NotifyForm } from "@/components/notify-form"
import { CHECKOUT_OFFERS, offerIsPurchasable, type CheckoutSku } from "@/lib/offers"
import { REFUND_POLICY } from "@/lib/refund-policy"
import { getSupportEmail } from "@/lib/support-email"

/**
 * Buy stays a disabled "Coming soon: $…" control, and never calls
 * /api/checkout, unless NEXT_PUBLIC_STRIPE_ENABLED is "true" AND the offer's
 * available flag is true. The server flag STRIPE_ENABLED is a separate gate.
 */
export function BuyButton({
  sku,
  legalNotice = false,
}: {
  sku: CheckoutSku
  legalNotice?: boolean
}) {
  const offer = CHECKOUT_OFFERS[sku]
  const supportEmail = getSupportEmail()
  const onSale = offerIsPurchasable(offer)

  return (
    <div className="w-full">
      {onSale ? (
        <EnabledBuy sku={sku} label={`Buy — ${offer.priceLabel}`} />
      ) : (
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="w-full cursor-not-allowed rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-center text-sm font-semibold text-slate-500"
        >
          Coming soon: {offer.priceLabel}
        </button>
      )}

      <MerchantOfRecordDisclosure className="mt-3 text-xs leading-relaxed text-slate-500" />
      <p className="mt-2 text-xs leading-relaxed text-slate-500">{REFUND_POLICY}</p>
      {legalNotice ? <LegalNotice className="mt-2 text-xs leading-relaxed text-slate-600" /> : null}

      {supportEmail ? (
        <p className="mt-2 text-xs text-slate-500">
          Questions about a purchase?{" "}
          <a href={`mailto:${supportEmail}`} className="font-semibold text-brand-700 hover:text-brand-800">
            {supportEmail}
          </a>
        </p>
      ) : null}

      {onSale ? null : (
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="mb-1 text-sm font-semibold text-slate-900">Notify me when checkout opens</p>
          <p className="mb-3 text-sm text-slate-600">
            This plan is not ready to ship yet. Join the list and we&apos;ll email you when it is.
          </p>
          <NotifyForm source={`waitlist-${sku}`} />
        </div>
      )}
    </div>
  )
}

function EnabledBuy({ sku, label }: { sku: CheckoutSku; label: string }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onBuy() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sku }),
      })
      if (res.status === 401) {
        const next = encodeURIComponent(window.location.pathname)
        window.location.href = `/sign-in?redirect_url=${next}`
        return
      }
      const data = (await res.json().catch(() => null)) as { url?: string; error?: string } | null
      if (res.ok && data?.url) {
        window.location.href = data.url
        return
      }
      setError(data?.error ?? "Checkout is not available right now.")
      setLoading(false)
    } catch {
      setError("Checkout is not available right now.")
      setLoading(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={onBuy}
        disabled={loading}
        className="w-full rounded-lg bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
      >
        {loading ? "Redirecting…" : label}
      </button>
      {error ? <p className="mt-2 text-xs text-red-600">{error}</p> : null}
    </>
  )
}
