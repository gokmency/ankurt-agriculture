'use client';

import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { company } from '@/data/company';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';

export function StickyMobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#fcfcfc] border-t border-[#000000]/10 p-2.5 flex items-center gap-2 shadow-lg">
      <a
        href={company.contact.phoneHref}
        onClick={() => trackPhoneClick('mobile')}
        className="flex-1 flex items-center justify-center gap-2 bg-[#043f2e] text-[#fcfcfc] font-medium py-2.5 px-3 rounded-[4px] text-xs transition-colors hover:bg-[#06533d]"
      >
        <Phone className="w-3.5 h-3.5 stroke-[2]" />
        <span>Hemen Ara</span>
      </a>

      {company.contact.whatsappUrl ? (
        <a
          href={company.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-2.5 px-3 rounded-[4px] text-xs transition-colors hover:bg-[#20bd5a] shadow-xs"
        >
          <WhatsAppIcon className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>
      ) : (
        <Link
          href="/iletisim"
          className="flex-1 flex items-center justify-center gap-2 bg-[#c8f169] text-[#000000] font-medium py-2.5 px-3 rounded-[4px] text-xs transition-colors"
        >
          <span>Bilgi Al</span>
        </Link>
      )}
    </div>
  );
}
