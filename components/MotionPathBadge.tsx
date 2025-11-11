'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin)

export default function MotionPathBadge(){
  const root = useRef<SVGSVGElement>(null)
  useEffect(()=>{
    const badge = root.current!.querySelector('#badge') as SVGCircleElement
    const path = root.current!.querySelector('#orbit') as SVGPathElement
    gsap.to(badge, {
      duration: 6, repeat: -1, ease: 'none',
      motionPath: { path, align: '#orbit', autoRotate: false }
    })
  },[])
  return (
    <svg ref={root} viewBox="0 0 200 200" className="w-24 h-24 mx-auto my-6 opacity-90">
      <path id="orbit" d="M100,30 C150,30 170,100 100,170 C30,100 50,30 100,30 Z" fill="none" stroke="rgba(2,132,199,0.35)" />
      <circle id="badge" cx="100" cy="30" r="8" fill="#0284c7"/>
    </svg>
  )
}
