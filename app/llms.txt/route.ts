import { renderLlmsTxt } from "@/lib/llms-txt"

export const dynamic = "force-dynamic"

export function GET() {
  return new Response(renderLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  })
}
