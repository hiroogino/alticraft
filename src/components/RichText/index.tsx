import styles from "./index.module.scss"

type Props = {
  html: string
}

export default function RichText({ html }: Props) {
  return (
    <div
      className={styles.richText}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}