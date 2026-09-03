import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';
import { company } from '@/data/company';

interface ArticleContentProps {
  content: string;
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .trim()
    .replace(/\s+/g, '-');
}

export function extractTableOfContents(content: string): { id: string; title: string }[] {
  const lines = content.split('\n');
  const toc: { id: string; title: string }[] = [];

  for (const line of lines) {
    if (line.startsWith('## ') && !line.includes('Önerilen iç linkler') && !line.includes('Yayın notu')) {
      const title = line.replace('## ', '').trim();
      const id = slugifyHeading(title);
      toc.push({ id, title });
    }
  }

  return toc;
}

export function ArticleContent({ content }: ArticleContentProps) {
  const lines = content.split('\n');

  // Helper to parse inline markdown (bold and links)
  const formatInlineText = (text: string) => {
    // Replace markdown links [title](url) or plain urls
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s)]+)/g;
    const parts: (string | React.ReactNode)[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const label = match[1] || match[3];
      const href = match[2] || match[3];
      // Normalize internal href
      const internalHref = href.replace('https://ankurt.com', '');
      parts.push(
        <Link
          key={match.index}
          href={internalHref || href}
          className="font-semibold text-[#0f5d35] underline decoration-[#0f5d35]/40 underline-offset-4 hover:decoration-[#0f5d35] hover:text-[#184f31]"
        >
          {label}
        </Link>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    // Now process **bold** inside string parts
    return parts.map((part, pIdx) => {
      if (typeof part !== 'string') return part;
      const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
      return boldParts.map((bPart, bIdx) => {
        if (bPart.startsWith('**') && bPart.endsWith('**')) {
          return (
            <strong key={`${pIdx}-${bIdx}`} className="font-bold text-[#121713]">
              {bPart.slice(2, -2)}
            </strong>
          );
        }
        return bPart;
      });
    });
  };

  return (
    <div className="article-body space-y-4 text-sm sm:text-base leading-relaxed text-[#464c47]">
      {lines.map((line, idx) => {
        const trimmed = line.trim();

        // Skip empty lines or meta
        if (!trimmed) {
          return null;
        }

        // H2 Heading
        if (trimmed.startsWith('## ')) {
          const headingText = trimmed.replace('## ', '').trim();
          const id = slugifyHeading(headingText);

          // If heading is "Sonuç", prepend the Consultation Banner before it!
          const isResultSection = headingText.toLowerCase().includes('sonuç');

          return (
            <React.Fragment key={idx}>
              {isResultSection && (
                <div className="my-10 rounded-[14px] border border-[#0f5d35]/25 bg-[#0f5d35]/8 p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em] text-[#0f5d35] mb-2">
                    <ShieldCheck className="h-4 w-4" /> ANKURT Atölye Danışma Notu
                  </div>
                  <h3 className="font-editorial text-2xl uppercase leading-tight text-[#121713]">
                    Arazinize veya Traktörünüze Özel Ölçü Mü Gerekiyor?
                  </h3>
                  <p className="mt-2 text-sm text-[#464c47] leading-relaxed">
                    Sera kapı genişliği, ağaç sıra aralığı veya traktörünüzün beygir gücüne tam uyacak şasi ve ekipman ölçüsünü ustamızla doğrudan görüşerek belirleyebilirsiniz.
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={company.contact.phoneHref}
                      className="inline-flex items-center gap-2 rounded-[6px] bg-[#0f5d35] px-4 py-2.5 text-xs font-bold uppercase tracking-[.06em] text-white hover:bg-[#184f31] transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5" /> Ustayı Ara: 0242 729 72 56
                    </a>
                    <a
                      href={company.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-[6px] bg-[#25d366] px-4 py-2.5 text-xs font-bold uppercase tracking-[.06em] text-white hover:bg-[#20bd5a] transition-colors"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 fill-current" /> WhatsApp Danışma
                    </a>
                  </div>
                </div>
              )}

              <h2
                id={id}
                className="scroll-mt-28 font-editorial text-2xl sm:text-3xl text-[#0f5d35] pt-8 pb-2 border-b border-[#121713]/10"
              >
                {headingText}
              </h2>
            </React.Fragment>
          );
        }

        // H3 Heading
        if (trimmed.startsWith('### ')) {
          const headingText = trimmed.replace('### ', '').trim();
          return (
            <h3
              key={idx}
              className="font-editorial text-xl sm:text-2xl text-[#121713] pt-4 pb-1"
            >
              {headingText}
            </h3>
          );
        }

        // Checklist Item (- [ ] or - [x])
        if (trimmed.startsWith('- [ ]') || trimmed.startsWith('- [x]')) {
          const isChecked = trimmed.startsWith('- [x]');
          const itemText = trimmed.substring(5).trim();
          return (
            <div
              key={idx}
              className="my-1.5 flex items-start gap-3 rounded-[8px] border border-[#121713]/10 bg-white/60 px-4 py-3 shadow-xs"
            >
              {isChecked ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0f5d35] mt-0.5" />
              ) : (
                <Circle className="h-4 w-4 shrink-0 text-[#e7b23f] mt-0.5" />
              )}
              <span className="text-xs sm:text-sm text-[#1c211d] font-medium">
                {formatInlineText(itemText)}
              </span>
            </div>
          );
        }

        // Standard Unordered List Item (- or *)
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const itemText = trimmed.substring(2).trim();
          return (
            <li key={idx} className="ml-5 list-disc text-sm sm:text-base leading-relaxed text-[#464c47] my-1">
              {formatInlineText(itemText)}
            </li>
          );
        }

        // Numbered List (1. 2. 3.)
        const numberedMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numberedMatch) {
          const num = numberedMatch[1];
          const itemText = numberedMatch[2];
          return (
            <div key={idx} className="my-2 flex items-start gap-3 pl-2">
              <span className="font-editorial text-lg font-bold text-[#0f5d35] shrink-0 w-6">
                {num.padStart(2, '0')}
              </span>
              <div className="text-sm sm:text-base leading-relaxed text-[#464c47]">
                {formatInlineText(itemText)}
              </div>
            </div>
          );
        }

        // Paragraph
        return (
          <p key={idx} className="my-3 text-sm sm:text-base leading-relaxed text-[#464c47]">
            {formatInlineText(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
