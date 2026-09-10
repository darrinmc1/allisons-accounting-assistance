import Link from "next/link"
import { ArrowRight, BookOpen, Clock, Star } from "lucide-react"

const courses = [
  {
    title: "Bookkeeping Basics for Small Business",
    description: "Learn the fundamentals of bookkeeping: debits, credits, chart of accounts, and how to keep clean books from day one.",
    duration: "2.5 hours",
    lessons: 12,
    level: "Beginner",
    free: true,
    slug: "bookkeeping-basics",
    provider: "Allison's Accounting Assistance",
    url: "https://allisonsaccounting.com/learn/bookkeeping-basics",
  },
  {
    title: "Small Business Tax Prep 101",
    description: "Understand what records you need, what deductions you qualify for, and how to hand off clean books to your CPA.",
    duration: "3 hours",
    lessons: 15,
    level: "Beginner",
    free: true,
    slug: "tax-prep-101",
    provider: "Allison's Accounting Assistance",
    url: "https://allisonsaccounting.com/learn/tax-prep-101",
  },
  {
    title: "QuickBooks Online: A Practical Walkthrough",
    description: "Set up your QuickBooks account the right way, connect your bank feeds, and run reports that actually make sense.",
    duration: "4 hours",
    lessons: 18,
    level: "Beginner",
    free: false,
    slug: "quickbooks-online",
    provider: "Allison's Accounting Assistance",
    url: "https://allisonsaccounting.com/learn/quickbooks-online",
  },
  {
    title: "Cash Flow Management for Freelancers",
    description: "Stop wondering where your money went. Learn how to forecast cash flow, build a buffer, and pay yourself consistently.",
    duration: "2 hours",
    lessons: 10,
    level: "Intermediate",
    free: false,
    slug: "cash-flow-freelancers",
    provider: "Allison's Accounting Assistance",
    url: "https://allisonsaccounting.com/learn/cash-flow-freelancers",
  },
  {
    title: "Understanding Financial Statements",
    description: "Decode your P&L, balance sheet, and cash flow statement. Know what the numbers mean and how to use them.",
    duration: "3.5 hours",
    lessons: 14,
    level: "Intermediate",
    free: false,
    slug: "financial-statements",
    provider: "Allison's Accounting Assistance",
    url: "https://allisonsaccounting.com/learn/financial-statements",
  },
  {
    title: "Payroll Fundamentals",
    description: "Everything you need to know about running payroll: withholding, filings, deadlines, and avoiding costly mistakes.",
    duration: "2.5 hours",
    lessons: 11,
    level: "Intermediate",
    free: false,
    slug: "payroll-fundamentals",
    provider: "Allison's Accounting Assistance",
    url: "https://allisonsaccounting.com/learn/payroll-fundamentals",
  },
]

const courseSchemas = courses.map((course) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": course.title,
  "description": course.description,
  "provider": {
    "@type": "Organization",
    "name": course.provider,
    "url": "https://allisonsaccounting.com"
  },
  "url": course.url,
  "courseMode": "online",
  "educationalLevel": course.level,
  "isAccessibleForFree": course.free,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": course.duration
  }
}))

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      {courseSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Courses</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Learn accounting the practical way</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            No textbooks, no jargon. Just clear, actionable courses built for small business owners who need to understand their numbers.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">{courses.length} courses available</h2>
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Free
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Pro
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <div key={course.slug} className="rounded-xl border border-slate-200 p-6 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between mb-3">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  course.free
                    ? "bg-green-50 text-green-700"
                    : "bg-brand-50 text-brand-700"
                }`}>
                  {course.free ? "Free" : "Pro"}
                </span>
                <span className="text-xs text-slate-400 font-medium">{course.level}</span>
              </div>
              <h3 className="font-bold text-lg mb-2 leading-snug">{course.title}</h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">{course.description}</p>
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" />
                  {course.lessons} lessons
                </span>
              </div>
              <Link
                href={`/learn/${course.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                {course.free ? "Start for free" : "View course"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-brand-200 bg-brand-50 p-8 text-center">
          <Star className="h-8 w-8 text-brand-600 mx-auto mb-3" />
          <h2 className="text-xl font-bold mb-2">Get all courses with Pro</h2>
          <p className="text-slate-600 mb-4">Unlock every course, template, and tool for one low monthly price.</p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            See pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
