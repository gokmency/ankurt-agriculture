'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mainNavigation } from '@/data/navigation';
import { company } from '@/data/company';
import { MobileNav } from './MobileNav';
import { trackPhoneClick } from '@/lib/analytics';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const closeMobileNav = useCallback(() => {
    setMobileNavOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={cn(
        'fixed inset-x-0 top-0 z-40 bg-[#fbfaf6] transition-shadow duration-200',
        isScrolled && 'shadow-[0_12px_32px_rgba(18,23,19,.09)]'
      )}>
        <div className="section-shell flex h-[72px] items-center justify-between">
          <Link href="/" className="relative h-11 w-[152px] shrink-0 sm:w-[178px]" aria-label="ANKURT ana sayfa">
            <Image
              src="/images/brand/ankurt_official_logo.png"
              alt={company.nameFull}
              fill
              className="object-contain object-left"
              sizes="178px"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
            {mainNavigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'relative px-3 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-[#464c47] transition-colors hover:text-[#0f5d35]',
                    isActive && 'text-[#0f5d35] after:absolute after:inset-x-3 after:-bottom-[19px] after:h-[3px] after:bg-[#e7b23f]'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={company.contact.phoneHref}
              onClick={() => trackPhoneClick('main')}
              className="flex h-10 items-center gap-2 border-r border-[#1c211d]/15 pr-4 text-xs font-bold text-[#1c211d] hover:text-[#0f5d35]"
            >
              <Phone className="h-4 w-4 text-[#0f5d35]" />
              {company.contact.phone}
            </a>
            <Link
              href="/iletisim"
              className="inline-flex h-10 items-center gap-2 rounded-[6px] bg-[#0f5d35] px-4 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#184f31]"
            >
              Teklif Al <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileNavOpen(true)}
            className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[6px] border border-[#1c211d]/20 bg-[#fbfaf6] text-[#1c211d] transition-colors hover:border-[#0f5d35] hover:text-[#0f5d35] lg:hidden"
            aria-label="Menüyü aç"
            aria-expanded={mobileNavOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileNav isOpen={mobileNavOpen} onClose={closeMobileNav} />
    </>
  );
}
