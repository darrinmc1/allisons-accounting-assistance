/**
 * Server allowlist of Checkout SKUs. The client may send a sku. It must never
 * send a Stripe price id. Lookup keys are built here as
 * `${STRIPE_SITE_KEY}_${suffix}` and resolved with prices.list({ lookup_keys }).
 *
 * Amounts are the approved USD prices. Do not add or change them here.
 * Default lookup keys: allisons_early_m_usd5, allisons_pro_m_usd10.
 *
 * Both plans stay available: false. The repo has never contained a paid
 * deliverable (no pdf, zip, xlsx, csv, or docx in git history). Early Adopter
 * promises pro template packs and interactive tools. Pro promises advanced
 * features and AI tools on top of that. Neither has a file.
 */

export const STATEMENT_DESCRIPTOR_SUFFIX = "ALLISONS"
export const CHECKOUT_CURRENCY = "usd"

export type CheckoutSku = "early" | "pro"
export type CheckoutMode = "payment" | "subscription"

export interface CheckoutOffer {
  sku: CheckoutSku
  /** Appended after `${siteKey}_`. */
  lookupKeySuffix: string
  mode: CheckoutMode
  /** Stored on the Clerk user's publicMetadata.entitlements. */
  entitlementId: string
  /** Checkout and statement description. */
  name: string
  /** USD dollars. Stripe unit_amount must equal this × 100, currency usd. */
  priceUsd: number
  /** Button and page label, e.g. "$5/mo". */
  priceLabel: string
  /**
   * Per-product gate. False keeps Buy as "Coming soon" and POST /api/checkout
   * returns 503 even when both Stripe flags are true.
   */
  available: boolean
  /**
   * Where a real deliverable would live. Nothing is at this path.
   * Paid files must not be placed under /public.
   */
  expectedDeliverablePath: string
}

export const CHECKOUT_OFFERS: Record<CheckoutSku, CheckoutOffer> = {
  early: {
    sku: "early",
    lookupKeySuffix: "early_m_usd5",
    mode: "subscription",
    entitlementId: "early-adopter",
    name: "Allison's Early Adopter",
    priceUsd: 5,
    priceLabel: "$5/mo",
    available: false,
    expectedDeliverablePath: "products/early-adopter-template-pack/",
  },
  pro: {
    sku: "pro",
    lookupKeySuffix: "pro_m_usd10",
    mode: "subscription",
    entitlementId: "pro",
    name: "Allison's Pro",
    priceUsd: 10,
    priceLabel: "$10/mo",
    available: false,
    expectedDeliverablePath: "products/pro-tools/",
  },
}

export function offerFromSku(sku: unknown): CheckoutOffer | null {
  if (sku === "early" || sku === "pro") return CHECKOUT_OFFERS[sku]
  return null
}

/** Site prefix for lookup keys. Not a secret. Defaults to allisons. */
export function stripeSiteKey(): string {
  const key = process.env.STRIPE_SITE_KEY?.trim()
  if (key && /^[a-z0-9_-]+$/i.test(key)) return key
  return "allisons"
}

export function lookupKeyFor(offer: CheckoutOffer, site = stripeSiteKey()): string {
  return `${site}_${offer.lookupKeySuffix}`
}

/**
 * Client flag. Inlined at build time, so changing it needs a redeploy.
 * Anything other than the string "true" (including unset) leaves Buy disabled.
 */
export function publicStripeEnabled(): boolean {
  return process.env.NEXT_PUBLIC_STRIPE_ENABLED === "true"
}

/** True only when the client flag is on and this product is marked available. */
export function offerIsPurchasable(offer: CheckoutOffer): boolean {
  return publicStripeEnabled() && offer.available
}
