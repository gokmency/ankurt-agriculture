import { Metadata } from 'next';
import Link from 'next/link';
import { getAllGuides } from '@/data/guides';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ArrowUpRight } from 'lucide-react';
import { JsonLd, breadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Blog & Tarım Rehberleri | ANKURT Tarım Makinaları',
  description: 'Tarım makineleri seçimi, römork, çizel patlatma, rotovatör ve sera ekipmanları hakkında blog yazıları ve pratik bilgiler.',
};

export default function BlogPage() {
  const guides = getAllGuides();
  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Blog', href: '/rehber' },
  ];

  return (
    <main className="min-h-screen bg-[#eef2e3] py-8 sm:py-12">
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="mt-4 mb-8 pb-4 border-b border-[#000000]/8">
          <span className="eyebrow-label text-[#043f2e]">Çiftçi & Üretici Notları</span>
          <h1 className="font-editorial text-[36px] sm:text-[48px] text-[#043f2e] tracking-[-0.02em] mt-1 mb-2">
            Tarım & Ekipman Blogu
          </h1>
          <p className="text-sm sm:text-base text-[#242423] max-w-2xl leading-relaxed">
            Arazinize ve traktör gücünüze en uygun tarım ekipmanını seçmeniz için teknik değerlendirmeler ve pratik kullanım makaleleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {guides.map((guide, idx) => (
            <Link 
              key={guide.slug} 
              href={`/rehber/${guide.slug}`}
              className="bg-[#fcfcfc] p-7 rounded-[16px] border border-[#000000]/10 hover:border-[#043f2e]/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#242423]/60 mb-4 pb-3 border-b border-[#000000]/6">
                  <span className="eyebrow-label text-[#043f2e] text-[11px]">BLOG #{idx + 1}</span>
                  <span>{guide.publishedDate}</span>
                </div>

                <h2 className="font-editorial text-[22px] text-[#043f2e] mb-3 group-hover:text-[#2a6f2b] transition-colors leading-snug">
                  {guide.title}
                </h2>
                
                <p className="text-xs sm:text-sm text-[#242423] leading-relaxed line-clamp-3">
                  {guide.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#000000]/6 flex items-center justify-between text-xs font-medium text-[#043f2e] group-hover:text-[#2a6f2b]">
                <span>Yazıyı Oku</span>
                <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
