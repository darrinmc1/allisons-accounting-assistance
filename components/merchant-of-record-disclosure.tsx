type MerchantOfRecordDisclosureProps = {
  className?: string
}

/** Exact MoR disclosure copy for Empire HQ / TTPN billing. */
export const MERCHANT_OF_RECORD_COPY =
  "Part of the Empire HQ network. Payments are charged by TTPN Pty Ltd (statement may show as TTPN or TTPN* plus the product name)."

export default function MerchantOfRecordDisclosure({
  className = "text-sm text-slate-500",
}: MerchantOfRecordDisclosureProps) {
  return <p className={className}>{MERCHANT_OF_RECORD_COPY}</p>
}
