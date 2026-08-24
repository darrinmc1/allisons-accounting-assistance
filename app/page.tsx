import Link from "next/link"
import { ArrowRight, BookOpen, FileSpreadsheet, Calculator, Star } from "lucide-react"

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Accounting Courses for Small Business Owners",
  "description": "Practical accounting courses and templates created by a licensed CPA.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "Small Business Accounting Fundamentals",
        "url": "https://allisonsaccounting.com/learn",
        "description": "Master the accounting basics every small business owner needs to know.",
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
          "bestRating": "5"
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
        "description": "Learn how to legally minimize your tax burden and keep more of what you earn.",
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
          "bestRating": "5"
        }
      }
    }
  ]
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="border-b bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-4">Allison&apos;s Accounting Assistance</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
              Accounting help built for<br />
              <span className="text-brand-600">small business owners</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Courses, templates, and tools from a licensed CPA who&apos;s been in your shoes.
              No jargon. No gatekeeping. Just practical help that works.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
              >
                Start Learning Free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>Rated 4.9/5 by 300+ small business owners</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">Everything you need to get your books in order</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Practical Courses",
                desc: "Step-by-step accounting courses designed for business owners, not accountants. Start free.",
                href: "/learn",
                label: "Browse courses",
              },
              {
                icon: FileSpreadsheet,
                title: "Ready-to-Use Templates",
                desc: "Spreadsheets and checklists that do the heavy lifting. Download and start using today.",
                href: "/templates",
                label: "Get templates",
              },
              {
                icon: Calculator,
                title: "Free Tools",
                desc: "Tax calculators, payroll estimators, and more — free tools to help you make better decisions.",
                href: "/tools",
                label: "Try the tools",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 p-6">
                <item.icon className="h-8 w-8 text-brand-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
                <Link href={item.href} className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
                  {item.label} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Social proof */}
        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
            <h2 className="text-2xl font-bold text-center mb-10">What small business owners are saying</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  quote: "I finally understand my own books. Allison explains everything in plain English — no accounting degree required.",
                  name: "Sarah M.",
                  role: "Freelance Designer",
                  rating: 5,
                },
                {
                  quote: "The tax strategy course alone saved me over $4,000 last year. Worth every penny and then some.",
                  name: "James T.",
                  role: "Restaurant Owner",
                  rating: 5,
                },
                {
                  quote: "The bookkeeping templates are incredible. I went from dreading my books to actually staying on top of them.",
                  name: "Maria L.",
                  role: "E-commerce Seller",
                  rating: 5,
                },
              ].map((item) => (
                <div key={item.name} className="rounded-xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-0.5 mb-3">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 mb-4 italic">&ldquo;{item.quote}&rdquo;</p>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t">
          <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get your accounting under control?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Join thousands of small business owners who&apos;ve taken control of their finances with Allison&apos;s help.
            </p>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Start with a free course <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
