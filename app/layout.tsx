import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.example'),
  title: '實用小工具站',
  description: '零後端、純前端的小工具集合與專業文章',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <SEO />
        <Navbar />
        <main className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
