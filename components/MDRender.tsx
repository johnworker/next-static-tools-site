import { remark } from 'remark';
import html from 'remark-html';
export async function renderMarkdown(md: string){
  const file = await remark().use(html).process(md);
  return String(file);
}
