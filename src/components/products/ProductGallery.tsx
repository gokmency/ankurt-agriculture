'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Cog, MessageSquare } from 'lucide-react';
import { company } from '@/data/company';
import { trackWhatsAppClick } from '@/lib/analytics';
import { Button } from '../ui/Button';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full rounded-[16px] bg-[#f2f0e9] p-8 sm:p-12 text-center border border-[#121713]/10 flex flex-col items-center justify-center min-h-[360px]">
        <div className="w-14 h-14 rounded-[4px] bg-[#0f5d35]/10 flex items-center justify-center mb-4 text-[#0f5d35]">
          <Cog className="w-7 h-7 stroke-[1.5]" />
        </div>
        <h3 className="font-editorial text-2xl text-[#0f5d35] mb-2">{productName}</h3>
        <p className="text-sm text-[#464c47] mb-6 max-w-sm leading-relaxed">
          Bu ürünümüzün detayları ve güncel fiyatı için doğrudan iletişime geçebilirsiniz.
        </p>
        {company.contact.whatsappUrl && (
          <Button asChild variant="primary" size="sm">
            <a
              href={`${company.contact.whatsappUrl}?text=${encodeURIComponent(`Merhaba, ${productName} hakkında detaylı bilgi almak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
            >
              <MessageSquare className="w-4 h-4 mr-2 stroke-[1.5]" />
              Bilgi İste
            </a>
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Viewport */}
      <div className="relative w-full aspect-[4/3] bg-[#f2f0e9] rounded-[16px] overflow-hidden border border-[#121713]/10">
        <Image
          src={images[activeIndex]}
          alt={`${productName} - Görsel ${activeIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative aspect-square rounded-[4px] overflow-hidden border transition-all cursor-pointer bg-[#f2f0e9]",
                activeIndex === index 
                  ? "border-[#0f5d35] border-2"
                  : "border-[#121713]/15 opacity-70 hover:opacity-100"
              )}
              aria-label={`Görsel ${index + 1}`}
              aria-current={activeIndex === index}
            >
              <Image
                src={image}
                alt={`${productName} küçük görsel ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 12vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
