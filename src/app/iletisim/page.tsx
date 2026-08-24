'use client';

import { Metadata } from 'next';
import { company } from '@/data/company';
import { InquiryForm } from '@/components/contact/InquiryForm';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { JsonLd, localBusinessJsonLd, breadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Phone, MapPin, Navigation, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { WhatsAppLogoImage, SahibindenBadge, InstagramIcon, FacebookIcon, YouTubeIcon, TikTokIcon } from '@/components/ui/BrandIcons';
import { trackPhoneClick, trackWhatsAppClick, trackSahibindenClick, trackDirectionsRequest } from '@/lib/analytics';

export default function ContactPage() {
  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'İletişim', href: '/iletisim' },
  ];

  return (
    <main className="min-h-screen bg-[#eef2e3] py-8 sm:py-12">
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="mt-4 mb-8">
          <span className="eyebrow-label text-[#043f2e]">Doğrudan İrtibat</span>
          <h1 className="font-editorial text-[36px] sm:text-[48px] text-[#043f2e] tracking-[-0.02em] mt-1 mb-2">
            İletişim ve Konum Bilgileri
          </h1>
          <p className="text-sm sm:text-base text-[#242423] max-w-2xl leading-relaxed">
            Makinelerimiz, model uyumluluğu ve güncel fiyatlar için atölyemize telefonla ulaşabilir veya Serik'teki yerimizi ziyaret edebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Direct Communication Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#fcfcfc] p-6 sm:p-8 rounded-[16px] border border-[#000000]/10 space-y-6">
              
              <div className="pb-5 border-b border-[#000000]/8">
                <div className="eyebrow-label text-[#043f2e]/70 text-[11px] mb-1">FİRMA BİLGİSİ</div>
                <div className="font-editorial text-2xl text-[#043f2e]">{company.name}</div>
                <div className="text-xs text-[#242423] mt-1">İşletme Yetkilisi: <strong className="text-[#043f2e]">{company.contact.contactPerson}</strong></div>
              </div>

              {/* Physical Location */}
              <div className="pb-5 border-b border-[#000000]/8 space-y-2">
                <div className="eyebrow-label text-[#043f2e]/70 text-[11px] flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 stroke-[1.5]" />
                  Atölye & Satış Adresi
                </div>
                <p className="text-sm text-[#043f2e] font-medium leading-relaxed">
                  {company.location.formatted}
                </p>
              </div>

              {/* Direct Telephone Lines */}
              <div className="pb-5 border-b border-[#000000]/8 space-y-2.5">
                <div className="eyebrow-label text-[#043f2e]/70 text-[11px] flex items-center">
                  <Phone className="w-3.5 h-3.5 mr-1.5 stroke-[1.5]" />
                  Telefon Hatlarımız
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a 
                    href={company.contact.phoneHref}
                    onClick={() => trackPhoneClick('main')}
                    className="p-3 rounded-[4px] bg-[#eef2e3] hover:bg-[#eef2e3]/80 transition-colors"
                  >
                    <div className="text-[10px] text-[#043f2e]/70 uppercase font-medium">SABİT İŞ HATTI</div>
                    <div className="text-sm font-medium text-[#043f2e] mt-0.5">{company.contact.phone}</div>
                  </a>
                  <a 
                    href={company.contact.mobileHref}
                    onClick={() => trackPhoneClick('mobile')}
                    className="p-3 rounded-[4px] bg-[#eef2e3] hover:bg-[#eef2e3]/80 transition-colors"
                  >
                    <div className="text-[10px] text-[#043f2e]/70 uppercase font-medium">MOBİL & ATÖLYE</div>
                    <div className="text-sm font-medium text-[#043f2e] mt-0.5">{company.contact.mobile}</div>
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <Button asChild variant="primary" size="md" className="w-full">
                  <a href={company.contact.phoneHref} onClick={() => trackPhoneClick('main')}>
                    <Phone className="w-3.5 h-3.5 mr-1.5 stroke-[1.5]" />
                    Hemen Ara
                  </a>
                </Button>
                {company.contact.whatsappUrl && (
                  <a 
                    href={company.contact.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={trackWhatsAppClick}
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-[4px] bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20bd5a] transition-colors shadow-xs"
                  >
                    <WhatsAppLogoImage className="w-4 h-4 mr-1.5" size={18} />
                    WhatsApp İletişim
                  </a>
                )}
              </div>

            </div>

            {/* Channels Card with Unified Theme Icons */}
            <div className="bg-[#fcfcfc] p-6 rounded-[16px] border border-[#000000]/10 space-y-3">
              <div className="eyebrow-label text-[#043f2e]/70 text-[11px]">
                Sosyal Medya & İlan Mağazamız
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {company.social.sahibinden && (
                  <a 
                    href={company.social.sahibinden} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={() => trackSahibindenClick()}
                    className="inline-flex items-center"
                  >
                    <SahibindenBadge showArrow />
                  </a>
                )}

                <div className="flex items-center gap-2">
                  {company.social.instagram && (
                    <a 
                      href={company.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-9 h-9 rounded-[4px] border border-[#000000]/15 bg-[#eef2e3] text-[#043f2e] hover:bg-[#c8f169] hover:text-[#000000] hover:border-[#c8f169] transition-all flex items-center justify-center"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                  )}
                  {company.social.facebook && (
                    <a 
                      href={company.social.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-9 h-9 rounded-[4px] border border-[#000000]/15 bg-[#eef2e3] text-[#043f2e] hover:bg-[#c8f169] hover:text-[#000000] hover:border-[#c8f169] transition-all flex items-center justify-center"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                  )}
                  {company.social.youtube && (
                    <a 
                      href={company.social.youtube} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-9 h-9 rounded-[4px] border border-[#000000]/15 bg-[#eef2e3] text-[#043f2e] hover:bg-[#c8f169] hover:text-[#000000] hover:border-[#c8f169] transition-all flex items-center justify-center"
                      aria-label="YouTube"
                    >
                      <YouTubeIcon className="w-4 h-4" />
                    </a>
                  )}
                  {company.social.tiktok && (
                    <a 
                      href={company.social.tiktok} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-9 h-9 rounded-[4px] border border-[#000000]/15 bg-[#eef2e3] text-[#043f2e] hover:bg-[#c8f169] hover:text-[#000000] hover:border-[#c8f169] transition-all flex items-center justify-center"
                      aria-label="TikTok"
                    >
                      <TikTokIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form & Interactive Google Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#fcfcfc] p-6 sm:p-8 rounded-[16px] border border-[#000000]/10">
              <div className="mb-5">
                <span className="eyebrow-label text-[#043f2e]">Teklif & Soru</span>
                <h2 className="font-editorial text-[26px] text-[#043f2e] mt-0.5 mb-1">
                  Bilgi ve Teklif Talep Formu
                </h2>
                <p className="text-xs sm:text-sm text-[#242423]">
                  İlgilendiğiniz makineyi iletin, en kısa sürede size dönüş yapalım.
                </p>
              </div>
              <InquiryForm />
            </div>

            {/* Large Prominent Map Box */}
            <div className="bg-[#043f2e] rounded-[16px] p-6 text-[#fcfcfc] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="eyebrow-label text-[#c8f169] text-[11px] block">ATÖLYE VE KONUM</span>
                  <div className="font-editorial text-xl mt-0.5">Serik Satış & İmalat Sahası</div>
                </div>
              </div>

              <div className="relative rounded-[10px] overflow-hidden aspect-[16/9] w-full border border-[#fcfcfc]/20">
                <iframe
                  title="ANKURT İletişim Haritası"
                  src="https://maps.google.com/maps?q=Yukar%C4%B1kocayatak%20Serik%20Antalya&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a 
                href={company.location.directionsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={trackDirectionsRequest}
                className="w-full py-3 px-4 rounded-[4px] bg-[#c8f169] text-[#000000] font-semibold text-sm hover:bg-[#b8e552] transition-colors flex items-center justify-center shadow-xs"
              >
                <Navigation className="w-4 h-4 mr-2 stroke-[2.5]" />
                Yol Tarifi Al
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
