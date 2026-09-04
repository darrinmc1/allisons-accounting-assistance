"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  const home = usePathname() === "/"

  return (
    <footer
      className={cn(
        "border-t",
        home ? "border-craft-border bg-craft-bg" : "border-slate-200 bg-slate-50",
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3
              className={cn(
                "mb-4 text-sm font-bold uppercase tracking-wider",
                home ? "text-craft-muted" : "text-slate-500",
              )}
            >
              Learn
            </h3>
            <ul className="space-y-3">
              <li><Link href="/learn" className={footerLink(home)}>Bookkeeping</Link></li>
              <li><Link href="/learn" className={footerLink(home)}>Tax Prep</Link></li>
              <li><Link href="/learn" className={footerLink(home)}>Payroll</Link></li>
              <li><Link href="/learn" className={footerLink(home)}>Business Setup</Link></li>
            </ul>
          </div>
          <div>
            <h3
              className={cn(
                "mb-4 text-sm font-bold uppercase tracking-wider",
                home ? "text-craft-muted" : "text-slate-500",
              )}
            >
              Templates
            </h3>
            <ul className="space-y-3">
              <li><Link href="/templates" className={footerLink(home)}>Income Statement</Link></li>
              <li><Link href="/templates" className={footerLink(home)}>Balance Sheet</Link></li>
              <li><Link href="/templates" className={footerLink(home)}>Invoice Templates</Link></li>
              <li><Link href="/templates" className={footerLink(home)}>Tax Worksheets</Link></li>
            </ul>
          </div>
          <div>
            <h3
              className={cn(
                "mb-4 text-sm font-bold uppercase tracking-wider",
                home ? "text-craft-muted" : "text-slate-500",
              )}
            >
              Empire-HQ
            </h3>
            <ul className="space-y-3">
              <li><a href="https://moneymastery.com" className={footerLink(home)}>Money Mastery</a></li>
              <li><a href="https://pm101topro.com" className={footerLink(home)}>PM101toPro</a></li>
              <li><a href="https://aiforsmb.com" className={footerLink(home)}>AI for SMB</a></li>
              <li><a href="https://peelboss.com" className={footerLink(home)}>Peel Boss</a></li>
            </ul>
          </div>
          <div>
            <h3
              className={cn(
                "mb-4 text-sm font-bold uppercase tracking-wider",
                home ? "text-craft-muted" : "text-slate-500",
              )}
            >
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link href="/about" className={footerLink(home)}>About</Link></li>
              <li><Link href="/contact" className={footerLink(home)}>Contact</Link></li>
              <li><Link href="/pricing" className={footerLink(home)}>Pricing</Link></li>
              <li><Link href="/terms" className={footerLink(home)}>Terms</Link></li>
              <li><Link href="/privacy" className={footerLink(home)}>Privacy</Link></li>
              <li><Link href="/cookies" className={footerLink(home)}>Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div
          className={cn(
            "mt-12 border-t pt-8 text-center text-sm",
            home ? "border-craft-border text-craft-muted" : "border-slate-200 text-slate-500",
          )}
        >
          &copy; {new Date().getFullYear()} Allison&apos;s Accounting Assistance — An Empire-HQ Portfolio Project.
        </div>
      </div>
    </footer>
  )
}

function footerLink(home: boolean) {
  return home
    ? "text-sm text-craft-muted hover:text-white"
    : "text-sm text-slate-600 hover:text-slate-900"
}
