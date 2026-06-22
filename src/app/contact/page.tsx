import ContactForm from "@/components/ContactForm"
import styles from "./page.module.scss"

export const metadata = {
  title: "Contact",
}

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <p className={styles.label}>Contact</p>
        <h1 className={styles.title}>お問い合わせ</h1>
        <p className={styles.description}>
          お仕事のご依頼・ご相談はこちらからお気軽にどうぞ。
          2営業日以内にご返信いたします。
        </p>
        <ContactForm />
      </div>
    </div>
  )
}