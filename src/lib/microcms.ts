import { createClient } from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
})

// Works の型定義
export type Work = {
  id: string
  title: string
  description: string
  tags: string        // "Next.js, microCMS" のようなカンマ区切り文字列
  content: string
  createdAt: string
  publishedAt: string
}