import { Check, Circle, PlayCircle } from "lucide-react"

/**
 * Frozen still of the Bookkeeping Basics lesson viewer.
 * Unique Allisons motion: ledger-line highlight + GST column tally (5–8s).
 * No currency symbols. Copy is course language, not comedy.
 */
const SIDEBAR = [
  { title: "What the books actually are", done: true, current: false },
  { title: "Chart of accounts", done: false, current: true },
  { title: "Double-entry in plain English", done: false, current: false },
  { title: "Bank reconciliation", done: false, current: false },
  { title: "Month-end close", done: false, current: false },
] as const

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
      className="product-still min-w-[640px] bg-[#0A0F1E] text-[#E8EEF7]"
      aria-hidden="true"
    >
      <div className="grid grid-cols-[220px_1fr]">
        <aside className="border-r border-[#243049] bg-[#12192B] p-4">
          <p className="text-[11px] text-[#8B9BB4]">Bookkeeping Basics</p>
          <p className="mt-2 text-[10px] uppercase tracking-wider text-[#67e8f9]">
            Free written course
          </p>
          <p className="mt-1 text-xs font-medium">Lesson 2 of 8</p>
          <ol className="mt-4 space-y-1">
            {SIDEBAR.map((item) => (
              <li
                key={item.title}
                className={
                  item.current
                    ? "flex items-center gap-2 rounded-md bg-[#1B2A4A] px-2 py-1.5 text-xs"
                    : "flex items-center gap-2 px-2 py-1.5 text-xs text-[#8B9BB4]"
                }
              >
                {item.done ? (
                  <Check className="h-3.5 w-3.5 shrink-0 text-[#2563eb]" />
                ) : item.current ? (
                  <PlayCircle className="h-3.5 w-3.5 shrink-0 text-[#2563eb]" />
                ) : (
                  <Circle className="h-3.5 w-3.5 shrink-0 opacity-50" />
                )}
                <span className="truncate">{item.title}</span>
              </li>
            ))}
          </ol>
        </aside>

        <div className="p-4">
          <p className="text-xs text-[#8B9BB4]">Lesson 2 of 8 · written</p>
          <p className="mt-1 text-lg font-semibold tracking-tight">
            Chart of accounts
          </p>
          <p className="mt-1 max-w-xl text-[11px] leading-relaxed text-[#B7C3D6]">
            GST belongs in its own column. Code the list before the BAS is due.
          </p>

          <table className="ledger-table mt-3 w-full border-collapse text-[11px]">
            <caption className="sr-only">
              Chart of accounts with GST codes. Highlight walks each ledger
              line; the GST column tallies coded rows.
            </caption>
            <thead>
              <tr className="border-b border-[#243049] text-left text-[10px] uppercase tracking-wider text-[#8B9BB4]">
                <th className="w-14 py-1.5 font-medium">Code</th>
                <th className="py-1.5 font-medium">Account</th>
                <th className="w-14 py-1.5 text-right font-medium">GST</th>
              </tr>
            </thead>
            <tbody>
              {LEDGER.map((row, index) => (
                <tr
                  key={row.code}
                  className="ledger-row border-b border-[#1B2438]"
                  style={{ animationDelay: `${index * 1.3}s` }}
                >
                  <td className="py-1.5 font-mono tabular-nums text-[#8B9BB4]">
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

          <p className="ledger-gst-tally mt-2 text-[11px] text-[#8B9BB4]">
            GST-coded <span className="ledger-gst-count" />
          </p>
        </div>
      </div>
    </div>
  )
}
