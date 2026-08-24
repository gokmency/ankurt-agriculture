'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { mainNavigation } from '@/data/navigation';
import { company } from '@/data/company';
import { Button } from '../ui/Button';
import { MobileNav } from './MobileNav';
import { Phone, MapPin } from 'lucide-react';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-200',
          isScrolled ? 'bg-[#fcfcfc] border-b border-[#000000]/10' : 'bg-[#fcfcfc]/95 backdrop-blur-xs border-b border-[#000000]/8'
        )}
      >
        {/* Top Minimal Strip (Pale Sage) */}
        <div className="hidden lg:block bg-[#eef2e3] text-[#043f2e] text-xs py-2 border-b border-[#000000]/8">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between font-sans">
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#043f2e] mr-1.5 stroke-[1.5]" />
                {company.location.full}
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href={company.contact.phoneHref}
                onClick={() => trackPhoneClick('main')}
                className="inline-flex items-center text-[#043f2e] hover:text-[#2a6f2b] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 stroke-[1.5]" />
                <span>{company.contact.phone}</span>
              </a>
              <a
                href={company.contact.mobileHref}
                onClick={() => trackPhoneClick('mobile')}
                className="inline-flex items-center text-[#043f2e] hover:text-[#2a6f2b] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 stroke-[1.5]" />
                <span>{company.contact.mobile}</span>
              </a>
              {company.contact.whatsappUrl && (
                <a
                  href={company.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppClick}
                  className="inline-flex items-center text-[#25D366] hover:text-[#20bd5a] font-semibold transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 mr-1 fill-current" />
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Main Navigation with Official Logo */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative h-11 sm:h-13 w-48 sm:w-56">
              <Image
                src="/images/brand/ankurt_official_logo.png"
                alt="ANKURT Mühendislik ve Tarım Makinaları"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 190px, 230px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainNavigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'text-[15px] font-medium transition-colors hover:text-[#2a6f2b]',
                    isActive ? 'text-[#043f2e] font-semibold' : 'text-[#242423]'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="primary" size="sm">
              <Link href="/iletisim">Fiyat & Bilgi Al</Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <Button asChild variant="primary" size="sm">
              <Link href="/iletisim">Bilgi Al</Link>
            </Button>
            <button
              className="p-2 text-[#043f2e] rounded-[4px] border border-[#000000]/15 focus:outline-none"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Menüyü aç"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className="block w-full h-0.5 bg-[#043f2e]"></span>
                <span className="block w-full h-0.5 bg-[#043f2e]"></span>
                <span className="block w-full h-0.5 bg-[#043f2e]"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}
