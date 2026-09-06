import { ProductStill } from "@/components/home/product-still"

export function ProductStillFrame({
  caption = "Written lesson · GST chart of accounts",
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
      <div className={tall ? "sm:min-h-72" : undefined}>
        <ProductStill />
      </div>
    </figure>
  )
}
