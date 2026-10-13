import { formatDate } from '@/lib/search';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getAllGuides,
  getGuideBySlug,
} from '@/data/guides';
import { getProductBySlug } from '@/data/products';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ProductCard } from '@/components/products/ProductCard';
import { JsonLd, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/components/seo/JsonLd';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Phone,
  Compass,
  MapPin,
  Wrench,
  Hash,
} from 'lucide-react';
import { company } from '@/data/company';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';
import { createPageMetadata, absoluteUrl } from '@/lib/seo';
import {
  ArticleContent,
  extractTableOfContents,
  extractFaqFromContent,
} from '@/components/guides/ArticleContent';
import { ArticleShareBar } from '@/components/guides/ArticleShareBar';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const guide = getGuideBySlug(resolvedParams.slug);
  if (!guide) {
    return { title: 'Sayfa Bulunamadı', robots: { index: false, follow: false } };
  }

  const keywords = [
    guide.focusKeyword,
    ...(guide.secondaryKeywords || []),
  ].filter(Boolean) as string[];

  return createPageMetadata({
    title: guide.seoTitle || guide.title,
    description: guide.metaDescription || guide.shortDescription,
    path: `/rehber/${guide.slug}/`,
    type: 'article',
    keywords,
    publishedTime: guide.publishedDate,
    modifiedTime: guide.updatedDate || guide.publishedDate,
  });
}

export default async function GuideArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const guide = getGuideBySlug(resolvedParams.slug);

  if (!guide) {
    notFound();
  }

  const allGuides = getAllGuides();
  const currentIndex = allGuides.findIndex((g) => g.slug === guide.slug);
  const prevGuide = currentIndex > 0 ? allGuides[currentIndex - 1] : undefined;
  const nextGuide =
    currentIndex < allGuides.length - 1 ? allGuides[currentIndex + 1] : undefined;

  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Rehber & Blog', href: '/rehber/' },
    { label: guide.title, href: `/rehber/${guide.slug}/` },
  ];

  const relatedProducts = (guide.relatedProductSlugs || [])
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const toc = extractTableOfContents(guide.content);
  const faqItems = extractFaqFromContent(guide.content);
  const pageUrl = absoluteUrl(`/rehber/${guide.slug}/`);

  return (
    <main className="min-h-screen bg-[#f2f0e9] py-8 sm:py-12">
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd
        data={articleJsonLd({
          title: guide.title,
          description: guide.shortDescription,
          slug: guide.slug,
          publishedDate: guide.publishedDate,
          updatedDate: guide.updatedDate,
          image: relatedProducts[0]?.images[0],
        })}
      />
      {faqItems.length > 0 && <JsonLd data={faqJsonLd(faqItems)} />}

      <div className="section-shell">
        {/* Top Navigation */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <Breadcrumb items={breadcrumbItems} />
          <Link
            href="/rehber/"
            className="hidden sm:inline-flex items-center text-xs font-bold uppercase tracking-[.06em] text-[#0f5d35] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Tüm Rehberler
          </Link>
        </div>

        {/* Article Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-6">
          {/* Main Article Column (8 Cols) */}
          <div className="lg:col-span-8">
            <article className="rounded-[16px] border border-[#121713]/10 bg-[#fbfaf6] p-6 sm:p-10 lg:p-12 shadow-sm">
              {/* Header */}
              <header className="mb-8 border-b border-[#121713]/10 pb-8">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#626760] mb-4">
                  <span className="rounded-full bg-[#0f5d35] px-3 py-1 font-bold uppercase tracking-[.08em] text-white">
                    {guide.category}
                  </span>
                  <span className="text-[#121713]/30">•</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#121713]">
                    <Clock className="h-3.5 w-3.5 text-[#0f5d35]" />
                    {guide.readingTime}
                  </span>
                  <span className="text-[#121713]/30">•</span>
                  <span className="inline-flex items-center gap-1 text-[#626760]">
                    <Calendar className="h-3.5 w-3.5" />
                    Güncelleme: {formatDate(guide.updatedDate || guide.publishedDate)}
                  </span>
                </div>

                <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl uppercase leading-[1.02] tracking-[-0.02em] text-[#0f5d35] mb-5">
                  {guide.title}
                </h1>

                {/* Lead Excerpt Banner */}
                <div className="rounded-[10px] border-l-4 border-[#0f5d35] bg-[#f2f0e9] p-4 sm:p-5 text-sm sm:text-base leading-relaxed text-[#1c211d]">
                  <p className="font-medium">{guide.shortDescription}</p>
                </div>

                {/* Keyword tags */}
                {guide.focusKeyword && (
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-[#121713]/60">
                      <Hash className="h-3 w-3 text-[#e7b23f]" /> Konular:
                    </span>
                    <span className="rounded-[4px] bg-[#f2f0e9] px-2 py-0.5 font-medium text-[#0f5d35]">
                      {guide.focusKeyword}
                    </span>
                    {(guide.secondaryKeywords || []).slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="rounded-[4px] bg-[#f2f0e9] px-2 py-0.5 text-[#626760]"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {/* Mobile Table of Contents (collapsible/visible) */}
              {toc.length > 0 && (
                <div className="lg:hidden mb-8 rounded-[12px] border border-[#121713]/10 bg-[#f2f0e9] p-5">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-[.08em] text-xs text-[#0f5d35] mb-3">
                    <Compass className="h-4 w-4" /> Rehber İçindekiler
                  </div>
                  <nav className="space-y-1.5 text-xs">
                    {toc.map((item, idx) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block py-1 text-[#464c47] hover:text-[#0f5d35] hover:underline"
                      >
                        <span className="font-semibold text-[#0f5d35] mr-1.5">
                          0{idx + 1}.
                        </span>
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Rendered Markdown Body */}
              <ArticleContent content={guide.content} />
              <aside className="mt-8 border-t border-[#121713]/10 pt-5 text-sm leading-6 text-[#464c47]" aria-label="Yayın bilgisi">
                <p>Yayıncı: ANKURT Tarım Makinaları. Genel seçim bilgileri için hazırlanmıştır; modelin üretici kılavuzu ve yerinde teknik değerlendirme esas alınır.</p>
                {guide.sources && <><h2 className="mt-3 font-bold text-[#0f5d35]">Kaynaklar</h2><ul className="list-disc pl-5">{guide.sources.map(source => <li key={source.url}><a className="underline" href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a></li>)}</ul></>}
              </aside>

              {/* Share & Feedback Bar */}
              <div className="mt-12 pt-8 border-t border-[#121713]/10">
                <ArticleShareBar title={guide.title} url={pageUrl} />
              </div>
            </article>

            {/* Previous / Next Article Navigation */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevGuide ? (
                <Link
                  href={`/rehber/${prevGuide.slug}/`}
                  className="group rounded-[12px] border border-[#121713]/10 bg-[#fbfaf6] p-5 transition-all hover:border-[#0f5d35]/40 hover:shadow-sm"
                >
                  <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[.08em] text-[#626760] group-hover:text-[#0f5d35]">
                    <ArrowLeft className="h-3 w-3 mr-1" /> Önceki Rehber
                  </span>
                  <p className="mt-1 font-editorial text-lg uppercase text-[#121713] line-clamp-2 leading-snug group-hover:text-[#0f5d35] transition-colors">
                    {prevGuide.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}

              {nextGuide && (
                <Link
                  href={`/rehber/${nextGuide.slug}/`}
                  className="group rounded-[12px] border border-[#121713]/10 bg-[#fbfaf6] p-5 text-right transition-all hover:border-[#0f5d35]/40 hover:shadow-sm"
                >
                  <span className="inline-flex items-center justify-end text-[10px] font-bold uppercase tracking-[.08em] text-[#626760] group-hover:text-[#0f5d35]">
                    Sonraki Rehber <ArrowRight className="h-3 w-3 ml-1" />
                  </span>
                  <p className="mt-1 font-editorial text-lg uppercase text-[#121713] line-clamp-2 leading-snug group-hover:text-[#0f5d35] transition-colors">
                    {nextGuide.title}
                  </p>
                </Link>
              )}
            </div>

            {/* Related Products Showcase */}
            {relatedProducts.length > 0 && (
              <section className="mt-14">
                <div className="mb-6 flex items-end justify-between border-b border-[#121713]/10 pb-4">
                  <div>
                    <span className="eyebrow-label text-[#0f5d35]">
                      İlgili Makineler
                    </span>
                    <h2 className="font-editorial text-2xl sm:text-3xl text-[#121713] mt-0.5">
                      Bu Rehberde Bahsedilen Ekipmanlar
                    </h2>
                  </div>
                  <Link
                    href="/urunler/"
                    className="text-xs font-bold uppercase tracking-[.06em] text-[#0f5d35] hover:underline hidden sm:inline-block"
                  >
                    Kataloğu Gör →
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Desktop Sticky Sidebar (4 Cols) */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6">
            {/* Table of Contents Sticky Card */}
            {toc.length > 0 && (
              <div className="sticky top-24 rounded-[16px] border border-[#121713]/10 bg-[#fbfaf6] p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em] text-[#0f5d35] pb-3 border-b border-[#121713]/8">
                  <Compass className="h-4 w-4" /> Bu Rehberde
                </div>
                <nav className="mt-4 space-y-2 text-xs">
                  {toc.map((item, idx) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-start gap-2 py-1 text-[#464c47] hover:text-[#0f5d35] transition-colors"
                    >
                      <span className="font-editorial text-sm font-semibold text-[#0f5d35]/60 group-hover:text-[#0f5d35] shrink-0 w-5">
                        0{idx + 1}
                      </span>
                      <span className="leading-snug group-hover:underline">
                        {item.title}
                      </span>
                    </a>
                  ))}
                </nav>

                {/* Direct Workshop Contact Widget */}
                <div className="mt-8 pt-6 border-t border-[#121713]/8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em] text-[#121713]">
                    <Wrench className="h-4 w-4 text-[#e7b23f]" />
                    <span>Ustamıza Danışın</span>
                  </div>
                  <p className="text-xs text-[#626760] leading-relaxed">
                    Araziniz veya traktörünüz için en uygun ölçüyü belirlemek için Serik atölyemize ulaşabilirsiniz.
                  </p>

                  <a
                    href={company.contact.phoneHref}
                    className="flex items-center justify-center gap-2 w-full rounded-[6px] bg-[#0f5d35] py-2.5 text-xs font-bold uppercase tracking-[.06em] text-white hover:bg-[#184f31] transition-colors shadow-xs"
                  >
                    <Phone className="h-3.5 w-3.5" /> {company.contact.phone}
                  </a>

                  <a
                    href={company.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-[6px] bg-[#25d366] py-2.5 text-xs font-bold uppercase tracking-[.06em] text-white hover:bg-[#054c44] transition-colors shadow-xs"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 fill-current" /> WhatsApp Danışma
                  </a>

                  <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#626760]">
                    <MapPin className="h-3 w-3 text-[#0f5d35] shrink-0" />
                    <span>Yukarıkocayatak, Serik / Antalya</span>
                  </div>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
