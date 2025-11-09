import type { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://your-domain.example';
  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/tools`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
  ];
  const dir = path.join(process.cwd(),'content','blog');
  if (fs.existsSync(dir)){
    for (const f of fs.readdirSync(dir)){
      if (f.endsWith('.md')){
        const slug = f.replace(/\.md$/,'');
        routes.push({ url: `${base}/blog/${slug}`, lastModified: new Date() });
      }
    }
  }
  return routes;
}
