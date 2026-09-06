"use client"

import Link from "next/link"
import { Reveal } from "@/components/home/reveal"

const CARDS = [
  {
    kicker: "01",
    title: "Bookkeeping Basics, then tax and payroll.",
    body: "Bookkeeping Basics is free and written for owners, not staff accountants. Tax, payroll, and cash-flow courses sit next to it on Learn.",
    href: "/learn",
    cta: "Open the courses",
  },
  {
    kicker: "02",
    title: "Templates that match the books.",
    body: "Income statement, balance sheet, and cash flow are free. Invoice, tax-worksheet, and payroll packs are on Templates when you need a working file.",
    href: "/templates",
    cta: "Browse templates",
  },
  {
    kicker: "03",
    title: "Calculators for the math you already owe.",
    body: "Estimated tax, deduction finder, hourly rate, markup, and depreciation live on Tools. They do the arithmetic. They do not file for you.",
    href: "/tools",
    cta: "Open the tools",
  },
] as const

export function WhatYouGet() {
  return (
    <section className="border-b border-craft-border bg-craft-bg">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="md:sticky md:top-20 md:z-10">
          <Reveal>
            <p className="text-sm font-medium text-craft-teal">What you get</p>
            <h2 className="mt-2 max-w-xl text-3xl font-bold tracking-tight text-white">
              Bookkeeping Basics, the worksheets, and the tax math.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="stack-pin pb-8 md:pb-16">
        {CARDS.map((card, index) => (
          <div key={card.kicker} className="stack-slot">
            <article
              className="stack-card mx-auto w-full max-w-3xl px-4 md:px-6"
              style={{ top: `calc(8.5rem + ${index * 0.75}rem)`, zIndex: index + 1 }}
            >
              <div className="rounded-xl border border-craft-border bg-craft-surface p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] md:p-8">
                <p className="text-xs tabular-nums text-craft-teal">{card.kicker}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-craft-muted md:text-base">
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex text-sm font-medium text-brand-400 hover:text-craft-teal"
                >
                  {card.cta}
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
