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
  metadataBase: new URL("https://alticraft.vercel.app"),
  openGraph: {
    title: "AltiCraft | フリーランスエンジニア 荻野弘之",
    description: "高い視座から生み出す職人技。フリーランスエンジニア 荻野弘之のポートフォリオサイトです。",
    url: "https://alticraft.vercel.app",
    siteName: "AltiCraft",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "AltiCraft",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AltiCraft | フリーランスエンジニア 荻野弘之",
    description: "高い視座から生み出す職人技。フリーランスエンジニア 荻野弘之のポートフォリオサイトです。",
    images: ["/ogp.png"],
  },
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}