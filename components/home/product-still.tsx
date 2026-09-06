import { PlayCircle } from "lucide-react"

/**
 * Chart of accounts still — Allisons-only product motion.
 * Ledger-line highlight + GST column tally (6.5s). Dry. No currency.
 */
const LEDGER = [
  { code: "4000", account: "Sales income", gst: "GST" },
  { code: "4100", account: "Interest received", gst: "FRE" },
  { code: "5000", account: "Cost of goods", gst: "GST" },
  { code: "6100", account: "Bank fees", gst: "FRE" },
  { code: "6200", account: "Rent", gst: "GST" },
] as const

export function ProductStill() {
  return (
    <div
      className="product-still bg-[#0A0F1E] text-[#E8EEF7]"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-[#243049] bg-[#12192B] px-3 py-2">
        <PlayCircle className="h-3.5 w-3.5 shrink-0 text-[#2563eb]" />
        <p className="text-[11px] text-[#8B9BB4]">
          Bookkeeping Basics · Lesson 2 of 8
        </p>
        <p className="ml-auto text-[10px] uppercase tracking-wider text-[#67e8f9]">
          Chart of accounts
        </p>
      </div>

      <div className="px-3 py-2.5">
        <table className="ledger-table w-full border-collapse text-[11px]">
          <caption className="sr-only">
            Chart of accounts with GST codes. Highlight walks each ledger
            line; the GST column tallies coded rows.
          </caption>
          <thead>
            <tr className="border-b border-[#243049] text-left text-[10px] uppercase tracking-wider text-[#8B9BB4]">
              <th className="w-12 py-1.5 pr-2 font-medium">Code</th>
              <th className="py-1.5 font-medium">Account</th>
              <th className="w-12 py-1.5 text-right font-medium text-[#67e8f9]">
                GST
              </th>
            </tr>
          </thead>
          <tbody>
            {LEDGER.map((row, index) => (
              <tr
                key={row.code}
                className="ledger-row border-b border-[#1B2438]"
                style={{ animationDelay: `${index * 1.3}s` }}
              >
                <td className="py-1.5 pr-2 font-mono tabular-nums text-[#8B9BB4]">
                  {row.code}
                </td>
                <td className="py-1.5 text-[#E8EEF7]">{row.account}</td>
                <td
                  className={
                    row.gst === "GST"
                      ? "ledger-gst-cell py-1.5 text-right font-medium tabular-nums text-[#67e8f9]"
                      : "py-1.5 text-right tabular-nums text-[#8B9BB4]"
                  }
                  style={
                    row.gst === "GST"
                      ? { animationDelay: `${index * 1.3}s` }
                      : undefined
                  }
                >
                  {row.gst}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="ledger-gst-tally mt-2 flex items-center justify-between text-[11px] text-[#8B9BB4]">
          <span>GST-coded</span>
          <span className="ledger-gst-count font-medium" />
        </p>
      </div>
    </div>
  )
}
