import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

const posts = [
  {
    title: "5 Small Business Tax Deductions You're Probably Missing",
    slug: "missed-tax-deductions",
    excerpt: "Most small business owners leave thousands of dollars on the table every year. Here are the five most commonly missed deductions and how to claim them.",
    date: "2026-07-25",
    author: "Allison's Accounting Team",
    readTime: "7 min",
    tags: ["Taxes", "Deductions"],
  },
  {
    title: "Bookkeeping vs Accounting: What's the Difference?",
    slug: "bookkeeping-vs-accounting",
    excerpt: "They're not the same thing — and understanding the difference can save you time, money, and headaches at tax time.",
    date: "2026-07-20",
    author: "Allison's Accounting Team",
    readTime: "5 min",
    tags: ["Bookkeeping", "Basics"],
  },
  {
    title: "Should You Switch to an S-Corp? A Practical Guide",
    slug: "should-you-switch-to-scorp",
    excerpt: "The S-Corp election can save you thousands in self-employment tax — but it's not right for everyone. Here's how to decide.",
    date: "2026-07-15",
    author: "Allison's Accounting Team",
    readTime: "9 min",
    tags: ["Business Structure", "Taxes"],
  },
  {
    title: "How to Set Up Payroll for Your First Employee",
    slug: "first-employee-payroll-guide",
    excerpt: "Hiring your first employee is exciting — and terrifying. Here's the step-by-step payroll setup process so you don't miss anything.",
    date: "2026-07-10",
    author: "Allison's Accounting Team",
    readTime: "8 min",
    tags: ["Payroll", "Employees"],
  },
  {
    title: "The Solo 401(k): A Hidden Tax Superpower for Freelancers",
    slug: "solo-401k-tax-savings",
    excerpt: "If you're self-employed and not using a Solo 401(k), you're leaving thousands in tax savings on the table. Here's why it's better than a SEP IRA.",
    date: "2026-07-05",
    author: "Allison's Accounting Team",
    readTime: "6 min",
    tags: ["Retirement", "Tax Savings"],
  },
  {
    title: "Quarterly Estimated Taxes: A Complete Guide",
    slug: "quarterly-estimated-taxes-guide",
    excerpt: "New to quarterly taxes? Here's exactly how to calculate, pay, and track your estimated tax payments — and avoid penalties.",
    date: "2026-06-28",
    author: "Allison's Accounting Team",
    readTime: "10 min",
    tags: ["Taxes", "Quarterly Payments"],
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Blog</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Accounting advice that actually helps</h1>
            <p className="text-lg text-slate-600">
              Practical articles on bookkeeping, taxes, payroll, and running a financially healthy business.
              Written by a CPA, not a content mill.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 md:px-6 py-12">
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-300 transition-all">
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span>{post.readTime}</span>
                <span>{post.author}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand-700 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-slate-600 mb-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
                  Read More <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cross-link to sister sites */}
      <section className="border-t bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
            <h2 className="font-bold text-lg mb-3">More from Empire-HQ</h2>
            <p className="text-sm text-slate-600 mb-4">
              Check out these related articles from our sister sites:
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <a href="#" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
                Money Mastery &rarr; Tax tips for business owners
              </a>
              <a href="#" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
                AI for SMB &rarr; Automate your bookkeeping
              </a>
              <a href="#" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
                PM101toPro &rarr; Budgeting for projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
