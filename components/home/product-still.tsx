import { Check, Circle, PlayCircle } from "lucide-react"

/**
 * Frozen still of the Bookkeeping Basics lesson viewer.
 * Copy is real course language from /learn. Not stock photography.
 */
const SIDEBAR = [
  { title: "What the books actually are", done: true, current: false },
  { title: "Chart of accounts", done: false, current: true },
  { title: "Double-entry in plain English", done: false, current: false },
  { title: "Bank reconciliation", done: false, current: false },
  { title: "Month-end close", done: false, current: false },
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

        <div className="p-6">
          <p className="text-xs text-[#8B9BB4]">Lesson 2 of 8 · written</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight">
            Chart of accounts
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#B7C3D6]">
            A chart of accounts is the named list of buckets your money moves
            through — income, cost of goods, operating expenses, assets,
            liabilities, and equity. If you leave this lesson and do one thing,
            write the list for your business before you enter another receipt.
          </p>
          <p className="mt-6 text-sm font-semibold">What the list actually does</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#B7C3D6]">
            It tells you where every dollar belongs so the same kind of spend
            does not land in three different places. Without it, bank feeds
            still import — they just import into a pile you cannot file from.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#B7C3D6]">
            Start small. Ten to twenty accounts is enough for a sole
            proprietor. Add a bucket only when a real transaction has nowhere
            honest to go.
          </p>
        </div>
      </div>
    </div>
  )
}
