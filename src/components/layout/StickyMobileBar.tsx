'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getProductBySlug } from '@/data/products';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { company } from '@/data/company';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';

export function StickyMobileBar() {
  const pathname = usePathname();
  const product = getProductBySlug(pathname.split('/')[2] || '');
  const whatsappUrl = product ? `${company.contact.whatsappUrl}?text=${encodeURIComponent(`Merhaba, ${product.title} hakkında fiyat ve bilgi almak istiyorum. ${company.seo.siteUrl}/urunler/${product.slug}/`)}` : company.contact.whatsappUrl;
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#fbfaf6] border-t border-[#121713]/10 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] flex items-center gap-2 shadow-lg">
      <a
        href={company.contact.phoneHref}
        onClick={() => trackPhoneClick('mobile')}
        className="flex-1 flex items-center justify-center gap-2 bg-[#0f5d35] text-[#fbfaf6] font-medium py-2.5 px-3 rounded-[4px] text-xs transition-colors hover:bg-[#06533d]"
      >
        <Phone className="w-3.5 h-3.5 stroke-[2]" />
        <span>Hemen Ara</span>
      </a>

      {company.contact.whatsappUrl ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick(product?.slug || 'general')}
          className="flex-1 flex items-center justify-center gap-2 bg-[#075e54] text-white font-semibold py-2.5 px-3 rounded-[4px] text-xs transition-colors hover:bg-[#054c44] shadow-xs"
        >
          <WhatsAppIcon className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>
      ) : (
        <Link
          href="/iletisim/"
          className="flex-1 flex items-center justify-center gap-2 bg-[#e7b23f] text-[#121713] font-medium py-2.5 px-3 rounded-[4px] text-xs transition-colors"
        >
          <span>Bilgi Al</span>
        </Link>
      )}
    </div>
  );
}
