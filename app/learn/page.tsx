import Link from "next/link"
import { ArrowRight, BookOpen, Clock, Star } from "lucide-react"

const courses = [
  {
    title: "Bookkeeping Basics for Small Business",
    slug: "bookkeeping-basics",
    description: "Learn the fundamentals of bookkeeping: chart of accounts, debits and credits, reconciliation, and monthly close.",
    level: "Beginner",
    duration: "2.5 hours",
    lessons: 12,
    free: true,
    topics: ["Chart of Accounts", "Debits & Credits", "Bank Reconciliation", "Monthly Close"],
    provider: "Allison's Accounting Assistance",
    url: "https://allisonsaccounting.com/learn/bookkeeping-basics",
  },
  {
    title: "Tax Prep for Self-Employed",
    slug: "tax-prep-self-employed",
    description: "Everything you need to know to file your Schedule C correctly, maximize deductions, and avoid common mistakes.",
    level: "Beginner",
    duration: "3 hours",
    lessons: 15,
    free: true,
    topics: ["Schedule C", "Deductions", "Quarterly Taxes", "Record Keeping"],
    provider: "Allison's Accounting Assistance",
    url: "https://allisonsaccounting.com/learn/tax-prep-self-employed",
  },
  {
    title: "Understanding Financial Statements",
    slug: "financial-statements",
    description: "Demystify the P&L, balance sheet, and cash flow statement. Know what the numbers mean and how to use them.",
    level: "Intermediate",
    duration: "2 hours",
    lessons: 10,
    free: true,
    topics: ["P&L Statement", "Balance Sheet", "Cash Flow", "Financial Ratios"],
    provider: "Allison's Accounting Assistance",
    url: "https://allisonsaccounting.com/learn/financial-statements",
  },
  {
    title: "Payroll Fundamentals",
    slug: "payroll-fundamentals",
    description: "Set up payroll correctly from day one. Covers employee classification, withholding, filings, and year-end W-2s.",
    level: "Intermediate",
    duration: "2.5 hours",
    lessons: 11,
    free: false,
    topics: ["Employee Classification", "Tax Withholding", "Payroll Filings", "W-2s"],
    provider: "Allison's Accounting Assistance",
    url: "https://allisonsaccounting.com/learn/payroll-fundamentals",
  },
  {
    title: "Business Entity & Tax Strategy",
    slug: "entity-tax-strategy",
    description: "LLC vs S-Corp vs C-Corp: understand the tax implications of each structure and how to optimize your setup.",
    level: "Advanced",
    duration: "3.5 hours",
    lessons: 16,
    free: false,
    topics: ["LLC", "S-Corp Election", "C-Corp", "Tax Optimization"],
    provider: "Allison's Accounting Assistance",
    url: "https://allisonsaccounting.com/learn/entity-tax-strategy",
  },
  {
    title: "Cash Flow Management",
    slug: "cash-flow-management",
    description: "Learn to forecast cash flow, manage working capital, and build a cash reserve that keeps your business stable.",
    level: "Intermediate",
    duration: "2 hours",
    lessons: 9,
    free: false,
    topics: ["Cash Forecasting", "Working Capital", "Cash Reserves", "Accounts Receivable"],
    provider: "Allison's Accounting Assistance",
    url: "https://allisonsaccounting.com/learn/cash-flow-management",
  },
]

const courseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Accounting Courses for Small Business Owners",
  "description": "Free and premium accounting courses for small business owners, freelancers, and entrepreneurs.",
  "url": "https://allisonsaccounting.com/learn",
  "numberOfItems": courses.length,
  "itemListElement": courses.map((course, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Course",
      "name": course.title,
      "description": course.description,
      "url": course.url,
      "provider": {
        "@type": "Organization",
        "name": course.provider,
        "url": "https://allisonsaccounting.com"
      },
      "educationalLevel": course.level,
      "timeRequired": course.duration,
      "isAccessibleForFree": course.free,
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": course.duration
      }
    }
  }))
}

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Courses</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Learn accounting that actually sticks</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Practical, jargon-free courses built for small business owners. Start free, go deeper when you&apos;re ready.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.slug} className="rounded-xl border border-slate-200 p-6 flex flex-col hover:border-slate-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  course.level === "Beginner" ? "bg-green-100 text-green-700" :
                  course.level === "Intermediate" ? "bg-blue-100 text-blue-700" :
                  "bg-purple-100 text-purple-700"
                }`}>{course.level}</span>
                {course.free ? (
                  <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-1 rounded-full">Free</span>
                ) : (
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">Pro</span>
                )}
              </div>
              <h2 className="font-bold text-lg mb-2 leading-snug">{course.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{course.description}</p>
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
                <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{course.lessons} lessons</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {course.topics.map((topic) => (
                  <span key={topic} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{topic}</span>
                ))}
              </div>
              <Link
                href={`/learn/${course.slug}`}
                className="flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 mt-auto"
              >
                Start course <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-slate-50 border border-slate-200 p-8 text-center">
          <Star className="w-8 h-8 text-brand-600 mx-auto mb-3" />
          <h2 className="text-xl font-bold mb-2">Unlock all courses with Pro</h2>
          <p className="text-slate-600 mb-4">Get unlimited access to every course, template, and tool on the site.</p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-700 transition-colors"
          >
            View pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
