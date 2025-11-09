import ToolCard from '@/components/ToolCard'
import { tools } from '@/lib/tools'
export const metadata = { title: '工具列表' }
export default function ToolsPage(){
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">工具列表</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {tools.map(t => <ToolCard key={t.slug} {...t} />)}
      </div>
      <p className="text-sm text-gray-500 mt-6">計算結果僅供參考，實際仍以官方規定或專業建議為準。</p>
    </div>
  )
}
