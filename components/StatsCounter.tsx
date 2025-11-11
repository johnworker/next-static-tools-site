'use client'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    const el = ref.current!
    const nums = el.querySelectorAll<HTMLElement>('[data-num]')
    nums.forEach(n=>{
      const to = parseFloat(n.dataset.to || '0')
      gsap.fromTo(n, { textContent: '0' }, {
        textContent: to, duration: 1.2, ease: 'power2.out', snap: { textContent: 1 },
        scrollTrigger: { trigger: n, start: 'top 80%', once: true }
      })
    })
  },[])
  return (
    <div ref={ref} className="grid grid-cols-3 gap-6 text-center my-12">
      <div><div className="text-3xl font-bold" data-num data-to="1200">0</div><div className="text-xs text-gray-500">下載/複製</div></div>
      <div><div className="text-3xl font-bold" data-num data-to="98">0</div><div className="text-xs text-gray-500">滿意度（%）</div></div>
      <div><div className="text-3xl font-bold" data-num data-to="14">0</div><div className="text-xs text-gray-500">近期更新</div></div>
    </div>
  )
}
