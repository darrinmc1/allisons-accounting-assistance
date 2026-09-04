import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import { ContentBlocks } from "@/components/content/content-blocks"
import { EducationalDisclaimer } from "@/components/content/educational-disclaimer"
import { blogPosts, getPost } from "@/lib/content/blog-posts"
import { formatDisplayDate, postMinutes } from "@/lib/content/helpers"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "Article not found" }
  return {
    title: `${post.title} — Allison's Accounting Assistance`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            <Link href="/blog" className="hover:text-brand-800">
              Blog
            </Link>
          </p>
          <p className="text-xs text-slate-500">
            {formatDisplayDate(post.date)}
            {" · "}
            {postMinutes(post)} min read
            {" · "}
            {post.author}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{post.title}</h1>
          <p className="mt-3 text-base text-slate-600">{post.excerpt}</p>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <ContentBlocks blocks={post.blocks} />
        <EducationalDisclaimer />
        <Link href="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
          <ArrowLeft className="h-4 w-4" />
          All articles
        </Link>
      </article>
    </div>
  )
}
