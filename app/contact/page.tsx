import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 mb-3">Contact</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Get in touch</h1>
          <p className="text-lg text-slate-600">
            Questions about templates? Need help with your books? Want to book a Setup Session? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {[
            { title: "General Questions", email: "hello@allisonsaccounting.com", desc: "Course questions, pricing, or just saying hello" },
            { title: "Support", email: "support@allisonsaccounting.com", desc: "Technical issues, download problems, refunds" },
            { title: "Book a Session", email: "sessions@allisonsaccounting.com", desc: "1:1 strategy sessions and custom setups" },
            { title: "Partnerships", email: "partners@allisonsaccounting.com", desc: "Empire-HQ cross-promotion and affiliates" },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-slate-500 mb-2">{item.desc}</p>
              <a href={`mailto:${item.email}`} className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                {item.email}
              </a>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="font-bold text-lg mb-2">Prefer self-service?</h2>
          <p className="text-sm text-slate-600 mb-4">
            Most questions are answered in our FAQ, courses, and templates. Check out these links first:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/pricing" className="text-sm font-semibold text-brand-600 hover:text-brand-700">Pricing & Plans</Link>
            <Link href="/learn" className="text-sm font-semibold text-brand-600 hover:text-brand-700">Free Courses</Link>
            <Link href="/templates" className="text-sm font-semibold text-brand-600 hover:text-brand-700">Template Catalog</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
