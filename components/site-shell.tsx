"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export function SiteShell({ children }: { children: React.ReactNode }) {
  const home = usePathname() === "/"

  useEffect(() => {
    document.documentElement.classList.toggle("home-dark", home)
    return () => document.documentElement.classList.remove("home-dark")
  }, [home])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
