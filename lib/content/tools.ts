import type { ToolItem } from "@/lib/content/types"

export const tools: ToolItem[] = [
  {
    id: "tax-calculator",
    title: "Estimated Tax Calculator",
    description: "Calculate your quarterly estimated tax payments. Includes federal, state, and self-employment tax estimates.",
    icon: "Calculator",
    status: "coming-soon",
    notes:
      "No calculator runs on this page yet. There is no charge and no file to download. Use IRS Form 1040-ES worksheets or your CPA until this tool ships.",
  },
  {
    id: "deduction-finder",
    title: "Deduction Finder",
    description: "Answer a few questions about your business and we'll tell you which deductions you might be missing.",
    icon: "FileCheck",
    status: "coming-soon",
    notes:
      "The questionnaire is not built. This listing is a catalog placeholder. It will not produce a deduction list or a filing position.",
  },
  {
    id: "invoice-generator",
    title: "Invoice Generator",
    description: "Generate professional invoices with your branding. Auto-calculates totals, tax, and late fees.",
    icon: "Receipt",
    status: "coming-soon",
    notes:
      "No generator is live. Use your existing invoice template. A downloadable invoice pack is also listed under Templates as Coming Soon.",
  },
  {
    id: "hourly-rate-calc",
    title: "Hourly Rate Calculator",
    description: "Calculate your true hourly rate including overhead, taxes, and desired profit margin.",
    icon: "DollarSign",
    status: "coming-soon",
    notes:
      "The rate math is not implemented. Coming Soon. No payment is collected on this route.",
  },
  {
    id: "markup-margin-calc",
    title: "Markup & Margin Calculator",
    description: "Convert between markup percentage and margin percentage. Know your numbers before you quote.",
    icon: "Percent",
    status: "coming-soon",
    notes:
      "The converter is not live. Markup is (price − cost) ÷ cost. Margin is (price − cost) ÷ price. Confirm a quote with your own costs.",
  },
  {
    id: "depreciation-calc",
    title: "Depreciation Calculator",
    description: "Calculate Section 179, bonus depreciation, and MACRS for your business assets and equipment.",
    icon: "FileSpreadsheet",
    status: "coming-soon",
    notes:
      "No depreciation engine is available. Section 179, bonus depreciation, and MACRS are elections and tables that belong with a CPA and current IRS publications.",
  },
]

export function getTool(id: string): ToolItem | undefined {
  return tools.find((tool) => tool.id === id)
}
