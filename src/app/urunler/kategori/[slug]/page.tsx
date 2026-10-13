import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { getAllGuides } from '@/data/guides';
import { company } from '@/data/company';
import { ProductCard } from '@/components/products/ProductCard';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from '@/components/seo/JsonLd';
import { createPageMetadata } from '@/lib/seo';
import { ArrowLeft, ArrowRight, ShieldCheck, BookOpen, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

const categorySeoData: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    guideFilterKeywords: string[];
    faqs: { question: string; answer: string }[];
  }
> = {
  romorklar: {
    title: 'Tarım Römorku Modelleri ve İmalatı | Serik Antalya Römork',
    description:
      'Antalya ve Serik bölgesine özel bahçe tipi römork, 3 yana devirmeli damperli römork ve ağır hizmet tarla römorku imalatı. Özel ölçü ve traktör uyumlu modeller.',
    keywords: [
      'bahçe tipi römork',
      'tarım römorku',
      'damperli römork',
      'serik römork imalatı',
      'antalya tarım römorku',
      '3 yana devirmeli römork',
      'traktör römorku fiyatları',
    ],
    guideFilterKeywords: ['römork', 'romork', 'taşıma', 'narenciye'],
    faqs: [
      {
        question: 'Bahçe tipi römork ile standart tarla römorku arasındaki fark nedir?',
        answer:
          'Bahçe tipi römorklar; dar meyve bahçesi araları, zeytinlikler ve sera kapılarından traktörün arkasında kolayca manevra yapabilmesi için daha alçak dingil ağırlık merkezine, daraltılmış iz genişliğine ve özel koruyucu kapak açılarına sahiptir.',
      },
      {
        question: 'Traktörümün beygir gücüne uygun römork tonajını nasıl belirlemeliyim?',
        answer:
          '20-45 HP arası bahçe traktörleri için 2,5 - 3 ton tek dingilli bahçe römorkları en ideal yakıt ve çeki dengesini sunar. 55-80 HP ve üzeri traktörlerde ise 3,5 - 5 ton damperli veya çift dingilli modeller tavsiye edilir.',
      },
      {
        question: 'Serik atölyenizde özel ölçüde römork imalatı yapıyor musunuz?',
        answer:
          'Evet. Seralarınızın direk aralıklarına, kasa yükleme yüksekliğinize ve traktörünüzün hidrolik çeki sistemine göre özel ölçüde bahçe römorku imalatı yapıyoruz.',
      },
    ],
  },
  'toprak-isleme': {
    title: 'Toprak İşleme Makinaları | Çizel Patlatma, Rotovatör, Diskaro',
    description:
      'Antalya tarımına uygun 7\'li çizel patlatma, kazayağı, rotovatör, ofset diskaro ve sap parçalama makineleri. Ağır hizmet şasi, atölye garantisi ve doğrudan satış.',
    keywords: [
      'çizel patlatma',
      '7li patlatma',
      'kazayağı',
      'rotovatör',
      'ofset diskaro',
      'sap parçalama',
      'serik toprak işleme',
      'antalya tarım makinaları',
    ],
    guideFilterKeywords: ['çizel', 'patlatma', 'toprak', 'diskaro', 'rotovatör', 'freze', 'pulluk'],
    faqs: [
      {
        question: 'Çizel patlatma ne zaman ve neden çekilmelidir?',
        answer:
          'Toprağın 30-50 cm altında traktör trafiği ve sulama nedeniyle oluşan taban taşı tabakasını kırmak, bitki köklerinin derine inmesini sağlamak ve drenajı açmak için yaz sonu veya sonbaharda toprak tavındayken çizel patlatma çekilmelidir.',
      },
      {
        question: 'Rotovatör ile diskaro arasındaki temel fark nedir?',
        answer:
          'Rotovatör kuyruk milinden aldığı güçle helisel bıçaklarıyla toprağı parçalayarak tek geçişte ince tohum yatağı hazırlar. Diskaro ise anız bozma, kalın kesekleri kırma ve yüzlek toprak işleme için çeki kuvvetiyle çalışır.',
      },
      {
        question: 'Taşlı ve sert arazilerde hangi şasi tipi önerilir?',
        answer:
          'Taşlı Akdeniz topraklarında bacak eğilmelerini ve şasi çatlamalarını önlemek için yaylı güvenlik mekanizmasına veya kalın etli kutu profil çelik şasiye sahip çizel ve kazayağı modelleri tercih edilmelidir.',
      },
    ],
  },
  'sera-ekipmanlari': {
    title: 'Sera Tarım Ekipmanları ve İmalatı | Özel Ölçü Sera Sürgüsü',
    description:
      'Örtü altı domates, biber ve sebze seralarına özel tasarlanmış 220 cm sera sürgüsü, sera çizeli ve malç makineleri. Serik Yukarıkocayatak atölye üretimi.',
    keywords: [
      'sera ekipmanları',
      'sera sürgüsü',
      'sera çizel',
      'sera tesviye sürgüsü',
      'malç makinesi',
      'antalya sera makineleri',
      'serik sera ekipmanı',
    ],
    guideFilterKeywords: ['sera', 'sürgü', 'taban', 'malç', 'fide'],
    faqs: [
      {
        question: 'Sera sürgüsü neden standart tesviye küreklerinden farklı olmalıdır?',
        answer:
          'Sera sürgülerimiz 220 cm kompakt genişliğiyle sera direklerine çarpmayacak şekilde boyutlandırılır. Fazla toprağı direk diplerine yığmadan yüzeyi sıyırarak damlama boruları için pürüzsüz bir zemin bırakır.',
      },
      {
        question: 'Sera toprağında taban sıkışması nasıl çözülür?',
        answer:
          'Dar iz aralıklı ve sera traktörlerine uyumlu 5\'li veya 7\'li mini çizel patlatma ile direk aralarından geçilerek kök derinliğindeki geçirimsiz tabaka mekanik olarak patlatılmalıdır.',
      },
    ],
  },
  tasima: {
    title: 'Tarla ve Bahçe Taşıma Ekipmanları | Traktör Sepeti, Su Tankeri',
    description:
      'Traktör arkası devirmeli yük taşıma sepetleri, 3 tonluk tarımsal su tankerleri ve çiftlik lojistik ekipmanları. Yüksek mukavemetli çelik yapı.',
    keywords: [
      'traktör sepeti',
      'devirmeli traktör sepeti',
      'su tankeri',
      'tarımsal taşıma sepeti',
      'serik traktör sepeti',
      'antalya su tankeri',
    ],
    guideFilterKeywords: ['sepet', 'taşıma', 'tanker', 'lojistik'],
    faqs: [
      {
        question: 'Devirmeli traktör sepeti hangi işlerde kullanılır?',
        answer:
          'Bahçeden toplanan narenciye kasalarının, gübre çuvallarının, alet edevatın ve dökme tarla malzemelerinin römork bağlamaya gerek kalmadan 3 nokta askı kollarıyla pratik şekilde taşınması ve mandallı kolla geriye devrilmesi için kullanılır.',
      },
      {
        question: 'Su tankerinde dalgakıran neden zorunludur?',
        answer:
          '3.000 litre gibi ağır bir sıvı kütlesi virajlarda ve engebeli yollarda aşırı çalkalanarak traktörün devrilmesine yol açabilir. Dalgakıran bölmeler suyun kinetik enerjisini keserek sürüş güvenliğini garanti eder.',
      },
    ],
  },
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.slug);

  if (!category) {
    return {
      title: 'Kategori Bulunamadı',
      robots: { index: false, follow: false },
    };
  }

  const seo = categorySeoData[category.slug] || {
    title: `${category.name} Modelleri ve İmalatı | ANKURT Tarım`,
    description: category.description,
    keywords: [category.name, 'tarım makinaları', 'Serik', 'Antalya'],
  };

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/urunler/kategori/${category.slug}/`,
    keywords: seo.keywords,
  });
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.id);
  const seoInfo = categorySeoData[category.slug];

  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Ürünler', href: '/urunler/' },
    { label: category.name, href: `/urunler/kategori/${category.slug}/` },
  ];

  // Match relevant guides
  const filterKeys = seoInfo?.guideFilterKeywords || [category.slug];
  const allGuides = getAllGuides();
  const relatedGuides = allGuides
    .filter((g) => {
      const text = `${g.title} ${g.shortDescription} ${g.category}`.toLowerCase();
      return filterKeys.some((k) => text.includes(k.toLowerCase()));
    })
    .slice(0, 3);

  const categoryItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${category.name} - ANKURT Tarım Makinaları`,
    description: seoInfo?.description || category.description,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.title,
      url: `${company.seo.siteUrl}/urunler/${product.slug}/`,
    })),
  };

  return (
    <main className="min-h-screen bg-[#f2f0e9] py-8 sm:py-12">
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={categoryItemListSchema} />
      {seoInfo?.faqs && <JsonLd data={faqJsonLd(seoInfo.faqs)} />}

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Breadcrumb items={breadcrumbItems} />
          <Link
            href="/urunler/"
            className="hidden sm:inline-flex items-center text-xs text-[#0f5d35] hover:underline font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1 stroke-[1.5]" /> TÜM KATALOĞA DÖN
          </Link>
        </div>

        {/* Hero Section */}
        <header className="rounded-[16px] bg-[#fbfaf6] border border-[#121713]/10 p-6 sm:p-10 lg:p-12 mb-10 shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f5d35]/10 text-[#0f5d35] text-xs font-bold uppercase tracking-wider mb-4">
              <span>{category.icon}</span>
              <span>ANKURT & Partner Envanteri</span>
            </div>
            <h1 className="font-editorial text-[36px] sm:text-[48px] text-[#0f5d35] tracking-[-0.02em] leading-tight mb-4">
              {seoInfo?.title.split('|')[0].trim() || `${category.name} Modelleri`}
            </h1>
            <p className="text-sm sm:text-base text-[#464c47] leading-relaxed mb-6">
              {seoInfo?.description || category.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#121713]/10 text-xs text-[#626760]">
              <div className="flex items-center gap-1.5 font-semibold text-[#0f5d35]">
                <ShieldCheck className="w-4 h-4 stroke-[1.5]" />
                <span>Serik / Yukarıkocayatak İmalatı & Satışı</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 stroke-[1.5]" />
                <span>Toplam {products.length} Farklı Ekipman</span>
              </div>
            </div>
          </div>
        </header>

        {/* Product Grid */}
        <section className="mb-16">
          <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-[#121713]/10">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#121713]">
              Mevcut {category.name} Ekipmanları
            </h2>
            <span className="text-xs text-[#464c47]/70">
              {products.length} ürün listeleniyor
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <ProductCard key={product.id} product={product} preload={idx < 3} />
            ))}
          </div>
        </section>

        {/* Related Technical Guides for Category SEO Internal Linking */}
        {relatedGuides.length > 0 && (
          <section className="mb-16 rounded-[16px] bg-[#fbfaf6] border border-[#121713]/10 p-6 sm:p-10">
            <div className="flex items-end justify-between mb-6 pb-3 border-b border-[#121713]/8">
              <div>
                <span className="eyebrow-label text-[#0f5d35]">Çiftçi Bilgi Merkezi</span>
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#121713] mt-0.5">
                  {category.name} ile İlgili Teknik Rehberler
                </h2>
              </div>
              <Link href="/rehber/" className="text-xs font-medium text-[#0f5d35] hover:underline">
                Tüm Rehberler &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.id}
                  href={`/rehber/${guide.slug}/`}
                  className="group flex flex-col justify-between rounded-[12px] border border-[#121713]/10 bg-[#f2f0e9]/50 p-5 transition-all hover:bg-white hover:border-[#0f5d35]/40 hover:shadow-xs"
                >
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#0f5d35] mb-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{guide.category}</span>
                    </div>
                    <h3 className="font-editorial text-lg uppercase leading-snug text-[#121713] group-hover:text-[#0f5d35] transition-colors">
                      {guide.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#626760] line-clamp-2 leading-relaxed">
                      {guide.shortDescription}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-[#121713]/8 pt-3 text-[11px] font-semibold text-[#0f5d35]">
                    <span>Rehberi Oku</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQs */}
        {seoInfo?.faqs && seoInfo.faqs.length > 0 && (
          <section className="mb-16">
            <div className="max-w-2xl mb-8">
              <span className="eyebrow-label text-[#0f5d35]">Sıkça Sorulan Sorular</span>
              <h2 className="font-editorial text-3xl sm:text-4xl uppercase text-[#121713] mt-1">
                {category.name} Hakkında Merak Edilenler
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seoInfo.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-[12px] border border-[#121713]/10 bg-[#fbfaf6] p-6 sm:p-8"
                >
                  <span className="text-[11px] font-bold text-[#0f5d35] uppercase tracking-wider block mb-2">
                    Soru 0{idx + 1}
                  </span>
                  <h3 className="font-editorial text-xl uppercase leading-snug text-[#121713] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#626760] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Bar */}
        <section className="rounded-[16px] bg-[#e7b23f] p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="eyebrow-label text-[#121713]/70">Doğrudan Atölye Desteği</span>
            <h2 className="font-editorial text-3xl sm:text-4xl uppercase text-[#121713] mt-1">
              Doğru {category.name} Ekipmanını Birlikte Seçelim
            </h2>
            <p className="text-xs sm:text-sm text-[#121713]/80 mt-2 max-w-xl">
              Traktörünüzün markasını, beygir gücünü ve arazinizi belirtin; Serik atölyemizden en verimli modeli ve net fiyatını iletelim.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Button asChild variant="primary" size="lg" className="bg-[#121713] hover:bg-[#0f5d35] text-white">
              <Link href="/iletisim/">
                Ustamıza Danışın <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            {company.contact.whatsappUrl && (
              <a
                href={`${company.contact.whatsappUrl}?text=${encodeURIComponent(
                  `Merhaba, ${category.name} modelleriniz hakkında teknik bilgi ve fiyat almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#075e54] text-white text-xs font-bold uppercase tracking-wider rounded-[6px] hover:bg-[#054c44] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2 fill-white" />
                WhatsApp İle Yazın
              </a>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
