export type ToolItem = { slug: string; title: string; desc: string; };
export const tools: ToolItem[] = [
  { slug: 'bmi', title: 'BMI 計算機', desc: '輸入身高與體重，快速計算 BMI 指數與範圍判定。' },
  { slug: 'date-diff', title: '日期差計算', desc: '計算兩個日期之間相差的天數與週數。' },
  { slug: 'word-count', title: '字數計數', desc: '統計字數、字符數與估算閱讀時間。' },
  { slug: 'bill-split', title: '費用分攤器', desc: '多人 AA 或不均分，快速計算每人應付。' },
  { slug: 'salary-tw', title: '薪資試算（台灣）', desc: '粗估勞健保與勞退，自動計算到手薪資（概算）。' },
];
