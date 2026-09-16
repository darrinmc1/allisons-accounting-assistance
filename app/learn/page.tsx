import Link from "next/link"
import { ArrowRight } from "lucide-react"

const courses = [
  {
    title: "Bookkeeping Basics for Australian Small Business",
    level: "Beginner",
    duration: "Self-paced",
    lessons: 8,
    description: "Learn the core bookkeeping workflow: source documents, chart of accounts, reconciliations, month-end checks and clean records.",
    tags: ["Bookkeeping", "Records"],
  },
  {
    title: "BAS & GST Fundamentals",
    level: "Beginner",
    duration: "Self-paced",
    lessons: 8,
    description: "Understand GST language, BAS preparation workflows and the records you need to keep organised before lodgement.",
    tags: ["GST", "BAS", "ATO"],
  },
  {
    title: "Cash Flow for Small Business",
    level: "Beginner",
    duration: "Self-paced",
    lessons: 7,
    description: "Build a simple cash-flow forecast covering receipts, suppliers, payroll, tax and other business obligations.",
    tags: ["Cash Flow", "Forecasting"],
  },
  {
    title: "Payroll, STP & PAYG Workflow",
    level: "Intermediate",
    duration: "Self-paced",
    lessons: 9,
    description: "A practical overview of payroll records, PAYG withholding, Single Touch Payroll reporting and employer super workflows.",
    tags: ["Payroll", "STP", "PAYG"],
  },
  {
    title: "Australian Business Structures",
    level: "Beginner",
    duration: "Self-paced",
    lessons: 6,
    description: "Understand the practical accounting differences between operating as a sole trader, partnership, company or trust before seeking advice on the right structure for you.",
    tags: ["Structure", "Records"],
  },
]

const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Australian Small Business Accounting Guides",
  description: "Free educational guides covering bookkeeping, BAS, GST, cash flow, payroll, STP and PAYG concepts for Australian small businesses.",
  itemListElement: courses.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Course",
      name: course.title,
      description: course.description,
      provider: { "@type": "Organization", name: "Allison's Accounting Assistance" },
      educationalLevel: course.level,
      isAccessibleForFree: true,
    },
  })),
}

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }} />
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Australian small-business guides</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Understand the accounting workflow at your own pace</h1>
          <p className="text-lg text-slate-600">Free, plain-English education around the records, reports and obligations Australian small businesses regularly encounter.</p>
          <p className="mt-4 text-sm text-slate-500">General information only. For personalised tax, BAS, structure or lodgement advice, use an appropriately registered adviser.</p>
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
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">Free</span>
                  </div>
                  <h2 className="text-lg font-bold">{course.title}</h2>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">{course.description}</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span>{course.duration}</span>
                  <span>{course.lessons} lessons planned</span>
                  {course.tags.map((tag) => <span key={tag} className="bg-slate-100 px-2 py-0.5 rounded-full">{tag}</span>)}
                </div>
                <Link href="/sign-up" className="flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">Start free <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Paid access is not being promoted yet</h2>
          <p className="text-sm text-slate-600 mb-4">The focus is getting the Australian curriculum and tools right first. Pricing will only be published once checkout is live and tested.</p>
          <Link href="/templates" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">Browse free templates <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </div>
  )
}
