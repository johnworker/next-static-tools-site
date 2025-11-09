import { NextResponse } from 'next/server'
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export const dynamic = 'force-static'

export async function GET(){
  const base = 'https://your-domain.example';
  const dir = path.join(process.cwd(),'content','blog');
  const items = fs.readdirSync(dir).filter(f=>f.endsWith('.md')).map(f=>{
    const raw = fs.readFileSync(path.join(dir,f),'utf8');
    const { data } = matter(raw);
    const slug = f.replace(/\.md$/,'');
    return { slug, title: data.title, excerpt: data.excerpt, date: data.date };
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>實用小工具站</title>
<link>${base}</link>
<description>部落格 RSS</description>
${items.map(i => `<item><title>${i.title}</title><link>${base}/blog/${i.slug}</link><pubDate>${new Date(i.date||Date.now()).toUTCString()}</pubDate><description><![CDATA[${i.excerpt||''}]]></description></item>`).join('')}
</channel>
</rss>`;
  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } });
}
