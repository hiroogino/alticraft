import { getWorksPage } from "@/lib/works"
import { client, type Work } from "@/lib/microcms"
import WorksCard from "@/components/WorksCard"
import Pagination from "@/components/Pagination"
import styles from "../../page.module.scss"

const PER_PAGE = 6

export async function generateStaticParams() {
  const data = await client.getList<Work>({ endpoint: "works" })
  const totalPages = Math.ceil(data.totalCount / PER_PAGE)

  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }))
}

export default async function WorksPagePage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const { page } = await params
  const { contents, totalPages, currentPage } = await getWorksPage(Number(page))

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