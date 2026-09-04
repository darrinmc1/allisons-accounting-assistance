import type { Course } from "@/lib/content/types"

export const bookkeepingBasics: Course = {
  id: "bookkeeping-basics",
  title: "Bookkeeping Basics for Small Business Owners",
  level: "Beginner",
  free: true,
  description:
    "Learn the fundamentals of bookkeeping: chart of accounts, debits and credits, reconciliation, and more — explained in plain English.",
  tags: ["Bookkeeping", "Fundamentals"],
  schemaPrice: "0",
  schemaTeaches: "Bookkeeping fundamentals for small business owners",
  lessons: [
    {
      slug: "what-the-books-actually-are",
      title: "What the books actually are",
      minutes: 6,
      summary: "Bookkeeping is a record of what the business owned, owed, earned, and spent — not a pile of bank statements.",
      blocks: [
        {
          type: "p",
          text: "The books are the organized record of a business’s financial activity. They answer four questions: what came in, what went out, what the business still owns, and what it still owes. Bank and credit-card statements are source documents. They are not the books.",
        },
        {
          type: "h2",
          text: "Why a statement is not a system",
        },
        {
          type: "p",
          text: "A statement shows dates and amounts. It does not tell you whether a deposit was sales, a loan, or an owner contribution. It does not separate a client lunch from inventory, or a personal withdrawal from a vendor payment. If you only keep statements, you cannot produce a reliable profit-and-loss statement, balance sheet, or year-end package for a preparer.",
        },
        {
          type: "h2",
          text: "What a usable set of books contains",
        },
        {
          type: "ul",
          items: [
            "A chart of accounts — the named list of categories you post into.",
            "A transaction register (journal or ledger) with date, payee, amount, account, and a short memo.",
            "Source documents you can retrieve: invoices, bills, receipts, and bank statements.",
            "Periodic reconciliation that proves the register matches the bank and cards.",
            "Simple reports: profit and loss, and a balance sheet you can explain.",
          ],
        },
        {
          type: "h2",
          text: "Cash basis versus accrual, in one paragraph",
        },
        {
          type: "p",
          text: "Most very small U.S. service businesses keep books on a cash basis: income when money is received, expenses when money is paid. Accrual records income when earned and expenses when incurred, even if cash moves later. This course uses cash-basis examples unless a lesson says otherwise. Your tax method is a separate question for a CPA. Do not change methods because a software default looks tidy.",
        },
        {
          type: "callout",
          title: "Educational scope",
          text: "These lessons teach recordkeeping language and habits. They do not tell you how to file, elect an entity, or claim a deduction.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Name the accounts you already use",
              text: "Write ten categories you actually spend or earn in (for example Sales, Contractor labor, Software, Owner draws). That list becomes the start of your chart of accounts.",
            },
            {
              title: "Pick one system and stay in it",
              text: "A ledger spreadsheet or a small-business accounting file is enough. Mixing three apps and a notebook is how transactions disappear.",
            },
          ],
        },
      ],
    },
    {
      slug: "chart-of-accounts",
      title: "Chart of accounts",
      minutes: 7,
      summary: "A chart of accounts is the named list of buckets your money moves through. Write the list before you enter another receipt.",
      blocks: [
        {
          type: "p",
          text: "A chart of accounts is the named list of buckets your money moves through — income, cost of goods, operating expenses, assets, liabilities, and equity. If you leave this lesson and do one thing, write the list for your business before you enter another receipt.",
        },
        {
          type: "h2",
          text: "What the list actually does",
        },
        {
          type: "p",
          text: "It tells you where every dollar belongs so the same kind of spend does not land in three different places. Without it, bank feeds still import — they just import into a pile you cannot file from.",
        },
        {
          type: "p",
          text: "Start small. Ten to twenty accounts is enough for a sole proprietor. Add a bucket only when a real transaction has nowhere honest to go.",
        },
        {
          type: "h2",
          text: "The five families",
        },
        {
          type: "ul",
          items: [
            "Assets — cash, receivables, inventory, equipment you still own.",
            "Liabilities — credit cards, loans, sales tax you collected but have not remitted.",
            "Equity — owner capital, owner draws, and retained earnings.",
            "Income — sales, service fees, and other business receipts (not loans or owner deposits).",
            "Expenses — the costs of earning that income, grouped so you can read a profit-and-loss statement.",
          ],
        },
        {
          type: "h2",
          text: "Naming rules that keep reports readable",
        },
        {
          type: "ol",
          items: [
            "Use names you will recognize in six months (Software, not Misc 3).",
            "Do not create an account for a single vendor unless that vendor is a major cost center.",
            "Keep owner draws out of expenses. A draw is equity, not a business cost.",
            "If you collect sales tax, post the liability separately from sales.",
          ],
        },
        {
          type: "callout",
          title: "Software defaults",
          text: "QuickBooks, Xero, and similar products ship with industry lists. Use them as a starting point, then delete accounts you will never use. A long unused list hides the accounts you actually need.",
        },
      ],
    },
    {
      slug: "double-entry-in-plain-english",
      title: "Double-entry in plain English",
      minutes: 7,
      summary: "Every transaction has two sides. You do not need to recite debit and credit rules from memory to keep honest books.",
      blocks: [
        {
          type: "p",
          text: "Double-entry bookkeeping means every transaction is recorded in at least two places so the books stay in balance: assets equal liabilities plus equity. You can keep a simple cash register and still respect that idea.",
        },
        {
          type: "h2",
          text: "A useful picture, not a memorization drill",
        },
        {
          type: "p",
          text: "When a customer pays $500 into the business checking account for work you already invoiced, cash goes up and income goes up. When you pay $80 for software with that same account, cash goes down and an expense goes up. When you move $200 from the business to your personal account as an owner of a sole proprietorship, cash goes down and owner draws (equity) go up — not an expense.",
        },
        {
          type: "h2",
          text: "Debits and credits without the fog",
        },
        {
          type: "ul",
          items: [
            "A debit increases assets and expenses. It decreases liabilities, equity, and income.",
            "A credit does the opposite.",
            "The names are historical. They do not mean “good” or “bad.”",
            "If your software posts both sides, you still need to choose the right accounts. The software does not know whether a deposit was a sale or a loan.",
          ],
        },
        {
          type: "h2",
          text: "Three mistakes that break reports",
        },
        {
          type: "ol",
          items: [
            "Recording a loan deposit as income. You will overstate profit and understate debt.",
            "Recording an owner contribution as income. Same problem.",
            "Recording an owner draw as an expense. You will understate profit and hide how much cash you took out.",
          ],
        },
        {
          type: "callout",
          title: "If the books will not balance",
          text: "Stop entering new transactions and find the last date the register matched the bank. Fix that gap before you add more. Adding volume on top of an error makes the error harder to find.",
        },
      ],
    },
    {
      slug: "bank-reconciliation",
      title: "Bank reconciliation",
      minutes: 7,
      summary: "Reconciliation is the monthly proof that your register and the bank are describing the same cash.",
      blocks: [
        {
          type: "p",
          text: "A bank reconciliation compares your book balance to the bank’s ending balance and explains every difference. Uncleared checks, pending deposits, bank fees, and transactions you never entered are the usual gaps. The goal is a proven cash number, not a matching screenshot.",
        },
        {
          type: "h2",
          text: "A practical monthly sequence",
        },
        {
          type: "steps",
          items: [
            {
              title: "Lock the statement period",
              text: "Use the official statement end date, not “whenever I logged in.”",
            },
            {
              title: "Tick what already matches",
              text: "Mark cleared items in your register that appear on the statement with the same amount.",
            },
            {
              title: "Enter what the bank has and you do not",
              text: "Fees, interest, and merchant deposits you missed belong in the books in the period they hit the bank.",
            },
            {
              title: "Investigate what you have and the bank does not",
              text: "Outstanding checks and deposits in transit are normal for a short time. Items that never clear need a decision, not a permanent suspense account.",
            },
            {
              title: "Write the difference to zero",
              text: "When the adjusted book balance equals the statement balance, save the reconciliation. If it does not, do not force a plug to “miscellaneous.”",
            },
          ],
        },
        {
          type: "h2",
          text: "Credit cards are a second reconciliation",
        },
        {
          type: "p",
          text: "A business card is a liability, not an expense dump. Reconcile the card statement the same way you reconcile the bank. Paying the card is a transfer from cash to the card liability, not a second expense — the expense was recorded when the charge posted.",
        },
        {
          type: "callout",
          title: "Personal charges on a business card",
          text: "Do not leave personal charges in expense accounts. Reclassify them to owner draws or a receivable from the owner, then stop mixing personal spend on the business card.",
        },
      ],
    },
    {
      slug: "month-end-close",
      title: "Month-end close",
      minutes: 6,
      summary: "A short close checklist turns a pile of transactions into a month you can explain.",
      blocks: [
        {
          type: "p",
          text: "Closing a month means you have reviewed the period, reconciled cash and cards, corrected obvious miscategorizations, and saved a snapshot of the reports. You do not need a controller’s 40-step pack. You need a repeatable hour.",
        },
        {
          type: "h2",
          text: "A close you can finish",
        },
        {
          type: "ol",
          items: [
            "Reconcile every bank and card account that belongs to the business.",
            "Scan the profit-and-loss statement for accounts that look empty or suddenly large.",
            "Move owner draws, loan proceeds, and transfers out of income and expense.",
            "Confirm sales tax collected (if you collect it) still sits in a liability account until you remit it.",
            "Export or save PDF copies of the P&L and balance sheet for that month.",
            "Note one question for your CPA if something is unclear. Do not guess a tax treatment to make the file look finished.",
          ],
        },
        {
          type: "h2",
          text: "What “closed” should mean for a small file",
        },
        {
          type: "p",
          text: "After you close, avoid backdating routine entries into that month unless you are fixing a documented error. If you change a closed month, re-run the reports and keep the reason. A file that is rewritten every week is not a record. It is a draft.",
        },
        {
          type: "callout",
          title: "Software closing dates",
          text: "Many products let you set a closing date and password. Use that after you and your preparer agree the year is ready to file. A closing date is a control, not a legal filing.",
        },
      ],
    },
    {
      slug: "recording-income-and-expenses",
      title: "Recording income and expenses",
      minutes: 6,
      summary: "Post income when the business is paid (on cash basis) and expenses when the business pays — with the right account, not a junk drawer.",
      blocks: [
        {
          type: "p",
          text: "On a cash basis, you record income when the business receives payment and expenses when the business pays. The quality of the books depends on the account you choose and the memo you leave, not on how fast the bank feed imports.",
        },
        {
          type: "h2",
          text: "Income that is not income",
        },
        {
          type: "ul",
          items: [
            "Owner deposits and transfers from a personal account — equity, not sales.",
            "Loan and credit-card proceeds — liability, not sales.",
            "Sales tax collected — liability until remitted.",
            "Refunds of expenses — usually a reduction of the original expense, not new sales.",
          ],
        },
        {
          type: "h2",
          text: "Expenses that are easy to misfile",
        },
        {
          type: "ul",
          items: [
            "Inventory or materials that will be resold — often cost of goods, not office supplies.",
            "Asset purchases above your capitalization threshold — often an asset, not an immediate expense. Ask your CPA where the line is for your file.",
            "Estimated tax payments — usually owner draws or a tax-payment equity/liability treatment, not an operating expense on the P&L. Confirm the presentation with your preparer.",
            "Meals and travel — keep the business purpose in the memo. The deduction rules are a tax question, not a bookkeeping slogan.",
          ],
        },
        {
          type: "h2",
          text: "A memo that will still make sense in April",
        },
        {
          type: "p",
          text: "Write who, what, and why in a short line: “Adobe — monthly design subscription for client proposals.” Future you, and a preparer, should not have to open the bank portal to reconstruct a $79 charge.",
        },
      ],
    },
    {
      slug: "receipts-invoices-and-source-documents",
      title: "Receipts, invoices, and source documents",
      minutes: 6,
      summary: "The books are only as strong as the documents you can produce when someone asks how a number was built.",
      blocks: [
        {
          type: "p",
          text: "A source document is the evidence behind a line in the books: a customer invoice, a vendor bill, a receipt, a contract, a mileage log, or a bank statement. Software categories are opinions. Documents are what a reviewer can test.",
        },
        {
          type: "h2",
          text: "What to keep, in practice",
        },
        {
          type: "ul",
          items: [
            "Sales invoices and a record of when they were paid.",
            "Bills and receipts for expenses you intend to support.",
            "Bank, card, and processor statements for every account in the books.",
            "Payroll reports and contractor Forms 1099-NEC if you issue them.",
            "Notes for unusual items: a large refund, a loan, a related-party payment.",
          ],
        },
        {
          type: "h2",
          text: "A filing habit that does not require a shoebox",
        },
        {
          type: "ol",
          items: [
            "Capture the document the week of the transaction, not the week of tax filing.",
            "Name files with a date and vendor: 2026-04-12-staples.pdf.",
            "Store them in one place the business controls, with a backup.",
            "Attach the file to the transaction in your accounting tool if the tool supports it.",
          ],
        },
        {
          type: "callout",
          title: "Retention",
          text: "How long to keep records depends on the type of document and applicable federal and state rules. Ask your CPA for a retention list that matches your filings. Do not destroy records while a year is still open to examination.",
        },
      ],
    },
    {
      slug: "when-to-hire-a-bookkeeper-or-cpa",
      title: "When to hire a bookkeeper or CPA",
      minutes: 5,
      summary: "Owners can keep a simple cash file. Complexity, payroll, inventory, and tax positions are signals to hire help.",
      blocks: [
        {
          type: "p",
          text: "This course is written so an owner can keep a clean cash-basis file. Hiring help is not a failure. It is a control when the file is no longer something you can explain in an hour.",
        },
        {
          type: "h2",
          text: "Signals that the owner should not be the only reviewer",
        },
        {
          type: "ul",
          items: [
            "You have employees or a regular contractor payroll.",
            "You hold inventory or run job costing across many projects.",
            "You collect sales tax in more than one jurisdiction.",
            "You are considering an S corporation election, a retirement plan, or a multi-member entity.",
            "You cannot reconcile last month without a plug.",
            "You are behind more than one quarter and guessing at balances.",
          ],
        },
        {
          type: "h2",
          text: "Who does which job",
        },
        {
          type: "ul",
          items: [
            "A bookkeeper (or bookkeeping service) posts transactions, reconciles, and prepares monthly reports.",
            "A CPA or enrolled agent reviews the file, advises on tax positions, and prepares or reviews returns.",
            "A payroll provider calculates withholdings and many federal and state deposits. That work is easy to get wrong by hand.",
          ],
        },
        {
          type: "p",
          text: "Bring a reconciled file, a chart of accounts you can explain, and a list of questions. Do not bring a year of unopened statements and expect a clean answer in one meeting.",
        },
        {
          type: "callout",
          title: "This site’s role",
          text: "Allison’s Accounting Assistance publishes educational lessons, catalog templates, and planned tools. It does not replace an engagement letter with a licensed professional, and it does not file returns or run payroll for you.",
        },
      ],
    },
  ],
}
