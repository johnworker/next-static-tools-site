'use client';
import { DefaultSeo } from 'next-seo';
export default function SEO(){
  return (
    <DefaultSeo
      titleTemplate="%s | 實用小工具站"
      defaultTitle="實用小工具站"
      description="零後端、純前端的小工具集合與專業文章"
      openGraph={{
        type: 'website',
        locale: 'zh_TW',
        url: 'https://your-domain.example/',
        site_name: '實用小工具站',
        images: [{ url: '/api/og?title=%E5%B0%88%E6%A5%AD%E5%B7%A5%E5%85%B7%E7%AB%99' }]
      }}
      additionalLinkTags={[{ rel: 'manifest', href: '/manifest.webmanifest' }]}
      additionalMetaTags={[{ name: 'theme-color', content: '#0ea5e9' }]}
    />
  );
}
