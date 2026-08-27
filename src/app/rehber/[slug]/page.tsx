import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllGuides, getGuideBySlug } from '@/data/guides';
import { getProductBySlug } from '@/data/products';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ProductCard } from '@/components/products/ProductCard';
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from '@/components/seo/JsonLd';
import { ArrowLeft, Phone } from 'lucide-react';
import { company } from '@/data/company';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';
import { createPageMetadata } from '@/lib/seo';

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
  
  return createPageMetadata({
    title: guide.title,
    description: guide.shortDescription,
    path: `/rehber/${guide.slug}/`,
    type: 'article',
    publishedTime: guide.publishedDate,
    modifiedTime: guide.publishedDate,
  });
}

export default async function GuideArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const guide = getGuideBySlug(resolvedParams.slug);
  
  if (!guide) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Rehber', href: '/rehber' },
    { label: guide.title, href: `/rehber/${guide.slug}` },
  ];

  const relatedProducts = (guide.relatedProductSlugs || [])
    .map(slug => getProductBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  // Markdown renderer for field note content
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      if (line.startsWith('## ')) {
        return (
          <h2 key={idx} className="font-editorial text-[24px] sm:text-[28px] text-[#0f5d35] mt-10 mb-4 pt-4 border-t border-[#121713]/8">
            {line.replace('## ', '')}
          </h2>
        );
      }
      if (line.startsWith('# ')) {
        return (
          <h1 key={idx} className="font-editorial text-[28px] sm:text-[36px] text-[#0f5d35] mt-10 mb-5">
            {line.replace('# ', '')}
          </h1>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li key={idx} className="text-[#464c47] ml-4 mb-2.5 leading-relaxed text-sm sm:text-base list-disc">
            {line.replace('- ', '')}
          </li>
        );
      }
      if (line.startsWith('**') && line.includes(':**')) {
        const parts = line.split(':**');
        return (
          <p key={idx} className="text-[#464c47] text-sm sm:text-base leading-relaxed mb-4 bg-[#f2f0e9] p-4 rounded-[4px]">
            <strong className="text-[#0f5d35] font-semibold block mb-1">{parts[0].replace('**', '')}:</strong>
            <span>{parts[1]}</span>
          </p>
        );
      }
      if (line.trim() === '') {
        return <div key={idx} className="h-2" />;
      }
      return (
        <p key={idx} className="text-[#464c47] text-sm sm:text-base leading-relaxed mb-4">
          {line}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen bg-[#f2f0e9] py-8 sm:py-12">
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={articleJsonLd({
        title: guide.title,
        description: guide.shortDescription,
        slug: guide.slug,
        publishedDate: guide.publishedDate,
      })} />
      
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <Breadcrumb items={breadcrumbItems} />
          <Link 
            href="/rehber" 
            className="hidden sm:inline-flex items-center text-xs text-[#0f5d35] hover:underline font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1 stroke-[1.5]" /> TÜM REHBERLER
          </Link>
        </div>
        
        <article className="bg-[#fbfaf6] rounded-[16px] border border-[#121713]/10 p-6 sm:p-12 mt-4">
          <header className="mb-8 pb-6 border-b border-[#121713]/8">
            <div className="flex items-center space-x-3 text-xs text-[#464c47]/60 mb-3">
              <span className="eyebrow-label text-[#0f5d35] bg-[#f2f0e9] px-2 py-0.5 rounded-[4px]">EKİPMAN REHBERİ</span>
              <span>Yayın Tarihi: {guide.publishedDate}</span>
            </div>
            
            <h1 className="font-editorial text-[32px] sm:text-[44px] text-[#0f5d35] leading-[1.08] tracking-[-0.02em] mb-4">
              {guide.title}
            </h1>
            
            <p className="text-sm sm:text-base text-[#464c47] leading-relaxed bg-[#f2f0e9] p-4 rounded-[4px]">
              {guide.shortDescription}
            </p>
          </header>
          
          <div className="prose max-w-none text-[#464c47]">
            {renderContent(guide.content)}
          </div>
        </article>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-14 sm:mt-16">
            <div className="mb-6 pb-3 border-b border-[#121713]/8">
              <span className="eyebrow-label text-[#0f5d35]">Katalog Eşleşmesi</span>
              <h2 className="font-editorial text-[26px] text-[#0f5d35] mt-0.5">
                Bu Yazıyla İlgili Ekipmanlar
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Direct Advice Callout Box */}
        <section className="mt-14 bg-[#0f5d35] text-[#fbfaf6] rounded-[16px] p-8 text-center">
          <h2 className="font-editorial text-[28px] text-[#fbfaf6] mb-2">
            Traktörünüze En Uygun Modeli Belirleyelim
          </h2>
          <p className="text-xs sm:text-sm text-[#fbfaf6]/80 mb-6 max-w-lg mx-auto leading-relaxed">
            Arazinizin eğimi, toprak yapısı ve traktör gücünüze göre doğru ekipman seçimi için Serik atölyemizle doğrudan görüşebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild variant="primary" size="md">
              <a href={company.contact.phoneHref}>
                <Phone className="w-4 h-4 mr-2 stroke-[1.5]" />
                Sabit: {company.contact.phone}
              </a>
            </Button>
            {company.contact.whatsappUrl && (
              <a 
                href={company.contact.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 bg-[#25D366] text-white text-xs font-semibold rounded-[4px] hover:bg-[#20bd5a] transition-colors shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 mr-1.5 fill-white" />
                WhatsApp Danışma
              </a>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
