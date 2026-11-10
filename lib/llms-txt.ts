import { LEGAL_NOTICE } from "@/lib/legal-notice"
import { MERCHANT_OF_RECORD_DISCLOSURE } from "@/lib/merchant-of-record"
import { CHECKOUT_OFFERS } from "@/lib/offers"
import { REFUND_POLICY } from "@/lib/refund-policy"
import { getSupportEmail } from "@/lib/support-email"

/** Plain-text /llms.txt. Prices are not published. */
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

## Pricing
Checkout is not open. Prices are not published. Both paid plans stay on Coming soon until a real deliverable exists.

- Free: guides and the basic tools that are on the site today.
- Early Adopter: not available yet. Expected deliverable path ${early.expectedDeliverablePath} is missing.
- Pro: not available yet. Expected deliverable path ${pro.expectedDeliverablePath} is missing.

## Refunds
${REFUND_POLICY}

## Payments
${MERCHANT_OF_RECORD_DISCLOSURE}

## Compliance templates
The BAS Preparation Checklist and the Payroll & STP Checklist are compliance templates. ${LEGAL_NOTICE}
`
}
