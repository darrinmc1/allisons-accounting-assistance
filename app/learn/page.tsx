import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  offerAvailability,
  PAYMENTS_WAITLIST_HREF,
  paymentsEnabled,
} from "@/lib/payments"

const checkoutOpen = paymentsEnabled()
const availability = offerAvailability()

const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Accounting Courses for Small Business Owners",
  "description": "Free and premium accounting courses created by a licensed CPA to help small business owners manage their books, taxes, and finances.",
  "url": "https://allisonsaccounting.com/learn",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "Bookkeeping Basics for Small Business Owners",
        "description": "Learn the fundamentals of bookkeeping: chart of accounts, debits and credits, reconciliation, and more — explained in plain English.",
        "provider": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance",
          "url": "https://allisonsaccounting.com"
        },
        "educationalLevel": "Beginner",
        "teaches": "Bookkeeping fundamentals for small business owners",
        "isAccessibleForFree": true,
        "url": "https://allisonsaccounting.com/learn",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "Small Business Tax Essentials",
        "description": "Understand quarterly estimated taxes, deductions, self-employment tax, and how to prepare for tax season without the stress.",
        "provider": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance",
          "url": "https://allisonsaccounting.com"
        },
        "educationalLevel": "Beginner",
        "teaches": "Small business tax planning and compliance",
        "isAccessibleForFree": false,
        "url": "https://allisonsaccounting.com/learn",
        "offers": {
          "@type": "Offer",
          "price": "29",
          "priceCurrency": "USD",
          "availability": availability
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "Cash Flow Management for Freelancers & Solopreneurs",
        "description": "Master cash flow forecasting, invoicing best practices, and how to build a financial cushion so you never miss payroll — even your own.",
        "provider": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance",
          "url": "https://allisonsaccounting.com"
        },
        "educationalLevel": "Intermediate",
        "teaches": "Cash flow management and forecasting for self-employed individuals",
        "isAccessibleForFree": false,
        "url": "https://allisonsaccounting.com/learn",
        "offers": {
          "@type": "Offer",
          "price": "29",
          "priceCurrency": "USD",
          "availability": availability
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Course",
        "name": "Payroll Setup & Compliance",
        "description": "Step-by-step guidance on setting up payroll for your first employee, understanding payroll taxes, and staying compliant with federal and state rules.",
        "provider": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance",
          "url": "https://allisonsaccounting.com"
        },
        "educationalLevel": "Intermediate",
        "teaches": "Payroll setup, payroll taxes, and compliance for small businesses",
        "isAccessibleForFree": false,
        "url": "https://allisonsaccounting.com/learn",
        "offers": {
          "@type": "Offer",
          "price": "29",
          "priceCurrency": "USD",
          "availability": availability
        }
      }
    }
  ]
}

const courses = [
  {
    title: "Bookkeeping Basics for Small Business Owners",
    level: "Beginner",
    free: true,
    duration: "2.5 hours",
    lessons: 8,
    description: "Learn the fundamentals of bookkeeping: chart of accounts, debits and credits, reconciliation, and more — explained in plain English.",
    tags: ["Bookkeeping", "Fundamentals"],
  },
  {
    title: "Small Business Tax Essentials",
    level: "Beginner",
    free: false,
    duration: "3 hours",
    lessons: 10,
    description: "Understand quarterly estimated taxes, deductions, self-employment tax, and how to prepare for tax season without the stress.",
    tags: ["Taxes", "Deductions"],
  },
  {
    title: "Cash Flow Management for Freelancers & Solopreneurs",
    level: "Intermediate",
    free: false,
    duration: "2 hours",
    lessons: 7,
    description: "Master cash flow forecasting, invoicing best practices, and how to build a financial cushion so you never miss payroll — even your own.",
    tags: ["Cash Flow", "Freelance"],
  },
  {
    title: "Payroll Setup & Compliance",
    level: "Intermediate",
    free: false,
    duration: "2.5 hours",
    lessons: 9,
    description: "Step-by-step guidance on setting up payroll for your first employee, understanding payroll taxes, and staying compliant with federal and state rules.",
    tags: ["Payroll", "Compliance"],
  },
]

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white" data-payments={checkoutOpen ? "live" : "gated"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Courses</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Learn accounting at your own pace</h1>
          <p className="text-lg text-slate-600">
            {checkoutOpen
              ? "Practical, jargon-free courses built for small business owners — not accountants. Start free, upgrade when you&apos;re ready."
              : "Practical, jargon-free courses built for small business owners. Free courses stay open. Pro unlock is on the waitlist until paid checkout is enabled."}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12">
        <div className="space-y-6">
          {courses.map((course) => (
            <div key={course.title} className="rounded-xl border border-slate-200 p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{course.level}</span>
                    {course.free ? (
                      <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">Free</span>
                    ) : (
                      <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full">Pro</span>
                    )}
                  </div>
                  <h2 className="text-lg font-bold">{course.title}</h2>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span>{course.duration}</span>
                  <span>{course.lessons} lessons</span>
                  <div className="flex gap-1">
                    {course.tags.map((tag) => (
                      <span key={tag} className="bg-slate-100 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <Link
                  href={course.free ? "/sign-up" : checkoutOpen ? "/pricing" : PAYMENTS_WAITLIST_HREF}
                  className="flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  {course.free ? "Start free" : checkoutOpen ? "Unlock with Pro" : "Join waitlist"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h2 className="font-bold text-lg mb-2">
            {checkoutOpen ? "Ready to unlock everything?" : "Pro courses are on the waitlist"}
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            {checkoutOpen
              ? "Get access to all courses, templates, and tools with a Pro plan."
              : "Plans stay listed on Pricing. Buy and Stripe stay parked until checkout is enabled."}
          </p>
          <Link
            href={checkoutOpen ? "/pricing" : PAYMENTS_WAITLIST_HREF}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {checkoutOpen ? "View pricing" : "Join waitlist"} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
