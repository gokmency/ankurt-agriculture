'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/company';
import { footerNavigation } from '@/data/navigation';
import { trackPhoneClick, trackWhatsAppClick, trackSahibindenClick, trackDirectionsRequest } from '@/lib/analytics';
import { MapPin, Phone, Navigation, ExternalLink } from 'lucide-react';
import { WhatsAppLogoImage, SahibindenBadge, InstagramIcon, FacebookIcon, YouTubeIcon, TikTokIcon } from '@/components/ui/BrandIcons';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer id="site-footer" className="border-t border-[#123e28] bg-[#123e28] pb-28 pt-16 text-[#fbfaf6] md:pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Brand & Direct Contact Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-12 w-52">
              <Image
                src="/images/brand/ankurt_official_logo.png"
                alt={company.nameFull}
                fill
                className="object-contain object-left brightness-0 invert"
                sizes="208px"
              />
            </div>

            <p className="text-[#fbfaf6]/80 text-sm leading-relaxed max-w-md">
              {company.description}
            </p>

            <div className="space-y-2.5 text-xs text-[#fbfaf6]/90 pt-1">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-[#e7b23f] shrink-0 mt-0.5 stroke-[1.5]" />
                <span>{company.location.formatted}</span>
              </p>
              <div className="flex flex-wrap gap-4 pt-1">
                <a 
                  href={company.contact.phoneHref} 
                  onClick={() => trackPhoneClick('main')} 
                  className="inline-flex items-center text-[#fbfaf6] hover:text-[#e7b23f] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-[#e7b23f] stroke-[1.5]" />
                  <span>{company.contact.phone} (Sabit)</span>
                </a>
                <a 
                  href={company.contact.mobileHref} 
                  onClick={() => trackPhoneClick('mobile')} 
                  className="inline-flex items-center text-[#fbfaf6] hover:text-[#e7b23f] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-[#e7b23f] stroke-[1.5]" />
                  <span>{company.contact.mobile} (Mobil)</span>
                </a>
              </div>
            </div>

            {/* Communication & Store Channels */}
            <div className="pt-3 space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                {company.contact.whatsappUrl && (
                  <a
                    href={company.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackWhatsAppClick}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-[4px] bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] transition-colors shadow-xs"
                  >
                    <WhatsAppLogoImage className="w-4 h-4 mr-1.5" size={18} />
                    WhatsApp
                  </a>
                )}

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
              </div>

              {/* Unified Theme Social Media Icons */}
              <div className="flex items-center gap-2 pt-1">
                {company.social.instagram && (
                  <a
                    href={company.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-[4px] border border-[#fbfaf6]/20 bg-[#fbfaf6]/10 text-[#fbfaf6] hover:bg-[#e7b23f] hover:text-[#121713] hover:border-[#e7b23f] transition-all flex items-center justify-center"
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
                    className="w-8 h-8 rounded-[4px] border border-[#fbfaf6]/20 bg-[#fbfaf6]/10 text-[#fbfaf6] hover:bg-[#e7b23f] hover:text-[#121713] hover:border-[#e7b23f] transition-all flex items-center justify-center"
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
                    className="w-8 h-8 rounded-[4px] border border-[#fbfaf6]/20 bg-[#fbfaf6]/10 text-[#fbfaf6] hover:bg-[#e7b23f] hover:text-[#121713] hover:border-[#e7b23f] transition-all flex items-center justify-center"
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
                    className="w-8 h-8 rounded-[4px] border border-[#fbfaf6]/20 bg-[#fbfaf6]/10 text-[#fbfaf6] hover:bg-[#e7b23f] hover:text-[#121713] hover:border-[#e7b23f] transition-all flex items-center justify-center"
                    aria-label="TikTok"
                  >
                    <TikTokIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Product Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#e7b23f] text-xs font-semibold uppercase tracking-widest mb-4">Ürün Grupları</h3>
            <ul className="space-y-2.5 text-sm text-[#fbfaf6]/80">
              {footerNavigation.products.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#e7b23f] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#e7b23f] text-xs font-semibold uppercase tracking-widest mb-4">Kurumsal</h3>
            <ul className="space-y-2.5 text-sm text-[#fbfaf6]/80">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#e7b23f] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-[#fbfaf6]/15">
              <h4 className="text-[#e7b23f] text-[11px] font-semibold uppercase tracking-widest mb-2">Yasal</h4>
              <ul className="space-y-1.5 text-xs text-[#fbfaf6]/70">
                {footerNavigation.legal.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-[#fbfaf6] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Redesigned Clean Interactive Map Card with Bold CTA (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="text-[#e7b23f] text-xs font-semibold uppercase tracking-widest mb-3">Atölye & Konum</h3>
              <div className="relative rounded-[12px] overflow-hidden border border-[#fbfaf6]/20 bg-[#121713] aspect-[16/10] w-full mb-3">
                <iframe
                  title="ANKURT Tarım Makinaları Konumu"
                  src={company.location.mapEmbedUrl}
                  className="w-full h-full border-0 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Prominent Large Yol Tarifi Al Button */}
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
              className="mt-2 w-full py-2.5 px-4 rounded-[4px] border border-[#fbfaf6]/25 text-[#fbfaf6] font-semibold text-xs hover:border-[#e7b23f] hover:text-[#e7b23f] transition-colors flex items-center justify-center"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-2" />
              Google İşletme Profili
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#fbfaf6]/15 pt-8 text-center text-xs text-[#fbfaf6]/60 sm:flex-row sm:text-left">
          <p>&copy; {currentYear} {company.name}. Tüm hakları saklıdır. Serik / Antalya</p>
          <p>
            Dijital Çözüm Ortağı:{' '}
            <a 
              href={company.digitalPartner.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#fbfaf6] hover:text-[#e7b23f] transition-colors font-medium"
            >
              {company.digitalPartner.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
