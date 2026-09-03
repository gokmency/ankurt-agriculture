import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProductBySlug, getActiveProducts, getRelatedProducts } from '@/data/products';
import { getCategoryById } from '@/data/categories';
import { company } from '@/data/company';
import { ProductGallery } from '@/components/products/ProductGallery';
import { ProductCard } from '@/components/products/ProductCard';
import { InquiryForm } from '@/components/contact/InquiryForm';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { JsonLd, productJsonLd, breadcrumbJsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';
import { Phone, ShieldCheck, CheckCircle2, ArrowLeft, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon, SahibindenBadge } from '@/components/ui/BrandIcons';
import { createPageMetadata } from '@/lib/seo';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const products = getActiveProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);
  
  if (!product) {
    return {
      title: 'Ürün Bulunamadı',
      robots: { index: false, follow: false },
    };
  }

  const category = getCategoryById(product.categoryId);

  return createPageMetadata({
    title: product.title,
    description: product.shortDescription || product.description.substring(0, 160),
    path: `/urunler/${product.slug}/`,
    image: product.images[0],
    keywords: [
      product.title,
      product.brand,
      category?.name || 'tarım ekipmanı',
      'Serik tarım makinaları',
      'Antalya tarım ekipmanları',
    ],
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryById(product.categoryId);
  const relatedProducts = getRelatedProducts(product.slug);
  const isAnkurt = product.brandType === 'ankurt' || product.brand === 'ANKURT';

  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Ürünler', href: '/urunler' },
    ...(category ? [{ label: category.name, href: `/urunler?kategori=${category.slug}` }] : []),
    { label: product.title, href: `/urunler/${product.slug}` }
  ];

  const whatsappMessage = encodeURIComponent(`Merhaba, ${product.title} hakkında teknik detay ve fiyat bilgisi almak istiyorum.`);

  return (
    <div className="bg-[#f2f0e9] min-h-screen py-8 sm:py-12">
      <JsonLd data={productJsonLd(product)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <Breadcrumb items={breadcrumbItems} />
          <Link 
            href="/urunler" 
            className="hidden sm:inline-flex items-center text-xs text-[#0f5d35] hover:underline font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1 stroke-[1.5]" /> TÜM KATALOG
          </Link>
        </div>

        {/* Main Product Box (Paper White with 16px radius, no shadow) */}
        <div className="bg-[#fbfaf6] rounded-[16px] p-6 sm:p-10 border border-[#121713]/10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <ProductGallery images={product.images} productName={product.title} />

            {/* Authentic Workshop Badge */}
            {isAnkurt && (
              <div className="p-4 rounded-[16px] bg-[#f2f0e9] border border-[#121713]/8 flex items-center space-x-3 text-xs">
                <ShieldCheck className="w-5 h-5 text-[#0f5d35] shrink-0 stroke-[1.5]" />
                <span className="text-[#0f5d35] leading-snug">
                  Bu ürün, <strong>Serik / Yukarıkocayatak</strong> atölyemizde imal edilmektedir.
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Spec Sheet Details & Purchase Action */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant={isAnkurt ? 'chartreuse' : 'sage'}>
                  {isAnkurt ? 'ANKURT İMALATI' : product.brand}
                </Badge>
                {category && <Badge variant="outline">{category.name}</Badge>}
              </div>
              
              <h1 className="font-editorial text-[32px] sm:text-[40px] text-[#0f5d35] tracking-[-0.02em] leading-[1.05] mb-3">
                {product.title}
              </h1>
              
              <p className="text-sm sm:text-base text-[#464c47] leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Technical Specification Table */}
            <div className="rounded-[16px] bg-[#f2f0e9] p-5 border border-[#121713]/8">
              <div className="eyebrow-label text-[#0f5d35] text-[11px] mb-3 flex items-center">
                <Compass className="w-3.5 h-3.5 mr-1.5 stroke-[1.5]" />
                Temel Bilgiler
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#fbfaf6] rounded-[4px] border border-[#121713]/6">
                  <span className="text-[#464c47]/60 block text-[10px] uppercase font-medium">İMALATÇI / MARKA</span>
                  <span className="font-medium text-[#0f5d35]">{product.brand || 'ANKURT'}</span>
                </div>
                <div className="p-3 bg-[#fbfaf6] rounded-[4px] border border-[#121713]/6">
                  <span className="text-[#464c47]/60 block text-[10px] uppercase font-medium">KATEGORİ</span>
                  <span className="font-medium text-[#0f5d35]">{category?.name || 'Tarım Ekipmanı'}</span>
                </div>
                <div className="p-3 bg-[#fbfaf6] rounded-[4px] border border-[#121713]/6">
                  <span className="text-[#464c47]/60 block text-[10px] uppercase font-medium">SEVKİYAT NOKTASI</span>
                  <span className="font-medium text-[#0f5d35]">Serik / Antalya</span>
                </div>
                <div className="p-3 bg-[#fbfaf6] rounded-[4px] border border-[#121713]/6">
                  <span className="text-[#464c47]/60 block text-[10px] uppercase font-medium">GÜNCEL FİYAT</span>
                  <span className="font-medium text-[#0f5d35]">Atölyeden Sorunuz</span>
                </div>
              </div>
            </div>

            {/* Full Technical Description */}
            <div className="space-y-2">
              <h2 className="font-editorial text-[20px] text-[#0f5d35]">Ürün Açıklaması</h2>
              <p className="text-xs sm:text-sm text-[#464c47] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h2 className="font-editorial text-[20px] text-[#0f5d35] mb-2.5">Öne Çıkan Özellikler</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start bg-[#f2f0e9] p-2.5 rounded-[4px]">
                      <CheckCircle2 className="w-4 h-4 text-[#0f5d35] mr-2 mt-0.5 shrink-0 stroke-[1.5]" />
                      <span className="text-[#0f5d35] font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Usage Areas */}
            {product.usageAreas && product.usageAreas.length > 0 && (
              <div>
                <h2 className="font-editorial text-[20px] text-[#0f5d35] mb-2">Tavsiye Edilen Kullanım Alanları</h2>
                <div className="flex flex-wrap gap-1.5">
                  {product.usageAreas.map((area, index) => (
                    <span key={index} className="text-xs font-medium bg-[#f2f0e9] text-[#0f5d35] px-2.5 py-1 rounded-[4px]">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Bar (Direct Phone + WhatsApp in Official Brand Colors) */}
            <div className="pt-4 border-t border-[#121713]/8 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <a href={company.contact.phoneHref}>
                    <Phone className="w-4 h-4 mr-2 stroke-[1.5]" />
                    Sabit: {company.contact.phone}
                  </a>
                </Button>
                {company.contact.whatsappUrl && (
                  <a 
                    href={`${company.contact.whatsappUrl}?text=${whatsappMessage}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-[4px] hover:bg-[#20bd5a] transition-colors shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-2 fill-white" />
                    WhatsApp&apos;tan Fiyat ve Detay Sorun
                  </a>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-[#464c47] pt-1">
                <span>Mobil Hat: <a href={company.contact.mobileHref} className="font-medium text-[#0f5d35] hover:underline">{company.contact.mobile}</a></span>
                {product.sahibindenUrl && (
                  <a 
                    href={product.sahibindenUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-102"
                  >
                    <SahibindenBadge />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <div className="flex items-end justify-between mb-8 pb-3 border-b border-[#121713]/8">
              <div>
                <span className="eyebrow-label text-[#0f5d35]">Tamamlayıcı Ekipmanlar</span>
                <h2 className="font-editorial text-[28px] text-[#0f5d35] tracking-[-0.02em] mt-0.5">
                  İlgili Diğer Tarım Makineleri
                </h2>
              </div>
              <Link href="/urunler" className="text-xs font-medium text-[#0f5d35] hover:underline">
                Tüm Ürünler &rarr;
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(related => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}

        {/* Inquiry Form Section */}
        <div className="mt-16 sm:mt-20 max-w-3xl mx-auto bg-[#fbfaf6] p-8 sm:p-12 rounded-[16px] border border-[#121713]/10">
          <div className="text-center mb-8">
            <span className="eyebrow-label text-[#0f5d35]">Fiyat & Danışma</span>
            <h2 className="font-editorial text-[32px] text-[#0f5d35] mt-1 mb-2">
              Bu Makine İçin Fiyat ve Bilgi Alın
            </h2>
            <p className="text-xs sm:text-sm text-[#464c47]">
              <strong className="text-[#0f5d35]">{product.title}</strong> hakkında model seçenekleri, traktör uyumu veya güncel fiyat öğrenmek için yazabilirsiniz.
            </p>
          </div>
          <InquiryForm />
        </div>

      </div>
    </div>
  );
}
