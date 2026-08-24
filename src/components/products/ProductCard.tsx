import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { Badge } from '../ui/Badge';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { getCategoryById } from '@/data/categories';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const hasImage = product.images && product.images.length > 0;
  const isAnkurt = product.brandType === 'ankurt' || product.brand === 'ANKURT';
  const category = getCategoryById(product.categoryId);

  return (
    <div className={cn(
      "group flex flex-col bg-[#fcfcfc] border border-[#000000]/10 rounded-[16px] overflow-hidden transition-all duration-200 hover:border-[#043f2e]/40",
      className
    )}>
      {/* Image Area */}
      <Link href={`/urunler/${product.slug}`} className="block relative aspect-[4/3] bg-[#eef2e3] overflow-hidden">
        {hasImage ? (
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-103"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-[#eef2e3] flex flex-col items-center justify-center p-6 text-center">
            <span className="eyebrow-label text-[#043f2e] text-[11px]">{category?.name || 'Tarım Ekipmanı'}</span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {isAnkurt ? (
            <Badge variant="chartreuse">
              ANKURT İMALATI
            </Badge>
          ) : (
            <Badge variant="sage">
              {product.brand}
            </Badge>
          )}
        </div>
      </Link>

      {/* Card Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="eyebrow-label text-[#043f2e] text-[11px] mb-1.5">
            {category?.name || product.categoryId}
          </div>

          <h3 className="font-editorial text-[20px] text-[#043f2e] mb-2 leading-snug group-hover:text-[#2a6f2b] transition-colors line-clamp-2">
            <Link href={`/urunler/${product.slug}`}>
              {product.title}
            </Link>
          </h3>

          <p className="text-sm text-[#242423] line-clamp-2 mb-4 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-[#000000]/8 flex items-center justify-between">
          <Link 
            href={`/urunler/${product.slug}`}
            className="inline-flex items-center text-sm font-medium text-[#043f2e] group-hover:text-[#2a6f2b] transition-colors"
          >
            <span>Detayları İncele</span>
            <ArrowUpRight className="w-4 h-4 ml-1 stroke-[1.5]" />
          </Link>
          <span className="text-xs font-medium text-[#043f2e] bg-[#eef2e3] px-2.5 py-1 rounded-[4px]">
            Fiyat Sorunuz
          </span>
        </div>
      </div>
    </div>
  );
}
