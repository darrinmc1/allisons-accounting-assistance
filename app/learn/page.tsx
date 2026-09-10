import Link from "next/link"
import { ArrowRight, Clock, BookOpen } from "lucide-react"

const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Free Accounting Courses by Allison's Accounting Assistance",
  "description": "Free accounting courses for small business owners covering bookkeeping basics, tax preparation, payroll, and more.",
  "url": "https://allisonsaccounting.com/learn",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "Bookkeeping Basics for Small Business",
        "description": "Learn the fundamentals of bookkeeping including debits, credits, chart of accounts, and monthly close.",
        "url": "https://allisonsaccounting.com/learn",
        "provider": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance",
          "url": "https://allisonsaccounting.com"
        },
        "educationalLevel": "Beginner",
        "isAccessibleForFree": true,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "Small Business Tax Prep 101",
        "description": "Understand how to prepare for tax season, maximize deductions, and avoid common mistakes.",
        "url": "https://allisonsaccounting.com/learn",
        "provider": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance",
          "url": "https://allisonsaccounting.com"
        },
        "educationalLevel": "Beginner",
        "isAccessibleForFree": true,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "Understanding Your Financial Statements",
        "description": "Learn to read and interpret your profit & loss, balance sheet, and cash flow statement.",
        "url": "https://allisonsaccounting.com/learn",
        "provider": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance",
          "url": "https://allisonsaccounting.com"
        },
        "educationalLevel": "Beginner",
        "isAccessibleForFree": true,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Course",
        "name": "Quarterly Estimated Taxes Made Simple",
        "description": "Step-by-step guide to calculating and paying quarterly estimated taxes to avoid IRS penalties.",
        "url": "https://allisonsaccounting.com/learn",
        "provider": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance",
          "url": "https://allisonsaccounting.com"
        },
        "educationalLevel": "Beginner",
        "isAccessibleForFree": true,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    }
  ]
}

const courses = [
  {
    title: "Bookkeeping Basics for Small Business",
    desc: "Learn the fundamentals of bookkeeping including debits, credits, chart of accounts, and monthly close.",
    duration: "2h 15m",
    lessons: 12,
    level: "Beginner",
    free: true,
    slug: "bookkeeping-basics",
  },
  {
    title: "Small Business Tax Prep 101",
    desc: "Understand how to prepare for tax season, maximize deductions, and avoid common mistakes.",
    duration: "1h 45m",
    lessons: 9,
    level: "Beginner",
    free: true,
    slug: "tax-prep-101",
  },
  {
    title: "Understanding Your Financial Statements",
    desc: "Learn to read and interpret your profit & loss, balance sheet, and cash flow statement.",
    duration: "1h 30m",
    lessons: 8,
    level: "Beginner",
    free: true,
    slug: "financial-statements",
  },
  {
    title: "Quarterly Estimated Taxes Made Simple",
    desc: "Step-by-step guide to calculating and paying quarterly estimated taxes to avoid IRS penalties.",
    duration: "55m",
    lessons: 5,
    level: "Beginner",
    free: true,
    slug: "quarterly-taxes",
  },
  {
    title: "Payroll Fundamentals",
    desc: "Everything you need to know to run payroll correctly — from setup to year-end W-2s.",
    duration: "2h 30m",
    lessons: 14,
    level: "Intermediate",
    free: false,
    slug: "payroll-fundamentals",
  },
  {
    title: "S-Corp Election & Tax Strategy",
    desc: "Is an S-Corp right for your business? Learn how to evaluate, elect, and maximize the tax benefits.",
    duration: "1h 50m",
    lessons: 10,
    level: "Intermediate",
    free: false,
    slug: "scorp-strategy",
  },
]

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Courses</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Learn accounting at your own pace</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Practical, no-jargon courses built for small business owners. Start free — no credit card required.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <div key={course.slug} className="rounded-xl border border-slate-200 p-6 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    course.free
                      ? "bg-green-100 text-green-700"
                      : "bg-brand-100 text-brand-700"
                  }`}
                >
                  {course.free ? "Free" : "Pro"}
                </span>
                <span className="text-xs text-slate-500 font-medium">{course.level}</span>
              </div>
              <h2 className="text-lg font-bold mb-2">{course.title}</h2>
              <p className="text-sm text-slate-600 mb-4 flex-1">{course.desc}</p>
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
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
                href={course.free ? `/learn/${course.slug}` : "/pricing"}
                className="flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                {course.free ? "Start course" : "Unlock with Pro"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-brand-200 bg-brand-50 p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Want access to all courses?</h2>
          <p className="text-sm text-slate-600 mb-4">
            Upgrade to Pro for $29/month and unlock every course, template, and monthly Q&amp;A call.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            See pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
