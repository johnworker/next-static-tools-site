import Link from 'next/link'
import ToolCard from '@/components/ToolCard'
import { tools } from '@/lib/tools'
import CTA from '@/components/CTA'

export default function Home(){
  return (
    <div>
      <section className="text-center py-12">
        <h1 className="text-3xl font-bold">省時、省力的實用小工具與專業內容</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">全部純前端計算與驗證，離線可用（PWA）。</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/tools" className="px-4 py-2 rounded-xl bg-sky-600 text-white">開始使用工具</Link>
          <Link href="/blog" className="px-4 py-2 rounded-xl border">閱讀部落格</Link>
        </div>
      </section>
      <section className="grid md:grid-cols-2 gap-4">
        {tools.map(t => <ToolCard key={t.slug} {...t} />)}
      </section>
      <CTA />
    </div>
  )
}
