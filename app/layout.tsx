import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import Link from "next/link"
import { AuthNav } from "@/components/auth-nav"
import { FeedbackWidget } from "@/components/feedback-widget"

export const metadata: Metadata = {
  title: "Allison's Accounting Assistance",
  description: "Courses, templates, and tools to help small business owners master their accounting.",
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Allison's Accounting Assistance",
  "url": "https://allisonsaccounting.com",
  "logo": "https://allisonsaccounting.com/logo.png",
  "description": "Courses, templates, and tools to help small business owners master their accounting.",
  "email": "hello@allisonsaccounting.com",
  "founder": {
    "@type": "Person",
    "name": "Allison",
    "jobTitle": "CPA"
  },
  "sameAs": [
    "https://allisonsaccounting.com"
  ]
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://allisonsaccounting.com",
  "name": "Allison's Accounting Assistance",
  "description": "Professional accounting courses, templates, and tools for small business owners.",
  "url": "https://allisonsaccounting.com",
  "email": "hello@allisonsaccounting.com",
  "priceRange": "$$",
  "knowsAbout": ["Accounting", "Bookkeeping", "Tax Preparation", "Small Business Finance", "Payroll"]
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
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
        </head>
        <body className="antialiased">
          <header className="border-b bg-white sticky top-0 z-50">
            <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
              <Link href="/" className="font-bold text-lg tracking-tight">
                Allison&apos;s
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <Link href="/learn" className="text-slate-600 hover:text-slate-900">Learn</Link>
                <Link href="/templates" className="text-slate-600 hover:text-slate-900">Templates</Link>
                <Link href="/tools" className="text-slate-600 hover:text-slate-900">Tools</Link>
                <Link href="/pricing" className="text-slate-600 hover:text-slate-900">Pricing</Link>
                <Link href="/blog" className="text-slate-600 hover:text-slate-900">Blog</Link>
              </nav>
              <AuthNav />
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t bg-slate-50 mt-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6 py-10">
              <div className="grid gap-8 md:grid-cols-4">
                <div>
                  <p className="font-bold mb-2">Allison&apos;s</p>
                  <p className="text-sm text-slate-500">Accounting help for small business owners who want to stop guessing.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3">Learn</p>
                  <ul className="space-y-2 text-sm text-slate-500">
                    <li><Link href="/learn" className="hover:text-slate-900">All Courses</Link></li>
                    <li><Link href="/templates" className="hover:text-slate-900">Templates</Link></li>
                    <li><Link href="/tools" className="hover:text-slate-900">Tools</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3">Company</p>
                  <ul className="space-y-2 text-sm text-slate-500">
                    <li><Link href="/about" className="hover:text-slate-900">About</Link></li>
                    <li><Link href="/blog" className="hover:text-slate-900">Blog</Link></li>
                    <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
                    <li><Link href="/pricing" className="hover:text-slate-900">Pricing</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3">Legal</p>
                  <ul className="space-y-2 text-sm text-slate-500">
                    <li><Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="hover:text-slate-900">Terms of Service</Link></li>
                    <li><Link href="/cookies" className="hover:text-slate-900">Cookie Policy</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t text-sm text-slate-400">
                © {new Date().getFullYear()} Allison&apos;s Accounting Assistance. All rights reserved.
              </div>
            </div>
          </footer>
          <FeedbackWidget />
        </body>
      </html>
    </ClerkProvider>
  )
}
