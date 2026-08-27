'use client';

import React from 'react';
import { company } from '@/data/company';
import { trackPhoneClick, trackWhatsAppClick, trackDirectionsRequest } from '@/lib/analytics';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';

export function ContactInfo() {
  const { contact, location } = company;
  
  return (
    <div className="bg-[#fbfaf6] p-6 md:p-8 rounded-[16px] border border-[#121713]/10">
      <h2 className="font-editorial text-[24px] text-[#0f5d35] mb-6">İletişim Bilgileri</h2>
      
      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-0.5">
            <MapPin className="w-5 h-5 text-[#0f5d35] stroke-[1.5]" />
          </div>
          <div className="ml-3.5">
            <span className="eyebrow-label text-[#0f5d35] text-[11px] block mb-1">Fabrika & Atölye</span>
            <p className="text-sm text-[#464c47] leading-relaxed">
              {location.formatted}
            </p>
            <a 
              href={location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackDirectionsRequest}
              className="inline-flex items-center mt-2 text-xs font-medium text-[#0f5d35] hover:text-[#184f31] transition-colors"
            >
              Yol Tarifi Al <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
            </a>
            <a
              href={location.businessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center mt-2 text-xs font-medium text-[#0f5d35] hover:text-[#184f31] transition-colors"
            >
              İşletme Profilini Aç <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Phones */}
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-0.5">
            <Phone className="w-5 h-5 text-[#0f5d35] stroke-[1.5]" />
          </div>
          <div className="ml-3.5">
            <span className="eyebrow-label text-[#0f5d35] text-[11px] block mb-1">Telefon Numaraları</span>
            <div className="flex flex-col space-y-1.5 text-sm">
              <a 
                href={contact.phoneHref} 
                onClick={() => trackPhoneClick('main')} 
                className="text-[#464c47] hover:text-[#0f5d35] font-medium transition-colors"
              >
                {contact.phone} <span className="text-xs text-[#464c47]/60">(Sabit Hat)</span>
              </a>
              <a 
                href={contact.mobileHref} 
                onClick={() => trackPhoneClick('mobile')} 
                className="text-[#464c47] hover:text-[#0f5d35] font-medium transition-colors"
              >
                {contact.mobile} <span className="text-xs text-[#464c47]/60">(Mobil İletişim)</span>
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-start pt-2 border-t border-[#121713]/8">
          <div className="flex-shrink-0 mt-0.5">
            <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
          </div>
          <div className="ml-3.5">
            <span className="eyebrow-label text-[#25D366] text-[11px] block mb-1">WhatsApp Destek</span>
            <p className="text-xs text-[#464c47] mb-3 leading-relaxed">
              Hızlı fiyat ve teknik şartname sorularınız için doğrudan WhatsApp hattımızdan yazabilirsiniz.
            </p>
            <a 
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="inline-flex items-center px-4 py-2 bg-[#25D366] text-white text-xs font-semibold rounded-[4px] hover:bg-[#20bd5a] transition-colors shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4 mr-1.5 fill-white" />
              WhatsApp&apos;tan Mesaj Gönder
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
