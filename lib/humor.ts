export interface HumorItem {
  setup: string
  punchline?: string
}

export interface HumorTheme {
  container?: string
  border?: string[]
  borderOpacity?: string
  borderSize?: string
  borderLine?: string
  dark?: boolean
  cardBorder: string
  cardBg: string
  eyebrowColor: string
  label?: string
  punchColor: string
  buttonBg: string
  footerNote?: string
  shuffleLabel?: string
}

export const humorTheme: HumorTheme = {
  container: "my-10",
  border: ["🧾", "📊", "🧾", "✏️", "🧾"],
  borderOpacity: "opacity-30",
  borderSize: "text-xl",
  borderLine: "bg-blue-200",
  cardBorder: "border-blue-200",
  cardBg: "bg-blue-50",
  eyebrowColor: "text-blue-700",
  label: "Ledger break",
  punchColor: "text-blue-800",
  buttonBg: "bg-blue-600",
  footerNote: "Even receipts need a receipt",
  shuffleLabel: "Another one",
}

export const humorBank: Record<string, HumorItem[]> = {
  general: [
    {
      setup: "I'm an accountant, which means I make other people's chaos look intentional.",
    },
    {
      setup: "My favourite number is zero.",
      punchline: "It's honest. It doesn't pretend to be a profit.",
    },
    {
      setup: "I reconcile accounts for a living.",
      punchline: "Which is 90% 'where did this $12.40 go' and 10% triumph when I find it.",
    },
    {
      setup: "The books balance.",
      punchline: "They balance because I made them balance. They had opinions. I had a spreadsheet. The spreadsheet won.",
    },
  ],
  bookkeeping: [
    {
      setup: "I asked my client for their receipts.",
      punchline: "They sent a photo of a shoebox. The shoebox is not a system. But it's a start.",
    },
    {
      setup: "My client's accounts are 'creative.'",
      punchline: "The 'miscellaneous' category is the most creative of all. It's also 40% of their spending.",
    },
    {
      setup: "Bookkeeping tip: categorize as you go.",
      punchline: "Or do it in March like everyone else, with increasing panic and decreasing memory.",
    },
    {
      setup: "I reconciled their bank feed.",
      punchline: "The feed had a $3.50 mystery charge. The mystery remains unsolved. It's now a line item.",
    },
  ],
  tax: [
    {
      setup: "Tax season is my busy season.",
      punchline: "It's also the season where clients call about 'this one thing' that is actually seventeen things.",
    },
    {
      setup: "I explained deductions to a client.",
      punchline: "They asked if their dog counts as a business expense. The dog does not, in fact, attend meetings. Noted.",
    },
    {
      setup: "The ATO and I have a professional relationship.",
      punchline: "I file on their terms, they don't audit me. Mutual respect.",
    },
    {
      setup: "My client's BAS is due.",
      punchline: "So was last quarter's. The BAS is a lifestyle now.",
    },
  ],
  clients: [
    {
      setup: "My client said 'it's just a quick question.'",
      punchline: "The question was about GST. The answer required a diagram. The diagram required a meeting.",
    },
    {
      setup: "I sent the engagement letter.",
      punchline: "The client signed it and said 'what does this even say?' That's exactly why the letter exists.",
    },
    {
      setup: "My client keeps their records in a shoebox.",
      punchline: "This year, the shoebox is digital. It's called 'Documents' and it has 4,000 unsorted files.",
    },
    {
      setup: "The best clients send their paperwork before the deadline.",
      punchline: "They're mythical creatures. I've heard legends. I've never met one.",
    },
  ],
}
