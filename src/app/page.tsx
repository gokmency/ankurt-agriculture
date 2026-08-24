import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/products/ProductCard';
import { categories } from '@/data/categories';
import { getAnkurtProducts, getProductsByCategory } from '@/data/products';
import { getAllGuides } from '@/data/guides';
import { MapPin, Phone, ArrowRight, ArrowUpRight, CheckCircle2, Navigation } from 'lucide-react';
import { company } from '@/data/company';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';

export default function Home() {
  const ankurtProducts = getAnkurtProducts();
  const featuredProducts = ankurtProducts.slice(0, 6);
  const guides = getAllGuides().slice(0, 3);
  
  const applications = [
    {
      badge: 'ÖRTÜ ALTI & SERA',
      title: 'Sera Toprak Hazırlığı',
      desc: 'Sera direk aralarına uyumlu 220 cm sürgüler ve 7 ayaklı sera patlatmaları.',
      href: '/urunler?kategori=sera-ekipmanlari',
      image: '/images/products/ankurt_sera_surgu.jpg',
    },
    {
      badge: 'MEYVE BAHÇESİ',
      title: 'Bahçe Römorku & Çapa',
      desc: 'Ağaç aralarından rahat geçen alçak şasili bahçe römorkları ve çapa grubu.',
      href: '/urunler?kategori=romorklar',
      image: '/images/products/ankurt_bahce_romork.jpg',
    },
    {
      badge: 'AÇIK ALAN & TARLA',
      title: 'Ağır Toprak İşleme',
      desc: 'Sert tabaka kırma için derin çizeller, ofset diskarolar ve rotovatörler.',
      href: '/urunler?kategori=toprak-isleme',
      image: '/images/products/sevsan_ofset_diskaro.jpg',
    },
    {
      badge: 'HASAT & NAKLİYE',
      title: 'Sap Temizliği & Taşıma',
      desc: 'Hasat sonrası tarla temizleyen sap toplama makineleri ve su tankerleri.',
      href: '/urunler?kategori=tasima',
      image: '/images/products/ankurt_sap_cikarma.jpg',
    }
  ];

  const otherBrands = [
    { name: 'Sevsan', desc: 'Ofset & Tandem Diskaro' },
    { name: 'Torunoğlu', desc: 'Özel Tasarım Rotovatör' },
    { name: 'Ata Makina', desc: 'Sap Parçalama & Rotovatör' },
    { name: 'Volkan', desc: 'Tarımsal Römork Çeşitleri' },
    { name: 'Öz-Akın', desc: '3 Yana Devirmeli Römork' },
  ];

  return (
    <div className="w-full bg-[#eef2e3] text-[#043f2e]">
      
      {/* ═══════════════════════════════════════════
          1. HERO: SUNLIT GREENHOUSE EDITORIAL SPREAD
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-12 sm:py-20 lg:py-24 border-b border-[#000000]/8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Hero Left Column (Pure Editorial Typography) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="eyebrow-label text-[#043f2e] mb-4 tracking-wider">
                SERİK / ANTALYA • ATÖLYE İMALATI
              </span>
              
              <h1 className="font-editorial text-[48px] sm:text-[68px] lg:text-[80px] text-[#043f2e] leading-[0.95] tracking-[-0.03em] mb-6 text-balance">
                Tarla, bahçe ve sera için doğru ekipman.
              </h1>
              
              <p className="text-[17px] sm:text-[19px] text-[#242423] mb-8 max-w-lg leading-relaxed text-balance">
                Antalya Serik'te imal ettiğimiz sağlam gövdeli bahçe römorkları, sera çizelleri, traktör sepetleri ve toprak işleme makineleri.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mb-8">
                <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
                  <Link href="/urunler">Ürün Kataloğunu İncele</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="/iletisim">Fiyat & Bilgi Al</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-xs text-[#242423] pt-2">
                <a href={company.contact.phoneHref} className="inline-flex items-center text-[#043f2e] hover:text-[#2a6f2b] font-medium">
                  <Phone className="w-3.5 h-3.5 mr-1.5 stroke-[1.5]" />
                  {company.contact.phone}
                </a>
                <a href={company.contact.mobileHref} className="inline-flex items-center text-[#043f2e] hover:text-[#2a6f2b] font-medium">
                  <Phone className="w-3.5 h-3.5 mr-1.5 stroke-[1.5]" />
                  {company.contact.mobile}
                </a>
              </div>
            </div>

            {/* Hero Right Column: Redesigned Sunlit Editorial Visual Showcase Mat */}
            <div className="lg:col-span-6 w-full">
              <div className="relative rounded-[16px] bg-[#fcfcfc] border border-[#000000]/10 p-3 sm:p-4 overflow-hidden">
                {/* Hero Showcase Photo */}
                <div className="relative aspect-[4/3] rounded-[12px] overflow-hidden bg-[#eef2e3]">
                  <Image
                    src="/images/products/ankurt_bahce_romork.jpg"
                    alt="ANKURT Bahçe ve Tarla Tarım Römorku"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#043f2e]/70 via-transparent to-transparent" />
                  
                  {/* Floating Overlay Badge on the Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#fcfcfc]">
                    <div>
                      <span className="eyebrow-label text-[#c8f169] text-[10px] block mb-0.5">ÖNE ÇIKAN SERİ</span>
                      <h3 className="font-editorial text-[20px] sm:text-[22px] leading-tight text-[#fcfcfc]">
                        ANKURT Bahçe Tipi Römork
                      </h3>
                      <p className="text-xs text-[#fcfcfc]/80 mt-0.5">
                        2,5 – 3 Ton • Dar Alan & Sera Uyumu
                      </p>
                    </div>
                    <Link
                      href="/urunler/bahce-tipi-romork"
                      className="shrink-0 p-2.5 rounded-[4px] bg-[#c8f169] text-[#000000] hover:bg-[#b8e552] transition-colors"
                      aria-label="Ürün detayını gör"
                    >
                      <ArrowRight className="w-4 h-4 stroke-[2]" />
                    </Link>
                  </div>
                </div>

                {/* Sub Mat Highlights */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-[#242423]">
                  <div className="p-2.5 rounded-[4px] bg-[#eef2e3]/60">
                    <span className="font-editorial text-[16px] text-[#043f2e] block">100%</span>
                    <span className="text-[11px] text-[#242423]/70">Yerli İmalat</span>
                  </div>
                  <div className="p-2.5 rounded-[4px] bg-[#eef2e3]/60">
                    <span className="font-editorial text-[16px] text-[#043f2e] block">Ağır Hizmet</span>
                    <span className="text-[11px] text-[#242423]/70">Çelik Şasi</span>
                  </div>
                  <div className="p-2.5 rounded-[4px] bg-[#eef2e3]/60">
                    <span className="font-editorial text-[16px] text-[#043f2e] block">Serik / Antalya</span>
                    <span className="text-[11px] text-[#242423]/70">Doğrudan Sevkiyat</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. APPLICATION SELECTOR (With Rich Machinery Photos)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 border-b border-[#000000]/8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="eyebrow-label text-[#043f2e]">İhtiyaca Göre Ekipman</span>
            <h2 className="font-editorial text-[36px] text-[#043f2e] tracking-[-0.02em] mt-1">
              Tarımsal Alanınıza Uygun Çözümler
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {applications.map((app, i) => (
              <Link 
                key={i} 
                href={app.href}
                className="group bg-[#fcfcfc] p-4 rounded-[16px] border border-[#000000]/10 hover:border-[#043f2e]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] rounded-[10px] overflow-hidden bg-[#eef2e3] mb-4">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="eyebrow-label text-[#043f2e] text-[10px] mb-1">
                    {app.badge}
                  </div>
                  <h3 className="font-editorial text-[20px] text-[#043f2e] mb-1.5 leading-snug group-hover:text-[#2a6f2b] transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-xs text-[#242423] leading-relaxed">
                    {app.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#000000]/6 flex items-center text-xs font-medium text-[#043f2e] group-hover:translate-x-0.5 transition-transform">
                  <span>Ekipmanları Listele</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. CATEGORIES TAXONOMY
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#fcfcfc] border-b border-[#000000]/8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="eyebrow-label text-[#043f2e]">Katalog Grupları</span>
              <h2 className="font-editorial text-[36px] text-[#043f2e] tracking-[-0.02em] mt-1">
                4 Ana Ürün Kategorisi
              </h2>
            </div>
            <p className="text-sm text-[#242423] max-w-sm mt-3 md:mt-0">
              ANKURT imalatı ekipmanlar ve yetkili satışını yaptığımız marka ürünler.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const count = getProductsByCategory(category.id).length;
              return (
                <Link 
                  key={category.id} 
                  href={`/urunler?kategori=${category.slug}`}
                  className="group bg-[#eef2e3] p-6 rounded-[16px] border border-[#000000]/8 hover:border-[#043f2e]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl p-2.5 bg-[#fcfcfc] rounded-[4px] text-[#043f2e]">
                        {category.icon || '⚙️'}
                      </div>
                      <span className="text-xs font-medium text-[#043f2e] bg-[#fcfcfc] px-2.5 py-1 rounded-[4px]">
                        {count} Ürün
                      </span>
                    </div>
                    
                    <h3 className="font-editorial text-[22px] text-[#043f2e] mb-2 group-hover:text-[#2a6f2b] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-[#242423] text-xs sm:text-sm leading-relaxed mb-6">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-xs font-medium text-[#043f2e] group-hover:translate-x-0.5 transition-transform">
                    <span>Kataloğu Görüntüle</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. FEATURED PRODUCTS GRID
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 border-b border-[#000000]/8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="eyebrow-label text-[#043f2e]">Atölye İmalatı</span>
              <h2 className="font-editorial text-[36px] text-[#043f2e] tracking-[-0.02em] mt-1">
                Öne Çıkan ANKURT Ürünleri
              </h2>
            </div>
            <Link 
              href="/urunler?marka=ankurt" 
              className="mt-4 sm:mt-0 inline-flex items-center text-sm font-medium text-[#043f2e] hover:text-[#2a6f2b] transition-colors"
            >
              <span>Tüm ANKURT İmalatını Gör ({ankurtProducts.length})</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. AUTHENTIC WORKSHOP & FABRICATION (Deep Forest Section with Clean Machinery Visuals)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#043f2e] text-[#fcfcfc] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Mosaic with Modern Clean Visuals */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-[#eef2e3] col-span-2">
                <Image
                  src="/images/products/ankurt_kazayagi.jpg"
                  alt="ANKURT Tarım Makinaları İmalat ve Tarla Çözümleri"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 left-3 text-xs font-medium text-[#fcfcfc] bg-[#043f2e]/90 px-3 py-1 rounded-[4px]">
                  Yukarıkocayatak, Serik İmalat Sahamız
                </div>
              </div>

              <div className="relative aspect-square rounded-[16px] overflow-hidden bg-[#eef2e3] p-1">
                <Image
                  src="/images/products/torunoglu_rotovator.jpg"
                  alt="Toprak İşleme ve Rotovatör Grubu"
                  fill
                  className="object-cover rounded-[14px]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              <div className="relative aspect-square rounded-[16px] overflow-hidden bg-[#eef2e3] p-1">
                <Image
                  src="/images/products/sevsan_ofset_diskaro.jpg"
                  alt="Ağır Hizmet Diskaro Grubu"
                  fill
                  className="object-cover rounded-[14px]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="eyebrow-label text-[#c8f169]">İmalat & Atölye Esasları</span>
                <h2 className="font-editorial text-[36px] sm:text-[44px] text-[#fcfcfc] leading-tight mt-1">
                  Toprakla, çelikle ve ustalıkla şekillenen tarım makineleri.
                </h2>
              </div>

              <p className="text-[#fcfcfc]/80 text-sm leading-relaxed">
                Tarımsal aletlerde toprağın direncine dayanan çelik kalınlığı, doğru kaynak nüfuziyeti ve aşınmaya dayanıklı bıçak kalitesi belirleyicidir. Serik'teki yerimizde her makine bu ilkeyle hazırlanır.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button asChild variant="primary" size="sm">
                  <Link href="/hakkimizda">Hakkımızda Detayları</Link>
                </Button>
                <Button asChild variant="ghost-dark" size="sm">
                  <a href={company.location.directionsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-3.5 h-3.5 mr-1.5 stroke-[1.5]" /> Atölye Konumu
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. OTHER BRANDS IN STORE
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-[#fcfcfc] border-b border-[#000000]/8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#000000]/8">
            <div>
              <span className="eyebrow-label text-[#043f2e]">Anlaşmalı Ekipmanlar</span>
              <h2 className="font-editorial text-[36px] text-[#043f2e] tracking-[-0.02em] mt-1">
                Satışını Yaptığımız Diğer Markalar
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#242423] max-w-sm mt-2 sm:mt-0">
              Diskaro, rotovatör ve özel römorklarda sektörün güvenilir markalarını temin ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherBrands.map((brand, index) => (
              <Link 
                key={index}
                href="/urunler?marka=diger"
                className="group p-5 rounded-[16px] bg-[#eef2e3] border border-[#000000]/8 hover:border-[#043f2e]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-editorial text-xl text-[#043f2e] group-hover:text-[#2a6f2b] transition-colors">{brand.name}</div>
                </div>
                <div className="text-xs text-[#242423] mt-3 pt-3 border-t border-[#000000]/8 leading-tight">
                  {brand.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. LOCAL GEOGRAPHY & GUIDES
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 border-b border-[#000000]/8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Local Serik Info Card */}
            <div className="lg:col-span-5 bg-[#fcfcfc] p-8 rounded-[16px] border border-[#000000]/10 flex flex-col justify-between">
              <div>
                <span className="eyebrow-label text-[#043f2e]">Yerel İrtibat</span>
                <h2 className="font-editorial text-[28px] text-[#043f2e] tracking-[-0.02em] mt-1 mb-3">
                  Serik & Antalya Teslimat
                </h2>
                
                <p className="text-xs sm:text-sm text-[#242423] leading-relaxed mb-6">
                  Yukarıkocayatak mevkiinde bulunan satış ve imalat noktamızdan Antalya merkez, Aksu, Serik, Manavgat ve Kumluca bölgelerine doğrudan ekipman teslimatı sağlıyoruz.
                </p>

                <div className="space-y-3 mb-6 bg-[#eef2e3] p-4 rounded-[4px] text-xs">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-[#043f2e] mt-0.5 mr-2 shrink-0 stroke-[1.5]" />
                    <span className="text-[#043f2e] font-medium">{company.location.full}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-[#043f2e] mr-2 shrink-0 stroke-[1.5]" />
                    <span className="text-[#043f2e] font-medium">{company.contact.phone}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <a href={company.location.directionsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-3.5 h-3.5 mr-1.5 stroke-[2]" />
                    Yol Tarifi Al
                  </a>
                </Button>
                <Button asChild variant="primary" size="sm" className="flex-1">
                  <Link href="/iletisim">İletişim</Link>
                </Button>
              </div>
            </div>
            
            {/* Guides Section */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-end justify-between mb-6 pb-3 border-b border-[#000000]/8">
                  <div>
                    <span className="eyebrow-label text-[#043f2e]">Tarım & Ekipman Blogu</span>
                    <h2 className="font-editorial text-[28px] text-[#043f2e] tracking-[-0.02em] mt-0.5">
                      Çiftçi ve Üretici Rehberleri
                    </h2>
                  </div>
                  <Link href="/rehber" className="text-xs font-medium text-[#043f2e] hover:underline">
                    Tüm Blog Yazıları &rarr;
                  </Link>
                </div>

                <div className="space-y-3">
                  {guides.map((guide) => (
                    <Link 
                      href={`/rehber/${guide.slug}`} 
                      key={guide.slug}
                      className="block group bg-[#fcfcfc] p-5 rounded-[16px] border border-[#000000]/10 hover:border-[#043f2e]/30 transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[11px] text-[#242423]/60">{guide.publishedDate}</span>
                          <h3 className="font-editorial text-[18px] text-[#043f2e] group-hover:text-[#2a6f2b] transition-colors mt-0.5 mb-1">
                            {guide.title}
                          </h3>
                          <p className="text-xs text-[#242423] line-clamp-2 leading-relaxed">
                            {guide.shortDescription}
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#043f2e] group-hover:text-[#2a6f2b] transition-all shrink-0 mt-2 ml-4 stroke-[1.5]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. BOTTOM CONVERSION CTA
      ═══════════════════════════════════════════ */}
      <section className="bg-[#043f2e] text-[#fcfcfc] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="eyebrow-label text-[#c8f169] mb-2 block">
            DOĞRUDAN TELEFON HATTI
          </span>
          <h2 className="font-editorial text-[36px] sm:text-[44px] text-[#fcfcfc] leading-tight mb-4">
            Doğru ekipmanı belirlemek için bizi arayın.
          </h2>
          <p className="text-sm text-[#fcfcfc]/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Traktör modelinize ve kullanım alanınıza en uygun makine ve güncel fiyat bilgisi için doğrudan atölyemizle görüşebilirsiniz.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
              <a href={company.contact.phoneHref}>
                <Phone className="w-4 h-4 mr-2 stroke-[1.5]" />
                Sabit: {company.contact.phone}
              </a>
            </Button>
            <Button asChild variant="ghost-dark" size="lg" className="w-full sm:w-auto">
              <a href={company.contact.mobileHref}>
                <Phone className="w-4 h-4 mr-2 text-[#c8f169] stroke-[1.5]" />
                Mobil: {company.contact.mobile}
              </a>
            </Button>
            {company.contact.whatsappUrl && (
              <a
                href={company.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-[4px] bg-[#25D366] text-white text-base font-semibold hover:bg-[#20bd5a] transition-colors shadow-xs w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2 fill-white" />
                WhatsApp Hattı
              </a>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
