import GridReveal from '@/components/GridReveal'
import ToolCard from '@/components/ToolCard'
import { tools } from '@/lib/tools'

export default function ToolsPage(){
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">工具列表</h1>
      <GridReveal>
        {tools.map(t => (
          <div key={t.slug} data-card>
            <ToolCard {...t}/>
          </div>
        ))}
      </GridReveal>
    </div>
  )
}
