import { ProductStill } from "@/components/home/product-still"

export function ProductStillFrame({
  caption = "Lesson · Chart of accounts",
  tall = false,
}: {
  caption?: string
  tall?: boolean
}) {
  return (
    <figure
      id="product-still"
      className="relative overflow-hidden rounded-xl border border-craft-border bg-craft-surface shadow-[0_24px_60px_-20px_rgba(37,99,235,0.45)]"
    >
      <figcaption className="border-b border-craft-border px-4 py-2 text-xs text-craft-muted">
        {caption}
      </figcaption>
      <div className={`relative overflow-hidden ${tall ? "h-64 sm:h-72" : "h-52 sm:h-64 md:h-72"}`}>
        <div className="origin-top-left">
          <ProductStill />
        </div>
      </div>
    </figure>
  )
}
