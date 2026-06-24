import Image from "next/image"
import { getWorkDetail } from "@/lib/works"
import { client, type Work } from "@/lib/microcms"
import RichText from "@/components/RichText"
import Breadcrumb from "@/components/Breadcrumb"
import { getWorkDetailBreadcrumb } from "@/constants/breadcrumbs"
import styles from "./page.module.scss"

export async function generateStaticParams() {
  const data = await client.getList<Work>({ endpoint: "works" })
  return data.contents.map((work) => ({ id: work.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const work = await getWorkDetail(id)
  return { title: work.title }
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const work = await getWorkDetail(id)
  const tags = work.tags.split(",").map((tag) => tag.trim())

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Breadcrumb items={getWorkDetailBreadcrumb(work.title)} />
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>{tag}</li>
          ))}
        </ul>
        <h1 className={styles.title}>{work.title}</h1>
        <p className={styles.description}>{work.description}</p>
        <div className={styles.thumbnail}>
          <Image
            src={work.thumbnail.url}
            alt={work.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className={styles.content}>
          <RichText html={work.content} />
        </div>
      </div>
    </div>
  )
}