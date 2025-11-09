'use client'
export default function ShareBar({ title }: { title: string }) {
  async function share() {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    if (navigator.share) {
      await navigator.share({ title, url })
    } else {
      await navigator.clipboard.writeText(url)
      alert('已複製頁面連結')
    }
  }
  return (
    <div className="mt-4 flex gap-2">
      <button onClick={share} className="px-3 py-2 rounded-xl border">分享</button>
    </div>
  )
}
