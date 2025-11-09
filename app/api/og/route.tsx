/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
export const runtime = 'edge';
export async function GET(req: Request){
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || '實用小工具站';
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex', height: '100%', width: '100%',
          background: 'linear-gradient(135deg,#0ea5e9,#22d3ee)',
          alignItems: 'center', justifyContent: 'center',
          color: 'white', fontSize: 64, fontWeight: 700, padding: 32, textAlign: 'center'
        }}
      >
        {title}
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
