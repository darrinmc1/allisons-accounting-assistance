import { LegalNotice } from "@/components/legal-notice"
import { MerchantOfRecordDisclosure } from "@/components/merchant-of-record-disclosure"
import { NotifyForm } from "@/components/notify-form"
import { CHECKOUT_OFFERS, type CheckoutSku } from "@/lib/offers"
import { REFUND_POLICY } from "@/lib/refund-policy"
import { getSupportEmail } from "@/lib/support-email"

/**
 * Paid plans are not for sale. The control stays the disabled "Coming soon"
 * label, with the waitlist form underneath.
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

  return (
    <div className="w-full">
      <button
        type="button"
        disabled
        aria-disabled="true"
        className="w-full cursor-not-allowed rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-center text-sm font-semibold text-slate-500"
      >
        Coming soon: {offer.priceLabel}
      </button>

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

      <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="mb-1 text-sm font-semibold text-slate-900">Notify me when checkout opens</p>
        <p className="mb-3 text-sm text-slate-600">
          This plan is not ready to ship yet. Join the list and we&apos;ll email you when it is.
        </p>
        <NotifyForm source={`waitlist-${sku}`} />
      </div>
    </div>
  )
}
