'use client';

import type { CatalogFilters } from '@/lib/catalog';
import { categories } from '@/data/categories';
import { Search, X } from 'lucide-react';

export default function ProductFilter({ filters, updateFilters }: {
  filters: CatalogFilters;
  updateFilters: (updates: Partial<CatalogFilters>, replace?: boolean) => void;
}) {
  const { category: currentCategory, brand: currentBrand, query: searchValue } = filters;
  const isFiltered = currentCategory !== 'all' || currentBrand !== 'all' || searchValue !== '';

  return (
    <section className="mb-6 space-y-4 rounded-[12px] border border-[#121713]/10 bg-[#fbfaf6] p-4 sm:p-5" aria-label="Ürün filtreleri">
      {/* Search Input & Reset */}
      <div className="flex flex-col sm:flex-row gap-2.5">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Makine adı veya özellik ara (örn. römork, çizel, sepet, diskaro)..."
            value={searchValue}
            onChange={(e) => updateFilters({ query: e.target.value }, true)}
            aria-label="Ürünlerde ara"
            className="h-11 w-full rounded-[6px] border border-[#121713]/15 bg-[#f2f0e9]/40 px-10 text-sm text-[#0f5d35] placeholder:text-[#464c47]/60 focus:border-[#0f5d35] focus:outline-none"
          />
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-[#0f5d35]/60 stroke-[1.5]" />
          {searchValue && (
            <button
              onClick={() => {
                updateFilters({ query: '' }, true);
              }}
              className="absolute right-1 top-1 inline-flex h-9 w-9 items-center justify-center rounded-[4px] text-[#464c47] hover:bg-[#f2f0e9] hover:text-[#0f5d35]"
              aria-label="Aramayı temizle"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {isFiltered && (
          <button
            onClick={() => {
              updateFilters({ category: 'all', brand: 'all', query: '' });
            }}
            className="flex h-11 shrink-0 items-center justify-center rounded-[6px] border border-[#121713]/15 px-4 text-xs font-bold text-[#0f5d35] transition-colors hover:bg-[#f2f0e9]"
          >
            <X className="w-3.5 h-3.5 mr-1 stroke-[1.5]" /> Sıfırla
          </button>
        )}
      </div>

      <div className="border-t border-[#121713]/8 pt-3">
        <span className="eyebrow-label mb-2 block text-[#626760]">Üretim türü</span>
        <div className="flex flex-wrap gap-2">
        <button
          onClick={() => updateFilters({ category: 'all', brand: 'all' })}
          aria-pressed={currentCategory === 'all' && currentBrand === 'all'}
          className={`min-h-10 rounded-[6px] px-4 text-xs font-bold transition-colors ${
            currentCategory === 'all' && currentBrand === 'all'
              ? 'bg-[#0f5d35] text-[#fbfaf6]'
              : 'bg-[#f2f0e9] text-[#0f5d35] hover:bg-[#f2f0e9]/80'
          }`}
        >
          Tüm Ekipmanlar
        </button>

        <button
          onClick={() => updateFilters({ brand: 'ankurt' })}
          aria-pressed={currentBrand === 'ankurt'}
          className={`min-h-10 rounded-[6px] px-4 text-xs font-bold transition-colors ${
            currentBrand === 'ankurt'
              ? 'bg-[#e7b23f] text-[#121713]'
              : 'bg-[#f2f0e9] text-[#0f5d35] hover:bg-[#f2f0e9]/80'
          }`}
        >
          ANKURT İmalatı
        </button>

        <button
          onClick={() => updateFilters({ brand: 'diger' })}
          aria-pressed={currentBrand === 'diger' || currentBrand === 'other'}
          className={`min-h-10 rounded-[6px] px-4 text-xs font-bold transition-colors ${
            currentBrand === 'diger' || currentBrand === 'other'
              ? 'bg-[#0f5d35] text-[#fbfaf6]'
              : 'bg-[#f2f0e9] text-[#0f5d35] hover:bg-[#f2f0e9]/80'
          }`}
        >
          Diğer Ürünler
        </button>
        </div>
      </div>

      <div>
        <span className="eyebrow-label mb-2 block text-[#626760]">Ürün grubu</span>
        <div className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {categories.map((cat) => {
            const isActive = currentCategory === cat.slug || currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => updateFilters({ category: cat.slug })}
                aria-pressed={isActive}
                className={`min-h-10 shrink-0 snap-start rounded-[6px] px-4 text-xs font-bold transition-colors ${
                  isActive
                    ? 'bg-[#e7b23f] text-[#121713]'
                    : 'bg-[#f2f0e9] text-[#0f5d35] hover:bg-[#deddd7]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
