import Link from "next/link"
import { ROUTES } from "@/constants/routes"
import styles from "./index.module.scss"

const SKILLS_TAGS = [
  "HTML / CSS",
  "SCSS / FLOCSS",
  "JavaScript",
  "jQuery",
  "React",
  "Next.js",
  "TypeScript",
  "microCMS",
]

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.label}>Frontend Engineer</p>
        <h1 className={styles.title}>
          高い視座から生み出す、<br />
          <span className={styles.accent}>職人技</span>のコーディング。
        </h1>
        <p className={styles.description}>
          HTML/CSSコーダーとして10年のキャリアを持つフリーランスエンジニア。
          モダンな技術スタックで、クライアントのビジネス課題を解決します。
        </p>
        <ul className={styles.tags}>
          {SKILLS_TAGS.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
        <Link href={ROUTES.CONTACT.path} className={styles.cta}>
          お問い合わせ →
        </Link>
      </div>
    </section>
  )
}