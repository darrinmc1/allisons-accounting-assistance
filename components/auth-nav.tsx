"use client"

import Link from "next/link"
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { cn } from "@/lib/utils"

export default function AuthNav({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { isSignedIn } = useUser()
  const dark = tone === "dark"

  if (!isSignedIn) {
    return (
      <>
        <SignInButton mode="modal">
          <button
            type="button"
            className={cn(
              "hidden text-sm font-medium transition-colors sm:inline-flex",
              dark ? "text-craft-muted hover:text-white" : "text-slate-600 hover:text-slate-900",
            )}
          >
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 active:scale-[0.96]"
          >
            Sign up
          </button>
        </SignUpButton>
      </>
    )
  }

  return (
    <>
      <Link
        href="/dashboard"
        className={cn(
          "hidden text-sm font-medium transition-colors sm:inline-flex",
          dark ? "text-craft-muted hover:text-white" : "text-slate-600 hover:text-slate-900",
        )}
      >
        Dashboard
      </Link>
      <UserButton
        appearance={{
          elements: {
            avatarBox: "h-8 w-8",
          },
        }}
      />
    </>
  )
}
