import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT:'#0284c7', dark:'#0369a1' } // sky-600 系列
      }
    }
  },
  plugins: [typography],
}
export default config
