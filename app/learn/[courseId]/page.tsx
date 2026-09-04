import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { courses, getCourse } from "@/lib/content/courses"
import { courseMinutes, formatDuration } from "@/lib/content/helpers"
import { EducationalDisclaimer } from "@/components/content/educational-disclaimer"

type Props = { params: Promise<{ courseId: string }> }

export function generateStaticParams() {
  return courses.map((course) => ({ courseId: course.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { courseId } = await params
  const course = getCourse(courseId)
  if (!course) return { title: "Course not found" }
  return {
    title: `${course.title} — Allison's Accounting Assistance`,
    description: course.description,
  }
}

export default async function CoursePage({ params }: Props) {
  const { courseId } = await params
  const course = getCourse(courseId)
  if (!course) notFound()

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            <Link href="/learn" className="hover:text-brand-800">
              Courses
            </Link>
          </p>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{course.level}</span>
            {course.free ? (
              <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-bold text-green-700">Free</span>
            ) : (
              <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-bold text-brand-700">Pro</span>
            )}
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{course.title}</h1>
          <p className="text-lg text-slate-600">{course.description}</p>
          <p className="mt-4 text-sm text-slate-500">
            {course.lessons.length} written lessons · {formatDuration(courseMinutes(course))}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <ol className="space-y-3">
          {course.lessons.map((lesson, index) => (
            <li key={lesson.slug}>
              <Link
                href={`/learn/${course.id}/${lesson.slug}`}
                className="block rounded-xl border border-slate-200 p-5 transition-colors hover:border-brand-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Lesson {index + 1} of {course.lessons.length}
                    </p>
                    <h2 className="mt-1 text-lg font-bold">{lesson.title}</h2>
                    <p className="mt-2 text-sm text-slate-600">{lesson.summary}</p>
                  </div>
                  <span className="shrink-0 text-xs text-slate-500">{lesson.minutes} min</span>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Read lesson <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <EducationalDisclaimer />
      </div>
    </div>
  )
}
