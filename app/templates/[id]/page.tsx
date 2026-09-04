import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ComingSoonPanel } from "@/components/content/coming-soon"
import { getTemplate, templates } from "@/lib/content/templates"

type Props = { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return templates.map((template) => ({ id: template.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const template = getTemplate(id)
  if (!template) return { title: "Template not found" }
  return {
    title: `${template.title} — Coming Soon`,
    description: template.description,
  }
}

export default async function TemplateDetailPage({ params }: Props) {
  const { id } = await params
  const template = getTemplate(id)
  if (!template) notFound()

  return (
    <ComingSoonPanel
      kicker="Templates"
      title={template.title}
      description={template.description}
      notes={template.notes}
      backHref="/templates"
      backLabel="Back to template catalog"
    />
  )
}
