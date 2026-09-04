import type { Course } from "@/lib/content/types"

export const taxEssentials: Course = {
  id: "tax-essentials",
  title: "Small Business Tax Essentials",
  level: "Beginner",
  free: false,
  description:
    "Understand quarterly estimated taxes, deductions, self-employment tax, and how to prepare for tax season without the stress.",
  tags: ["Taxes", "Deductions"],
  schemaPrice: "29",
  schemaTeaches: "Small business tax planning and compliance",
  lessons: [
    {
      slug: "how-us-small-business-taxes-work",
      title: "How U.S. small-business taxes work",
      minutes: 7,
      summary: "Business profit usually flows to a personal return. The form names change with the entity. The need for records does not.",
      blocks: [
        {
          type: "p",
          text: "In the United States, most small businesses do not pay a separate “business income tax” the way a large C corporation does. Profit typically flows to the owner’s individual return. The form and the extra taxes depend on whether you are a sole proprietor, a partnership, an LLC (and how it is classified), or an S corporation.",
        },
        {
          type: "h2",
          text: "A map, not a filing choice",
        },
        {
          type: "ul",
          items: [
            "Sole proprietor or single-member LLC (default) — profit and loss often reported on Schedule C with Form 1040.",
            "Partnership or multi-member LLC (default) — Form 1065 and a Schedule K-1 to each owner.",
            "S corporation — Form 1120-S, K-1s, and payroll for shareholder-employees when they perform services.",
            "C corporation — Form 1120, with its own tax, plus tax again if earnings are paid as dividends.",
          ],
        },
        {
          type: "p",
          text: "Entity classification, elections, and state taxes are professional decisions. This lesson only names the common reporting paths so the rest of the course has a vocabulary.",
        },
        {
          type: "h2",
          text: "What the IRS is usually looking at",
        },
        {
          type: "p",
          text: "Income you received (or, on accrual, income you earned), expenses that are ordinary and necessary for the business, and information returns that third parties already filed (Forms 1099, W-2, processor reports). Your books should be able to support those numbers. A colorful spreadsheet that does not tie to the bank will not.",
        },
        {
          type: "callout",
          title: "Not advice",
          text: "Do not choose or change an entity, accounting method, or election from this page. Those choices have legal and tax consequences that depend on your facts.",
        },
      ],
    },
    {
      slug: "self-employment-tax",
      title: "Self-employment tax",
      minutes: 6,
      summary: "Self-employment tax is Social Security and Medicare for people who work for themselves. It is separate from income tax.",
      blocks: [
        {
          type: "p",
          text: "Employees see Social Security and Medicare withheld from wages. Self-employed people generally pay a similar combined amount as self-employment tax on net earnings from self-employment. It is computed on Schedule SE in many sole-proprietor situations. It is not the same line as income tax.",
        },
        {
          type: "h2",
          text: "What owners often miss",
        },
        {
          type: "ul",
          items: [
            "A year that “feels small” can still produce a self-employment tax bill if net profit is above the filing threshold.",
            "Estimated payments (next lessons) often need to cover income tax and self-employment tax together.",
            "S corporation wages, if any, are handled through payroll, not Schedule SE on the same dollars. That is an entity and compensation topic for a CPA.",
            "Retirement contributions, health insurance, and other adjustments can change taxable income. They do not automatically erase self-employment tax.",
          ],
        },
        {
          type: "h2",
          text: "A bookkeeping habit that helps later",
        },
        {
          type: "p",
          text: "Keep owner draws separate from expenses so net profit is not understated. Understating profit by calling draws “expenses” does not reduce tax in a way that survives review. It produces a file your preparer has to unwind.",
        },
        {
          type: "callout",
          title: "Rates and thresholds change",
          text: "Do not memorize a percentage from a blog post as your bill. Use current IRS instructions or a preparer’s estimate for the year you are in.",
        },
      ],
    },
    {
      slug: "quarterly-estimated-taxes",
      title: "Quarterly estimated taxes",
      minutes: 7,
      summary: "If you expect to owe tax and nothing is being withheld, the IRS generally expects payments during the year — not only in April.",
      blocks: [
        {
          type: "p",
          text: "Estimated taxes are prepayments of income tax and, for many owners, self-employment tax. They are usually due in four installments (the calendar is published by the IRS each year). Missing them can lead to an underpayment penalty even if you pay in full with the return.",
        },
        {
          type: "h2",
          text: "Who this usually applies to",
        },
        {
          type: "p",
          text: "Owners with little or no withholding — sole proprietors, partners, and many LLC members — are the common group. W-2 wages from another job can reduce or eliminate the need for estimates. That is a calculation, not a slogan.",
        },
        {
          type: "h2",
          text: "How people estimate without inventing a number",
        },
        {
          type: "ol",
          items: [
            "Start from last year’s tax and this year’s year-to-date profit, not from a round number that “feels safe.”",
            "Use the IRS estimated-tax instructions and worksheets, or a projection from your CPA.",
            "Pay through IRS Direct Pay, EFTPS, or the method your preparer specifies. Keep the confirmation.",
            "Record the payment in the books the way your preparer wants it presented — often not as an operating expense.",
          ],
        },
        {
          type: "callout",
          title: "Safe harbor is a rule, not a promise",
          text: "The IRS describes safe-harbor tests that can reduce underpayment penalties when you pay a required portion of last year’s tax or this year’s tax. Whether a safe harbor applies to you is a facts-and-year question. This lesson does not compute your payment.",
        },
      ],
    },
    {
      slug: "ordinary-and-necessary-expenses",
      title: "Ordinary and necessary expenses",
      minutes: 6,
      summary: "A deductible business expense is generally ordinary and necessary for the trade or business — and documented.",
      blocks: [
        {
          type: "p",
          text: "U.S. tax rules generally allow a deduction for ordinary and necessary expenses paid or incurred in carrying on a trade or business. “Ordinary” means common and accepted in your type of business. “Necessary” means helpful and appropriate — not indispensable. Those words come from long-standing tax concepts. They are not a license to deduct personal living costs.",
        },
        {
          type: "h2",
          text: "Examples of the distinction, not a deduction list",
        },
        {
          type: "ul",
          items: [
            "A laptop used only for client work is in a different category from a television in the living room.",
            "Software that produces invoices is different from a personal streaming subscription.",
            "A meal with a documented business purpose is different from family dinner.",
            "Continuing education in your field is different from a hobby course.",
          ],
        },
        {
          type: "h2",
          text: "What bookkeeping can and cannot do",
        },
        {
          type: "p",
          text: "Bookkeeping can keep the receipt, the amount, and a memo. It cannot turn a personal cost into a business cost. If an item is mixed-use, your preparer may need an allocation. Do not invent a percentage to make the P&L look leaner.",
        },
        {
          type: "callout",
          title: "This is not a claim list",
          text: "Nothing on this site is a determination that a specific cost is deductible on your return.",
        },
      ],
    },
    {
      slug: "home-office",
      title: "Home office — the idea, not the election",
      minutes: 6,
      summary: "A home office deduction has tests. Regular and exclusive business use of a space is the core idea. The computation is for a preparer.",
      blocks: [
        {
          type: "p",
          text: "Some owners may be able to deduct expenses related to the business use of a home if they meet the IRS tests, including regular and exclusive use of a space for business and, in many cases, that the space is the principal place of business. Employees have a different, usually narrower, set of rules. This lesson explains the idea so you can keep better records. It does not tell you to claim the deduction.",
        },
        {
          type: "h2",
          text: "Records that make a later conversation possible",
        },
        {
          type: "ul",
          items: [
            "A simple floor plan or measurements of the space used for business.",
            "Photos or a description that show the space is not a guest room on weekends.",
            "Mortgage interest, rent, utilities, insurance, and repairs — kept as household documents, not dumped into “office expense.”",
            "A note on whether you use the simplified method or actual expenses — a choice your preparer should walk through.",
          ],
        },
        {
          type: "callout",
          title: "Exclusive use is stricter than it sounds",
          text: "A dining table that is also dinner is usually not exclusive. Do not stretch the definition to fit a corner of a couch.",
        },
      ],
    },
    {
      slug: "vehicle-and-mileage",
      title: "Vehicle and mileage",
      minutes: 6,
      summary: "Business driving can be tracked with a mileage log or, in some cases, actual vehicle expenses. Mixing personal and business miles without a log is how the support disappears.",
      blocks: [
        {
          type: "p",
          text: "If you use a vehicle for business, the tax treatment generally follows either a standard mileage method or an actual-expense method, with commuting and personal miles treated differently from business miles. The methods have eligibility rules and switching limits. A CPA should tell you which method your file can support.",
        },
        {
          type: "h2",
          text: "A log that is actually useful",
        },
        {
          type: "ul",
          items: [
            "Date, starting point, destination, business purpose, and miles.",
            "Recorded near the trip, not reconstructed from memory in March.",
            "A year-end odometer reading.",
            "A clear split between commuting, personal, and business.",
          ],
        },
        {
          type: "p",
          text: "A calendar app or a dedicated mileage app can help if you review it monthly. An empty log and a round-number claim is a weak file.",
        },
        {
          type: "callout",
          title: "Rates change",
          text: "The IRS publishes standard mileage rates by year and sometimes by period. Do not reuse last year’s rate without checking the current year’s instructions.",
        },
      ],
    },
    {
      slug: "equipment-and-depreciation-overview",
      title: "Equipment and depreciation (overview)",
      minutes: 6,
      summary: "Some purchases are assets that are recovered over time. Section 179 and bonus depreciation are elections with limits — not automatic write-offs you apply from a headline.",
      blocks: [
        {
          type: "p",
          text: "A $30 software subscription and a $8,000 machine are not the same kind of cost. Many larger items are capital assets. Tax depreciation (including possible Section 179 or bonus depreciation) is a set of rules and elections. Bookkeeping’s job is to record what you bought, what you paid, when you placed it in service, and where the item is.",
        },
        {
          type: "h2",
          text: "What to capture when you buy equipment",
        },
        {
          type: "ol",
          items: [
            "Invoice: vendor, description, amount, date paid.",
            "Date placed in service — when it is ready and available for use, not when you clicked “buy.”",
            "Business-use percentage if the item is mixed-use.",
            "Serial number or location if you will need to find it later.",
          ],
        },
        {
          type: "p",
          text: "Do not expense a capital item as “supplies” to make this year’s profit look lower unless your CPA has told you that treatment is correct for that item and year.",
        },
        {
          type: "callout",
          title: "Depreciation calculators on this site",
          text: "The depreciation tool listed in the catalog is not live. Coming Soon. This lesson does not compute MACRS, Section 179, or bonus depreciation for your assets.",
        },
      ],
    },
    {
      slug: "recordkeeping-for-tax-time",
      title: "Recordkeeping for tax time",
      minutes: 6,
      summary: "A preparer can work faster — and more accurately — when the books already tie to the bank and the documents are findable.",
      blocks: [
        {
          type: "p",
          text: "Tax time is when weak books become expensive. The return is built from income, expenses, assets, and information returns. If those pieces do not tie, someone pays in hours or in positions that cannot be supported.",
        },
        {
          type: "h2",
          text: "A year-end packet that respects the preparer’s time",
        },
        {
          type: "ul",
          items: [
            "Reconciled bank and card accounts through December 31.",
            "Profit-and-loss and balance sheet for the year.",
            "Loan statements and a list of new equipment.",
            "Payroll reports, Forms W-2, and 1099s you issued or received.",
            "Processor annual summaries (Stripe, PayPal, Square) compared to sales in the books.",
            "A short note on anything unusual: a disaster, a lawsuit, a related-party loan, a late 1099.",
          ],
        },
        {
          type: "callout",
          title: "Matching Forms 1099-K and 1099-NEC",
          text: "Third-party reports may not equal your sales. Refunds, personal sales, and timing differences are common. Reconcile the difference. Do not ignore a form because “it looks high.”",
        },
      ],
    },
    {
      slug: "1099-versus-w2-basics",
      title: "1099 versus W-2 basics",
      minutes: 6,
      summary: "Workers are classified as employees or independent contractors based on facts, not on a preference for less paperwork.",
      blocks: [
        {
          type: "p",
          text: "A Form W-2 reports wages to an employee. A Form 1099-NEC often reports nonemployee compensation to a contractor. The form follows the classification. You do not choose the cheaper form and then hope the relationship matches.",
        },
        {
          type: "h2",
          text: "Why classification is not a bookkeeping shortcut",
        },
        {
          type: "p",
          text: "Employee status generally brings income-tax withholding, Social Security and Medicare, unemployment tax, and a set of labor rules. Contractor status generally does not. Misclassification can create back taxes, penalties, and state issues. The IRS and state agencies look at behavioral control, financial control, and the nature of the relationship — not at the label on an invoice.",
        },
        {
          type: "ul",
          items: [
            "If you control how, when, and where the work is done, that leans toward employee.",
            "If the person has a true independent business, multiple clients, and their own tools, that leans toward contractor.",
            "Written contracts help document intent. They do not override the facts.",
          ],
        },
        {
          type: "callout",
          title: "Ask before the first payday",
          text: "Classification is a legal and tax question. Get a professional answer before you run a year of payments through the wrong process.",
        },
      ],
    },
    {
      slug: "preparing-for-tax-season-with-your-preparer",
      title: "Preparing for tax season with your preparer",
      minutes: 5,
      summary: "A clean file, a calendar, and a written question list are more useful than a last-week document dump.",
      blocks: [
        {
          type: "p",
          text: "Your preparer cannot invent support you did not keep. The work you do from January through December is the work that makes April quieter.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Book the engagement early",
              text: "Ask what they need and when. Extensions are a filing deadline tool, not a recordkeeping plan.",
            },
            {
              title: "Close December before you send the file",
              text: "Reconcile, review the P&L, and fix owner-draw and loan coding first.",
            },
            {
              title: "Send documents in one indexed packet",
              text: "A shared folder with clear names beats twelve email threads.",
            },
            {
              title: "Separate questions from documents",
              text: "Write the decisions you need (entity, retirement, estimated payments for next year) as a list. Do not bury them in a receipt photo.",
            },
          ],
        },
        {
          type: "p",
          text: "This course ends where professional work begins. Use the lessons to arrive with a file you can explain. Use a licensed professional to decide what goes on the return.",
        },
      ],
    },
  ],
}
