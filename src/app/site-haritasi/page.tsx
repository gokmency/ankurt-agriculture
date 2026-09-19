import { Metadata } from 'next';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { getActiveProducts } from '@/data/products';
import { getAllGuides, getGuideCategories } from '@/data/guides';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { JsonLd, breadcrumbJsonLd } from '@/components/seo/JsonLd';
import { createPageMetadata } from '@/lib/seo';
import { Map, Package, BookOpen, Building2, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  title: 'Site Haritası | ANKURT Tarım Makinaları',
  description:
    'ANKURT Tarım Makinaları web sitesi tüm ürünler, kategoriler, teknik rehberler ve kurumsal sayfalar dizini.',
  path: '/site-haritasi/',
});

export default function SiteMapPage() {
  const products = getActiveProducts();
  const guides = getAllGuides();
  const guideCategories = getGuideCategories().filter((c) => c !== 'Tümü');

  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Site Haritası', href: '/site-haritasi/' },
  ];

  return (
    <main className="min-h-screen bg-[#f2f0e9] py-8 sm:py-12">
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <header className="rounded-[16px] bg-[#fbfaf6] border border-[#121713]/10 p-6 sm:p-10 my-6">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0f5d35] mb-2">
            <Map className="w-4 h-4" />
            <span>Tüm Sayfalar ve İçerik Haritası</span>
          </div>
          <h1 className="font-editorial text-[32px] sm:text-[42px] text-[#0f5d35] uppercase leading-tight">
            ANKURT Tarım Makinaları Site Haritası
          </h1>
          <p className="text-sm text-[#464c47] max-w-2xl mt-2 leading-relaxed">
            Arama motorları ve ziyaretçilerimiz için tüm ürün modelleri, teknik kılavuzlar, kategoriler ve kurumsal bağlantıların eksiksiz dizini.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kurumsal & Ana Sayfalar */}
          <section className="rounded-[16px] bg-[#fbfaf6] border border-[#121713]/10 p-6">
            <div className="flex items-center gap-2 text-[#0f5d35] font-bold text-sm uppercase tracking-wider pb-3 border-b border-[#121713]/10 mb-4">
              <Building2 className="w-4 h-4" />
              <h2>Kurumsal & Genel</h2>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-[#1c211d] hover:text-[#0f5d35] hover:underline flex items-center justify-between">
                  <span>Ana Sayfa</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda/" className="text-[#1c211d] hover:text-[#0f5d35] hover:underline flex items-center justify-between">
                  <span>Hakkımızda & Atölye</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
              </li>
              <li>
                <Link href="/iletisim/" className="text-[#1c211d] hover:text-[#0f5d35] hover:underline flex items-center justify-between">
                  <span>İletişim & Konum</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
              </li>
              <li>
                <Link href="/urunler/" className="text-[#1c211d] hover:text-[#0f5d35] hover:underline flex items-center justify-between">
                  <span>Tüm Ürünler Kataloğu</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
              </li>
              <li>
                <Link href="/rehber/" className="text-[#1c211d] hover:text-[#0f5d35] hover:underline flex items-center justify-between">
                  <span>Çiftçi Rehberi & Blog</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
              </li>
              <li>
                <Link href="/kvkk/" className="text-[#626760] hover:text-[#0f5d35] hover:underline">
                  <span>KVKK Aydınlatma Metni</span>
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi/" className="text-[#626760] hover:text-[#0f5d35] hover:underline">
                  <span>Gizlilik Politikası</span>
                </Link>
              </li>
              <li>
                <Link href="/cerez-politikasi/" className="text-[#626760] hover:text-[#0f5d35] hover:underline">
                  <span>Çerez Politikası</span>
                </Link>
              </li>
            </ul>
          </section>

          {/* Kategoriler */}
          <section className="rounded-[16px] bg-[#fbfaf6] border border-[#121713]/10 p-6">
            <div className="flex items-center gap-2 text-[#0f5d35] font-bold text-sm uppercase tracking-wider pb-3 border-b border-[#121713]/10 mb-4">
              <ShieldCheck className="w-4 h-4" />
              <h2>Ürün Kategorileri</h2>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm">
              {categories.map((cat) => (
                <li key={cat.id} className="p-2.5 rounded-[6px] bg-[#f2f0e9]/60 hover:bg-[#f2f0e9]">
                  <Link
                    href={`/urunler/kategori/${cat.slug}/`}
                    className="font-bold text-[#0f5d35] hover:underline flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <p className="text-[11px] text-[#626760] mt-1 leading-snug line-clamp-2">
                    {cat.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* Ürünler Kataloğu */}
          <section className="rounded-[16px] bg-[#fbfaf6] border border-[#121713]/10 p-6 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-[#0f5d35] font-bold text-sm uppercase tracking-wider pb-3 border-b border-[#121713]/10 mb-4">
              <Package className="w-4 h-4" />
              <h2>Makineler & Ekipmanlar ({products.length})</h2>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm max-h-[420px] overflow-y-auto pr-2">
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/urunler/${p.slug}/`}
                    className="text-[#1c211d] hover:text-[#0f5d35] hover:underline flex items-center justify-between py-1 border-b border-[#121713]/5"
                  >
                    <span>{p.title}</span>
                    <span className="text-[10px] text-[#626760] uppercase">{p.brand}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Teknik Rehberler */}
          <section className="rounded-[16px] bg-[#fbfaf6] border border-[#121713]/10 p-6 md:col-span-2 lg:col-span-3">
            <div className="flex items-center gap-2 text-[#0f5d35] font-bold text-sm uppercase tracking-wider pb-3 border-b border-[#121713]/10 mb-4">
              <BookOpen className="w-4 h-4" />
              <h2>Teknik Rehberler ve Çiftçi Makaleleri ({guides.length})</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guideCategories.map((cat) => {
                const catGuides = guides.filter((g) => g.category === cat);
                return (
                  <div key={cat} className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f5d35] bg-[#0f5d35]/10 px-2.5 py-1 rounded-[4px]">
                      {cat} ({catGuides.length})
                    </h3>
                    <ul className="space-y-1.5 text-xs">
                      {catGuides.map((g) => (
                        <li key={g.id}>
                          <Link
                            href={`/rehber/${g.slug}/`}
                            className="text-[#1c211d] hover:text-[#0f5d35] hover:underline block py-0.5 line-clamp-1"
                            title={g.title}
                          >
                            • {g.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
