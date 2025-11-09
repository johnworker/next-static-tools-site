'use client';
import Link from 'next/link';
import { useEffect } from 'react';
export default function Navbar(){
  useEffect(()=>{
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(()=>{});
    }
  },[]);
  return (
    <nav className="border-b sticky top-0 backdrop-blur z-40 bg-white/70 dark:bg-gray-950/50">
      <div className="container flex items-center h-14 justify-between">
        <Link href="/" className="font-bold">實用小工具站</Link>
        <div className="flex gap-4 text-sm">
          <Link href="/tools">工具</Link>
          <Link href="/blog">部落格</Link>
        </div>
      </div>
    </nav>
  );
}
