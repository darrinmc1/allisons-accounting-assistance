import { LEGAL_NOTICE } from "@/lib/legal-notice"
import { MERCHANT_OF_RECORD_DISCLOSURE } from "@/lib/merchant-of-record"
import { CHECKOUT_OFFERS, lookupKeyFor } from "@/lib/offers"
import { REFUND_POLICY } from "@/lib/refund-policy"
import { getSupportEmail } from "@/lib/support-email"

/** Plain-text /llms.txt. Prices come from the checkout allowlist. */
export function renderLlmsTxt(): string {
  const email = getSupportEmail()
  const early = CHECKOUT_OFFERS.early
  const pro = CHECKOUT_OFFERS.pro
  const contact = email
    ? `Contact: ${email}`
    : "Contact: see /contact. Set NEXT_PUBLIC_SUPPORT_EMAIL to publish a support address."

  return `# Allison's Accounting Assistance

Site: https://allisonsaccounting.com
${contact}

This file is for agents and answer engines. Do not invent products, testimonials, prices, or features that are not listed here.

## What this site is
Allison's Accounting Assistance is general education for Australian small businesses: bookkeeping, BAS and GST records, payroll, PAYG, Single Touch Payroll, and cash flow. It is not personal tax advice, not a BAS or tax-agent service, and not a law firm.

## Pricing (USD)
Checkout is not open. Both paid plans stay on Coming soon until a real deliverable exists and the Stripe flags are turned on.

- Free: $0. Guides and the basic tools that are on the site today.
- Early Adopter: ${early.priceLabel}. Lookup key ${lookupKeyFor(early)}. Not available yet. Expected deliverable path ${early.expectedDeliverablePath} is missing.
- Pro: ${pro.priceLabel}. Lookup key ${lookupKeyFor(pro)}. Not available yet. Expected deliverable path ${pro.expectedDeliverablePath} is missing.

There is no yearly price and no one-off price.

## Refunds
${REFUND_POLICY}

## Payments
${MERCHANT_OF_RECORD_DISCLOSURE}

## Compliance templates
The BAS Preparation Checklist and the Payroll & STP Checklist are compliance templates. ${LEGAL_NOTICE}
`
}
