import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { blogPosts } from "@/lib/content/blog-posts"
import { formatDisplayDate, postMinutes } from "@/lib/content/helpers"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Blog</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Accounting notes that stay educational</h1>
            <p className="text-lg text-slate-600">
              {blogPosts.length} written articles on bookkeeping, tax vocabulary, payroll setup, and cash habits.
              None of these pages is tax, legal, or financial advice.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-300">
              <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />{" "}
                  {formatDisplayDate(post.date)}
                </span>
                <span>{postMinutes(post)} min read</span>
                <span>{post.author}</span>
              </div>
              <h2 className="mb-2 text-xl font-bold">
                <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-brand-700">
                  {post.title}
                </Link>
              </h2>
              <p className="mb-3 text-sm text-slate-600">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
                  Read article <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="mb-3 text-lg font-bold">More from Empire-HQ</h2>
            <p className="mb-4 text-sm text-slate-600">Related sites in the same portfolio:</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <a href="https://moneymastery.com" className="text-sm font-medium text-brand-600 hover:text-brand-700">
                Money Mastery → Personal finance
              </a>
              <a href="https://aiforsmb.com" className="text-sm font-medium text-brand-600 hover:text-brand-700">
                AI for SMB → Operations tools
              </a>
              <a href="https://pm101topro.com" className="text-sm font-medium text-brand-600 hover:text-brand-700">
                PM101toPro → Project budgeting
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
