"use client"

import { useInView } from "@/hooks/useInView"
import styles from "./index.module.scss"

const SKILLS = [
  {
    title: "Frontend",
    text: "HTML/CSSを中心に10年のキャリア。モダンなフレームワークを用いた開発も対応します。",
    tags: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "CSS Architecture",
    text: "FLOCSSやCSS Modulesを用いた設計で、保守性の高いスタイル管理を実現します。",
    tags: ["FLOCSS", "BEM", "SMACSS", "CSS Modules", "SCSS"],
  },
  {
    title: "CMS / Tools",
    text: "ヘッドレスCMSを活用した静的サイト構築や、開発ツールの導入・運用が得意です。",
    tags: ["microCMS", "Velocity", "Git", "GitHub", "Vercel", "Cursor"],
  },
]

export default function SkillsSection() {
  const { ref, inView } = useInView()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Skills</p>
        <h2 className={styles.title}>できること</h2>
        <div
          ref={ref}
          className={`${styles.grid} fadeIn ${inView ? "isVisible" : ""}`}
        >
          {SKILLS.map((skill) => (
            <div key={skill.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{skill.title}</h3>
              <p className={styles.cardText}>{skill.text}</p>
              <ul className={styles.cardTags}>
                {skill.tags.map((tag) => (
                  <li key={tag} className={styles.cardTag}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}