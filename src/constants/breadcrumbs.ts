import type { BreadcrumbItem } from "@/types/breadcrumb"

export const BREADCRUMBS = {
  WORKS: [
    { label: "Home", path: "/" },
    { label: "Works" },
  ],
} as const satisfies Record<string, BreadcrumbItem[]>

export const getWorkDetailBreadcrumb = (title: string): BreadcrumbItem[] => [
  { label: "Home", path: "/" },
  { label: "Works", path: "/works" },
  { label: title },
]