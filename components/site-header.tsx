"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import AuthNav from "@/components/auth-nav"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/learn", label: "Learn" },
  { href: "/templates", label: "Templates" },
  { href: "/tools", label: "Tools" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
] as const

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const home = pathname === "/"

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md",
        home
          ? "border-craft-border bg-craft-bg/80"
          : "border-slate-200 bg-white/95 supports-[backdrop-filter]:bg-white/60",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link
          href="/"
          className={cn("flex items-center", home ? "text-white" : "text-slate-900")}
          aria-label="Allison's Accounting Assistance home"
        >
          <BrandMark tone={home ? "dark" : "light"} />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  home
                    ? active
                      ? "text-white"
                      : "text-craft-muted hover:text-white"
                    : active
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <AuthNav tone={home ? "dark" : "light"} />
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden",
            home ? "text-white" : "text-slate-900",
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          className={cn(
            "border-t md:hidden",
            home ? "border-craft-border bg-craft-bg" : "border-slate-100 bg-white",
          )}
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium",
                  home
                    ? "text-craft-muted hover:bg-craft-raised hover:text-white"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <AuthNav tone={home ? "dark" : "light"} />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
