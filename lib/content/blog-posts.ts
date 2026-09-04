import type { BlogPost } from "@/lib/content/types"

export const blogPosts: BlogPost[] = [
  {
    slug: "missed-tax-deductions",
    title: "5 Small Business Tax Deductions You're Probably Missing",
    excerpt:
      "Most small business owners leave thousands of dollars on the table every year. Here are the five most commonly missed deductions and how to claim them.",
    date: "2026-07-25",
    author: "Allison's Accounting Team",
    tags: ["Taxes", "Deductions"],
    blocks: [
      {
        type: "p",
        text: "Owners often under-document costs that tax rules may allow as ordinary and necessary business expenses. This article names five areas that show up often in messy files. It is educational bookkeeping and accounting support. It is not a determination that you can deduct any item, and it is not tax advice. Confirm each item with a CPA who has your records.",
      },
      {
        type: "h2",
        text: "1. Mixed-use technology and phone",
      },
      {
        type: "p",
        text: "A phone, hotspot, or cloud plan used for clients is easy to pay from a personal account and never enter the books. If the business pays a documented business share, keep the bill and a reasonable allocation. If the owner pays personally, the books should show either a reimbursement or an owner contribution — not silence. The deductible portion, if any, is a tax question.",
      },
      {
        type: "h2",
        text: "2. Retirement plan contributions you never discussed",
      },
      {
        type: "p",
        text: "SEP IRAs, SIMPLE IRAs, and solo 401(k) plans have different limits, deadlines, and payroll interactions. Many sole proprietors never ask whether a plan is available for their year. That conversation belongs with a CPA or a plan provider. Bookkeeping’s job is to record contributions correctly when they happen — usually not as a random “misc expense.”",
      },
      {
        type: "h2",
        text: "3. Health insurance and related premiums",
      },
      {
        type: "p",
        text: "Self-employed health insurance has specific eligibility rules. Partnerships and S corporations have still more. Do not post personal premiums as a Schedule C expense just because the business account paid them. Give your preparer the Form 1095 and the entity facts.",
      },
      {
        type: "h2",
        text: "4. Home-office costs sitting in household piles",
      },
      {
        type: "p",
        text: "Rent, utilities, and insurance live in personal files. If you may qualify for a home-office deduction, those documents still need to exist. The Tax Essentials lesson on home office explains the exclusive-use idea. Do not invent a square-footage percentage to “claim something.”",
      },
      {
        type: "h2",
        text: "5. Startup and organizational costs from year one",
      },
      {
        type: "p",
        text: "Costs incurred before the business began operations are often treated differently from ordinary expenses. Owners throw formation fees, deposits, and pre-opening ads into year-one supplies. Keep a dated list. Your preparer will decide capitalization, amortization, or expense treatment.",
      },
      {
        type: "callout",
        title: "How to use this list",
        text: "Walk the five items with your books and your CPA. The goal is a supported file, not a larger deduction at any cost.",
      },
    ],
  },
  {
    slug: "bookkeeping-vs-accounting",
    title: "Bookkeeping vs Accounting: What's the Difference?",
    excerpt:
      "They're not the same thing — and understanding the difference can save you time, money, and headaches at tax time.",
    date: "2026-07-20",
    author: "Allison's Accounting Team",
    tags: ["Bookkeeping", "Basics"],
    blocks: [
      {
        type: "p",
        text: "Bookkeeping is the recording of transactions: invoices, bills, payments, deposits, and reconciliations. Accounting is the framework that turns those records into reports, estimates, and — when a licensed professional is engaged — tax positions and financial statements a third party can rely on. Owners who blur the words often skip the recording step and then expect a CPA to reconstruct a year in two weeks.",
      },
      {
        type: "h2",
        text: "What bookkeeping produces",
      },
      {
        type: "ul",
        items: [
          "A chart of accounts and a transaction register.",
          "Reconciled cash and credit-card accounts.",
          "A profit-and-loss statement and a balance sheet you can explain.",
          "Source documents attached or filed.",
        ],
      },
      {
        type: "h2",
        text: "What accounting adds",
      },
      {
        type: "ul",
        items: [
          "Adjusting entries (depreciation, prepaid items, accruals) when the method requires them.",
          "Method choices: cash versus accrual, inventory, long-term contracts.",
          "Tax return presentation, elections, and estimates.",
          "Advice that depends on your entity and the current Internal Revenue Code.",
        ],
      },
      {
        type: "p",
        text: "You can learn bookkeeping in the free Bookkeeping Basics course on this site. Accounting judgments — especially tax — belong with a CPA or enrolled agent. Allison’s Accounting Assistance teaches the language. It does not sign returns.",
      },
      {
        type: "callout",
        title: "A practical split",
        text: "Keep the books monthly. Hire review help when you cannot reconcile, when you add payroll, or when you need a return. Do not wait until April to start either job.",
      },
    ],
  },
  {
    slug: "should-you-switch-to-scorp",
    title: "Should You Switch to an S-Corp? A Practical Guide",
    excerpt:
      "The S-Corp election can save you thousands in self-employment tax — but it's not right for everyone. Here's how to decide.",
    date: "2026-07-15",
    author: "Allison's Accounting Team",
    tags: ["Business Structure", "Taxes"],
    blocks: [
      {
        type: "p",
        text: "An S corporation is a tax election, usually filed on Form 2553, not a magical entity you get by renaming an LLC. Some owners use it to split compensation into wages (subject to payroll tax) and distributions (generally not subject to self-employment tax). That split is tightly regulated. Reasonable compensation, eligibility, state taxes, and payroll cost can erase a paper savings.",
      },
      {
        type: "h2",
        text: "Questions a professional will actually ask",
      },
      {
        type: "ol",
        items: [
          "Is the owner eligible (eligible shareholders, one class of stock, timely election)?",
          "What is reasonable compensation for the work the owner performs?",
          "What will payroll, unemployment, workers’ compensation, and extra accounting cost each year?",
          "How does your state tax S corporations and the owner’s wages?",
          "Is profit stable enough that the extra structure is worth the compliance?",
        ],
      },
      {
        type: "h2",
        text: "What this site will not do",
      },
      {
        type: "p",
        text: "We will not tell you to elect S corporation status. We will not estimate your savings. Those sentences in marketing copy are not a filing position. If you are considering the election, bring last year’s return, a current P&L, and a description of your role to a CPA. If you already operate as an S corporation, run payroll for shareholder-employees who work in the business — do not take only distributions.",
      },
      {
        type: "callout",
        title: "Educational only",
        text: "Entity choice and tax elections are legal and tax decisions. This article is background so you can have that meeting without starting from zero.",
      },
    ],
  },
  {
    slug: "first-employee-payroll-guide",
    title: "How to Set Up Payroll for Your First Employee",
    excerpt:
      "Hiring your first employee is exciting — and terrifying. Here's the step-by-step payroll setup process so you don't miss anything.",
    date: "2026-07-10",
    author: "Allison's Accounting Team",
    tags: ["Payroll", "Employees"],
    blocks: [
      {
        type: "p",
        text: "The Payroll Setup & Compliance course on this site walks through EIN and state accounts, I-9 and W-4, gross-to-net pay, employer taxes, stubs, and year-end forms. This article is the short path: a sequence you can hand to a payroll provider. It is not a substitute for that provider or for employment-law advice.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Classify the worker",
            text: "Employee versus contractor is a facts test. Get it right before you pick software.",
          },
          {
            title: "Get federal and state employer accounts",
            text: "EIN, state withholding, state unemployment, and any local programs. Keep the confirmation letters.",
          },
          {
            title: "Collect the first-week forms",
            text: "I-9, W-4, state withholding form, direct deposit, new-hire report.",
          },
          {
            title: "Choose a payroll service",
            text: "Have it calculate withholdings, deposit taxes, and file Forms 941 and W-2. Review the first two registers yourself.",
          },
          {
            title: "Book the payday",
            text: "Wage expense, employer tax expense, and liabilities that clear when deposits leave the bank.",
          },
        ],
      },
      {
        type: "p",
        text: "Open the written course for the longer explanations. There is no live payroll tool on this site. Coming Soon items in Tools and Templates are catalog listings, not software.",
      },
    ],
  },
  {
    slug: "solo-401k-tax-savings",
    title: "The Solo 401(k): A Hidden Tax Superpower for Freelancers",
    excerpt:
      "If you're self-employed and not using a Solo 401(k), you're leaving thousands in tax savings on the table. Here's why it's better than a SEP IRA.",
    date: "2026-07-05",
    author: "Allison's Accounting Team",
    tags: ["Retirement", "Tax Savings"],
    blocks: [
      {
        type: "p",
        text: "A solo 401(k) (sometimes called an individual 401(k)) is a retirement plan designed for a business owner with no employees other than a spouse in many setups. It can allow both an employee deferral and an employer contribution, subject to annual IRS limits and compensation rules. A SEP IRA is simpler for some owners and has different contribution mechanics. Neither plan is automatically “better.” The catalog title on this post is historical; the body stays factual.",
      },
      {
        type: "h2",
        text: "Differences owners ask about",
      },
      {
        type: "ul",
        items: [
          "Contribution structure: solo 401(k) deferral plus employer contribution versus SEP employer-only style contributions (confirm current Form 5305-SEP / plan documents).",
          "Payroll interaction: deferrals often need a plan in place and, for some entity types, payroll withholding.",
          "Administration: a solo 401(k) can require more documents and, at higher balances, a Form 5500-EZ.",
          "Deadlines: plan establishment and contribution deadlines differ and change. Use the current year’s IRS and plan-provider calendar.",
        ],
      },
      {
        type: "p",
        text: "Eligibility, limits, Roth versus pre-tax, and whether you have employees who would require a different plan are professional questions. Do not open an account because a headline promised savings. If you already have a plan, record contributions the way your CPA and the plan administrator specify.",
      },
      {
        type: "callout",
        title: "Not a recommendation",
        text: "This article does not recommend a solo 401(k), a SEP IRA, or any investment. It explains vocabulary so you can ask a licensed professional a precise question.",
      },
    ],
  },
  {
    slug: "quarterly-estimated-taxes-guide",
    title: "Quarterly Estimated Taxes: A Complete Guide",
    excerpt:
      "New to quarterly taxes? Here's exactly how to calculate, pay, and track your estimated tax payments — and avoid penalties.",
    date: "2026-06-28",
    author: "Allison's Accounting Team",
    tags: ["Taxes", "Quarterly Payments"],
    blocks: [
      {
        type: "p",
        text: "Estimated taxes are prepayments of federal income tax and, for many self-employed people, self-employment tax. The IRS publishes due dates each year (generally four times). States that piggyback on federal estimates have their own vouchers. This guide explains the process. It does not calculate your payment.",
      },
      {
        type: "h2",
        text: "When estimates usually enter the picture",
      },
      {
        type: "p",
        text: "If you expect to owe tax when you file, and withholding will not cover enough of it, the IRS generally expects payments during the year. Owners with a W-2 job plus a side business often need a projection, not a rule of thumb.",
      },
      {
        type: "h2",
        text: "A process you can repeat",
      },
      {
        type: "ol",
        items: [
          "After you close each quarter’s books, send year-to-date profit to your CPA or use the current Form 1040-ES worksheets.",
          "Pay using IRS Direct Pay or EFTPS (or the method on the voucher). Save the confirmation number.",
          "Record the payment in the books as your preparer prefers — often not as a P&L operating expense.",
          "Put the next IRS date on your cash forecast the same day.",
        ],
      },
      {
        type: "h2",
        text: "Penalties and safe harbor",
      },
      {
        type: "p",
        text: "Underpayment penalties can apply even if you pay in full with the return. The IRS describes safe-harbor tests based on a percentage of current-year tax or last year’s tax. Whether you qualify depends on your numbers and filing status. Do not treat a blog percentage as your voucher.",
      },
      {
        type: "callout",
        title: "Tools on this site",
        text: "The Estimated Tax Calculator listed under Tools is not live. Coming Soon. Use IRS worksheets or a preparer until it is.",
      },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
