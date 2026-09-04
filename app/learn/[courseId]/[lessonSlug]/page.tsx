import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ContentBlocks } from "@/components/content/content-blocks"
import { EducationalDisclaimer } from "@/components/content/educational-disclaimer"
import { courses, getCourse } from "@/lib/content/courses"
import { adjacentLessons, getLesson } from "@/lib/content/helpers"

type Props = { params: Promise<{ courseId: string; lessonSlug: string }> }

export function generateStaticParams() {
  return courses.flatMap((course) =>
    course.lessons.map((lesson) => ({
      courseId: course.id,
      lessonSlug: lesson.slug,
    })),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { courseId, lessonSlug } = await params
  const course = getCourse(courseId)
  const lesson = course ? getLesson(course, lessonSlug) : undefined
  if (!course || !lesson) return { title: "Lesson not found" }
  return {
    title: `${lesson.title} — ${course.title}`,
    description: lesson.summary,
  }
}

export default async function LessonPage({ params }: Props) {
  const { courseId, lessonSlug } = await params
  const course = getCourse(courseId)
  if (!course) notFound()
  const lesson = getLesson(course, lessonSlug)
  if (!lesson) notFound()
  const { previous, next, index } = adjacentLessons(course, lessonSlug)

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            <Link href={`/learn/${course.id}`} className="hover:text-brand-800">
              {course.title}
            </Link>
          </p>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Lesson {index + 1} of {course.lessons.length} · {lesson.minutes} min read · written
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{lesson.title}</h1>
          <p className="mt-3 text-base text-slate-600">{lesson.summary}</p>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <ContentBlocks blocks={lesson.blocks} />
        <EducationalDisclaimer />

        <nav className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
          {previous ? (
            <Link
              href={`/learn/${course.id}/${previous.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              <ArrowLeft className="h-4 w-4" />
              {previous.title}
            </Link>
          ) : (
            <Link href={`/learn/${course.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-700">
              <ArrowLeft className="h-4 w-4" />
              Course outline
            </Link>
          )}
          {next ? (
            <Link
              href={`/learn/${course.id}/${next.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:text-right"
            >
              {next.title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link href="/learn" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-700">
              All courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </nav>
      </article>
    </div>
  )
}
