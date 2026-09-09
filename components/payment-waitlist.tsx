"use client"

import { FormEvent, useId, useState } from "react"

export function PaymentWaitlistForm({
  label = "Email for when paid checkout opens",
  submitLabel = "Join waitlist",
}: {
  label?: string
  submitLabel?: string
}) {
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
        body: JSON.stringify({ email, source: "payment-waitlist" }),
      })
      const data = (await res.json()) as { message?: string; error?: string }
      if (!res.ok) {
        setWaitlist("err")
        setWaitlistNote(data.error || "Could not join the waitlist. Try again.")
        return
      }
      setWaitlist("ok")
      setWaitlistNote(data.message || "You are on the waitlist.")
      setEmail("")
    } catch {
      setWaitlist("err")
      setWaitlistNote("Network error. Try again in a minute.")
    }
  }

  return (
    <form onSubmit={onWaitlist} className="max-w-md" data-payments="gated">
      <label htmlFor={waitlistId} className="text-sm font-medium text-slate-900">
        {label}
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
          className="h-11 flex-1 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        />
        <button
          type="submit"
          disabled={waitlist === "loading"}
          className="h-11 rounded-lg bg-brand-600 px-4 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
        >
          {waitlist === "loading" ? "Sending…" : submitLabel}
        </button>
      </div>
      {waitlistNote ? (
        <p className="mt-2 text-xs text-slate-500" role="status" data-state={waitlist}>
          {waitlistNote}
        </p>
      ) : null}
    </form>
  )
}
