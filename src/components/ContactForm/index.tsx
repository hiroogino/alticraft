"use client"

import { useState } from "react"
import styles from "./index.module.scss"

type FormValues = {
  name: string
  email: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL!

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!values.name.trim()) {
      newErrors.name = "名前を入力してください"
    }
    if (!values.email.trim()) {
      newErrors.email = "メールアドレスを入力してください"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "正しいメールアドレスを入力してください"
    }
    if (!values.message.trim()) {
      newErrors.message = "メッセージを入力してください"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error("送信に失敗しました")
      setIsSubmitted(true)
    } catch (err) {
      alert(err instanceof Error ? err.message : "送信に失敗しました")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={styles.success}>
        <p className={styles.successTitle}>送信完了しました</p>
        <p className={styles.successText}>
          お問い合わせありがとうございます。<br />
          2営業日以内にご返信いたします。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label}>
          お名前<span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          className={styles.input}
          placeholder="山田 太郎"
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          メールアドレス<span className={styles.required}>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className={styles.input}
          placeholder="yamada@example.com"
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          メッセージ<span className={styles.required}>*</span>
        </label>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="お仕事のご依頼内容をご記入ください"
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        className={styles.button}
        disabled={isSubmitting}
      >
        {isSubmitting ? "送信中..." : "送信する"}
      </button>
    </form>
  )
}