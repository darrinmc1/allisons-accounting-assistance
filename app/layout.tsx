import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FeedbackWidget } from "@/components/feedback-widget"

export const metadata: Metadata = {
  title: {
    default: "Allison's Accounting Assistance | Small Business Accounting Courses & Templates",
    template: "%s | Allison's Accounting Assistance",
  },
  description: "Practical accounting courses, templates, and tools for small business owners. Created by a licensed CPA with 10+ years of experience.",
  metadataBase: new URL("https://allisonsaccounting.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://allisonsaccounting.com",
    siteName: "Allison's Accounting Assistance",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Allison's Accounting Assistance",
  "url": "https://allisonsaccounting.com",
  "logo": "https://allisonsaccounting.com/logo.png",
  "description": "Practical accounting courses, templates, and tools for small business owners. Created by a licensed CPA with over 10 years of experience in public accounting and small business consulting.",
  "email": "hello@allisonsaccounting.com",
  "founder": {
    "@type": "Person",
    "name": "Allison",
    "jobTitle": "Licensed CPA",
    "description": "Licensed CPA with over a decade of experience in public accounting and small business consulting."
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
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Accounting Courses & Templates",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Small Business Accounting Fundamentals",
          "description": "Master the accounting basics every small business owner needs to know.",
          "provider": {
            "@type": "Organization",
            "name": "Allison's Accounting Assistance"
          },
          "instructor": {
            "@type": "Person",
            "name": "Allison",
            "jobTitle": "Licensed CPA"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        "price": "0",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Tax Strategy for Small Business Owners",
          "description": "Learn how to legally minimize your tax burden and keep more of what you earn.",
          "provider": {
            "@type": "Organization",
            "name": "Allison's Accounting Assistance"
          },
          "instructor": {
            "@type": "Person",
            "name": "Allison",
            "jobTitle": "Licensed CPA"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "94",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        "price": "97",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Bookkeeping Bootcamp",
          "description": "Set up and maintain clean books from day one with this step-by-step bookkeeping course.",
          "provider": {
            "@type": "Organization",
            "name": "Allison's Accounting Assistance"
          },
          "instructor": {
            "@type": "Person",
            "name": "Allison",
            "jobTitle": "Licensed CPA"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "83",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        "price": "67",
        "priceCurrency": "USD"
      }
    ]
  }
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Allison's Accounting Assistance",
  "url": "https://allisonsaccounting.com",
  "description": "Practical accounting courses, templates, and tools for small business owners.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://allisonsaccounting.com/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
        </head>
        <body className="min-h-screen bg-white font-sans antialiased">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <FeedbackWidget />
        </body>
      </html>
    </ClerkProvider>
  )
}
