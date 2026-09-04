import type { Course } from "@/lib/content/types"

export const payrollSetup: Course = {
  id: "payroll-setup",
  title: "Payroll Setup & Compliance",
  level: "Intermediate",
  free: false,
  description:
    "Step-by-step guidance on setting up payroll for your first employee, understanding payroll taxes, and staying compliant with federal and state rules.",
  tags: ["Payroll", "Compliance"],
  schemaPrice: "29",
  schemaTeaches: "Payroll setup, payroll taxes, and compliance for small businesses",
  lessons: [
    {
      slug: "before-you-hire-employer-basics",
      title: "Before you hire: employer basics",
      minutes: 6,
      summary: "Hiring creates tax, labor, and insurance duties that start before the first paycheck. List them before you make an offer.",
      blocks: [
        {
          type: "p",
          text: "An employee is not a contractor with a nicer title. Once you have an employee, you generally take on income-tax withholding, Social Security and Medicare, federal and often state unemployment tax, new-hire reporting, wage-and-hour rules, and — depending on the state and headcount — workers’ compensation and other insurance. This course is educational. It does not complete those filings for you.",
        },
        {
          type: "h2",
          text: "A pre-hire checklist you can take to a professional",
        },
        {
          type: "ul",
          items: [
            "Confirm worker classification (employee versus contractor) with counsel or a CPA.",
            "Budget fully loaded cost: wages plus employer taxes plus any benefits plus payroll-service fees.",
            "Decide who will run payroll: you with a service, or an accountant. Hand-calculating withholdings is a common source of errors.",
            "Read your state’s new-hire and workers’ compensation requirements.",
          ],
        },
        {
          type: "callout",
          title: "Labor law is not in this course",
          text: "Minimum wage, overtime, paid leave, and posters are employment-law topics. Get local guidance. These lessons stay on the bookkeeping and payroll-tax vocabulary.",
        },
      ],
    },
    {
      slug: "ein-and-state-registrations",
      title: "EIN and state registrations",
      minutes: 6,
      summary: "You need an Employer Identification Number and, in most states, unemployment and withholding accounts before you pay an employee.",
      blocks: [
        {
          type: "p",
          text: "An Employer Identification Number (EIN) is the federal tax ID many businesses already have. Paying employees generally also requires federal unemployment (Form 940) awareness and state accounts for withholding and unemployment insurance. Cities and localities may add their own withholding.",
        },
        {
          type: "h2",
          text: "What to gather",
        },
        {
          type: "ol",
          items: [
            "Legal name, entity type, and responsible-party information as the IRS EIN application requests.",
            "State unemployment insurance (SUI) registration for the state where the employee works.",
            "State income-tax withholding registration if the state has a wage tax.",
            "Any local withholding or paid-leave programs that apply to your location.",
          ],
        },
        {
          type: "p",
          text: "Apply on official government sites. Do not pay a random search-ad middleman for an EIN. Keep the confirmation letters; payroll software will ask for the account numbers.",
        },
        {
          type: "callout",
          title: "Multi-state employees",
          text: "Remote hires can create nexus and withholding duties in the employee’s state. That is a professional question before the start date.",
        },
      ],
    },
    {
      slug: "employee-versus-contractor",
      title: "Employee versus contractor",
      minutes: 6,
      summary: "Classification is based on facts. Payroll setup assumes you already made that decision correctly.",
      blocks: [
        {
          type: "p",
          text: "If the person is an employee, you run payroll. If the person is a contractor, you generally pay invoices and, when required, issue Form 1099-NEC. Mixing the two processes because one feels simpler is how reviews start.",
        },
        {
          type: "h2",
          text: "Bookkeeping differences you will see",
        },
        {
          type: "ul",
          items: [
            "Employee: wage expense, employer tax expense, liability accounts for withheld taxes, and a payroll register.",
            "Contractor: a vendor bill or expense, a W-9 on file, and a 1099 process at year-end if thresholds and rules require it.",
            "Both: keep the contract and the invoices or timesheets.",
          ],
        },
        {
          type: "p",
          text: "The Tax Essentials course covers the classification idea in more detail. If you are unsure, stop and get an answer before you issue the first payment.",
        },
      ],
    },
    {
      slug: "i9-w4-and-new-hire-reporting",
      title: "Form I-9, W-4, and new-hire reporting",
      minutes: 6,
      summary: "The first-week packet is identity, withholding, and a state new-hire filing. Complete it on time.",
      blocks: [
        {
          type: "p",
          text: "Form I-9 documents identity and work authorization. Form W-4 tells you how to withhold federal income tax (states may have their own form). Most states require a new-hire report shortly after the start date. Deadlines are short. A missing W-4 is not a reason to skip withholding; default withholding rules exist, and your payroll service should apply them.",
        },
        {
          type: "h2",
          text: "A first-week file",
        },
        {
          type: "ul",
          items: [
            "Completed I-9 with copies of documents only as the form and your counsel allow.",
            "Federal W-4 and any state withholding form.",
            "Direct-deposit authorization if you pay electronically.",
            "New-hire report confirmation.",
            "Offer letter or wage agreement stating pay rate and pay frequency.",
          ],
        },
        {
          type: "callout",
          title: "Privacy",
          text: "I-9 and identification documents are sensitive. Store them with access limits. This is not a casual cloud folder shared with the whole team.",
        },
      ],
    },
    {
      slug: "gross-pay-withholdings-and-net-pay",
      title: "Gross pay, withholdings, and net pay",
      minutes: 7,
      summary: "Gross pay is the wage you agreed. Net pay is what the employee receives after withholdings. Employer taxes sit on top.",
      blocks: [
        {
          type: "p",
          text: "Gross pay is hours times rate, or the salaried amount for the period, plus any taxable bonuses the payroll treats as wages. From that, you generally withhold federal income tax (from the W-4), Social Security, Medicare, and any required state or local tax, plus employee benefit deductions if you have them. Net pay is the direct deposit or check.",
        },
        {
          type: "h2",
          text: "Employer taxes are not withholdings",
        },
        {
          type: "p",
          text: "The employer share of Social Security and Medicare, federal unemployment (FUTA), and state unemployment are your costs. They do not come out of the employee’s net pay. Budget them. A payroll register should show both sides.",
        },
        {
          type: "h2",
          text: "Why a service is usually safer than a spreadsheet",
        },
        {
          type: "p",
          text: "Withholding tables, supplemental-wage rules, and state updates change. A reputable payroll provider calculates, deposits, and often files the recurring forms. If you self-file, you own every due date. This site does not offer a live payroll calculator.",
        },
        {
          type: "callout",
          title: "Pay-frequency math",
          text: "Annual salary divided by the number of pay periods is the usual salaried gross. Confirm overtime eligibility under wage-and-hour rules with counsel — salary does not automatically mean exempt.",
        },
      ],
    },
    {
      slug: "employer-payroll-taxes",
      title: "Employer payroll taxes",
      minutes: 6,
      summary: "FICA, FUTA, and state unemployment have their own bases and due dates. Deposit timing depends on your lookback period.",
      blocks: [
        {
          type: "p",
          text: "Federal Insurance Contributions Act (FICA) taxes are Social Security and Medicare, split between employee withholding and employer match (Medicare has an additional employee-only surtax above a threshold). FUTA is a federal unemployment tax paid by the employer, with a credit related to state unemployment taxes when those are paid on time. State unemployment rates are often experience-rated.",
        },
        {
          type: "h2",
          text: "Deposits and forms, at a high level",
        },
        {
          type: "ul",
          items: [
            "Federal withheld income tax and FICA are deposited on a schedule that depends on your IRS lookback period (monthly or more often for many growing employers).",
            "Form 941 is the common quarterly federal return for withheld income tax and FICA.",
            "Form 940 is the annual federal unemployment return.",
            "State withholding and unemployment have their own returns and due dates.",
          ],
        },
        {
          type: "p",
          text: "Use current IRS Publication 15 (Circular E) and your state’s employer guide — or a payroll provider that files them. Do not copy a due date from an old blog post.",
        },
      ],
    },
    {
      slug: "pay-stubs-and-payroll-registers",
      title: "Pay stubs and payroll registers",
      minutes: 5,
      summary: "The stub is the employee’s record. The register is yours. Both should tie to the bank and the tax deposits.",
      blocks: [
        {
          type: "p",
          text: "A pay stub generally shows gross pay, each withholding, benefit deductions, net pay, and year-to-date totals. Many states require specific stub contents. The payroll register is the employer’s period summary: every employee, every amount, the employer taxes, and the totals that should match the cash that left the bank.",
        },
        {
          type: "h2",
          text: "Bookkeeping the payday",
        },
        {
          type: "ol",
          items: [
            "Record wage expense and employer tax expense from the register, not from a rounded memory of the net check.",
            "Record liabilities for amounts withheld and employer taxes until they are deposited.",
            "When the deposit leaves the bank, clear those liabilities. Do not expense the deposit a second time.",
            "If the payroll service pulls a single ACH, split it in the books using the register (net pay versus taxes).",
          ],
        },
        {
          type: "callout",
          title: "Template status",
          text: "The payroll register template in the catalog is not available as a file. Coming Soon.",
        },
      ],
    },
    {
      slug: "year-end-w2-and-1099",
      title: "Year-end: W-2, 1099-NEC, and filings",
      minutes: 6,
      summary: "Year-end payroll is a package: W-2s, W-3, 1099s if required, and the last quarterly and annual returns.",
      blocks: [
        {
          type: "p",
          text: "Employees receive Form W-2. You generally file copies with the Social Security Administration (Form W-3 is the transmittal). Contractors who meet the filing rules receive Form 1099-NEC, filed with the IRS. Deadlines are published each year and are easy to miss if you start in January without a vendor list.",
        },
        {
          type: "h2",
          text: "A December checklist",
        },
        {
          type: "ul",
          items: [
            "Confirm legal names, addresses, and Social Security / ITIN numbers while people are still reachable.",
            "Reconcile payroll registers to Forms 941 for the year.",
            "Collect W-9s from contractors before you need to print 1099s.",
            "Ask your payroll provider who prints and files. Get it in writing.",
            "Box 12 and benefit items (if any) need a benefits administrator or CPA, not a guess.",
          ],
        },
        {
          type: "callout",
          title: "Corrections",
          text: "If a W-2 is wrong, there is a correction process (W-2c). Do not ignore a mismatch with the employee’s records.",
        },
      ],
    },
    {
      slug: "when-to-use-a-payroll-service",
      title: "When to use a payroll service",
      minutes: 5,
      summary: "A payroll service is appropriate for most first-time employers. The service still needs correct inputs.",
      blocks: [
        {
          type: "p",
          text: "If you have one employee and simple hourly wages, a reputable payroll product still earns its fee by depositing taxes and filing 941s on time. The cost of a missed deposit or a wrong state account is usually higher than a year of software.",
        },
        {
          type: "h2",
          text: "What you still own",
        },
        {
          type: "ul",
          items: [
            "Classification of the worker.",
            "Hours, rates, and taxable benefits you report to the system.",
            "Funding the payroll bank account before the pull.",
            "State registrations the software cannot invent.",
            "Reviewing the first two registers line by line.",
          ],
        },
        {
          type: "p",
          text: "Allison’s Accounting Assistance does not run payroll, withhold taxes, or file Forms 941 or W-2. These lessons exist so you can ask a provider better questions and keep the books after payday.",
        },
      ],
    },
  ],
}
