"use client"

import { useState } from "react"

const ENDPOINT = "https://n8n.peelboss.com/webhook/hq-subscribe"

export default function ComingSoonSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          site: "allisons",
          source: "pricing-coming-soon",
        }),
      })
      if (!response.ok) throw new Error("subscribe failed")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm font-medium text-slate-700" role="status">
        You&apos;re on the list. We will email you when paid plans are available.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-md text-left">
      <label htmlFor="coming-soon-email" className="block text-sm font-medium text-slate-700 mb-2">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="coming-soon-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Join the list"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-700" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
