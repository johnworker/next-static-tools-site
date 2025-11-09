import Link from 'next/link'

export default function ToolCard({
  slug, title, desc, tag
}:{slug:string,title:string,desc:string,tag:string}) {
  return (
    <Link
      href={`/tools/${slug}`}
      className="group block border rounded-2xl p-5 bg-white/60 dark:bg-gray-900/40 hover:shadow-lg hover:-translate-y-0.5 transition"
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] text-gray-600 dark:text-gray-300">
          {tag}
        </span>
      </div>
      <h3 className="mt-2 font-semibold text-lg tracking-tight">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{desc}</p>
      <div className="mt-4 text-sm text-brand group-hover:underline">開始使用 →</div>
    </Link>
  )
}
