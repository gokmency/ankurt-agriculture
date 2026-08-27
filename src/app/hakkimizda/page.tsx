import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, MapPin, Ruler, ShieldCheck, Wrench } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { JsonLd, localBusinessJsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Hakkımızda ve Üretim Yaklaşımımız',
  description: `${company.nameFull} — Antalya Serik / Yukarıkocayatak'ta tarla, bahçe ve sera için tarım makinaları imalatı ve satışı.`,
  path: '/hakkimizda/',
});

const capabilities = [
  'Bahçe ve tarım römorkları',
  'Çizel ve patlatma ekipmanları',
  'Devirmeli traktör sepetleri',
  'Sap çıkarma ve pasaf toplama',
  'Sera tipi sürgü ekipmanları',
  'Diskaro, rotovatör ve çapa',
];

export default function AboutPage() {
  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
  ];

  return (
    <main className="min-h-screen bg-[#f2f0e9] py-8 sm:py-12">
      <JsonLd data={localBusinessJsonLd()} />
      <div className="section-shell">
        <Breadcrumb items={breadcrumbItems} />

        <section className="mt-4 overflow-hidden rounded-[12px] bg-[#121713] text-white">
          <div className="grid lg:grid-cols-12">
            <div className="engineering-grid relative flex min-h-[420px] flex-col justify-center px-6 py-14 sm:px-12 lg:col-span-7 lg:min-h-[520px] lg:px-16">
              <div className="relative z-10 max-w-2xl">
                <span className="eyebrow-label inline-flex items-center gap-2 text-[#e7b23f]">
                  <MapPin className="h-4 w-4" /> Yukarıkocayatak, Serik / Antalya
                </span>
                <h1 className="mt-5 text-[52px] uppercase leading-[.88] text-white sm:text-[72px]">
                  Sahadaki ihtiyacı,
                  <span className="block text-[#e7b23f]">atölyede çözüyoruz.</span>
                </h1>
                <p className="mt-7 max-w-xl text-base leading-7 text-white/70">
                  ANKURT, tarla, bahçe ve sera koşullarını bilen; doğru ölçü, sağlam gövde ve doğrudan destek üzerine çalışan yerel bir mühendislik ve tarım makinaları merkezidir.
                </p>
              </div>
            </div>

            <div className="relative min-h-[340px] lg:col-span-5 lg:min-h-[520px]">
              <Image
                src={company.workshopImage}
                alt="ANKURT atölyesinde üretilen tarım ekipmanları"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121713]/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="eyebrow-label text-[#e7b23f]">Atölye & ürün alanı</p>
                <p className="mt-2 max-w-sm font-editorial text-3xl uppercase leading-none text-white">
                  Serik&apos;ten sahaya doğrudan üretim ve teslimat.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="eyebrow-label text-[#0f5d35]">Faaliyetimiz & yaklaşımımız</span>
            <h2 className="mt-4 max-w-2xl text-[44px] uppercase leading-[.92] text-[#1c211d] sm:text-[60px]">
              Bölgenin tarım dinamiklerini biliyoruz.
            </h2>
            <div className="mt-7 max-w-3xl space-y-5 text-sm leading-7 text-[#626760] sm:text-base">
              <p>
                Antalya Serik&apos;te faaliyet gösteren ekibimiz; örtü altı sera üreticilerinin, açık alan çiftçilerinin ve narenciye yetiştiricilerinin günlük kullanım ihtiyaçlarına odaklanır.
              </p>
              <p>
                Kendi markamızla ürettiğimiz ANKURT ekipmanlarının yanında Sevsan, Volkan, Ata Makina, Torunoğlu ve Öz-Akın gibi sektörde bilinen markaların satış ve tedariğini de sağlarız.
              </p>
            </div>

            <div className="mt-10 border-t border-[#1c211d]/15 pt-8">
              <h3 className="text-3xl uppercase text-[#1c211d]">Ürün ve imalat yelpazemiz</h3>
              <div className="mt-5 grid gap-x-8 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <div key={capability} className="flex items-center gap-3 border-b border-[#1c211d]/10 py-4 text-sm font-bold text-[#1c211d]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0f5d35]" />
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5 lg:col-span-5">
            <div className="engineering-grid rounded-[12px] bg-[#0f5d35] p-7 text-white sm:p-9">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="eyebrow-label text-[#e7b23f]">İmalat güvencesi</span>
                  <h3 className="mt-3 text-4xl uppercase leading-none text-white">ANKURT atölye standardı</h3>
                </div>
                <ShieldCheck className="h-7 w-7 shrink-0 text-[#e7b23f]" />
              </div>
              <div className="mt-7 divide-y divide-white/15 border-y border-white/15">
                {[
                  { icon: Ruler, title: 'Ölçü ve uyum', text: 'Traktör, arazi ve kullanım amacına göre değerlendirme' },
                  { icon: Wrench, title: 'Sağlam gövde', text: 'Sahadaki çalışma yüküne uygun şasi ve bağlantılar' },
                  { icon: ShieldCheck, title: 'Doğrudan destek', text: 'Satış öncesi ve sonrasında atölyeyle doğrudan iletişim' },
                ].map((item) => (
                  <div key={item.title} className="grid grid-cols-[36px_1fr] gap-3 py-5">
                    <item.icon className="mt-1 h-5 w-5 text-[#e7b23f]" />
                    <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="mt-1 text-xs leading-5 text-white/65">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[12px] border border-[#121713]/10 bg-[#fbfaf6] p-7 sm:p-9">
              <span className="eyebrow-label text-[#0f5d35]">Ziyaret & iletişim</span>
              <p className="mt-4 text-sm leading-6 text-[#626760]">{company.location.formatted}</p>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild size="md">
                  <a href={company.location.directionsUrl} target="_blank" rel="noopener noreferrer">
                    Yol Tarifi Al <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="md">
                  <Link href="/iletisim">İletişim & Teklif Formu</Link>
                </Button>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
