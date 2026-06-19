import type { Metadata } from "next"
import "@/styles/globals.scss"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: {
    default: "AltiCraft | フリーランスエンジニア 荻野弘之",
    template: "%s | AltiCraft",
  },
  description: "高い視座から生み出す職人技。フリーランスエンジニア 荻野弘之のポートフォリオサイトです。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      </body>
    </html>
  )
}