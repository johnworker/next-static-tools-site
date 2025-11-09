import Link from 'next/link'
import ToolCard from '@/components/ToolCard'
import { tools } from '@/lib/tools'
import CTA from '@/components/CTA'

export default function Home(){
  return (
    <div>
<section className="py-16 text-center bg-gradient-to-br from-sky-50 to-white dark:from-sky-900/10 rounded-3xl">
  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
    零後端、可商用的前端工具模板
  </h1>
  <p className="mt-3 text-gray-600 dark:text-gray-300">
    5 款常用工具 + PWA + SEO + OG 圖 + RSS，適合上手即賣的靜態站方案。
  </p>
  <div className="mt-6 flex justify-center gap-3">
    <a href="/tools" className="px-5 py-3 rounded-xl bg-brand text-white">開始使用工具</a>
    <a href="https://gumroad.com/你的商店" target="_blank" className="px-5 py-3 rounded-xl border">購買完整模板</a>
  </div>
  <p className="mt-4 text-xs text-gray-500">持續更新 · 商用授權 · 一次購買終身下載</p>
</section>
      <section className="grid md:grid-cols-2 gap-4">
        {tools.map(t => <ToolCard key={t.slug} {...t} />)}
      </section>
      <CTA />
    </div>
  )
}
