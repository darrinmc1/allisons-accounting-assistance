import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

const isPublic = createRouteMatcher([
  "/", "/sign-in(.*)", "/sign-up(.*)",
  // Stripe signs this request. Clerk must not challenge it (no session cookie).
  "/api/stripe/webhook",
  "/api(.*)", "/_next(.*)", "/favicon.ico",
  "/llms.txt", "/llm.txt", "/sitemap.xml", "/robots.txt",
])

const hasKeys = !!(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY)

export default hasKeys
  ? clerkMiddleware((auth, req) => {
      if (req.nextUrl.pathname === "/api/stripe/webhook") return NextResponse.next()
      if (!isPublic(req)) auth.protect()
      return NextResponse.next()
    })
  : () => NextResponse.next()

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
