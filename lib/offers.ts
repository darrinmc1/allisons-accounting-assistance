/**
 * Catalog of paid plans shown on the site. Prices are not published until
 * an account exists to charge them. Do not add price fields here.
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
    available: false,
    expectedDeliverablePath: "products/early-adopter-template-pack/",
  },
  pro: {
    sku: "pro",
    entitlementId: "pro",
    name: "Allison's Pro",
    available: false,
    expectedDeliverablePath: "products/pro-tools/",
  },
}
