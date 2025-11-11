'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function GridReveal({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-card]', {
        opacity: 0, y: 18, duration: .5, ease: 'power2.out', stagger: .08,
        scrollTrigger: { trigger: root.current, start: 'top 85%' }
      })
    }, root)
    return () => ctx.revert()
  }, [])
  return <div ref={root} className="grid md:grid-cols-2 gap-4">{children}</div>
}
