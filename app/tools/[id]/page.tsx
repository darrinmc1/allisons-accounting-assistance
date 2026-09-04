import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ComingSoonPanel } from "@/components/content/coming-soon"
import { getTool, tools } from "@/lib/content/tools"

type Props = { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return tools.map((tool) => ({ id: tool.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const tool = getTool(id)
  if (!tool) return { title: "Tool not found" }
  return {
    title: `${tool.title} — Coming Soon`,
    description: tool.description,
  }
}

export default async function ToolDetailPage({ params }: Props) {
  const { id } = await params
  const tool = getTool(id)
  if (!tool) notFound()

  return (
    <ComingSoonPanel
      kicker="Tools"
      title={tool.title}
      description={tool.description}
      notes={tool.notes}
      backHref="/tools"
      backLabel="Back to tools catalog"
    />
  )
}
