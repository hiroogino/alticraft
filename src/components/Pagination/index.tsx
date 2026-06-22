import Link from "next/link"
import styles from "./index.module.scss"

type PaginationProps = {
  currentPage: number
  totalPages: number
  basePath: string
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const getPagePath = (page: number) =>
    page === 1 ? basePath : `${basePath}/page/${page}`

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className={styles.pagination} aria-label="pagination">
      {currentPage > 1 ? (
        <Link href={getPagePath(currentPage - 1)} className={styles.link}>←</Link>
      ) : (
        <span className={styles.disabled}>←</span>
      )}

      {pages.map((page) =>
        page === currentPage ? (
          <span key={page} className={styles.current}>{page}</span>
        ) : (
          <Link key={page} href={getPagePath(page)} className={styles.link}>{page}</Link>
        )
      )}

      {currentPage < totalPages ? (
        <Link href={getPagePath(currentPage + 1)} className={styles.link}>→</Link>
      ) : (
        <span className={styles.disabled}>→</span>
      )}
    </nav>
  )
}