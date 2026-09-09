/**
 * Cash-site payment gate.
 *
 * Waitlist NOW. Flip later with NEXT_PUBLIC_PAYMENTS_ENABLED=true
 * (or PAYMENTS_ENABLED=true). Do not delete Buy/Stripe paths — park them.
 */
export const PAYMENTS_WAITLIST_HREF = "/pricing#waitlist"

/** Parked Stripe Checkout entry. Wire the route when the flag flips on. */
export const STRIPE_CHECKOUT_PATH = "/api/checkout"

export function paymentsEnabled(): boolean {
  const raw =
    process.env.NEXT_PUBLIC_PAYMENTS_ENABLED ?? process.env.PAYMENTS_ENABLED ?? ""
  const value = raw.trim().toLowerCase()
  return value === "1" || value === "true" || value === "on" || value === "yes"
}

export function offerAvailability(): string {
  return paymentsEnabled()
    ? "https://schema.org/InStock"
    : "https://schema.org/PreOrder"
}
