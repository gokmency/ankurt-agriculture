import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { JsonLd, breadcrumbJsonLd } from '@/components/seo/JsonLd';
import { getAllGuides, getGuideCategories } from '@/data/guides';
import { GuideHub } from '@/components/guides/GuideHub';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Tarım Makinaları ve Ekipman Rehberi | ANKURT',
  description: 'Antalya ve Serik koşullarına uygun sera, bahçe ve tarla tarım makineleri seçimi, römork, çizel patlatma ve bakım rehberleri.',
  path: '/rehber/',
});

export default function GuidesPage() {
  const guides = getAllGuides();
  const categories = getGuideCategories();
  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Rehber & Blog', href: '/rehber/' },
  ];

  return (
    <main className="min-h-screen bg-[#f2f0e9] py-8 sm:py-12">
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />

      <div className="section-shell">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="engineering-grid relative mt-4 overflow-hidden rounded-[16px] bg-[#121713] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16 shadow-lg border border-white/10">
          <div className="relative grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="eyebrow-label inline-flex items-center gap-2 text-[#e7b23f]">
                  <BookOpen className="h-4 w-4" /> Çiftçi & Üretici Rehberi
                </span>
                <span className="h-px w-12 bg-[#e7b23f]/50" />
                <span className="rounded-[4px] bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[.08em] text-white">
                  30 Kapsamlı Yazı
                </span>
              </div>

              <h1 className="text-[40px] uppercase leading-[.92] text-white sm:text-[58px] lg:text-[68px]">
                Ekipmanı seçmeden önce
                <span className="block text-[#e7b23f]">doğru soruyu sorun.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                Antalya ve Serik bölgesindeki sera, bahçe ve açık arazilerin gerçek ihtiyaçlarına göre hazırlanmış; traktör gücü, ölçü uyumu, bakım ve ekipman seçim rehberleri.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:justify-self-end w-full max-w-sm">
              <div className="rounded-[10px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#e7b23f] text-xs font-bold uppercase">
                  <CheckCircle2 className="h-4 w-4" /> Doğrudan Sahadan
                </div>
                <div className="mt-1 text-xs text-white/60">
                  Gerçek arazi ve atölye tecrübesi
                </div>
              </div>
              <div className="rounded-[10px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#e7b23f] text-xs font-bold uppercase">
                  <Layers className="h-4 w-4" /> 5 Ana Kategori
                </div>
                <div className="mt-1 text-xs text-white/60">
                  Römork, çizel, sera, bakım & PTO
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Hub with Instant Search & Category Filters */}
        <section className="py-10 sm:py-14">
          <GuideHub initialGuides={guides} categories={categories} />

          {/* Bottom CTA Banner */}
          <div className="mt-16 flex flex-col justify-between gap-5 rounded-[16px] bg-[#e7b23f] p-8 sm:flex-row sm:items-center sm:p-10 shadow-md">
            <div>
              <p className="eyebrow-label text-[#121713]/65 text-[11px]">Ölçü veya Traktör Uyumu İçin Danışın</p>
              <h2 className="mt-1 font-editorial text-3xl sm:text-4xl uppercase leading-none text-[#121713]">
                Arazinizi anlatın, doğru modeli birlikte belirleyelim.
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#121713]/80 max-w-xl">
                Sera kapısı, ağaç aralığı veya traktör gücünüze göre hangi ekipmanın uygun olduğunu doğrudan Serik atölyemizdeki ustalarımıza sorabilirsiniz.
              </p>
            </div>
            <Link
              href="/iletisim/"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[6px] bg-[#121713] px-6 text-xs font-bold uppercase tracking-[.08em] text-white hover:bg-[#0f5d35] transition-colors"
            >
              Ustamıza Danışın <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
