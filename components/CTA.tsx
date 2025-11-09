export default function CTA({ variant='primary' }:{variant?:'primary'|'commerce'}) {
  const isCommerce = variant==='commerce'
  return (
    <div className={`rounded-2xl border p-6 my-12 ${isCommerce ? 'bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/10' : 'bg-gradient-to-br from-sky-50 to-white dark:from-sky-900/10'}`}>
      <h3 className="text-xl font-semibold mb-2">{isCommerce?'要商用授權與更多模板？':'需要現成模板與批次工具？'}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {isCommerce?'購買完整版，取得持續更新與商用授權。':'前往商店，取得可商用的素材包與本地小工具。'}
      </p>
      <a href="https://gumroad.com/你的商店" target="_blank" className={`inline-block mt-4 px-4 py-2 rounded-xl ${isCommerce?'bg-emerald-600':'bg-brand'} text-white`}>{isCommerce?'購買完整版':'前往商店'}</a>
    </div>
  )
}
