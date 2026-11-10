/**
 * Catalog of paid plans shown on the site. Amounts are the approved USD
 * prices. Do not add or change them here.
 *
 * Both plans stay available: false. The repo has never contained a paid
 * deliverable (no pdf, zip, xlsx, csv, or docx in git history). Early Adopter
 * promises pro template packs and interactive tools. Pro promises advanced
 * features and AI tools on top of that. Neither has a file.
 */

export type CheckoutSku = "early" | "pro"

export interface CheckoutOffer {
  sku: CheckoutSku
  /** Stored on the Clerk user's publicMetadata.entitlements. */
  entitlementId: string
  /** Plan name shown on the account page. */
  name: string
  /** USD dollars. */
  priceUsd: number
  /** Button and page label, e.g. "$5/mo". */
  priceLabel: string
  /** False keeps the plan on Coming soon. */
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
    entitlementId: "early-adopter",
    name: "Allison's Early Adopter",
    priceUsd: 5,
    priceLabel: "$5/mo",
    available: false,
    expectedDeliverablePath: "products/early-adopter-template-pack/",
  },
  pro: {
    sku: "pro",
    entitlementId: "pro",
    name: "Allison's Pro",
    priceUsd: 10,
    priceLabel: "$10/mo",
    available: false,
    expectedDeliverablePath: "products/pro-tools/",
  },
}
