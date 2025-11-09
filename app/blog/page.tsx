import Link from 'next/link'
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export const metadata = { title: '部落格' }

function toDateString(v: any) {
  if (!v) return '';
  if (typeof v === 'string') return v;
  if (v instanceof Date && !isNaN(v.valueOf())) return v.toISOString().slice(0, 10);
  try { return String(v); } catch { return ''; }
}

function getPosts(){
  const dir = path.join(process.cwd(), 'content', 'blog');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  return files.map(f => {
    const raw = fs.readFileSync(path.join(dir, f), 'utf8');
    const { data } = matter(raw);
    const date = toDateString((data as any).date);
    return {
      slug: f.replace(/\.md$/, ''),
      title: (data as any).title,
      excerpt: (data as any).excerpt,
      date
    };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

export default function BlogPage(){
  const posts = getPosts();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">部落格</h1>
      <ul className="space-y-4">
        {posts.map(p => (
          <li key={p.slug} className="border rounded-2xl p-5">
            <h3 className="font-semibold text-lg"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{p.excerpt}</p>
            <p className="text-xs mt-1">{p.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
