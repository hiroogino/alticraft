"use client"

import styles from "./index.module.scss"
import { ROUTES } from "@/constants/routes"
import { useInView } from "@/hooks/useInView"
import Link from "next/link"

const WORKS = [
  {
    id: "1",
    title: "コーポレートサイト リニューアル",
    text: "Next.js + microCMSを用いた完全静的サイト。SCSS Modulesで保守性の高いCSS設計を実現。",
    tags: ["Next.js", "microCMS", "SCSS Modules"],
  },
  {
    id: "2",
    title: "サービスサイト フロントエンド実装",
    text: "デザインカンプからのHTML/CSSコーディング。FLOCSSによるCSS設計とjQueryアニメーションを担当。",
    tags: ["HTML/CSS", "SCSS", "jQuery", "FLOCSS"],
  },
]

export default function WorksSection() {
  const { ref, inView } = useInView()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Works</p>
        <div className={styles.header}>
          <h2 className={styles.title}>実績</h2>
          <Link href={ROUTES.WORKS.path} className={styles.more}>
            すべて見る →
          </Link>
        </div>
        <div
          ref={ref}
          className={`${styles.grid} fadeIn ${inView ? "isVisible" : ""}`}
        >
          {WORKS.map((work) => (
            <div key={work.id} className={styles.card}>
              <div className={styles.thumbnail}>
                サムネイル画像
              </div>
              <div className={styles.cardBody}>
                <ul className={styles.cardTags}>
                  {work.tags.map((tag) => (
                    <li key={tag} className={styles.cardTag}>{tag}</li>
                  ))}
                </ul>
                <h3 className={styles.cardTitle}>{work.title}</h3>
                <p className={styles.cardText}>{work.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}