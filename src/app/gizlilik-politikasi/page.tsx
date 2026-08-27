import { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { createPageMetadata } from '@/lib/seo';
import { company } from '@/data/company';

export const metadata: Metadata = createPageMetadata({
  title: 'Gizlilik Politikası',
  description: 'ANKURT Tarım Makinaları Gizlilik Politikası metni.',
  path: '/gizlilik-politikasi/',
  index: false,
});

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
  ];

  return (
    <main className="min-h-screen bg-[#f2f0e9] py-8 sm:py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="bg-[#fbfaf6] rounded-[16px] border border-[#121713]/10 p-6 sm:p-12 mt-4">
          <h1 className="font-editorial text-[32px] sm:text-[44px] text-[#0f5d35] mb-6">Gizlilik Politikası</h1>
          
          <div className="text-[#464c47] space-y-4 text-sm sm:text-base leading-relaxed">
            <p><strong>Son Güncelleme:</strong> 27 Ağustos 2026</p>
            
            <p>
              ANKURT MÜHENDİSLİK VE TARIM MAKİNALARI (&quot;Şirket&quot;, &quot;Biz&quot; veya &quot;Bize&quot;) olarak, gizliliğinize saygı duyuyor
              ve kişisel verilerinizi korumaya önem veriyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret 
              ettiğinizde bilgilerinizi nasıl topladığımızı, kullandığımızı ve paylaştığımızı açıklar.
            </p>

            <h2 className="font-editorial text-[22px] text-[#0f5d35] mt-6 mb-2">1. Toplanan Bilgiler</h2>
            <p>
              Web sitemizi kullanırken bize gönüllü olarak sağladığınız bilgileri (örneğin, iletişim formunu 
              doldururken verdiğiniz ad, soyad, telefon numarası vb.) toplarız.
            </p>

            <h2 className="font-editorial text-[22px] text-[#0f5d35] mt-6 mb-2">2. Bilgilerin Kullanımı</h2>
            <p>Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Talep ettiğiniz ürün ve teklif bilgilerini sağlamak,</li>
              <li>Size destek sağlamak ve sorularınızı yanıtlamak,</li>
              <li>Web sitemizin performansını artırmak ve kullanıcı deneyimini iyileştirmek,</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
            </ul>

            <h2 className="font-editorial text-[22px] text-[#0f5d35] mt-6 mb-2">3. Bilgilerin Paylaşımı</h2>
            <p>
              Kişisel bilgilerinizi üçüncü şahıslara satmayız. Bilgilerinizi yalnızca yasal zorunluluklar 
              çerçevesinde yetkili resmi kurumlarla paylaşabiliriz.
            </p>

            <h2 className="font-editorial text-[22px] text-[#0f5d35] mt-6 mb-2">4. Çerezler (Cookies)</h2>
            <p>
              Web sitemizde temel işlevsellik amacıyla çerezler kullanılmaktadır. Detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz.
            </p>

            <h2 className="font-editorial text-[22px] text-[#0f5d35] mt-6 mb-2">5. İletişim</h2>
            <p>
              <strong>ANKURT MÜHENDİSLİK VE TARIM MAKİNALARI</strong><br />
              Adres: {company.location.formatted}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
