import Link from "next/link"
import type { Work } from "@/lib/microcms"
import styles from "./index.module.scss"

type Props = {
  work: Work
}

export default function WorksCard({ work }: Props) {
  const tags = work.tags.split(",").map((tag) => tag.trim())

  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>{tag}</li>
          ))}
        </ul>
        <Link href={`/works/${work.id}`} className={styles.title}>
          {work.title}
        </Link>
        <p className={styles.description}>{work.description}</p>
      </div>
    </div>
  )
}