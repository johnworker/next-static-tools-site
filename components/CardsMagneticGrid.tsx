'use client'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function CardsMagneticGrid({ children }:{ children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(()=>{
    const ctx = gsap.context(()=>{
      gsap.from('[data-card]', {
        opacity: 0, y: 16, duration: 0.5, ease: 'power2.out', stagger: 0.06,
        scrollTrigger: { trigger: root.current, start:'top 85%' }
      })
    }, root); return ()=>ctx.revert()
  }, [])

  useEffect(()=>{
    const el = root.current!
    const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-card]'))
    function onMove(e: MouseEvent) {
      const { clientX, clientY } = e
      cards.forEach(card=>{
        const r = card.getBoundingClientRect()
        const dx = (clientX - (r.left + r.width/2)) / r.width
        const dy = (clientY - (r.top + r.height/2)) / r.height
        gsap.to(card, { x: dx*8, y: dy*8, rotateX: -dy*3, rotateY: dx*3, transformPerspective: 800, duration: 0.3 })
      })
    }
    el.addEventListener('mousemove', onMove)
    return ()=> el.removeEventListener('mousemove', onMove)
  }, [])

  return <div ref={root} className="grid md:grid-cols-2 gap-4">{children}</div>
}
