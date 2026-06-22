import Link from "next/link"
import { NAV_LINKS } from "@/constants/routes"
import styles from "./index.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        AltiCraft
      </Link>
      <nav className={styles.nav}>
        {NAV_LINKS.map((link) => (
          <Link key={link.path} href={link.path} className={styles.link}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}