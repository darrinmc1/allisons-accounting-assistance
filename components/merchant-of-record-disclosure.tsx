import { MERCHANT_OF_RECORD_DISCLOSURE } from "@/lib/merchant-of-record"

type MerchantOfRecordDisclosureProps = {
  className?: string
}

/** Exact MoR disclosure copy for Empire HQ / TTPN billing. */
export function MerchantOfRecordDisclosure({
  className = "text-sm text-slate-500",
}: MerchantOfRecordDisclosureProps) {
  return <p className={className}>{MERCHANT_OF_RECORD_DISCLOSURE}</p>
}

export default MerchantOfRecordDisclosure
