import { NextRequest, NextResponse } from "next/server"
import type Stripe from "stripe"
import { grantEntitlement, revokeEntitlement } from "@/lib/entitlements"
import { offerFromSku, stripeSiteKey } from "@/lib/offers"
import { stripe, stripePaymentsEnabled } from "@/lib/stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(req: NextRequest) {
  if (!stripePaymentsEnabled()) {
    return NextResponse.json({ error: "Payments are not enabled" }, { status: 503 })
  }
  if (!stripe) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 })
  }

  const body = await req.text()
  const sig = req.headers.get("stripe-signature")
  const secret = process.env.STRIPE_WEBHOOK_SECRET

  if (!sig || !secret) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret)
  } catch (err) {
    console.error("[stripe webhook] signature verification failed", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    const result = await handleCheckoutSession(event.data.object)
    if (result) return result
  } else if (event.type.startsWith("customer.subscription.")) {
    const result = await handleSubscription(event.type, event.data.object as Stripe.Subscription)
    if (result) return result
  }

  return NextResponse.json({ received: true })
}

async function handleCheckoutSession(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.userId
  const sku = session.metadata?.sku
  const site = session.metadata?.site
  if (!userId || site !== stripeSiteKey()) {
    console.warn("[stripe webhook] checkout session missing site/user metadata", session.id)
    return null
  }

  const offer = offerFromSku(sku)
  if (!offer) return null

  // Subscriptions are granted from customer.subscription.* so a failed or
  // incomplete subscription cannot leave an entitlement behind.
  if (offer.mode !== "payment") {
    console.log(
      "[stripe webhook] subscription checkout completed; entitlement follows customer.subscription.*"
    )
    return null
  }

  if (session.payment_status !== "paid" && session.payment_status !== "no_payment_required") {
    return null
  }

  const granted = await grantEntitlement(userId, offer.entitlementId)
  console.log(
    `[stripe webhook] entitlement ${granted ? "granted" : "FAILED"}: user=${userId} sku=${offer.sku}`
  )
  if (!granted) {
    return NextResponse.json({ error: "Entitlement grant failed" }, { status: 500 })
  }
  return null
}

async function handleSubscription(eventType: string, sub: Stripe.Subscription) {
  const userId = sub.metadata?.userId
  const sku = sub.metadata?.sku
  const site = sub.metadata?.site
  if (!userId || site !== stripeSiteKey()) {
    console.warn("[stripe webhook] subscription missing site/user metadata", eventType, sub.id)
    return null
  }

  const offer = offerFromSku(sku)
  if (!offer || offer.mode !== "subscription") return null

  const revoke =
    eventType === "customer.subscription.deleted" ||
    sub.status === "canceled" ||
    sub.status === "unpaid" ||
    sub.status === "incomplete_expired"

  if (revoke) {
    const revoked = await revokeEntitlement(userId, offer.entitlementId)
    console.log(
      `[stripe webhook] entitlement ${revoked ? "revoked" : "REVOKE FAILED"}: user=${userId} sku=${offer.sku} status=${sub.status}`
    )
    if (!revoked) {
      return NextResponse.json({ error: "Entitlement revoke failed" }, { status: 500 })
    }
    return null
  }

  if (sub.status !== "active" && sub.status !== "trialing") return null

  const granted = await grantEntitlement(userId, offer.entitlementId)
  console.log(
    `[stripe webhook] entitlement ${granted ? "granted" : "FAILED"}: user=${userId} sku=${offer.sku} status=${sub.status}`
  )
  if (!granted) {
    return NextResponse.json({ error: "Entitlement grant failed" }, { status: 500 })
  }
  return null
}
