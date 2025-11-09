export type ToolItem = { slug: string; title: string; desc: string; tag: string }
export const tools: ToolItem[] = [
  { slug:'bmi', title:'BMI 計算機', desc:'輸入身高與體重，快速計算 BMI 與範圍判定。', tag:'健康' },
  { slug:'date-diff', title:'日期差計算', desc:'計算兩個日期之間的天數與週數。', tag:'效率' },
  { slug:'word-count', title:'字數計數', desc:'統計字數、字符數與閱讀時間估算。', tag:'寫作' },
  { slug:'bill-split', title:'費用分攤', desc:'多人 AA 或權重分攤，快速算每人應付。', tag:'財務' },
  { slug:'salary-tw', title:'薪資試算（台灣）', desc:'勞健保/勞退粗估，到手概算。', tag:'財務' },
]
