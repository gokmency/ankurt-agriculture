'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { categories } from '@/data/categories';
import { Search, X } from 'lucide-react';

export default function ProductFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('kategori') || searchParams.get('category') || 'all';
  const currentBrand = searchParams.get('marka') || searchParams.get('brand') || 'all';
  const currentSearch = searchParams.get('ara') || searchParams.get('q') || '';

  const [searchValue, setSearchValue] = useState(currentSearch);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue !== currentSearch) {
        updateFilters({ q: searchValue || null });
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchValue, currentSearch]);

  const updateFilters = useCallback((updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    
    Object.entries(updates).forEach(([key, value]) => {
      if (key === 'kategori' || key === 'category') {
        params.delete('kategori');
        params.delete('category');
        if (value && value !== 'all') params.set('kategori', value);
      } else if (key === 'marka' || key === 'brand') {
        params.delete('marka');
        params.delete('brand');
        if (value && value !== 'all') params.set('marka', value);
      } else if (key === 'ara' || key === 'q') {
        params.delete('ara');
        params.delete('q');
        if (value && value.trim()) params.set('q', value.trim());
      } else {
        if (value === null || value === 'all') {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      }
    });

    const newUrl = `${pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    router.push(newUrl, { scroll: false });
  }, [searchParams, pathname, router]);

  const isFiltered = currentCategory !== 'all' || currentBrand !== 'all' || searchValue !== '';

  return (
    <div className="bg-[#fcfcfc] p-4 sm:p-5 rounded-[16px] border border-[#000000]/10 mb-6 space-y-4">
      {/* Search Input & Reset */}
      <div className="flex flex-col sm:flex-row gap-2.5">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Makine adı veya özellik ara (örn. römork, çizel, sepet, diskaro)..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full px-3.5 py-2 pl-9 pr-8 border border-[#000000]/15 rounded-[4px] focus:outline-none focus:border-[#043f2e] bg-[#eef2e3]/40 text-[#043f2e] text-xs sm:text-sm placeholder:text-[#242423]/60"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#043f2e]/60 stroke-[1.5]" />
          {searchValue && (
            <button
              onClick={() => {
                setSearchValue('');
                updateFilters({ q: null });
              }}
              className="absolute right-2.5 top-2 p-1 text-[#242423] hover:text-[#043f2e]"
              aria-label="Aramayı temizle"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {isFiltered && (
          <button
            onClick={() => {
              setSearchValue('');
              router.push(pathname, { scroll: false });
            }}
            className="px-3 py-2 text-xs font-medium text-[#043f2e] hover:bg-[#eef2e3] rounded-[4px] border border-[#000000]/15 transition-colors flex items-center justify-center shrink-0"
          >
            <X className="w-3.5 h-3.5 mr-1 stroke-[1.5]" /> Sıfırla
          </button>
        )}
      </div>

      {/* Compact Quick Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#000000]/8">
        <button
          onClick={() => updateFilters({ kategori: 'all', marka: 'all' })}
          className={`px-3 py-1 rounded-[4px] text-xs font-medium transition-all ${
            currentCategory === 'all' && currentBrand === 'all'
              ? 'bg-[#043f2e] text-[#fcfcfc]'
              : 'bg-[#eef2e3] text-[#043f2e] hover:bg-[#eef2e3]/80'
          }`}
        >
          Tüm Ekipmanlar
        </button>

        <button
          onClick={() => updateFilters({ marka: 'ankurt' })}
          className={`px-3 py-1 rounded-[4px] text-xs font-medium transition-all ${
            currentBrand === 'ankurt'
              ? 'bg-[#c8f169] text-[#000000]'
              : 'bg-[#eef2e3] text-[#043f2e] hover:bg-[#eef2e3]/80'
          }`}
        >
          ANKURT İmalatı
        </button>

        <button
          onClick={() => updateFilters({ marka: 'diger' })}
          className={`px-3 py-1 rounded-[4px] text-xs font-medium transition-all ${
            currentBrand === 'diger' || currentBrand === 'other'
              ? 'bg-[#043f2e] text-[#fcfcfc]'
              : 'bg-[#eef2e3] text-[#043f2e] hover:bg-[#eef2e3]/80'
          }`}
        >
          Diğer Markalar
        </button>

        <span className="hidden sm:inline-block h-4 w-px bg-[#000000]/15 mx-1" />

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => updateFilters({ kategori: cat.slug })}
            className={`px-3 py-1 rounded-[4px] text-xs font-medium transition-all ${
              currentCategory === cat.slug || currentCategory === cat.id
                ? 'bg-[#c8f169] text-[#000000]'
                : 'bg-[#eef2e3] text-[#043f2e] hover:bg-[#eef2e3]/80'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
