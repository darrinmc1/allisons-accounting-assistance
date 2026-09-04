import { bookkeepingBasics } from "@/lib/content/courses/bookkeeping-basics"
import { cashFlowManagement } from "@/lib/content/courses/cash-flow-management"
import { payrollSetup } from "@/lib/content/courses/payroll-setup"
import { taxEssentials } from "@/lib/content/courses/tax-essentials"
import type { Course } from "@/lib/content/types"

export const courses: Course[] = [
  bookkeepingBasics,
  taxEssentials,
  cashFlowManagement,
  payrollSetup,
]

export function getCourse(id: string): Course | undefined {
  return courses.find((course) => course.id === id)
}

export function courseSchemaList(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Accounting Courses for Small Business Owners",
    description:
      "Free and premium accounting courses created by a licensed CPA to help small business owners manage their books, taxes, and finances.",
    url: `${baseUrl}/learn`,
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.description,
        provider: {
          "@type": "Organization",
          name: "Allison's Accounting Assistance",
          url: baseUrl,
        },
        educationalLevel: course.level,
        teaches: course.schemaTeaches,
        isAccessibleForFree: course.free,
        url: `${baseUrl}/learn/${course.id}`,
        offers: {
          "@type": "Offer",
          price: course.schemaPrice,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  }
}
