import type { BlogPost, Course, Lesson } from "@/lib/content/types"

export function courseMinutes(course: Course): number {
  return course.lessons.reduce((sum, lesson) => sum + lesson.minutes, 0)
}

export function formatDuration(totalMinutes: number): string {
  if (totalMinutes < 60) return `${totalMinutes} min read`
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  if (minutes === 0) return hours === 1 ? "1 hour read" : `${hours} hour read`
  return `${hours} hr ${minutes} min read`
}

export function postMinutes(post: BlogPost): number {
  const words = post.blocks.reduce((sum, block) => {
    if (block.type === "p" || block.type === "h2") return sum + block.text.split(/\s+/).length
    if (block.type === "callout") return sum + block.title.split(/\s+/).length + block.text.split(/\s+/).length
    if (block.type === "ul" || block.type === "ol") {
      return sum + block.items.reduce((inner, item) => inner + item.split(/\s+/).length, 0)
    }
    if (block.type === "steps") {
      return sum + block.items.reduce((inner, item) => inner + item.title.split(/\s+/).length + item.text.split(/\s+/).length, 0)
    }
    return sum
  }, 0)
  return Math.max(4, Math.round(words / 200))
}

export function formatDisplayDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number)
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function getLesson(course: Course, slug: string): Lesson | undefined {
  return course.lessons.find((lesson) => lesson.slug === slug)
}

export function adjacentLessons(course: Course, slug: string): {
  previous: Lesson | null
  next: Lesson | null
  index: number
} {
  const index = course.lessons.findIndex((lesson) => lesson.slug === slug)
  return {
    previous: index > 0 ? course.lessons[index - 1] : null,
    next: index >= 0 && index < course.lessons.length - 1 ? course.lessons[index + 1] : null,
    index,
  }
}
