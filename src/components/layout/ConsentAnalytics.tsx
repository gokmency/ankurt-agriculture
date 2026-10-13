'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { company } from '@/data/company';
import { getProductBySlug } from '@/data/products';
import { trackContactPageVisit, trackProductView } from '@/lib/analytics';
const key = 'ankurt:analytics-consent:v1';
export function ConsentAnalytics() {
  const [choice, setChoice] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [editing, setEditing] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    // localStorage can be disabled; the current visit still works.
    let stored: string | null = null;
    try { stored = localStorage.getItem(key); } catch {}
    const timer = setTimeout(() => setChoice(stored === 'accepted' || stored === 'rejected' ? stored : 'pending'), 0);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (choice !== 'accepted' || !ready) return;
    window.gtag('config', company.analytics.gaId, { page_path: pathname, page_location: window.location.origin + pathname, send_page_view: true });
    const product = getProductBySlug(pathname.split('/')[2] || '');
    if (pathname.startsWith('/urunler/') && product) trackProductView(product.title, product.slug);
    if (pathname === '/iletisim/') trackContactPageVisit();
  }, [choice, ready, pathname]);
  function choose(next: 'accepted' | 'rejected') {
    try { localStorage.setItem(key, next); } catch {}
    (window as unknown as Record<string, unknown>)[`ga-disable-${company.analytics.gaId}`] = next !== 'accepted';
    if (typeof window.gtag === 'function') window.gtag('consent', 'update', { analytics_storage: next === 'accepted' ? 'granted' : 'denied' });
    setChoice(next); setEditing(false);
  }
  return <>
    {choice === 'accepted' && company.analytics.gaId && <Script id="ankurt-ga" src={`https://www.googletagmanager.com/gtag/js?id=${company.analytics.gaId}`} strategy="afterInteractive" onReady={() => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        // Google gtag expects an Arguments object in its command queue.
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
      window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
      window.gtag('js', new Date()); setReady(true);
    }} />}
    {(choice === 'pending' || editing) && <section aria-label="Analiz tercihi" className="fixed bottom-20 left-3 right-3 z-[60] max-w-lg rounded-xl border border-[#0f5d35]/20 bg-[#fbfaf6] p-5 text-sm text-[#121713] shadow-xl md:bottom-4 md:left-4 md:right-auto">
      <p className="font-bold">Site kullanım analizine izin verir misiniz?</p>
      <p className="mt-2 leading-6">Google Analytics yalnızca izninizle yüklenir. Tercihinizi her zaman değiştirebilirsiniz. <Link className="underline" href="/cerez-politikasi/">Çerez politikası</Link></p>
      <div className="mt-3 flex flex-wrap gap-3"><button onClick={() => choose('rejected')} className="min-h-11 rounded-md border border-[#0f5d35] px-4 font-bold">Reddet</button><button onClick={() => choose('accepted')} className="min-h-11 rounded-md bg-[#0f5d35] px-4 font-bold text-white">İzin ver</button></div>
    </section>}
    <div className="bg-[#f2f0e9] px-4 py-3 text-center"><button className="min-h-11 text-xs text-[#0f5d35] underline" onClick={() => setEditing(true)}>Analiz tercihimi değiştir</button></div>
  </>;
}
