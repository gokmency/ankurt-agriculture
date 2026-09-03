import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { JsonLd, breadcrumbJsonLd } from '@/components/seo/JsonLd';
import { getAllGuides } from '@/data/guides';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Tarım Makinaları ve Ekipman Rehberi',
  description: 'Tarım makineleri seçimi, römork, çizel patlatma, rotovatör ve sera ekipmanları hakkında teknik rehberler ve pratik bilgiler.',
  path: '/rehber/',
});

export default function GuidesPage() {
  const guides = getAllGuides();
  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Rehber', href: '/rehber' },
  ];

  return (
    <main className="min-h-screen bg-[#f2f0e9] py-8 sm:py-12">
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />

      <div className="section-shell">
        <Breadcrumb items={breadcrumbItems} />

        <section className="engineering-grid relative mt-4 overflow-hidden rounded-[12px] bg-[#121713] px-6 py-14 text-white sm:px-12 sm:py-18 lg:px-16">
          <div className="relative grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end">
            <div>
              <span className="eyebrow-label inline-flex items-center gap-2 text-[#e7b23f]">
                <BookOpen className="h-4 w-4" /> Çiftçi & üretici notları
              </span>
              <h1 className="mt-5 max-w-3xl text-[52px] uppercase leading-[.88] text-white sm:text-[72px]">
                Ekipmanı seçmeden önce
                <span className="block text-[#e7b23f]">doğru soruyu sorun.</span>
              </h1>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/70 lg:justify-self-end">
              Arazi yapısı, traktör gücü ve kullanım amacına göre doğru ekipmanı seçmenize yardımcı olan kısa ve uygulanabilir teknik rehberler.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mb-7 flex items-end justify-between gap-6 border-b border-[#1c211d]/15 pb-6">
            <div>
              <span className="eyebrow-label text-[#0f5d35]">Bilgi merkezi</span>
              <h2 className="mt-2 text-4xl uppercase text-[#1c211d] sm:text-5xl">Tüm rehberler</h2>
            </div>
            <span className="hidden text-xs font-bold uppercase tracking-[.08em] text-[#626760] sm:block">
              {guides.length} teknik içerik
            </span>
          </div>

          <ol className="border-b border-[#1c211d]/15">
            {guides.map((guide, index) => (
              <li key={guide.slug} className="border-t border-[#1c211d]/15">
                <Link
                  href={`/rehber/${guide.slug}/`}
                  className="group grid gap-4 py-7 transition-colors hover:bg-[#fbfaf6] sm:px-5 md:grid-cols-[74px_1fr_170px_44px] md:items-center"
                >
                  <span className="font-editorial text-3xl text-[#0f5d35]/45">0{index + 1}</span>
                  <div>
                    <h3 className="text-[28px] leading-[1.02] text-[#1c211d] transition-colors group-hover:text-[#0f5d35] sm:text-[32px]">
                      {guide.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#626760]">{guide.shortDescription}</p>
                  </div>
                  <time className="text-xs font-bold uppercase tracking-[.06em] text-[#626760]" dateTime={guide.publishedDate}>
                    {guide.publishedDate}
                  </time>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[6px] border border-[#1c211d]/15 text-[#0f5d35] transition-colors group-hover:border-[#0f5d35] group-hover:bg-[#0f5d35] group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col justify-between gap-5 rounded-[12px] bg-[#e7b23f] p-7 sm:flex-row sm:items-center sm:p-9">
            <div>
              <p className="eyebrow-label text-[#121713]/60">Sorunuzun yanıtını bulamadınız mı?</p>
              <p className="mt-2 font-editorial text-3xl uppercase leading-none text-[#121713]">Arazinizi anlatın, birlikte değerlendirelim.</p>
            </div>
            <Link href="/iletisim/" className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[6px] bg-[#121713] px-6 text-xs font-bold uppercase tracking-[.08em] text-white hover:bg-[#0f5d35]">
              Bize Ulaşın <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
