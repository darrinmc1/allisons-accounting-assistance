import { clerkClient } from "@clerk/nextjs/server"

/**
 * Allison's has Clerk and no Supabase, so entitlements live on the Clerk
 * user's publicMetadata. The webhook is the only writer. Active ids are
 * readable on /account.
 */
export interface StoredEntitlement {
  status: "active" | "revoked"
  updatedAt: string
}

export type EntitlementMap = Record<string, StoredEntitlement>

function parseEntitlements(value: unknown): EntitlementMap {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {}
  const out: EntitlementMap = {}
  for (const [id, raw] of Object.entries(value)) {
    if (!raw || typeof raw !== "object") continue
    const status = (raw as { status?: unknown }).status
    const updatedAt = (raw as { updatedAt?: unknown }).updatedAt
    if ((status === "active" || status === "revoked") && typeof updatedAt === "string") {
      out[id] = { status, updatedAt }
    }
  }
  return out
}

async function readMap(userId: string): Promise<EntitlementMap | null> {
  try {
    const client = await clerkClient()
    const user = await client.users.getUser(userId)
    return parseEntitlements(user.publicMetadata?.entitlements)
  } catch (err) {
    console.error("[entitlements] read failed", err)
    return null
  }
}

async function writeMap(userId: string, entitlements: EntitlementMap): Promise<boolean> {
  try {
    const client = await clerkClient()
    await client.users.updateUserMetadata(userId, {
      publicMetadata: { entitlements },
    })
    return true
  } catch (err) {
    console.error("[entitlements] write failed", err)
    return false
  }
}

export async function getActiveEntitlementIds(userId: string): Promise<string[]> {
  const map = await readMap(userId)
  if (!map) return []
  return Object.entries(map)
    .filter(([, row]) => row.status === "active")
    .map(([id]) => id)
}

export async function grantEntitlement(userId: string, productId: string): Promise<boolean> {
  const map = await readMap(userId)
  if (!map) return false
  map[productId] = { status: "active", updatedAt: new Date().toISOString() }
  return writeMap(userId, map)
}

export async function revokeEntitlement(userId: string, productId: string): Promise<boolean> {
  const map = await readMap(userId)
  if (!map) return false
  map[productId] = { status: "revoked", updatedAt: new Date().toISOString() }
  return writeMap(userId, map)
}
