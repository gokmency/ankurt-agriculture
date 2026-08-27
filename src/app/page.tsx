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
  title: 'Tarım Makinaları ve Ekipmanları',
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
      <section className="relative min-h-[720px] bg-[#121713] text-white lg:min-h-[760px]">
        <Image
          src={company.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] opacity-90"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,23,19,.98)_0%,rgba(18,23,19,.90)_42%,rgba(18,23,19,.35)_68%,rgba(18,23,19,.08)_100%)]" />
        <div className="engineering-grid absolute inset-0 opacity-30" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/15" />

        <div className="section-shell relative flex min-h-[720px] items-center py-20 lg:min-h-[760px]">
          <div className="max-w-[770px] pt-4">
            <div className="mb-7 flex items-center gap-4">
              <span className="eyebrow-label text-[#e7b23f]">ANKURT / Serik, Antalya</span>
              <span className="h-px w-20 bg-[#e7b23f]/60" />
            </div>

            <h1 className="max-w-[760px] text-[58px] font-semibold uppercase leading-[.85] tracking-[-.04em] text-white sm:text-[78px] lg:text-[104px]">
              Toprağa göre tasarlanır.
              <span className="block text-[#e7b23f]">Yıllarca çalışır.</span>
            </h1>

            <p className="mt-8 max-w-[610px] text-base leading-7 text-white/72 sm:text-lg">
              Tarla, bahçe ve sera koşullarına uygun tarım ekipmanlarını; doğru şasi, doğru ölçü ve sahada işe yarayan detaylarla üretiyor ve temin ediyoruz.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/urunler">
                  Ürünleri İncele <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost-dark">
                <Link href="/iletisim">İhtiyacını Anlat</Link>
              </Button>
            </div>

            <div className="mt-12 grid max-w-[660px] grid-cols-1 gap-px overflow-hidden rounded-[8px] border border-white/15 bg-white/15 sm:grid-cols-3">
              {[
                ['Yerli İmalat', 'Serik atölye üretimi'],
                ['Doğru Eşleşme', 'Arazi ve traktöre göre'],
                ['Doğrudan İrtibat', 'Usta ve satış ekibiyle'],
              ].map(([title, detail]) => (
                <div key={title} className="bg-[#121713]/80 px-5 py-4 backdrop-blur-sm">
                  <div className="text-[12px] font-bold uppercase tracking-[.08em] text-white">{title}</div>
                  <div className="mt-1 text-[11px] text-white/55">{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden w-[360px] border-l border-t border-white/15 bg-[#0f5d35]/95 p-7 backdrop-blur-md xl:block">
          <div className="flex items-start justify-between">
            <span className="eyebrow-label text-[#e7b23f]">Mühendislik yaklaşımı</span>
            <Ruler className="h-5 w-5 text-white/60" />
          </div>
          <p className="mt-4 font-editorial text-3xl uppercase leading-none text-white">
            Ölçü, dayanım ve kullanım amacı tek gövdede buluşur.
          </p>
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
              <span className="eyebrow-label text-[#0f5d35]">Atölyeden çıkanlar</span>
              <h2 className="mt-4 max-w-3xl text-[48px] uppercase leading-[.9] text-[#1c211d] sm:text-[64px]">
                Sahada iş yapan ekipmanlar.
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-md text-sm leading-6 text-[#626760]">
                Bahçe römorkundan çizel patlatmaya, traktör sepetinden sera ekipmanlarına kadar ANKURT imalatı ürünleri inceleyin.
              </p>
              <Link href="/urunler?marka=ankurt" className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em] text-[#0f5d35] hover:text-[#121713]">
                Tüm ANKURT ürünleri ({ankurtProducts.length}) <ArrowRight className="h-4 w-4" />
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
            <span className="eyebrow-label text-[#e7b23f]">Neden ANKURT</span>
            <h2 className="mt-5 text-[52px] uppercase leading-[.88] sm:text-[68px]">
              Katalogdan önce ihtiyacı dinleriz.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/65">
              Her arazi, her traktör ve her kullanım senaryosu aynı değildir. Ürün yönlendirmesini sahadaki gerçek ihtiyaca göre yaparız.
            </p>
            <Button asChild variant="ghost-dark" size="md" className="mt-8">
              <Link href="/hakkimizda">Üretim yaklaşımımız</Link>
            </Button>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            {[
              { icon: Ruler, title: 'Ölçü ve uyum', text: 'Traktör gücü, çalışma genişliği ve arazi yapısı birlikte değerlendirilir.' },
              { icon: Wrench, title: 'Sağlam gövde', text: 'Şasi, bağlantı ve çalışan parçalar kullanım yüküne göre ele alınır.' },
              { icon: ShieldCheck, title: 'Doğrudan destek', text: 'Satış öncesi sorular ve satış sonrası ihtiyaçlar için doğrudan ulaşabilirsiniz.' },
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
                <p className="mt-3 font-editorial text-3xl uppercase leading-none">İmalat, satış ve doğrudan teslimat noktası</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7 lg:pl-10">
            <span className="eyebrow-label text-[#0f5d35]">Doğrudan iletişim</span>
            <h2 className="mt-4 text-[50px] uppercase leading-[.9] text-[#1c211d] sm:text-[66px]">
              Doğru ekipmanı birlikte belirleyelim.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#626760]">
              Traktör modelinizi, arazinizin yapısını ve yapmak istediğiniz işi anlatın. Uygun ürün grubu, ölçü ve güncel fiyat için sizi yönlendirelim.
            </p>

            <div className="mt-8 space-y-3 border-y border-[#1c211d]/15 py-6">
              <a href={company.contact.phoneHref} className="group flex items-center justify-between py-2">
                <span className="flex items-center gap-3 text-sm font-bold text-[#1c211d]"><Phone className="h-4 w-4 text-[#0f5d35]" /> Sabit hat</span>
                <span className="font-editorial text-2xl text-[#1c211d] group-hover:text-[#0f5d35]">{company.contact.phone}</span>
              </a>
              <a href={company.contact.mobileHref} className="group flex items-center justify-between py-2">
                <span className="flex items-center gap-3 text-sm font-bold text-[#1c211d]"><Phone className="h-4 w-4 text-[#0f5d35]" /> Mobil hat</span>
                <span className="font-editorial text-2xl text-[#1c211d] group-hover:text-[#0f5d35]">{company.contact.mobile}</span>
              </a>
              <a href={company.location.directionsUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-2">
                <span className="flex items-center gap-3 text-sm font-bold text-[#1c211d]"><MapPin className="h-4 w-4 text-[#0f5d35]" /> Atölye konumu</span>
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em] text-[#0f5d35]">Yol tarifi <ArrowUpRight className="h-4 w-4" /></span>
              </a>
              <a href={company.location.businessProfileUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-2">
                <span className="flex items-center gap-3 text-sm font-bold text-[#1c211d]"><MapPin className="h-4 w-4 text-[#0f5d35]" /> Google işletme profili</span>
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em] text-[#0f5d35]">Profili aç <ArrowUpRight className="h-4 w-4" /></span>
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary"><Link href="/iletisim">Teklif Formu</Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/urunler">Kataloğa Dön</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e7b23f] py-12">
        <div className="section-shell flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex items-center gap-5">
            <CheckCircle2 className="hidden h-9 w-9 text-[#121713] sm:block" />
            <div>
              <p className="eyebrow-label text-[#121713]/60">Bir sonraki adım</p>
              <h2 className="mt-1 text-4xl uppercase leading-none text-[#121713]">Arazinize uygun ekipmanı soralım mı?</h2>
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
