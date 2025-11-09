'use client';

import { notFound } from 'next/navigation';
import { tools } from '@/lib/tools';
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';

export default function ToolClient({ slug }: { slug: string }) {
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return notFound();

  return (
    <div className="rounded-2xl border p-5">
      {slug === 'bmi' && <BMI />}
      {slug === 'date-diff' && <DateDiff />}
      {slug === 'word-count' && <WordCount />}
      {slug === 'bill-split' && <BillSplit />}
      {slug === 'salary-tw' && <SalaryTW />}
    </div>
  );
}

/* ------------ 互動工具元件（維持你原本的程式即可） ------------ */

function BMI() {
  const [h, setH] = useState<string>('170');
  const [w, setW] = useState<string>('65');
  const hM = Number(h) / 100;
  const bmi = Number(w) / (hM * hM || 1);
  const cat = bmi < 18.5 ? '過輕' : bmi < 24 ? '正常' : bmi < 27 ? '過重' : '肥胖';
  return (
    <div className="grid gap-3 md:grid-cols-4">
      <label className="col-span-2">身高(cm)
        <input value={h} onChange={(e) => setH(e.target.value)} className="w-full border p-2 rounded" />
      </label>
      <label className="col-span-2">體重(kg)
        <input value={w} onChange={(e) => setW(e.target.value)} className="w-full border p-2 rounded" />
      </label>
      <div className="col-span-4">
        <div className="text-lg">BMI：<b>{isFinite(bmi) ? bmi.toFixed(1) : '-'}</b>（{cat}）</div>
      </div>
    </div>
  );
}

function DateDiff() {
  const [a, setA] = useState<string>(dayjs().format('YYYY-MM-DD'));
  const [b, setB] = useState<string>(dayjs().add(7, 'day').format('YYYY-MM-DD'));
  const d1 = dayjs(a);
  const d2 = dayjs(b);
  const diff = d2.startOf('day').diff(d1.startOf('day'), 'day');
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <label>日期 A
        <input type="date" value={a} onChange={(e) => setA(e.target.value)} className="w-full border p-2 rounded" />
      </label>
      <label>日期 B
        <input type="date" value={b} onChange={(e) => setB(e.target.value)} className="w-full border p-2 rounded" />
      </label>
      <div className="self-end">相差 <b>{diff}</b> 天（約 <b>{(diff / 7).toFixed(2)}</b> 週）</div>
    </div>
  );
}

function WordCount() {
  const [t, setT] = useState<string>('');
  const words = useMemo(() => (t.trim() ? t.trim().split(/\s+/).length : 0), [t]);
  const chars = t.length;
  const readMin = Math.max(1, Math.round(words / 350));
  return (
    <div>
      <textarea value={t} onChange={(e) => setT(e.target.value)} className="w-full border p-2 rounded h-40" placeholder="貼上文字..." />
      <div className="mt-2 text-sm">字數（以空白分詞）：<b>{words}</b>；字符數：<b>{chars}</b>；估計閱讀時間：<b>{readMin}</b> 分鐘</div>
    </div>
  );
}

function BillSplit() {
  const [total, setTotal] = useState<string>('3000');
  const [people, setPeople] = useState<string>('4');
  const [weights, setWeights] = useState<string>('1,1,1,1');
  const ps = Math.max(1, Number(people));
  const ws = weights.split(',').map((x) => Number(x) || 0);
  const sumW = ws.length ? ws.reduce((a, b) => a + b, 0) : ps;
  const each =
    ws.length === ps && sumW > 0
      ? ws.map((w) => Math.round(Number(total) * w / sumW))
      : Array(ps).fill(Math.round(Number(total) / ps));
  return (
    <div className="grid md:grid-cols-2 gap-3">
      <label>總金額
        <input value={total} onChange={(e) => setTotal(e.target.value)} className="w-full border p-2 rounded" />
      </label>
      <label>人數
        <input value={people} onChange={(e) => setPeople(e.target.value)} className="w-full border p-2 rounded" />
      </label>
      <label className="md:col-span-2">權重（逗號分隔，與人數相同）
        <input value={weights} onChange={(e) => setWeights(e.target.value)} className="w-full border p-2 rounded" />
      </label>
      <div className="md:col-span-2">
        <h4 className="font-semibold mb-1">每人應付（概算）</h4>
        <ul className="list-disc ml-6">{each.map((v, i) => (<li key={i}>第 {i + 1} 人：{isFinite(v) ? v : 0} 元</li>))}</ul>
      </div>
    </div>
  );
}

function SalaryTW() {
  const [gross, setGross] = useState<string>('42000');
  const [rate, setRate] = useState<string>('6'); // 勞退自提 %
  // 示範粗估（請依需要更新為實際級距）
  const g = Number(gross) || 0;
  const lao = g * 0.021;
  const jian = g * 0.0155;
  const laoTui = g * (Number(rate) / 100);
  const takeHome = Math.round(g - lao - jian - laoTui);
  return (
    <div className="grid md:grid-cols-2 gap-3">
      <label>月薪（總額）
        <input value={gross} onChange={(e) => setGross(e.target.value)} className="w-full border p-2 rounded" />
      </label>
      <label>勞退自提（%）
        <input value={rate} onChange={(e) => setRate(e.target.value)} className="w-full border p-2 rounded" />
      </label>
      <div className="md:col-span-2 text-sm">
        <p>勞保（估）：{Math.round(lao)} 元；健保（估）：{Math.round(jian)} 元；自提勞退：{Math.round(laoTui)} 元</p>
        <p className="text-lg mt-1">概算到手：<b>{takeHome}</b> 元</p>
        <p className="text-xs text-gray-500 mt-1">此為簡化估算，實際金額依政府公告級距與公司規定而異。</p>
      </div>
    </div>
  );
}
