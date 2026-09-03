import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/products/ProductCard';
import { categories } from '@/data/categories';
import { getAnkurtProducts, getProductsByCategory } from '@/data/products';
import { company } from '@/data/company';
import { JsonLd, websiteJsonLd } from '@/components/seo/JsonLd';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'ANKURT Tarım Makinaları | Serik Antalya İmalat ve Satış',
  description: company.seo.defaultDescription,
  path: '/',
  keywords: [...company.seo.defaultKeywords],
});

export default function Home() {
  const ankurtProducts = getAnkurtProducts();
  const featuredProducts = ankurtProducts.slice(0, 3);

  return (
    <main className="overflow-hidden bg-[#f2f0e9]">
      <JsonLd data={websiteJsonLd()} />
      <section className="relative min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] flex items-center bg-[#0e1410] text-white overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/10">
        {/* Direct Full-Bleed Background Image */}
        <Image
          src={company.heroImage}
          alt="ANKURT Tarım Market ve Tarım Makineleri İmalatı - Serik Antalya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] lg:object-[72%_center]"
        />

        {/* Directional Daylight-Preserving Gradient: Dark on text area, 100% transparent over the building & machines */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0e1410_0%,rgba(14,20,16,0.95)_34%,rgba(14,20,16,0.60)_52%,rgba(14,20,16,0.15)_70%,transparent_85%)] max-lg:bg-[linear-gradient(180deg,#0e1410_0%,rgba(14,20,16,0.92)_50%,rgba(14,20,16,0.40)_80%,transparent_100%)]" />

        {/* Subtle engineering grid accent */}
        <div className="engineering-grid absolute inset-0 opacity-15 pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-[660px]">
            
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="eyebrow-label text-[#e7b23f]">ANKURT / Serik, Antalya</span>
              <span className="h-px w-14 bg-[#e7b23f]/60" />
            </div>

            {/* Main Headline - Sade, Güçlü, Net */}
            <h1 className="text-[46px] sm:text-[66px] lg:text-[84px] font-semibold uppercase leading-[.88] tracking-[-.035em] text-white">
              Toprağınıza uygun.
              <span className="block text-[#e7b23f]">Yıllarca çalışır.</span>
            </h1>

            {/* Subtitle - Doğal ve net */}
            <p className="mt-6 max-w-[540px] text-base leading-relaxed text-white/80 sm:text-lg">
              Antalya Serik&apos;teki atölyemizde; tarlanıza, bahçenize ve seranıza özel ölçülerde tarım makineleri üretiyor, doğrudan teslim ediyoruz.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/urunler">
                  Ürünleri İncele <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost-dark">
                <Link href="/iletisim">Ustamıza Danışın</Link>
              </Button>
            </div>

            {/* Minimalist Trust Features Bar */}
            <div className="mt-10 flex flex-wrap items-center gap-y-3 gap-x-6 border-t border-white/15 pt-6 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e7b23f]" />
                <span className="font-semibold text-white">Kendi İmalatımız</span>
                <span className="text-white/40">Serik atölyesi</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e7b23f]" />
                <span className="font-semibold text-white">Ölçüye Özel</span>
                <span className="text-white/40">Traktör & sera uyumu</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e7b23f]" />
                <span className="font-semibold text-white">Doğrudan İletişim</span>
                <span className="text-white/40">Ustayla görüşme</span>
              </div>
            </div>

          </div>
        </div>

        {/* Discreet Location Pin Badge on bottom-right */}
        <div className="absolute bottom-6 right-8 hidden xl:flex items-center gap-2 rounded-full border border-white/20 bg-[#0e1410]/80 px-4 py-2 text-xs text-white/85 backdrop-blur-md shadow-lg">
          <span className="h-2 w-2 rounded-full bg-[#e7b23f]" />
          <span>Ankurt Tarım Market • Serik Satış ve İmalat Sahamız</span>
        </div>
      </section>

      <section className="border-b border-[#1c211d]/12 bg-[#fbfaf6]">
        <div className="section-shell grid grid-cols-1 lg:grid-cols-[.75fr_2.25fr]">
          <div className="flex items-center border-b border-[#1c211d]/12 py-6 lg:border-b-0 lg:border-r lg:pr-10">
            <span className="eyebrow-label text-[#626760]">Ürün grupları</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/urunler?kategori=${category.slug}`}
                className="group flex min-h-28 flex-col justify-between border-r border-[#1c211d]/10 p-4 transition-colors last:border-r-0 hover:bg-[#e7b23f] sm:p-6"
              >
                <span className="text-[10px] font-bold uppercase tracking-[.09em] text-[#626760] group-hover:text-[#121713]/65">
                  {getProductsByCategory(category.id).length} ekipman
                </span>
                <div className="flex items-end justify-between gap-3">
                  <span className="font-editorial text-xl uppercase leading-none text-[#1c211d] sm:text-2xl">{category.name}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#0f5d35] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#121713]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-8 border-b border-[#1c211d]/15 pb-9 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <span className="eyebrow-label text-[#0f5d35]">Atölye İmalatı</span>
              <h2 className="mt-4 max-w-3xl text-[48px] uppercase leading-[.9] text-[#1c211d] sm:text-[64px]">
                Arazide ve Serada Çalışan Sağlam Ekipmanlar
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-md text-sm leading-6 text-[#626760]">
                Bahçe römorku, 7&apos;li çizel patlatma, traktör sepeti ve sap toplama başta olmak üzere atölyemizde ürettiğimiz modelleri inceleyin.
              </p>
              <Link href="/urunler?marka=ankurt" className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em] text-[#0f5d35] hover:text-[#121713]">
                Tüm ANKURT modelleri ({ankurtProducts.length}) <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#121713] py-20 text-white sm:py-28">
        <div className="engineering-grid absolute inset-0 opacity-40" />
        <div className="section-shell relative grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow-label text-[#e7b23f]">Neden ANKURT?</span>
            <h2 className="mt-5 text-[52px] uppercase leading-[.88] sm:text-[68px]">
              Ezbere makine satmıyoruz.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/65">
              Her arazinin toprağı, her seranın direk aralığı ve her traktörün gücü farklıdır. İhtiyacınıza tam uyan doğru ölçüyü belirleyip öyle imalat yapıyoruz.
            </p>
            <Button asChild variant="ghost-dark" size="md" className="mt-8">
              <Link href="/hakkimizda">Atölyemiz ve Çalışma Şeklimiz</Link>
            </Button>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            {[
              { icon: Ruler, title: 'Tam Uyumlu Ölçü', text: 'Traktörünüzün beygir gücüne ve seranızın çalışma genişliğine göre doğru boyutlandırma yapıyoruz.' },
              { icon: Wrench, title: 'Ağır Hizmet Şasi', text: 'Zorlu ve taşlı arazide çatlama, esneme yapmayan sağlam çelik profil ve kaliteli kaynak kullanıyoruz.' },
              { icon: ShieldCheck, title: 'Doğrudan Usta Desteği', text: 'Almadan önce de aldıktan sonra da doğrudan atölyeyi arar, birinci elden ustamızla görüşürsünüz.' },
            ].map((item, index) => (
              <div key={item.title} className="grid grid-cols-[54px_1fr] gap-5 border-t border-white/15 py-7 first:border-t-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-[6px] border border-[#e7b23f]/45 text-[#e7b23f]">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-[10px] font-bold text-white/35">0{index + 1}</span>
                    <h3 className="text-3xl uppercase text-white">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf6] py-20 sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative min-h-[520px] overflow-hidden rounded-[8px] bg-[#d8d6cf]">
              <Image
                src="/images/products/ankurt_cizel_patlatma_1246074839.jpg"
                alt="ANKURT çizel patlatma ekipmanları"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121713]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <span className="eyebrow-label text-[#e7b23f]">Serik / Antalya</span>
                <p className="mt-3 font-editorial text-3xl uppercase leading-none">Atölyemize gelin, makineleri yerinde inceleyin</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7 lg:pl-10">
            <span className="eyebrow-label text-[#0f5d35]">Doğrudan İletişim</span>
            <h2 className="mt-4 text-[50px] uppercase leading-[.9] text-[#1c211d] sm:text-[66px]">
              Hangi makinenin uygun olduğunu ustamıza danışın.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#626760]">
              Traktörünüzün modelini, seranızın veya arazinizin durumunu söyleyin; size en uygun modeli ve net atölye fiyatını hemen iletelim.
            </p>

            <div className="mt-8 space-y-3 border-y border-[#1c211d]/15 py-6">
              <a href={company.contact.phoneHref} className="group flex items-center justify-between py-2">
                <span className="flex items-center gap-3 text-sm font-bold text-[#1c211d]"><Phone className="h-4 w-4 text-[#0f5d35]" /> Sabit hat</span>
                <span className="font-editorial text-2xl text-[#1c211d] group-hover:text-[#0f5d35]">{company.contact.phone}</span>
              </a>
              <a href={company.contact.mobileHref} className="group flex items-center justify-between py-2">
                <span className="flex items-center gap-3 text-sm font-bold text-[#1c211d]"><Phone className="h-4 w-4 text-[#0f5d35]" /> Mobil hat & WhatsApp</span>
                <span className="font-editorial text-2xl text-[#1c211d] group-hover:text-[#0f5d35]">{company.contact.mobile}</span>
              </a>
              <a href={company.location.directionsUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-2">
                <span className="flex items-center gap-3 text-sm font-bold text-[#1c211d]"><MapPin className="h-4 w-4 text-[#0f5d35]" /> Atölye konumu</span>
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em] text-[#0f5d35]">Yol tarifi al <ArrowUpRight className="h-4 w-4" /></span>
              </a>
              <a href={company.location.businessProfileUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-2">
                <span className="flex items-center gap-3 text-sm font-bold text-[#1c211d]"><MapPin className="h-4 w-4 text-[#0f5d35]" /> Google işletme profili</span>
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em] text-[#0f5d35]">Haritada aç <ArrowUpRight className="h-4 w-4" /></span>
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary"><Link href="/iletisim">Fiyat ve Bilgi Alın</Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/urunler">Tüm Makineleri Gör</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e7b23f] py-12">
        <div className="section-shell flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex items-center gap-5">
            <CheckCircle2 className="hidden h-9 w-9 text-[#121713] sm:block" />
            <div>
              <p className="eyebrow-label text-[#121713]/60">Atölyemiz her zaman açık</p>
              <h2 className="mt-1 text-4xl uppercase leading-none text-[#121713]">Makineleri yerinde görmek ister misiniz?</h2>
            </div>
          </div>
          <Link href="/iletisim" className="inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-[6px] bg-[#121713] px-7 text-xs font-bold uppercase tracking-[.08em] text-white transition-colors hover:bg-[#0f5d35]">
            Bize Ulaşın <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
