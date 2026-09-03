'use client';

import { company } from '@/data/company';
import { InquiryForm } from '@/components/contact/InquiryForm';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { JsonLd, localBusinessJsonLd, breadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Phone, MapPin, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { WhatsAppLogoImage, SahibindenBadge, InstagramIcon, FacebookIcon, YouTubeIcon, TikTokIcon } from '@/components/ui/BrandIcons';
import { trackPhoneClick, trackWhatsAppClick, trackSahibindenClick, trackDirectionsRequest } from '@/lib/analytics';

export default function ContactPage() {
  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'İletişim', href: '/iletisim' },
  ];

  return (
    <main className="min-h-screen bg-[#f2f0e9] py-8 sm:py-12">
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="mt-4 mb-8">
          <span className="eyebrow-label text-[#0f5d35]">Bize Ulaşın</span>
          <h1 className="font-editorial text-[36px] sm:text-[48px] text-[#0f5d35] tracking-[-0.02em] mt-1 mb-2">
            Atölye ve İletişim Bilgileri
          </h1>
          <p className="text-sm sm:text-base text-[#464c47] max-w-2xl leading-relaxed">
            Makinelerimizin ölçüleri, traktörünüze uyumu veya güncel atölye fiyatları için doğrudan telefonla arayabilir, WhatsApp&apos;tan yazabilir veya atölyemizi ziyaret edebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Direct Communication Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#fbfaf6] p-6 sm:p-8 rounded-[16px] border border-[#121713]/10 space-y-6">
              
              <div className="pb-5 border-b border-[#121713]/8">
                <div className="eyebrow-label text-[#0f5d35]/70 text-[11px] mb-1">FİRMA BİLGİSİ</div>
                <div className="font-editorial text-2xl text-[#0f5d35]">{company.name}</div>
                <div className="text-xs text-[#464c47] mt-1">İşletme Yetkilisi: <strong className="text-[#0f5d35]">{company.contact.contactPerson}</strong></div>
              </div>

              {/* Physical Location */}
              <div className="pb-5 border-b border-[#121713]/8 space-y-2">
                <div className="eyebrow-label text-[#0f5d35]/70 text-[11px] flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 stroke-[1.5]" />
                  Atölye & Satış Adresi
                </div>
                <p className="text-sm text-[#0f5d35] font-medium leading-relaxed">
                  {company.location.formatted}
                </p>
              </div>

              {/* Direct Telephone Lines */}
              <div className="pb-5 border-b border-[#121713]/8 space-y-2.5">
                <div className="eyebrow-label text-[#0f5d35]/70 text-[11px] flex items-center">
                  <Phone className="w-3.5 h-3.5 mr-1.5 stroke-[1.5]" />
                  Telefon Hatlarımız
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a 
                    href={company.contact.phoneHref}
                    onClick={() => trackPhoneClick('main')}
                    className="p-3 rounded-[4px] bg-[#f2f0e9] hover:bg-[#f2f0e9]/80 transition-colors"
                  >
                    <div className="text-[10px] text-[#0f5d35]/70 uppercase font-medium">SABİT İŞ HATTI</div>
                    <div className="text-sm font-medium text-[#0f5d35] mt-0.5">{company.contact.phone}</div>
                  </a>
                  <a 
                    href={company.contact.mobileHref}
                    onClick={() => trackPhoneClick('mobile')}
                    className="p-3 rounded-[4px] bg-[#f2f0e9] hover:bg-[#f2f0e9]/80 transition-colors"
                  >
                    <div className="text-[10px] text-[#0f5d35]/70 uppercase font-medium">MOBİL & ATÖLYE</div>
                    <div className="text-sm font-medium text-[#0f5d35] mt-0.5">{company.contact.mobile}</div>
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
            <div className="bg-[#fbfaf6] p-6 rounded-[16px] border border-[#121713]/10 space-y-3">
              <div className="eyebrow-label text-[#0f5d35]/70 text-[11px]">
                Sosyal Medya & İlan Mağazamız
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={company.location.businessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-[4px] border border-[#121713]/15 bg-[#f2f0e9] px-3 text-xs font-semibold text-[#0f5d35] transition-colors hover:border-[#e7b23f] hover:bg-[#e7b23f] hover:text-[#121713]"
                >
                  <MapPin className="h-4 w-4" /> Google İşletme Profili
                </a>
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
                      className="w-9 h-9 rounded-[4px] border border-[#121713]/15 bg-[#f2f0e9] text-[#0f5d35] hover:bg-[#e7b23f] hover:text-[#121713] hover:border-[#e7b23f] transition-all flex items-center justify-center"
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
                      className="w-9 h-9 rounded-[4px] border border-[#121713]/15 bg-[#f2f0e9] text-[#0f5d35] hover:bg-[#e7b23f] hover:text-[#121713] hover:border-[#e7b23f] transition-all flex items-center justify-center"
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
                      className="w-9 h-9 rounded-[4px] border border-[#121713]/15 bg-[#f2f0e9] text-[#0f5d35] hover:bg-[#e7b23f] hover:text-[#121713] hover:border-[#e7b23f] transition-all flex items-center justify-center"
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
                      className="w-9 h-9 rounded-[4px] border border-[#121713]/15 bg-[#f2f0e9] text-[#0f5d35] hover:bg-[#e7b23f] hover:text-[#121713] hover:border-[#e7b23f] transition-all flex items-center justify-center"
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
            <div className="bg-[#fbfaf6] p-6 sm:p-8 rounded-[16px] border border-[#121713]/10">
              <div className="mb-5">
                <span className="eyebrow-label text-[#0f5d35]">Fiyat & Danışma</span>
                <h2 className="font-editorial text-[26px] text-[#0f5d35] mt-0.5 mb-1">
                  Fiyat ve Bilgi Alın
                </h2>
                <p className="text-xs sm:text-sm text-[#464c47]">
                  İlgilendiğiniz makineyi ve sormak istediklerinizi iletin, WhatsApp üzerinden hızlıca bilgi verelim.
                </p>
              </div>
              <InquiryForm />
            </div>

            {/* Large Prominent Map Box */}
            <div className="bg-[#0f5d35] rounded-[16px] p-6 text-[#fbfaf6] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="eyebrow-label text-[#e7b23f] text-[11px] block">ATÖLYE VE KONUM</span>
                  <div className="font-editorial text-xl mt-0.5">Yukarıkocayatak Atölyemiz</div>
                </div>
              </div>

              <div className="relative rounded-[10px] overflow-hidden aspect-[16/9] w-full border border-[#fbfaf6]/20">
                <iframe
                  title="ANKURT İletişim Haritası"
                  src={company.location.mapEmbedUrl}
                  className="w-full h-full border-0 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={company.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackDirectionsRequest}
                  className="w-full py-3 px-4 rounded-[4px] bg-[#e7b23f] text-[#121713] font-semibold text-sm hover:bg-[#f0c45a] transition-colors flex items-center justify-center shadow-xs"
                >
                  <Navigation className="w-4 h-4 mr-2 stroke-[2.5]" />
                  Yol Tarifi Al
                </a>
                <a
                  href={company.location.businessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-[4px] border border-[#fbfaf6]/35 bg-transparent text-[#fbfaf6] font-semibold text-sm hover:border-[#e7b23f] hover:text-[#e7b23f] transition-colors flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  İşletme Profili
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
