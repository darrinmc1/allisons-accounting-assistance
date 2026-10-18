"use client"

import { useState } from "react"

export function NotifyForm({ source }: { source: string }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle")

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      })
      setStatus(res.ok ? "ok" : "err")
    } catch {
      setStatus("err")
    }
  }

  if (status === "ok") {
    return <p className="text-sm text-slate-600">You&apos;re on the list. We&apos;ll email you when checkout opens.</p>
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
      <label className="sr-only" htmlFor={`notify-${source}`}>
        Email address
      </label>
      <input
        id={`notify-${source}`}
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="shrink-0 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Notify me"}
      </button>
      {status === "err" ? (
        <p className="text-xs text-red-600 sm:basis-full">Could not save that email. Try again in a moment.</p>
      ) : null}
    </form>
  )
}
