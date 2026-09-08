import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, Phone, ShieldCheck } from 'lucide-react';
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
    if (line.startsWith('## ') && !line.includes('Önerilen iç linkler') && !line.includes('Yayın notu') && !line.includes('İlgili Ekipmanlar')) {
      const title = line.replace('## ', '').trim();
      const id = slugifyHeading(title);
      toc.push({ id, title });
    }
  }

  return toc;
}

export function extractFaqFromContent(content: string): { question: string; answer: string }[] {
  const parts = content.split(/## Sık [Ss]orulan [Ss]orular/i);
  if (parts.length < 2) return [];
  const sectionContent = parts[1].split(/\n## /)[0];
  const lines = sectionContent.split('\n');
  const items: { question: string; answer: string }[] = [];
  let currentQ = '';
  let currentA: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('### ')) {
      if (currentQ && currentA.length > 0) {
        items.push({ question: currentQ, answer: currentA.join(' ').trim() });
      }
      currentQ = trimmed.replace('### ', '').trim();
      currentA = [];
    } else if (currentQ && trimmed) {
      currentA.push(trimmed);
    }
  }
  if (currentQ && currentA.length > 0) {
    items.push({ question: currentQ, answer: currentA.join(' ').trim() });
  }
  return items;
}

export function ArticleContent({ content }: ArticleContentProps) {
  const rawLines = content.split('\n');

  // Helper to parse inline markdown (bold and links)
  const formatInlineText = (text: string) => {
    // Replace markdown links [title](url) or plain urls
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^)\s]+)\)|(https?:\/\/[^\s)]+)/g;
    const parts: (string | React.ReactNode)[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const label = match[1] || match[3];
      const href = match[2] || match[3];
      const internalHref = href.replace('https://ankurt.com', '');
      const isInternal = internalHref.startsWith('/');

      parts.push(
        <Link
          key={match.index}
          href={internalHref || href}
          {...(!isInternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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

  // Group table lines
  type Block =
    | { type: 'h2'; text: string }
    | { type: 'h3'; text: string }
    | { type: 'check'; checked: boolean; text: string }
    | { type: 'ul'; text: string }
    | { type: 'ol'; num: string; text: string }
    | { type: 'table'; headers: string[]; rows: string[][] }
    | { type: 'p'; text: string };

  const blocks: Block[] = [];
  let currentTableLines: string[] = [];

  const flushTable = () => {
    if (currentTableLines.length >= 2) {
      const parseCells = (line: string) =>
        line
          .split('|')
          .slice(1, -1)
          .map((c) => c.trim());
      const headers = parseCells(currentTableLines[0]);
      // line 1 is divider |---|---|
      const rows = currentTableLines.slice(2).map(parseCells);
      blocks.push({ type: 'table', headers, rows });
    }
    currentTableLines = [];
  };

  for (let i = 0; i < rawLines.length; i++) {
    const trimmed = rawLines[i].trim();

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      currentTableLines.push(trimmed);
      continue;
    } else if (currentTableLines.length > 0) {
      flushTable();
    }

    if (!trimmed) continue;

    if (trimmed.startsWith('## ')) {
      blocks.push({ type: 'h2', text: trimmed.replace('## ', '').trim() });
    } else if (trimmed.startsWith('### ')) {
      blocks.push({ type: 'h3', text: trimmed.replace('### ', '').trim() });
    } else if (trimmed.startsWith('- [ ]') || trimmed.startsWith('- [x]')) {
      blocks.push({
        type: 'check',
        checked: trimmed.startsWith('- [x]'),
        text: trimmed.substring(5).trim(),
      });
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      blocks.push({ type: 'ul', text: trimmed.substring(2).trim() });
    } else {
      const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
      if (numMatch) {
        blocks.push({ type: 'ol', num: numMatch[1], text: numMatch[2] });
      } else {
        blocks.push({ type: 'p', text: trimmed });
      }
    }
  }
  if (currentTableLines.length > 0) {
    flushTable();
  }

  return (
    <div className="article-body space-y-4 text-sm sm:text-base leading-relaxed text-[#464c47]">
      {blocks.map((block, idx) => {
        if (block.type === 'h2') {
          const headingText = block.text;
          const id = slugifyHeading(headingText);
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
                      <Phone className="h-3.5 w-3.5" /> Ustayı Ara: {company.contact.phone}
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

        if (block.type === 'h3') {
          return (
            <h3
              key={idx}
              className="font-editorial text-xl sm:text-2xl text-[#121713] pt-4 pb-1"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === 'check') {
          return (
            <div
              key={idx}
              className="my-1.5 flex items-start gap-3 rounded-[8px] border border-[#121713]/10 bg-white/60 px-4 py-3 shadow-xs"
            >
              {block.checked ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0f5d35] mt-0.5" />
              ) : (
                <Circle className="h-4 w-4 shrink-0 text-[#e7b23f] mt-0.5" />
              )}
              <span className="text-xs sm:text-sm text-[#1c211d] font-medium">
                {formatInlineText(block.text)}
              </span>
            </div>
          );
        }

        if (block.type === 'ul') {
          return (
            <li key={idx} className="ml-5 list-disc text-sm sm:text-base leading-relaxed text-[#464c47] my-1">
              {formatInlineText(block.text)}
            </li>
          );
        }

        if (block.type === 'ol') {
          return (
            <div key={idx} className="my-2 flex items-start gap-3 pl-2">
              <span className="font-editorial text-lg font-bold text-[#0f5d35] shrink-0 w-6">
                {block.num.padStart(2, '0')}
              </span>
              <div className="text-sm sm:text-base leading-relaxed text-[#464c47]">
                {formatInlineText(block.text)}
              </div>
            </div>
          );
        }

        if (block.type === 'table') {
          return (
            <div key={idx} className="my-6 overflow-x-auto rounded-[8px] border border-[#121713]/10 shadow-xs">
              <table className="min-w-full divide-y divide-[#121713]/10 text-left text-xs sm:text-sm">
                <thead className="bg-[#0f5d35]/10 text-[#0f5d35] font-bold">
                  <tr>
                    {block.headers.map((h, hIdx) => (
                      <th key={hIdx} className="px-4 py-3 font-semibold uppercase tracking-wider text-[11px]">
                        {formatInlineText(h)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#121713]/5 bg-white/70">
                  {block.rows.map((r, rIdx) => (
                    <tr key={rIdx} className="hover:bg-[#0f5d35]/5 transition-colors">
                      {r.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 text-[#333834] leading-relaxed">
                          {formatInlineText(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        return (
          <p key={idx} className="my-3 text-sm sm:text-base leading-relaxed text-[#464c47]">
            {formatInlineText(block.text)}
          </p>
        );
      })}
    </div>
  );
}
