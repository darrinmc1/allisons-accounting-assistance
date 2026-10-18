import { TermsPage } from "@/components/legal/terms-content"
import { getSupportEmail } from "@/lib/support-email"

export default function Page() {
  return (
    <TermsPage
      siteName="Allison's Accounting Assistance"
      domain="allisonsaccounting.com"
      supportEmail={getSupportEmail() ?? undefined}
    />
  )
}
