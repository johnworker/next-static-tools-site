'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function ParallaxLayers() {
  const root = useRef<HTMLDivElement>(null)
  useGSAP(()=>{
    const ctx = gsap.context(()=>{
      const layers = gsap.utils.toArray<HTMLElement>('[data-layer]')
      layers.forEach((el, idx) => {
        gsap.to(el, {
          yPercent: [-12,-8,-4,-2][idx] ?? -2,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start:'top bottom', end:'bottom top', scrub:true }
        })
      })
    }, root); return ()=>ctx.revert()
  }, [])
  return (
    <div ref={root} className="relative h-24 md:h-32 my-10">
      <div data-layer className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.14),transparent_45%)]" />
      <div data-layer className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(2,132,199,0.10),transparent_50%)]" />
      <div data-layer className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(14,165,233,0.06),transparent_60%)]" />
    </div>
  )
}
