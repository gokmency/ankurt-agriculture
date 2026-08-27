import { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'KVKK Aydınlatma Metni',
  description: 'ANKURT Tarım Makinaları Kişisel Verilerin Korunması Kanunu Aydınlatma Metni.',
  path: '/kvkk/',
  index: false,
});

export default function KVKKPage() {
  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'KVKK Aydınlatma Metni', href: '/kvkk' },
  ];

  return (
    <main className="min-h-screen bg-[#f2f0e9] py-8 sm:py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="bg-[#fbfaf6] rounded-[16px] border border-[#121713]/10 p-6 sm:p-12 mt-4">
          <h1 className="font-editorial text-[32px] sm:text-[44px] text-[#0f5d35] mb-6">KVKK Aydınlatma Metni</h1>
          
          <div className="text-[#464c47] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, <strong>ANKURT MÜHENDİSLİK VE TARIM MAKİNALARI</strong> (“Şirket”) olarak,
              veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan çerçevede işlemekteyiz.
            </p>

            <h2 className="font-editorial text-[22px] text-[#0f5d35] mt-6 mb-2">1. İşlenen Kişisel Veriler</h2>
            <p>
              İletişim ve teklif formlarımız aracılığıyla toplanan ad, soyad, telefon numarası, il/ilçe ve talep edilen ürün bilgileri işlenmektedir.
            </p>

            <h2 className="font-editorial text-[22px] text-[#0f5d35] mt-6 mb-2">2. Kişisel Verilerin İşlenme Amacı</h2>
            <p>Kişisel verileriniz;</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Talep ettiğiniz tarım makinalarına ilişkin fiyat ve teknik bilgi sunulması,</li>
              <li>İletişim taleplerinizin yanıtlanması,</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.</li>
            </ul>

            <h2 className="font-editorial text-[22px] text-[#0f5d35] mt-6 mb-2">3. Kişisel Veri Sahibinin Hakları</h2>
            <p>
              KVKK&apos;nın 11. maddesi uyarınca veri sahipleri; verilerinin işlenip işlenmediğini öğrenme, düzeltilmesini isteme ve silinmesini talep etme hakkına sahiptir.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
