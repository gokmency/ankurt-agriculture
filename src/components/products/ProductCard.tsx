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
  preload?: boolean;
}

export function ProductCard({ product, className, preload = false }: ProductCardProps) {
  const hasImage = product.images && product.images.length > 0;
  const isAnkurt = product.brandType === 'ankurt';
  const category = getCategoryById(product.categoryId);

  return (
    <article className={cn(
      "group flex flex-col overflow-hidden rounded-[8px] border border-[#1c211d]/12 bg-[#fbfaf6] transition-all duration-300 hover:-translate-y-1 hover:border-[#0f5d35]/45 hover:shadow-[0_20px_50px_rgba(18,23,19,.10)]",
      className
    )}>
      {/* Image Area */}
      <Link href={`/urunler/${product.slug}/`} prefetch={false} className="relative block aspect-[4/3] overflow-hidden bg-[#deddd7]">
        {hasImage ? (
            <Image
              src={product.images[0]}
              alt={product.imageKind === 'reference' ? `${category?.name || 'Ekipman'} için temsili kullanım görseli` : product.title}
              fill
              preload={preload}
              loading={preload ? "eager" : "lazy"}
              decoding="async"
              className="object-contain transition-transform duration-700 group-hover:scale-[1.035]"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
            />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#deddd7] p-6 text-center">
            <span className="eyebrow-label text-[#0f5d35]">{category?.name || 'Tarım Ekipmanı'}</span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {isAnkurt ? (
            <Badge variant="forest">
              ANKURT İMALATI
            </Badge>
          ) : (
            <Badge variant="sage">
              {product.brand || 'Model için görüşün'}
            </Badge>
          )}
        </div>
      </Link>

      {hasImage && product.imageKind === 'reference' && <p className="bg-[#f2f0e9] px-4 py-2 text-[11px] leading-4 text-[#464c47]">Temsili kullanım görseli. Güncel ürün fotoğrafını isteyin.</p>}
      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="eyebrow-label mb-2 text-[#0f5d35]">
            {category?.name || product.categoryId}
          </div>

          <h3 className="font-editorial mb-3 line-clamp-2 text-[28px] uppercase leading-[1.02] text-[#1c211d] transition-colors group-hover:text-[#0f5d35]">
            <Link href={`/urunler/${product.slug}/`} prefetch={false}>
              {product.title}
            </Link>
          </h3>

          <p className="mb-5 line-clamp-2 text-sm leading-6 text-[#626760]">
            {product.shortDescription}
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between border-t border-[#1c211d]/10 pt-4">
          <Link 
            href={`/urunler/${product.slug}/`}
            prefetch={false}
            className="inline-flex items-center text-[11px] font-bold uppercase tracking-[.08em] text-[#0f5d35] transition-colors group-hover:text-[#121713]"
          >
            <span>Detayları İncele</span>
            <ArrowUpRight className="w-4 h-4 ml-1 stroke-[1.5]" />
          </Link>
          <span className="rounded-[4px] bg-[#f2f0e9] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.05em] text-[#626760]">
            Fiyat Sorunuz
          </span>
        </div>
      </div>
    </article>
  );
}
