"use client"

import { FormEvent, useId, useState } from "react"
import Link from "next/link"
import { Reveal } from "@/components/home/reveal"

const SISTER = [
  { name: "Money Mastery", href: "https://moneymastery.com", desc: "Personal finance and investing strategy" },
  { name: "AI for SMB", href: "https://aiforsmb.com", desc: "Bookkeeping and tax workflow tools" },
  { name: "PM101toPro", href: "https://pm101topro.com", desc: "Project scope and client management" },
] as const

export function Close() {
  const waitlistId = useId()
  const [email, setEmail] = useState("")
  const [waitlist, setWaitlist] = useState<"idle" | "loading" | "ok" | "err">("idle")
  const [waitlistNote, setWaitlistNote] = useState("")

  async function onWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setWaitlist("loading")
    setWaitlistNote("")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = (await res.json()) as { message?: string; error?: string }
      if (!res.ok) {
        setWaitlist("err")
        setWaitlistNote(data.error || "Could not subscribe. Try again.")
        return
      }
      setWaitlist("ok")
      setWaitlistNote(data.message || "You are on the list.")
      setEmail("")
    } catch {
      setWaitlist("err")
      setWaitlistNote("Network error. Try again in a minute.")
    }
  }

  return (
    <section className="border-b border-craft-border bg-craft-bg py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white">
            Start with the free bookkeeping course.
          </h2>
          <p className="mt-3 max-w-xl text-craft-muted">
            Plans are on Pricing. Paid worksheets are on Templates.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-700 active:scale-[0.96]"
            >
              Start the chart of accounts lesson
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg border border-craft-border px-6 py-3 text-sm font-semibold text-craft-fg transition-colors hover:bg-white/5"
            >
              See plans
            </Link>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <form onSubmit={onWaitlist} className="max-w-md">
            <label htmlFor={waitlistId} className="text-sm font-medium text-white">
              Notes when new written lessons ship
            </label>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <input
                id={waitlistId}
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@work-email.com"
                className="h-11 flex-1 rounded-lg border border-craft-border bg-craft-surface px-3 text-sm text-white placeholder:text-craft-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              />
              <button
                type="submit"
                disabled={waitlist === "loading"}
                className="h-11 rounded-lg bg-brand-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
              >
                {waitlist === "loading" ? "Sending…" : "Subscribe"}
              </button>
            </div>
            {waitlistNote ? (
              <p className="mt-2 text-xs text-craft-muted" role="status" data-state={waitlist}>
                {waitlistNote}
              </p>
            ) : null}
          </form>
        </Reveal>

        <Reveal className="mt-16">
          <p className="text-sm font-medium text-craft-teal">Empire-HQ</p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Sister sites in the same portfolio
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {SISTER.map((site) => (
              <a
                key={site.name}
                href={site.href}
                className="rounded-xl border border-craft-border bg-craft-surface p-4 transition-colors hover:border-brand-500/40"
              >
                <p className="text-sm font-semibold text-white">{site.name}</p>
                <p className="mt-1 text-xs text-craft-muted">{site.desc}</p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
