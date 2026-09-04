export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "steps"; items: { title: string; text: string }[] }

export type Lesson = {
  slug: string
  title: string
  minutes: number
  summary: string
  blocks: ContentBlock[]
}

export type Course = {
  id: string
  title: string
  level: "Beginner" | "Intermediate"
  free: boolean
  description: string
  tags: string[]
  /** Existing Course schema offer price. Catalog only — no checkout on this branch. */
  schemaPrice: string
  schemaTeaches: string
  lessons: Lesson[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  tags: string[]
  blocks: ContentBlock[]
}

export type CatalogItem = {
  id: string
  title: string
  description: string
  icon: string
  status: "coming-soon"
  notes: string
}

export type TemplateItem = CatalogItem & {
  price: string
  tier: "free" | "pro"
  features: string[]
}

export type ToolItem = CatalogItem
