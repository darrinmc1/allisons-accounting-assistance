import type { ContentBlock } from "@/lib/content/types"

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return (
            <p key={index} className="text-base leading-relaxed text-slate-700">
              {block.text}
            </p>
          )
        }
        if (block.type === "h2") {
          return (
            <h2 key={index} className="pt-2 text-xl font-bold tracking-tight text-slate-900">
              {block.text}
            </h2>
          )
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }
        if (block.type === "ol") {
          return (
            <ol key={index} className="list-decimal space-y-2 pl-5 text-base leading-relaxed text-slate-700">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          )
        }
        if (block.type === "callout") {
          return (
            <aside key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">{block.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{block.text}</p>
            </aside>
          )
        }
        return (
          <ol key={index} className="space-y-3">
            {block.items.map((item, stepIndex) => (
              <li key={item.title} className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  {stepIndex + 1}. {item.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </li>
            ))}
          </ol>
        )
      })}
    </div>
  )
}
