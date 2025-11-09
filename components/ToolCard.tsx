import Link from 'next/link';
export default function ToolCard({slug,title,desc}:{slug:string,title:string,desc:string}){
  return (
    <Link href={`/tools/${slug}`} className="block border rounded-2xl p-5 hover:shadow-md transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{desc}</p>
    </Link>
  )
}
