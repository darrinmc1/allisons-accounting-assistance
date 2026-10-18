const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Address already published on /terms and /contact. Env overrides it. */
const PUBLISHED_FALLBACK = "hello@allisonsaccounting.com"

function isSafeEmail(value: string): boolean {
  if (!EMAIL_RE.test(value)) return false
  const domain = value.split("@")[1]?.toLowerCase() ?? ""
  if (
    domain === "example.com" ||
    domain === "example.org" ||
    domain === "example.net" ||
    domain.endsWith(".example.com")
  ) {
    return false
  }
  return true
}

/**
 * Public support address. NEXT_PUBLIC_SUPPORT_EMAIL wins when it is a real
 * address. Otherwise the address already printed on /terms is the fallback.
 * Placeholder domains such as example.com are never shown.
 */
export function getSupportEmail(): string | null {
  const fromEnv = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim()
  if (fromEnv && isSafeEmail(fromEnv)) return fromEnv
  return isSafeEmail(PUBLISHED_FALLBACK) ? PUBLISHED_FALLBACK : null
}
