'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function ScrollProgressBar() {
  const ref = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const el = ref.current!
    gsap.set(el, { scaleX: 0, transformOrigin: '0% 10%' })
    gsap.to(el, { scaleX: 1, ease: 'none', scrollTrigger: { scrub: true } })
  }, [])
  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full">
      <div ref={ref} className="h-full w-full bg-sky-500/90" />
    </div>
  )
}
