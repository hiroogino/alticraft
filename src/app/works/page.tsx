import { getWorksPage } from "@/lib/works"
import WorksCard from "@/components/WorksCard"
import Pagination from "@/components/Pagination"
import styles from "./page.module.scss"

export const metadata = {
  title: "Works",
}

export default async function WorksPage() {
  const { contents, totalPages, currentPage } = await getWorksPage(1)

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <p className={styles.label}>Works</p>
        <h1 className={styles.title}>実績</h1>
        <div className={styles.grid}>
          {contents.map((work) => (
            <WorksCard key={work.id} work={work} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/works"
        />
      </div>
    </div>
  )
}