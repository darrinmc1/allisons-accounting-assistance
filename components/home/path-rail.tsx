"use client"

import Link from "next/link"
import { Reveal } from "@/components/home/reveal"

const CHIPS = [
  { label: "Bookkeeping", href: "/learn" },
  { label: "Tax prep", href: "/learn" },
  { label: "Payroll", href: "/learn" },
  { label: "Business setup", href: "/learn" },
] as const

const COURSES = [
  {
    title: "Bookkeeping Basics for Small Business Owners",
    href: "/learn",
    meta: "Written course · Beginner · free",
  },
  {
    title: "Small Business Tax Essentials",
    href: "/learn",
    meta: "Written course · Beginner",
  },
  {
    title: "Payroll Setup & Compliance",
    href: "/learn",
    meta: "Written course · Intermediate",
  },
  {
    title: "Cash Flow Management for Freelancers & Solopreneurs",
    href: "/learn",
    meta: "Written course · Intermediate",
  },
] as const

export function PathRail() {
  return (
    <section className="border-b border-craft-border bg-craft-bg py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <p className="text-sm font-medium text-craft-teal">Written courses</p>
          <h2 className="mt-2 max-w-xl text-3xl font-bold tracking-tight text-white">
            Courses you can open, not a catalog of blanks.
          </h2>
          <p className="mt-3 max-w-xl text-craft-muted">
            Four courses are listed on the Learn page. We will not invent a
            student count or a completion rate to dress them up.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {CHIPS.map((chip, i) => (
            <Reveal key={chip.label} className={`stagger-${i + 1}`}>
              <Link
                href={chip.href}
                className="inline-flex rounded-full border border-craft-border bg-craft-surface px-4 py-1.5 text-sm text-craft-fg transition-colors hover:border-brand-500/50 hover:bg-craft-raised"
              >
                {chip.label}
              </Link>
            </Reveal>
          ))}
        </div>

        <ol className="mt-8 grid gap-3 sm:grid-cols-2">
          {COURSES.map((course, i) => (
            <li key={course.title}>
              <Reveal className={`stagger-${Math.min(i + 1, 4)}`}>
                <Link
                  href={course.href}
                  className="block rounded-xl border border-craft-border bg-craft-surface p-5 transition-colors hover:border-brand-500/40 hover:bg-craft-raised"
                >
                  <p className="text-xs text-craft-muted">{course.meta}</p>
                  <p className="mt-1 text-base font-semibold text-white">{course.title}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
