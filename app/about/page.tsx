import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">About</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Accounting help from someone who&apos;s been in your shoes</h1>
          <p className="text-lg text-slate-600">
            Every course, template, and tool on this site was created by someone who has done public accounting,
            run their own practice, and helped hundreds of small business owners make sense of their finances.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Why we built this</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Most small business owners know their craft inside and out — but when it comes to accounting,
            they&apos;re lost. They overpay on taxes, keep messy books, and stress out every April.
          </p>
          <p className="text-base text-slate-700 leading-relaxed mt-4">
            Allison&apos;s Accounting Assistance was built to change that. We give you the courses, templates, and tools
            that turn accounting from a terrifying chore into a manageable (sometimes even satisfying) part of running your business.
          </p>
          <p className="text-base text-slate-700 leading-relaxed mt-4">
            Our founder, Allison, is a licensed CPA with over a decade of experience in public accounting
            and small business consulting. She created this site because she got tired of seeing talented business owners
            make the same preventable accounting mistakes year after year.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">What we believe</h2>
          <ul className="space-y-4">
            {[
              { title: "Accounting should be accessible", desc: "No jargon, no gatekeeping, no 'that's just how it's always been done.' We explain everything in plain English." },
              { title: "Good tools make good habits", desc: "The right template or calculator can be the difference between staying on top of your books and falling behind." },
              { title: "Small business owners deserve better", desc: "You work too hard to be confused by your own finances. We help you understand, control, and grow your money." },
            ].map((item) => (
              <li key={item.title} className="rounded-lg border border-slate-200 p-4">
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Empire-HQ Portfolio</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            Allison&apos;s Accounting Assistance is part of the Empire-HQ portfolio. Our sister sites cover the full business toolkit:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { name: "Money Mastery", desc: "Personal finance and tax strategy" },
              { name: "AI for SMB", desc: "AI tools for small business operations" },
              { name: "PM101toPro", desc: "Project management for professionals" },
              { name: "Peel Boss", desc: "Trade business operations" },
            ].map((site) => (
              <a key={site.name} href="#" className="rounded-lg border border-slate-200 p-4 hover:border-brand-300 transition-colors">
                <h3 className="font-bold text-sm">{site.name}</h3>
                <p className="text-xs text-slate-500">{site.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
