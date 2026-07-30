import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

const isPublic = createRouteMatcher([
  "/", "/sign-in(.*)", "/sign-up(.*)",
  "/api(.*)", "/_next(.*)", "/favicon.ico",
])

const hasKeys = !!(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY)

export default hasKeys
  ? clerkMiddleware((auth, req) => {
      if (!isPublic(req)) auth.protect()
      return NextResponse.next()
    })
  : () => NextResponse.next()

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
