'use client'
import { useRef, useMemo } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(TextPlugin, useGSAP)

export default function HeroRevealSplit() {
  const root = useRef<HTMLDivElement>(null)
  const title = '零後端、可商用的前端工具模板'
  const chars = useMemo(()=> title.split(''), [title])

  useGSAP(()=>{
    const ctx = gsap.context(()=>{
      gsap.from('[data-hero-char]', {
        y: 22, opacity: 0, rotateX: 40, duration: 0.6, ease: 'power2.out', stagger: 0.025
      })
      gsap.from('[data-hero-desc]', { y: 16, opacity: 0, duration: 0.6, delay: 0.15 })
      gsap.from('[data-hero-cta]',  { y: 12, opacity: 0, duration: 0.6, delay: 0.30 })
    }, root); return ()=>ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 to-white dark:from-sky-900/10 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        {chars.map((c,i)=>(
          <span key={i} data-hero-char className="inline-block will-change-transform">{c===' ' ? '\u00A0' : c}</span>
        ))}
      </h1>
      <p data-hero-desc className="mt-3 text-gray-600 dark:text-gray-300">
        5 款實用工具 + PWA + SEO + OG 圖 + RSS，開箱即用、適合上架販售。
      </p>
      <div data-hero-cta className="mt-6 flex justify-center gap-3">
        <a href="/tools" className="px-5 py-3 rounded-xl bg-brand text-white hover:opacity-90 active:scale-[.98]">開始使用工具</a>
        <a href="https://gumroad.com/你的商店" target="_blank" className="px-5 py-3 rounded-xl border hover:bg-white/60 dark:hover:bg-gray-900/30 active:scale-[.98]">購買完整模板</a>
      </div>
      <p className="mt-4 text-xs text-gray-500">持續更新・商用授權・一次購買終身下載</p>
    </section>
  )
}
