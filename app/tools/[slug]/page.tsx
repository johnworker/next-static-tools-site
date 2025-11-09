import { notFound } from 'next/navigation';
import { tools } from '@/lib/tools';
import ToolClient from './ToolClient';
import ShareBar from '@/components/ShareBar'

export function generateStaticParams() {
  // 讓 Next 在 export 時預先產生所有工具頁
  return tools.map((t) => ({ slug: t.slug }));
}

// 確保完全靜態（搭配 next.config.mjs 的 output: 'export'）
export const dynamic = 'error';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  return { title: tool ? tool.title : '工具' };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold">{tool.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{tool.desc}</p>

      {/* 互動 UI 放在 client component */}
      <ToolClient slug={params.slug} />

      <section className="prose prose-slate dark:prose-invert mt-10">
        <h2>說明</h2>
        <p>本工具採純前端計算，無需上傳資料。結果僅供參考，實際仍以官方規定或專業意見為準。</p>

        <h3>公式/原理（摘要）</h3>
        {params.slug === 'bmi' && (
          <ul>
            <li>BMI = 體重(kg) ÷ 身高(m)^2</li>
            <li>過輕 &lt; 18.5；正常 18.5–24；過重 24–27；肥胖 ≥ 27（參考）。</li>
          </ul>
        )}
        {params.slug === 'date-diff' && <ul><li>以 UTC 無時區偏移計算相差天數與週數。</li></ul>}
        {params.slug === 'word-count' && <ul><li>以空白與標點分割估算字數；閱讀時間以 300–500 wpm 粗估。</li></ul>}
        {params.slug === 'bill-split' && <ul><li>總金額按人數平均或依權重不均分；四捨五入到元。</li></ul>}
        {params.slug === 'salary-tw' && <ul><li>以勞保/健保級距做簡化估算，僅供參考。</li></ul>}

        <h3>常見問答</h3>
        <ul>
          <li><strong>Q：</strong>為何結果與實際略有差距？<br/><strong>A：</strong>本工具為概算，省略部分細節（如不同投保級距、附加費）。</li>
          <li><strong>Q：</strong>資料會被上傳嗎？<br/><strong>A：</strong>不會，全部在瀏覽器端計算。</li>
        </ul>

        <p>
          <a className="inline-block px-4 py-2 rounded-xl bg-sky-600 text-white"
             href="https://gumroad.com/yourstore" target="_blank">
            需要更多模板與批次工具？前往 Gumroad 商店
          </a>
        </p>
      </section>
      <ShareBar title={tool.title} />
    </div>
  );
}
