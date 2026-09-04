import { cn } from "@/lib/utils"

export function BrandMark({
  className,
  compact = false,
  tone = "light",
}: {
  className?: string
  compact?: boolean
  tone?: "light" | "dark"
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-8 w-8 shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="6" fill="#2563eb" />
        <rect x="7" y="4" width="18" height="24" rx="3" fill="#fff" />
        <rect x="9.5" y="6.5" width="13" height="7" rx="1.5" fill="#1d4ed8" />
        <rect x="11.5" y="8.3" width="9" height="1.6" rx="0.8" fill="#fff" />
        <rect x="11.5" y="10.8" width="6" height="1.6" rx="0.8" fill="#fff" />
        <rect x="9.5" y="16" width="5.5" height="4.5" rx="1" fill="#2563eb" />
        <rect x="17" y="16" width="5.5" height="4.5" rx="1" fill="#2563eb" />
        <rect x="9.5" y="21.5" width="5.5" height="4.5" rx="1" fill="#2563eb" />
        <rect x="17" y="21.5" width="5.5" height="4.5" rx="1" fill="#1d4ed8" />
      </svg>
      {!compact && (
        <span className="text-lg font-bold tracking-tight">
          Allison&apos;s
          <span className={tone === "dark" ? "text-brand-400" : "text-brand-600"}> Accounting</span>
        </span>
      )}
    </span>
  )
}
