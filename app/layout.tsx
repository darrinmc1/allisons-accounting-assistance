import type { Metadata } from "next"
import Link from "next/link"
import { ClerkProvider } from "@clerk/nextjs"
import AuthNav from "@/components/auth-nav"
import "./globals.css"
import { FeedbackWidget } from "@/components/feedback-widget"

export const metadata: Metadata = {
  title: "Allison's Accounting Assistance — Accounting help that actually makes sense",
  description: "Courses, templates, and tools for small business bookkeeping, tax prep, payroll, and business setup. Free resources and pro templates.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
}

const navLinks = [
  { href: "/learn", label: "Learn" },
  { href: "/templates", label: "Templates" },
  { href: "/tools", label: "Tools" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <ClerkProvider>
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white text-sm font-bold">AA</span>
              Allison&apos;s<span className="text-brand-600">Accounting</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <AuthNav />
            </div>
          </div>
          {/* Mobile nav */}
          <div className="md:hidden border-t border-slate-100 px-4 py-2 flex gap-4 overflow-x-auto text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="shrink-0 font-medium text-slate-600 hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </div>
        </header>

        <main>{children}</main>
        <FeedbackWidget />

        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-4">Learn</h3>
                <ul className="space-y-3">
                  <li><Link href="/learn" className="text-sm text-slate-600 hover:text-slate-900">Bookkeeping</Link></li>
                  <li><Link href="/learn" className="text-sm text-slate-600 hover:text-slate-900">Tax Prep</Link></li>
                  <li><Link href="/learn" className="text-sm text-slate-600 hover:text-slate-900">Payroll</Link></li>
                  <li><Link href="/learn" className="text-sm text-slate-600 hover:text-slate-900">Business Setup</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-4">Templates</h3>
                <ul className="space-y-3">
                  <li><Link href="/templates" className="text-sm text-slate-600 hover:text-slate-900">Income Statement</Link></li>
                  <li><Link href="/templates" className="text-sm text-slate-600 hover:text-slate-900">Balance Sheet</Link></li>
                  <li><Link href="/templates" className="text-sm text-slate-600 hover:text-slate-900">Invoice Templates</Link></li>
                  <li><Link href="/templates" className="text-sm text-slate-600 hover:text-slate-900">Tax Worksheets</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-4">Empire-HQ</h3>
                <ul className="space-y-3">
                  <li><a href="https://moneymastery.com" className="text-sm text-slate-600 hover:text-slate-900">Money Mastery</a></li>
                  <li><a href="https://pm101topro.com" className="text-sm text-slate-600 hover:text-slate-900">PM101toPro</a></li>
                  <li><a href="https://aiforsmb.com" className="text-sm text-slate-600 hover:text-slate-900">AI for SMB</a></li>
                  <li><a href="https://peelboss.com" className="text-sm text-slate-600 hover:text-slate-900">Peel Boss</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><Link href="/about" className="text-sm text-slate-600 hover:text-slate-900">About</Link></li>
                  <li><Link href="/contact" className="text-sm text-slate-600 hover:text-slate-900">Contact</Link></li>
                  <li><Link href="/pricing" className="text-sm text-slate-600 hover:text-slate-900">Pricing</Link></li>
                  <li><Link href="/terms" className="text-sm text-slate-600 hover:text-slate-900">Terms</Link></li>
                  <li><Link href="/privacy" className="text-sm text-slate-600 hover:text-slate-900">Privacy</Link></li>
                  <li><Link href="/cookies" className="text-sm text-slate-600 hover:text-slate-900">Cookies</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Allison&apos;s Accounting Assistance - An Empire-HQ Portfolio Project.
            </div>
          </div>
        </footer>
        </ClerkProvider>
      </body>
    </html>
  )
}
