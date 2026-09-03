'use client';

import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';

interface ArticleShareBarProps {
  title: string;
  url: string;
}

export function ArticleShareBar({ title, url }: ArticleShareBarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${title} - ANKURT Rehber: ${url}`
  )}`;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-[#121713]/10 bg-[#f2f0e9] p-4 sm:p-5">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em] text-[#121713]">
        <Share2 className="h-4 w-4 text-[#0f5d35]" />
        <span>Bu Rehberi Paylaşın</span>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[6px] bg-[#25d366] px-3.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#20bd5a] transition-colors"
        >
          <WhatsAppIcon className="h-3.5 w-3.5 fill-current" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-[6px] border border-[#121713]/20 bg-white px-3.5 py-2 text-xs font-bold text-[#121713] hover:border-[#0f5d35] hover:text-[#0f5d35] transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-[#0f5d35]" />
              <span>Kopyalandı</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Bağlantıyı Kopyala</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
