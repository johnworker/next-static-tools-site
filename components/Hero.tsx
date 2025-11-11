'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-hero="title"]', { y: 24, opacity: 0, duration: .6, ease: 'power2.out' })
      gsap.from('[data-hero="desc"]',  { y: 20, opacity: 0, duration: .6, delay: .1 })
      gsap.from('[data-hero="cta"]',   { y: 16, opacity: 0, duration: .6, delay: .2 })
      gsap.to('[data-hero="bg"]', {
        yPercent: -12, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
      })
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={root} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 to-white dark:from-sky-900/10 mb-5 py-20 text-center shadow-glow">
      <div data-hero="bg" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.25),transparent_45%)]" />
      <h1 data-hero="title" className="text-4xl md:text-5xl font-extrabold tracking-tight">零後端、可商用的前端工具模板</h1>
      <p  data-hero="desc"  className="mt-3 text-gray-600 dark:text-gray-300">5 款工具 + PWA + SEO + 動態 OG 圖 + RSS，開箱即用、適合上架販售。</p>
      <div data-hero="cta"   className="mt-6 flex justify-center gap-3">
        <a href="/tools" className="px-5 py-3 rounded-xl bg-sky-600 text-white hover:opacity-90 active:scale-[.98]">開始使用工具</a>
        <a href="https://gumroad.com/你的商店" target="_blank" className="px-5 py-3 rounded-xl border hover:bg-white/60 dark:hover:bg-gray-900/30 active:scale-[.98]">購買完整模板</a>
      </div>
    </section>
  )
}
