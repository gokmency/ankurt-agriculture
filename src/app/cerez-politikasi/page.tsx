import { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Çerez Politikası | ANKURT Tarım Makinaları',
  description: 'ANKURT Tarım Makinaları Çerez Politikası bilgilendirmesi.',
};

export default function CookiePolicyPage() {
  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Çerez Politikası', href: '/cerez-politikasi' },
  ];

  return (
    <main className="min-h-screen bg-[#eef2e3] py-8 sm:py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="bg-[#fcfcfc] rounded-[16px] border border-[#000000]/10 p-6 sm:p-12 mt-4">
          <h1 className="font-editorial text-[32px] sm:text-[44px] text-[#043f2e] mb-6">Çerez Politikası</h1>
          
          <div className="text-[#242423] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              ANKURT TARIM MAKİNALARI olarak web sitemizde kullanıcı deneyimini iyileştirmek amacıyla çerezler (cookies) kullanmaktayız.
            </p>

            <h2 className="font-editorial text-[22px] text-[#043f2e] mt-6 mb-2">1. Çerez Nedir?</h2>
            <p>
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır.
            </p>

            <h2 className="font-editorial text-[22px] text-[#043f2e] mt-6 mb-2">2. Kullanılan Çerez Türleri</h2>
            <p>
              Sitemizde yalnızca temel gezinme ve analiz amaçlı zorunlu ve performans çerezleri kullanılmaktadır.
            </p>

            <h2 className="font-editorial text-[22px] text-[#043f2e] mt-6 mb-2">3. Çerezlerin Yönetimi</h2>
            <p>
              Tarayıcınızın ayarlarından çerezleri dilediğiniz zaman silebilir veya engelleyebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
