"use client"

import Link from "next/link"
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

export default function AuthNav() {
  const { isSignedIn } = useUser()

  if (!isSignedIn) {
    return (
      <>
        <SignInButton mode="modal">
          <button
            type="button"
            className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white active:scale-[0.96] transition-transform hover:bg-brand-700 transition-colors"
          >
            Get Started
          </button>
        </SignUpButton>
      </>
    )
  }

  return (
    <>
      <Link
        href="/dashboard"
        className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
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
