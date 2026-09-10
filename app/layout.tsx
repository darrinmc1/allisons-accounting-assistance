import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { AuthNav } from "@/components/auth-nav"
import { FeedbackWidget } from "@/components/feedback-widget"

export const metadata: Metadata = {
  title: "Allison's Accounting Assistance",
  description: "Accounting courses, templates, and tools for small business owners. Learn bookkeeping, taxes, and financial management from a licensed CPA.",
  keywords: "accounting courses, small business accounting, bookkeeping templates, tax help, CPA courses",
  openGraph: {
    title: "Allison's Accounting Assistance",
    description: "Accounting courses, templates, and tools for small business owners.",
    url: "https://allisonsaccounting.com",
    siteName: "Allison's Accounting Assistance",
    type: "website",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Allison's Accounting Assistance",
  "url": "https://allisonsaccounting.com",
  "logo": "https://allisonsaccounting.com/logo.png",
  "description": "Accounting courses, templates, and tools for small business owners created by a licensed CPA with over a decade of experience.",
  "email": "hello@allisonsaccounting.com",
  "founder": {
    "@type": "Person",
    "name": "Allison",
    "jobTitle": "Licensed CPA"
  },
  "sameAs": [
    "https://allisonsaccounting.com"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "email": "hello@allisonsaccounting.com",
      "contactType": "customer service"
    },
    {
      "@type": "ContactPoint",
      "email": "support@allisonsaccounting.com",
      "contactType": "technical support"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
        </head>
        <body className="antialiased">
          <AuthNav />
          {children}
          <FeedbackWidget />
        </body>
      </html>
    </ClerkProvider>
  )
}
