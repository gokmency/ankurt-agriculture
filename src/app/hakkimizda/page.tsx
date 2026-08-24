import { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { company } from '@/data/company';
import { MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { JsonLd, localBusinessJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Hakkımızda | ANKURT Tarım Makinaları',
  description: `${company.name} — Antalya Serik / Yukarıkocayatak'ta tarla, bahçe ve sera için tarım makinaları imalatı ve satışı.`,
};

export default function AboutPage() {
  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hakkımızda', href: '/hakkimizda' }
  ];

  return (
    <div className="bg-[#eef2e3] min-h-screen py-8 sm:py-12">
      <JsonLd data={localBusinessJsonLd()} />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="mt-4 bg-[#fcfcfc] rounded-[16px] border border-[#000000]/10 overflow-hidden">
          {/* Header Area (Deep Forest Section) */}
          <div className="relative bg-[#043f2e] px-6 sm:px-12 py-16 sm:py-20 text-center overflow-hidden text-[#fcfcfc]">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="eyebrow-label text-[#c8f169] mb-3 inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
                Yukarıkocayatak, Serik / Antalya
              </div>
              <h1 className="font-editorial text-[36px] sm:text-[56px] text-[#fcfcfc] leading-tight mb-4">
                ANKURT Tarım Makinaları
              </h1>
              <p className="text-base sm:text-lg text-[#fcfcfc]/80 leading-relaxed">
                Antalya Serik’te çiftçilerimize ve sera üreticilerimize doğrudan hizmet sunan güvenilir tarım ekipmanı ve makine merkezi.
              </p>
            </div>
          </div>
          
          <div className="p-6 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Content Main Column */}
              <div className="lg:col-span-7 space-y-8 text-[#043f2e]">
                <div>
                  <span className="eyebrow-label text-[#043f2e]">Faaliyetimiz & Konumumuz</span>
                  <h2 className="font-editorial text-[32px] text-[#043f2e] mt-1 mb-4 leading-tight">
                    Bölgenin Tarım Dinamiklerini Biliyoruz
                  </h2>
                  
                  <p className="text-[#242423] leading-relaxed mb-4 text-sm sm:text-base">
                    ANKURT Tarım Makinaları olarak, tarımın kalbi Antalya Serik’te (Yukarıkocayatak bölgesi) faaliyet göstermekteyiz. Çalışmalarımız; bölgedeki örtü altı sera üreticilerinin, açık alan çiftçilerinin ve narenciye yetiştiricilerinin günlük kullanım ihtiyaçlarına doğrudan yanıt verecek şekilde şekillenmiştir.
                  </p>
                  
                  <p className="text-[#242423] leading-relaxed text-sm sm:text-base">
                    Kendi markamızla ürettiğimiz dayanıklı ANKURT tarım ekipmanlarının yanı sıra, sektörde kendini kanıtlamış Sevsan, Volkan, Ata Makina, Torunoğlu ve Öz-Akın gibi markaların da satış ve tedariğini sağlamaktayız.
                  </p>
                </div>

                {/* Workshop Real Image Box (16px radius) */}
                <div className="relative aspect-[16/9] rounded-[16px] overflow-hidden bg-[#eef2e3] border border-[#000000]/10">
                  <Image
                    src={company.workshopImage}
                    alt="ANKURT Tarım Makinaları Ürünleri Serik"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 text-xs font-medium text-[#fcfcfc] bg-[#043f2e]/90 px-3 py-1 rounded-[4px]">
                    Yukarıkocayatak Atölye ve Ürün Alanımız
                  </div>
                </div>

                <div>
                  <h3 className="font-editorial text-[24px] text-[#043f2e] mb-4">Ürün ve İmalat Yelpazemiz</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium">
                    <div className="flex items-center p-3 rounded-[4px] bg-[#eef2e3]">
                      <CheckCircle2 className="w-4 h-4 text-[#043f2e] mr-2 shrink-0 stroke-[1.5]" />
                      <span>Bahçe & Tarım Römorkları</span>
                    </div>
                    <div className="flex items-center p-3 rounded-[4px] bg-[#eef2e3]">
                      <CheckCircle2 className="w-4 h-4 text-[#043f2e] mr-2 shrink-0 stroke-[1.5]" />
                      <span>7'li Çizel & Patlatma Aletleri</span>
                    </div>
                    <div className="flex items-center p-3 rounded-[4px] bg-[#eef2e3]">
                      <CheckCircle2 className="w-4 h-4 text-[#043f2e] mr-2 shrink-0 stroke-[1.5]" />
                      <span>Devirmeli Traktör Sepetleri</span>
                    </div>
                    <div className="flex items-center p-3 rounded-[4px] bg-[#eef2e3]">
                      <CheckCircle2 className="w-4 h-4 text-[#043f2e] mr-2 shrink-0 stroke-[1.5]" />
                      <span>Sap Çıkarma & Pasaf Toplama</span>
                    </div>
                    <div className="flex items-center p-3 rounded-[4px] bg-[#eef2e3]">
                      <CheckCircle2 className="w-4 h-4 text-[#043f2e] mr-2 shrink-0 stroke-[1.5]" />
                      <span>Sera Tipi 220 cm Sürgüler</span>
                    </div>
                    <div className="flex items-center p-3 rounded-[4px] bg-[#eef2e3]">
                      <CheckCircle2 className="w-4 h-4 text-[#043f2e] mr-2 shrink-0 stroke-[1.5]" />
                      <span>Diskaro, Rotovatör & Çapa</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Cards */}
              <div className="lg:col-span-5 space-y-6">
                {/* Brand Plate Reference Box */}
                <div className="bg-[#eef2e3] p-6 rounded-[16px] border border-[#000000]/8">
                  <span className="eyebrow-label text-[#043f2e] text-[11px]">İmalat Güvencesi</span>
                  <h3 className="font-editorial text-[22px] text-[#043f2e] mt-1 mb-4 flex items-center">
                    <ShieldCheck className="w-5 h-5 text-[#043f2e] mr-2 stroke-[1.5]" />
                    ANKURT Tescilli İmalat
                  </h3>
                  
                  <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden mb-4 border border-[#000000]/10">
                    <Image
                      src={company.logoPlate}
                      alt="ANKURT Logo ve İletişim Plakası"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 35vw"
                    />
                  </div>

                  <p className="text-xs text-[#242423] leading-relaxed">
                    Makinelerimizin üzerindeki ANKURT seri plakası ve doğrudan iletişim bilgileri, ürünlerimizin atölye güvencesini temsil eder.
                  </p>
                </div>

                {/* Location & Contact Box */}
                <div className="bg-[#fcfcfc] p-6 rounded-[16px] border border-[#000000]/10">
                  <h3 className="font-editorial text-[22px] text-[#043f2e] mb-3 flex items-center">
                    <MapPin className="w-5 h-5 text-[#043f2e] mr-2 stroke-[1.5]" />
                    Ziyaret & İletişim
                  </h3>
                  
                  <div className="space-y-2.5 mb-6 text-xs text-[#242423] bg-[#eef2e3] p-4 rounded-[4px]">
                    <div>
                      <span className="font-medium text-[#043f2e] block">Adres:</span>
                      <span>{company.location.formatted}</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#043f2e] block">Sabit Hat:</span>
                      <a href={company.contact.phoneHref} className="text-[#043f2e] font-medium hover:underline">{company.contact.phone}</a>
                    </div>
                    <div>
                      <span className="font-medium text-[#043f2e] block">Mobil:</span>
                      <a href={company.contact.mobileHref} className="text-[#043f2e] font-medium hover:underline">{company.contact.mobile}</a>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <Button asChild variant="primary" size="md" className="w-full">
                      <a href={company.location.directionsUrl} target="_blank" rel="noopener noreferrer">
                        Haritada Yol Tarifi Al
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="md" className="w-full">
                      <Link href="/iletisim">İletişim & Teklif Formu</Link>
                    </Button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
