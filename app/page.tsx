import HeroRevealSplit from '@/components/HeroRevealSplit'
import MotionPathBadge from '@/components/MotionPathBadge'
import ParallaxLayers from '@/components/ParallaxLayers'
import CardsMagneticGrid from '@/components/CardsMagneticGrid'
import StatsCounter from '@/components/StatsCounter'
import FeatureStepsPin from '@/components/FeatureStepsPin'
import ToolCard from '@/components/ToolCard'
import { tools } from '@/lib/tools'

export default function Home(){
  return (
    <div className="space-y-10">
      <HeroRevealSplit />
      <MotionPathBadge />
      <ParallaxLayers />
      <section>
        <h2 className="text-xl font-semibold mb-3">常用工具</h2>
        <CardsMagneticGrid>
          {tools.map(t=>(
            <div key={t.slug} data-card>
              <ToolCard {...t} />
            </div>
          ))}
        </CardsMagneticGrid>
      </section>
      <StatsCounter />
      <FeatureStepsPin />
    </div>
  )
}
