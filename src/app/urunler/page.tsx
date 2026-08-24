'use client';

import { Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { getActiveProducts } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import ProductFilter from '@/components/products/ProductFilter';
import { EmptyState } from '@/components/ui/EmptyState';
import { JsonLd, breadcrumbJsonLd } from '@/components/seo/JsonLd';

function ProductListContent() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('category') || searchParams.get('kategori');
  const brandType = searchParams.get('brand') || searchParams.get('marka');
  const searchQuery = (searchParams.get('q') || searchParams.get('ara'))?.toLowerCase();

  const allProducts = getActiveProducts();

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      // Category match
      const matchCategory = !categoryId || categoryId === 'all' || product.categoryId === categoryId;
      
      // Brand match: 'ankurt' | 'other' | 'diger' | 'all'
      let matchBrand = true;
      if (brandType && brandType !== 'all') {
        if (brandType === 'ankurt') {
          matchBrand = product.brandType === 'ankurt';
        } else if (brandType === 'other' || brandType === 'diger') {
          matchBrand = product.brandType === 'other';
        }
      }

      // Search match
      const matchSearch = !searchQuery || 
        product.title.toLowerCase().includes(searchQuery) || 
        product.shortDescription?.toLowerCase().includes(searchQuery) ||
        product.brand?.toLowerCase().includes(searchQuery) ||
        product.description?.toLowerCase().includes(searchQuery);
      
      return matchCategory && matchBrand && matchSearch;
    });
  }, [allProducts, categoryId, brandType, searchQuery]);

  return (
    <div>
      <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-[#000000]/8 text-xs">
        <span className="text-[#242423]">
          Toplam <strong className="text-[#043f2e] text-sm font-medium">{filteredProducts.length}</strong> ekipman listeleniyor
        </span>
        <span className="text-[#242423]/60 hidden sm:inline">
          Serik / Antalya Envanteri
        </span>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyState 
          title="Filtrelere Uygun Ürün Bulunamadı" 
          description="Arama kriterlerinize uygun ekipman listelenemedi. Lütfen filtreleri temizleyerek tüm kataloğa göz atın."
        />
      )}
    </div>
  );
}

export default function ProductsPage() {
  const breadcrumbItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Ürünler', href: '/urunler' }
  ];

  return (
    <main className="min-h-screen bg-[#eef2e3] pt-4 sm:pt-6 pb-12">
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
          <h1 className="font-editorial text-[28px] sm:text-[36px] text-[#043f2e] tracking-[-0.02em] leading-tight">
            Tarım Makinaları Kataloğu
          </h1>
          <span className="text-xs text-[#242423]/70">
            ANKURT İmalatı & Anlaşmalı Markalar
          </span>
        </div>

        <Suspense fallback={<div className="py-8 text-center text-xs text-[#242423]">Katalog yükleniyor...</div>}>
          <ProductFilter />
          <ProductListContent />
        </Suspense>
      </div>
    </main>
  );
}
