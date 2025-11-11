import gsap from 'gsap'
export function animateNumber(el: Element, to: number, duration=.6) {
  const obj = { v: 0 }
  gsap.to(obj, {
    v: to, duration, ease: 'power2.out',
    onUpdate: () => { (el as HTMLElement).innerText = Math.round(obj.v).toString() }
  })
}
