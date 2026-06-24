import Link from "next/link"
import styles from "./index.module.scss"
import type { BreadcrumbProps } from "@/types/breadcrumb"

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb} aria-label="breadcrumb">
      <ol className={styles.list}>
        {items.map((item) => (
          <li key={item.label} className={styles.item}>
            {item.path ? (
              <Link href={item.path} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.current}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}