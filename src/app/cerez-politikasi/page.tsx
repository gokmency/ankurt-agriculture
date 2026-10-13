import { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Çerez Politikası',
  description: 'ANKURT Tarım Makinaları Çerez Politikası bilgilendirmesi.',
  path: '/cerez-politikasi/',
  index: false,
});

export default function CookiePolicyPage() {
  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Çerez Politikası', href: '/cerez-politikasi' },
  ];

  return (
    <main className="min-h-screen bg-[#f2f0e9] py-8 sm:py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="bg-[#fbfaf6] rounded-[16px] border border-[#121713]/10 p-6 sm:p-12 mt-4">
          <h1 className="font-editorial text-[32px] sm:text-[44px] text-[#0f5d35] mb-6">Çerez Politikası</h1>
          
          <div className="text-[#464c47] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              ANKURT MÜHENDİSLİK VE TARIM MAKİNALARI olarak web sitemizde kullanıcı deneyimini iyileştirmek amacıyla çerezler (cookies) kullanmaktayız.
            </p>

            <h2 className="font-editorial text-[22px] text-[#0f5d35] mt-6 mb-2">1. Çerez Nedir?</h2>
            <p>
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır.
            </p>

            <h2 className="font-editorial text-[22px] text-[#0f5d35] mt-6 mb-2">2. Kullanılan Çerez Türleri</h2>
            <p>
              Google Analytics, analiz tercihinizde izin verdiğinizde yüklenir. Reddederseniz analiz olayları gönderilmez. Tercihiniz tarayıcınızın yerel depolamasında saklanır. Form alanları analiz olaylarına eklenmez.
            </p>

            <h2 className="font-editorial text-[22px] text-[#0f5d35] mt-6 mb-2">3. Çerezlerin Yönetimi</h2>
            <p>
              Sayfanın altındaki “Analiz tercihimi değiştir” düğmesiyle izninizi değiştirebilirsiniz. İzni geri çektiğinizde yeni analiz olayları durdurulur; daha önce kaydedilmiş çerezleri tarayıcı ayarlarından silebilirsiniz. Google haritaları yalnızca “Google Haritasını yükle” düğmesine bastığınızda açılır. WhatsApp bağlantıları ayrı bir hizmete yönlendirir.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
