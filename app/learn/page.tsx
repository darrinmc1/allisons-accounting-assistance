import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { courseSchemaList, courses } from "@/lib/content/courses"
import { courseMinutes, formatDuration } from "@/lib/content/helpers"

const coursesSchema = courseSchemaList("https://allisonsaccounting.com")

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Courses</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Learn accounting at your own pace</h1>
          <p className="text-lg text-slate-600">
            Practical, jargon-free courses built for small business owners — not accountants. Lesson counts match the written pages on this site.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <div className="space-y-6">
          {courses.map((course) => (
            <div key={course.id} className="rounded-xl border border-slate-200 p-6">
              <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{course.level}</span>
                    {course.free ? (
                      <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-bold text-green-700">Free</span>
                    ) : (
                      <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-bold text-brand-700">Pro</span>
                    )}
                  </div>
                  <h2 className="text-lg font-bold">{course.title}</h2>
                </div>
              </div>
              <p className="mb-4 text-sm text-slate-600">{course.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span>{formatDuration(courseMinutes(course))}</span>
                  <span>
                    {course.lessons.length} {course.lessons.length === 1 ? "lesson" : "lessons"}
                  </span>
                  <div className="flex gap-1">
                    {course.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/learn/${course.id}`}
                  className="flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Open course
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h2 className="mb-2 text-lg font-bold">Written lessons are open</h2>
          <p className="mb-4 text-sm text-slate-600">
            All {courses.reduce((sum, course) => sum + course.lessons.length, 0)} lessons on this site are readable now. Downloadable templates and calculators are Coming Soon — no checkout on those pages.
          </p>
          <Link href="/pricing" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
            View pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
