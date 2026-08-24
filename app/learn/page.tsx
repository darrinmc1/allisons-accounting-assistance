import Link from "next/link"
import { ArrowRight, Clock, Star, BookOpen } from "lucide-react"

const learnSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Accounting Courses for Small Business Owners",
  "url": "https://allisonsaccounting.com/learn",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "Small Business Accounting Fundamentals",
        "url": "https://allisonsaccounting.com/learn",
        "description": "Master the accounting basics every small business owner needs: debits, credits, financial statements, and more.",
        "provider": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance",
          "url": "https://allisonsaccounting.com"
        },
        "instructor": {
          "@type": "Person",
          "name": "Allison",
          "jobTitle": "Licensed CPA",
          "description": "Licensed CPA with over 10 years of experience in public accounting and small business consulting."
        },
        "timeRequired": "PT3H",
        "educationalLevel": "Beginner",
        "teaches": "Small business accounting fundamentals, financial statements, bookkeeping basics",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "Tax Strategy for Small Business Owners",
        "url": "https://allisonsaccounting.com/learn",
        "description": "Learn how to legally minimize your tax burden, maximize deductions, and keep more of what you earn.",
        "provider": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance",
          "url": "https://allisonsaccounting.com"
        },
        "instructor": {
          "@type": "Person",
          "name": "Allison",
          "jobTitle": "Licensed CPA",
          "description": "Licensed CPA with over 10 years of experience in public accounting and small business consulting."
        },
        "timeRequired": "PT4H",
        "educationalLevel": "Intermediate",
        "teaches": "Tax deductions, S-Corp election, quarterly estimated taxes, tax planning strategies",
        "offers": {
          "@type": "Offer",
          "price": "97",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "94",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "Bookkeeping Bootcamp",
        "url": "https://allisonsaccounting.com/learn",
        "description": "Set up and maintain clean books from day one. Covers chart of accounts, reconciliation, and monthly close.",
        "provider": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance",
          "url": "https://allisonsaccounting.com"
        },
        "instructor": {
          "@type": "Person",
          "name": "Allison",
          "jobTitle": "Licensed CPA",
          "description": "Licensed CPA with over 10 years of experience in public accounting and small business consulting."
        },
        "timeRequired": "PT5H",
        "educationalLevel": "Beginner",
        "teaches": "Bookkeeping, chart of accounts, bank reconciliation, monthly financial close",
        "offers": {
          "@type": "Offer",
          "price": "67",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "83",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Course",
        "name": "Payroll Essentials",
        "url": "https://allisonsaccounting.com/learn",
        "description": "Everything you need to know to run payroll for your small business, including your first employee.",
        "provider": {
          "@type": "Organization",
          "name": "Allison's Accounting Assistance",
          "url": "https://allisonsaccounting.com"
        },
        "instructor": {
          "@type": "Person",
          "name": "Allison",
          "jobTitle": "Licensed CPA"
        },
        "timeRequired": "PT2H30M",
        "educationalLevel": "Beginner",
        "teaches": "Payroll setup, payroll taxes, employee classification, payroll compliance",
        "offers": {
          "@type": "Offer",
          "price": "67",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "61",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    }
  ]
}

const courses = [
  {
    title: "Small Business Accounting Fundamentals",
    desc: "Master the accounting basics every small business owner needs: debits, credits, financial statements, and more.",
    level: "Beginner",
    duration: "3 hours",
    price: "Free",
    rating: 4.9,
    reviews: 127,
    tags: ["Bookkeeping", "Basics"],
  },
  {
    title: "Tax Strategy for Small Business Owners",
    desc: "Learn how to legally minimize your tax burden, maximize deductions, and keep more of what you earn.",
    level: "Intermediate",
    duration: "4 hours",
    price: "$97",
    rating: 4.8,
    reviews: 94,
    tags: ["Taxes", "Strategy"],
  },
  {
    title: "Bookkeeping Bootcamp",
    desc: "Set up and maintain clean books from day one. Covers chart of accounts, reconciliation, and monthly close.",
    level: "Beginner",
    duration: "5 hours",
    price: "$67",
    rating: 4.9,
    reviews: 83,
    tags: ["Bookkeeping", "Setup"],
  },
  {
    title: "Payroll Essentials",
    desc: "Everything you need to know to run payroll for your small business, including your first employee.",
    level: "Beginner",
    duration: "2.5 hours",
    price: "$67",
    rating: 4.7,
    reviews: 61,
    tags: ["Payroll", "Employees"],
  },
  {
    title: "Understanding Financial Statements",
    desc: "Learn to read and interpret your P&L, balance sheet, and cash flow statement like a pro.",
    level: "Beginner",
    duration: "2 hours",
    price: "Free",
    rating: 4.8,
    reviews: 109,
    tags: ["Financial Statements", "Basics"],
  },
  {
    title: "S-Corp Election & Savings",
    desc: "Is an S-Corp right for your business? Learn how to evaluate, elect, and maximize the tax savings.",
    level: "Advanced",
    duration: "3.5 hours",
    price: "$97",
    rating: 4.9,
    reviews: 72,
    tags: ["S-Corp", "Tax Savings"],
  },
]

export default function LearnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(learnSchema) }}
      />
      <div className="min-h-screen bg-white">
        <div className="border-b bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Courses</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Learn accounting at your own pace</h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Practical courses taught by a licensed CPA. No jargon, no fluff — just the accounting knowledge
              your business actually needs.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 md:px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <div key={course.title} className="rounded-xl border border-slate-200 p-6 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-bold text-lg leading-snug">{course.title}</h2>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    course.price === "Free"
                      ? "bg-green-100 text-green-700"
                      : "bg-brand-100 text-brand-700"
                  }`}>
                    {course.price}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-4 flex-1">{course.desc}</p>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="h-3.5 w-3.5" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <BookOpen className="h-3.5 w-3.5" /> {course.level}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {course.rating} ({course.reviews} reviews)
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">{tag}</span>
                  ))}
                </div>
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  {course.price === "Free" ? "Start for free" : "Enroll now"} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-brand-200 bg-brand-50 p-6 text-center">
            <h2 className="font-bold text-lg mb-2">All courses taught by a licensed CPA</h2>
            <p className="text-sm text-slate-600 mb-4">
              Allison has 10+ years of experience in public accounting and small business consulting.
              Every course is built from real-world experience, not textbooks.
            </p>
            <Link href="/about" className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
              Learn about Allison <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
