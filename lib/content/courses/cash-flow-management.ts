import type { Course } from "@/lib/content/types"

export const cashFlowManagement: Course = {
  id: "cash-flow-management",
  title: "Cash Flow Management for Freelancers & Solopreneurs",
  level: "Intermediate",
  free: false,
  description:
    "Master cash flow forecasting, invoicing best practices, and how to build a financial cushion so you never miss payroll — even your own.",
  tags: ["Cash Flow", "Freelance"],
  schemaPrice: "29",
  schemaTeaches: "Cash flow management and forecasting for self-employed individuals",
  lessons: [
    {
      slug: "profit-is-not-cash",
      title: "Profit is not cash",
      minutes: 6,
      summary: "A profitable month can still leave the checking account empty. Track cash on a calendar, not only on a P&L.",
      blocks: [
        {
          type: "p",
          text: "Profit is income minus expenses for a period. Cash is what is in the accounts you can spend. They diverge when customers pay late, when you buy equipment, when you pay down a card, when you take a draw, and when tax payments leave the account.",
        },
        {
          type: "h2",
          text: "Common ways a “good” month still runs dry",
        },
        {
          type: "ul",
          items: [
            "You invoiced $12,000 and collected $4,000.",
            "You paid an annual insurance bill or a large software invoice in one week.",
            "You paid estimated taxes from the operating account with no reserve.",
            "You took an owner draw that the P&L never showed as an expense — correctly — but cash still left.",
          ],
        },
        {
          type: "p",
          text: "If you only watch net income, you will be surprised by rent week, tax week, and the week three invoices slip. Watch the bank and a simple forecast together.",
        },
        {
          type: "callout",
          title: "Owner pay is a cash event",
          text: "Paying yourself is how a sole proprietor lives. Budget it. Do not treat the operating account as a leftover after every other bill.",
        },
      ],
    },
    {
      slug: "building-a-simple-cash-forecast",
      title: "Building a simple cash forecast",
      minutes: 7,
      summary: "A 13-week cash forecast is a dated list of expected receipts and payments. It is not a second set of books.",
      blocks: [
        {
          type: "p",
          text: "A useful forecast for a freelancer is a spreadsheet with one row for starting cash, rows for expected customer collections, rows for known bills, and a running ending cash by week. Thirteen weeks is long enough to see a tax due date and a slow month.",
        },
        {
          type: "h2",
          text: "What belongs on the forecast",
        },
        {
          type: "ul",
          items: [
            "Invoices already sent, with a realistic collection week — not the invoice date.",
            "Work you expect to bill, marked as less certain than invoices already out.",
            "Rent, insurance, software, contractor bills, and loan payments on their due dates.",
            "Estimated tax dates from the IRS calendar.",
            "A planned owner draw, not an unspoken leftover.",
          ],
        },
        {
          type: "h2",
          text: "Rules that keep it honest",
        },
        {
          type: "ol",
          items: [
            "Update it weekly from the actual bank balance. Replace hope with what happened.",
            "Do not forecast a collection you have never seen that client make on time.",
            "Put tax and insurance on the calendar even if you have not saved for them yet. Hiding the date does not move the date.",
          ],
        },
        {
          type: "callout",
          title: "Templates",
          text: "A downloadable cash-flow worksheet is listed in the template catalog. The file is not available yet. Coming Soon. You can build the same 13-week grid in any spreadsheet while you wait.",
        },
      ],
    },
    {
      slug: "invoicing-so-you-get-paid",
      title: "Invoicing so you get paid",
      minutes: 6,
      summary: "Clear terms, prompt invoices, and a follow-up habit move cash. Unsent invoices are unpaid work.",
      blocks: [
        {
          type: "p",
          text: "Cash flow for a service business starts when the invoice leaves your desk. A complete invoice names the client, the work, the amount, the due date, and how to pay. Vague “net whenever” invoices train clients to wait.",
        },
        {
          type: "h2",
          text: "Practices that shorten the cycle",
        },
        {
          type: "ul",
          items: [
            "Send the invoice the day the milestone is done, not at month-end if you can avoid it.",
            "State the due date as a date, not only “Net 30.”",
            "Offer one or two payment methods you actually check.",
            "Require a deposit on new or large projects if your contracts allow it.",
            "Follow up on a schedule: a reminder before due, a notice the day after, then a phone call.",
          ],
        },
        {
          type: "p",
          text: "Record invoices in the books if you track receivables. On pure cash books, still keep an invoice register so you know who owes you. A forecast that ignores open invoices is a wish list.",
        },
        {
          type: "callout",
          title: "Invoice generator",
          text: "The invoice generator in Tools is not live. Coming Soon. Use your existing invoice template or word processor until it is.",
        },
      ],
    },
    {
      slug: "timing-of-expenses-and-tax-payments",
      title: "Timing of expenses and tax payments",
      minutes: 6,
      summary: "You cannot always move a due date. You can stop being surprised by it.",
      blocks: [
        {
          type: "p",
          text: "Some costs are weekly (ads, contractors). Some are monthly (rent, software). Some are quarterly (estimated taxes). Some are annual (insurance, certain licenses). A cash crunch is often a timing problem: four large items landed in the same two weeks.",
        },
        {
          type: "h2",
          text: "A reserve is a planned transfer, not leftover hope",
        },
        {
          type: "p",
          text: "Many owners keep a separate savings account for tax and a second one for irregular bills. Each profitable week, they move a planned amount. The operating account then shows what is actually available to spend. The reserve is still your money. It is just labeled.",
        },
        {
          type: "ul",
          items: [
            "Put IRS estimated-tax dates on the same calendar as rent.",
            "Ask insurers and software vendors whether monthly billing reduces a once-a-year spike. Monthly can cost more. Compare before you switch.",
            "If a client pays annually, do not spend the whole check in week one. Spread the recognition of that cash across the months of work.",
          ],
        },
        {
          type: "callout",
          title: "Tax amounts",
          text: "How much to set aside for tax is a projection for you and a CPA. This lesson only asks you to put the payment dates on the cash calendar.",
        },
      ],
    },
    {
      slug: "a-cash-cushion",
      title: "A cash cushion",
      minutes: 5,
      summary: "A cushion is a number of weeks of essential costs you can cover if invoices stall. Pick a target you can fund.",
      blocks: [
        {
          type: "p",
          text: "A cash cushion is money that is not already promised to a vendor or to next week’s draw. For a freelancer, a practical starting target is often one month of essential costs (rent or mortgage share, insurance, minimum software, groceries you must cover from the business). Some owners aim for three months. The right number depends on how lumpy your clients are.",
        },
        {
          type: "h2",
          text: "How to fund it without a speech",
        },
        {
          type: "ol",
          items: [
            "Write the monthly essential number from actual bills, not a guess.",
            "Open a separate account so the cushion is visible.",
            "Transfer a fixed amount on a fixed weekday until the target is met.",
            "Use the cushion only for a defined event (a late enterprise invoice, a health interruption), then rebuild it.",
          ],
        },
        {
          type: "p",
          text: "A cushion is not an investment thesis. It is an operating control. If the money is in a brokerage account you hesitate to sell, it is not a two-week operating cushion.",
        },
      ],
    },
    {
      slug: "seasonal-and-uneven-income",
      title: "Seasonal and uneven income",
      minutes: 6,
      summary: "When revenue is lumpy, average months lie. Plan from the slow months and the large inflows separately.",
      blocks: [
        {
          type: "p",
          text: "Consultants, tax-adjacent trades, event work, and productized services often earn most of the year in a few windows. An annual profit figure divided by twelve is not a monthly cash plan.",
        },
        {
          type: "h2",
          text: "A two-layer plan",
        },
        {
          type: "ul",
          items: [
            "Layer one: essential monthly costs that happen even in a quiet month.",
            "Layer two: a list of the large inflows you can actually name (retainers, seasonal projects) with conservative dates.",
          ],
        },
        {
          type: "p",
          text: "If layer two does not cover layer one plus tax reserves plus a modest draw, the business has a capacity or pricing problem — or you need a slower personal draw. Those are operating decisions. The forecast’s job is to show the gap early.",
        },
        {
          type: "callout",
          title: "Do not borrow against an invoice you have not sent",
          text: "Credit cards can bridge a week. They are a poor substitute for a year of unpriced work. If you use credit, put the payoff on the forecast as a real payment.",
        },
      ],
    },
    {
      slug: "reading-a-cash-flow-statement",
      title: "Reading a cash flow statement",
      minutes: 6,
      summary: "The cash flow statement explains why cash changed. Operating, investing, and financing are three different stories.",
      blocks: [
        {
          type: "p",
          text: "A statement of cash flows groups cash into operating activities (the work of the business), investing activities (buying or selling longer-term assets), and financing activities (loans, repayments, owner contributions and draws). You can read a simple version even if you never produce a formal GAAP statement.",
        },
        {
          type: "h2",
          text: "What each section is trying to tell you",
        },
        {
          type: "ul",
          items: [
            "Operating — Did customers fund the work, or did you rely on new borrowing to pay routine bills?",
            "Investing — Did you buy equipment or software that will last beyond this month?",
            "Financing — Did you take a loan, pay one down, put in personal funds, or take a draw?",
          ],
        },
        {
          type: "p",
          text: "If operating cash is repeatedly negative and financing cash is the only reason the bank account survives, the business is not self-funding. That is useful information. It is not a moral verdict. It is a reason to change pricing, collections, or costs — with advice from people who know your file if the situation is tight.",
        },
        {
          type: "callout",
          title: "Catalog template",
          text: "The cash-flow statement template on the Templates page does not have a downloadable file yet. Coming Soon.",
        },
      ],
    },
  ],
}
