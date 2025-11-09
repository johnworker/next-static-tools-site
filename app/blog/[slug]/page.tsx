import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { renderMarkdown } from '@/components/MDRender'

function toDateString(v: any) {
  if (!v) return '';
  if (typeof v === 'string') return v;
  if (v instanceof Date && !isNaN(v.valueOf())) return v.toISOString().slice(0, 10);
  try { return String(v); } catch { return ''; }
}

export async function generateStaticParams(){
  const dir = path.join(process.cwd(), 'content', 'blog');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  return files.map(f => ({ slug: f.replace(/\.md$/,'') }));
}

export async function generateMetadata({ params }:{ params: { slug: string }}){
  const file = path.join(process.cwd(), 'content', 'blog', `${params.slug}.md`);
  const raw = fs.readFileSync(file,'utf8');
  const { data } = matter(raw);
  return { title: (data as any).title, description: (data as any).excerpt };
}

export default async function BlogPost({ params }:{ params: { slug: string }}){
  const file = path.join(process.cwd(), 'content', 'blog', `${params.slug}.md`);
  const raw = fs.readFileSync(file,'utf8');
  const { data, content } = matter(raw);
  const html = await renderMarkdown(content);
  const dateStr = toDateString((data as any).date);

  return (
    <article className="prose mx-auto">
      <h1>{(data as any).title}</h1>
      <p><small>{dateStr}</small></p>
      <div dangerouslySetInnerHTML={{__html: html}} />
      <p>—</p>
      <p><a className="inline-block px-4 py-2 rounded-xl bg-sky-600 text-white" href="https://gumroad.com/yourstore" target="_blank">取得更多實用模板與工具（Gumroad）</a></p>
    </article>
  )
}
