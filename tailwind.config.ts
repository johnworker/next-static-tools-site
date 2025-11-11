import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { brand: { DEFAULT:'#0284c7', dark:'#0369a1' } }, // sky-600 系列
      boxShadow: { card: '0 8px 24px -12px rgb(2 132 199 / 0.25)' }
    }
  },
  plugins: [typography],
}
export default config
