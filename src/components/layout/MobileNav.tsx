'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { mainNavigation } from '@/data/navigation';
import { company } from '@/data/company';
import { Button } from '../ui/Button';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { Phone, MapPin, X } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#121713]/40 backdrop-blur-2xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <aside
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
        className="relative z-10 flex h-full w-5/6 max-w-sm flex-col border-l border-[#121713]/10 bg-[#fbfaf6]"
      >
        <div className="flex items-center justify-between p-5 border-b border-[#121713]/10">
          <div className="relative h-10 w-44">
            <Image
              src="/images/brand/ankurt_official_logo.webp"
              alt={company.nameFull}
              fill
              loading="lazy"
              className="object-contain object-left"
              sizes="180px"
            />
          </div>
          <button 
            ref={closeButtonRef}
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[6px] text-[#0f5d35] hover:bg-[#f2f0e9]"
            aria-label="Menüyü kapat"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-6 px-6">
          <nav className="flex flex-col space-y-3">
            {mainNavigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'text-[16px] font-medium py-2.5 px-3 rounded-[4px] transition-colors',
                    isActive ? 'bg-[#f2f0e9] text-[#0f5d35] font-semibold' : 'text-[#464c47] hover:bg-[#f2f0e9]/50'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-[#121713]/10 space-y-3 text-xs text-[#464c47]">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-[#0f5d35] shrink-0 mt-0.5 stroke-[1.5]" />
              <span>{company.location.short}</span>
            </div>
          </div>
        </div>

        {/* Action Bottom Area */}
        <div className="p-5 border-t border-[#121713]/10 space-y-3 bg-[#f2f0e9]/40">
          <Button asChild variant="primary" size="md" className="w-full justify-center">
            <Link href="/iletisim/">Bilgi & Teklif Al</Link>
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <a
              href={company.contact.phoneHref}
              onClick={() => trackPhoneClick('main')}
              className="flex items-center justify-center px-3 py-2 text-xs text-[#0f5d35] font-medium border border-[#121713]/15 rounded-[4px] hover:bg-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1 stroke-[1.5]" />
              Sabit Ara
            </a>
            {company.contact.whatsappUrl && (
              <a
                href={company.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="flex items-center justify-center px-3 py-2 text-xs bg-[#25D366] text-white font-semibold rounded-[4px] hover:bg-[#20bd5a] transition-colors shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 mr-1.5 fill-white" />
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
