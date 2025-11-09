export default function Footer(){
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} 實用小工具站 · 本站內容僅供參考 ·
        <a className="underline ml-2" href="https://gumroad.com/yourstore" target="_blank">Gumroad 商店</a>
      </div>
    </footer>
  );
}
