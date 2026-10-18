import { LEGAL_NOTICE } from "@/lib/legal-notice"

export function LegalNotice({
  className = "text-xs leading-relaxed text-slate-600",
}: {
  className?: string
}) {
  return <p className={className}>{LEGAL_NOTICE}</p>
}
