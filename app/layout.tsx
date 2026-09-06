import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { SiteShell } from "@/components/site-shell"
import { FeedbackWidget } from "@/components/feedback-widget"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Allison's Accounting Assistance — GST, BAS, and month-end close",
  description:
    "Written Bookkeeping Basics for GST coding and month-end close. Worksheets and tax calculators when you need the file.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0F1E" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        <ClerkProvider>
          <SiteShell>{children}</SiteShell>
          <FeedbackWidget />
        </ClerkProvider>
      </body>
    </html>
  )
}
