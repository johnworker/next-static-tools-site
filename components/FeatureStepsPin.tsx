'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger, useGSAP)

const steps = [
  { title:'零後端純前端', desc:'工具在瀏覽器計算，部署簡單、維護成本低。' },
  { title:'SEO 與分享卡', desc:'動態 OG 圖、Sitemap、RSS、結構化資料。' },
  { title:'PWA', desc:'可安裝、可離線，提升回訪率。' },
  { title:'GSAP 動效', desc:'進場、視差、Pin 導讀、KPI 遞增。' },
]

export default function FeatureStepsPin(){
  const root = useRef<HTMLDivElement>(null)
  useGSAP(()=>{
    const ctx = gsap.context(()=>{
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top center', end: '+=100', scrub: true, pin: true }
      })
      tl.from('[data-step]', { opacity: 0, y: 24, stagger: 1 })
    }, root); return ()=>ctx.revert()
  },[])
  return (
    <section ref={root} className="my-16 rounded-3xl border p-8 bg-white/60 dark:bg-gray-900/40">
      <h2 className="text-2xl font-bold mb-6">我們如何幫你更快賣出</h2>
      <ol className="space-y-6">
        {steps.map((s,i)=>(
          <li key={i} data-step className="border rounded-2xl p-5">
            <div className="text-sm text-gray-500">STEP {i+1}</div>
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
