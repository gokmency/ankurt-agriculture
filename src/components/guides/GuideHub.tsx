'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowUpRight, Clock, Calendar, BookOpen, X, Sparkles } from 'lucide-react';
import { matchesSearch, formatDate } from '@/lib/search';
import { Guide } from '@/data/guides';

interface GuideHubProps {
  initialGuides: Guide[];
  categories: string[];
}

export function GuideHub({ initialGuides, categories }: GuideHubProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredGuides = useMemo(() => {
    return initialGuides.filter((guide) => {
      const matchesCategory =
        selectedCategory === 'Tümü' || guide.category === selectedCategory;

      if (!searchQuery.trim()) return matchesCategory;
      const matchesQuery = matchesSearch([guide.title, guide.shortDescription, guide.focusKeyword, ...(guide.secondaryKeywords || [])].join(' '), searchQuery);

      return matchesCategory && matchesQuery;
    });
  }, [initialGuides, selectedCategory, searchQuery]);

  const featuredGuide = initialGuides[0];

  return (
    <div className="space-y-10">
      {/* Search & Filter Bar */}
      <div className="rounded-[16px] border border-[#121713]/10 bg-[#fbfaf6] p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#121713]/40" />
            <input
              type="search"
              aria-label="Rehberlerde ara"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rehberlerde ara (ör. römork, çizel, sera, rotovatör)..."
              className="w-full rounded-[8px] border border-[#121713]/15 bg-[#f2f0e9] py-2.5 pl-10 pr-10 text-sm text-[#121713] placeholder-[#121713]/45 transition-colors focus:border-[#0f5d35] focus:bg-white focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Rehber aramasını temizle"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#121713]/40 hover:text-[#121713]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Results Count */}
          <div role="status" className="text-xs font-semibold uppercase tracking-[.06em] text-[#626760]">
            {filteredGuides.length} rehber listeleniyor
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#121713]/8 pt-4">
          <span className="mr-2 text-xs font-bold uppercase tracking-[.08em] text-[#121713]/60 hidden sm:inline-block">
            Kategoriler:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={isActive}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-[#0f5d35] text-white shadow-sm'
                    : 'bg-[#f2f0e9] text-[#121713]/75 hover:bg-[#e7b23f]/20 hover:text-[#121713]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Article (Shown when no search query and 'Tümü' selected) */}
      {!searchQuery && selectedCategory === 'Tümü' && featuredGuide && (
        <div className="group relative overflow-hidden rounded-[16px] border border-white/20 bg-[#121713] text-white p-6 sm:p-10 shadow-xl transition-all hover:border-[#e7b23f]/50">
          <div className="engineering-grid absolute inset-0 opacity-20 pointer-events-none" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e7b23f] px-3 py-1 text-[11px] font-bold uppercase tracking-[.08em] text-[#121713]">
                  <Sparkles className="h-3 w-3" /> Öne Çıkan Rehber
                </span>
                <span className="text-xs text-white/50">•</span>
                <span className="text-xs text-white/70">{featuredGuide.category}</span>
                <span className="text-xs text-white/50">•</span>
                <span className="inline-flex items-center gap-1 text-xs text-white/70">
                  <Clock className="h-3 w-3" /> {featuredGuide.readingTime}
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl uppercase leading-tight text-white group-hover:text-[#e7b23f] transition-colors">
                <Link href={`/rehber/${featuredGuide.slug}/`}>
                  {featuredGuide.title}
                </Link>
              </h3>

              <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-white/75">
                {featuredGuide.shortDescription}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={`/rehber/${featuredGuide.slug}/`}
                  className="inline-flex items-center gap-2 rounded-[6px] bg-[#0f5d35] px-5 py-2.5 text-xs font-bold uppercase tracking-[.08em] text-white hover:bg-[#184f31] transition-colors"
                >
                  Kapsamlı Rehberi Oku <ArrowUpRight className="h-4 w-4" />
                </Link>
                {featuredGuide.focusKeyword && (
                  <span className="text-xs text-white/50 italic">
                    Odak: #{featuredGuide.focusKeyword}
                  </span>
                )}
              </div>
            </div>

            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <div className="rounded-[12px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center max-w-[280px]">
                <BookOpen className="mx-auto h-10 w-10 text-[#e7b23f] mb-3" />
                <div className="text-xs font-bold uppercase tracking-[.08em] text-white">
                  Serik / Antalya Sahası
                </div>
                <div className="mt-1 text-xs text-white/60">
                  Toprak, sera ve bahçe koşullarına göre ekipman seçimine yardımcı olan genel bilgiler sunar.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Guides Grid */}
      {filteredGuides.length === 0 ? (
        <div className="rounded-[16px] border border-[#121713]/10 bg-[#fbfaf6] p-12 text-center">
          <BookOpen className="mx-auto h-12 w-12 text-[#121713]/30 mb-3" />
          <h3 className="font-editorial text-2xl uppercase text-[#121713]">
            Aramanızla Eşleşen Rehber Bulunamadı
          </h3>
          <p className="mt-2 text-sm text-[#626760] max-w-md mx-auto">
            Farklı bir anahtar kelime deneyebilir veya kategori filtrelerini sıfırlayabilirsiniz.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('Tümü');
              setSearchQuery('');
            }}
            className="mt-5 rounded-[6px] bg-[#0f5d35] px-5 py-2 text-xs font-bold uppercase tracking-[.08em] text-white hover:bg-[#184f31]"
          >
            Tüm Rehberleri Göster
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <article
              key={guide.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-[12px] border border-[#121713]/12 bg-[#fbfaf6] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0f5d35]/40 hover:shadow-md"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 text-xs text-[#626760] mb-3">
                  <span className="rounded-[4px] bg-[#0f5d35]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[.06em] text-[#0f5d35]">
                    {guide.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#626760]">
                    <Clock className="h-3 w-3" /> {guide.readingTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-xl sm:text-2xl uppercase leading-[1.08] text-[#1c211d] transition-colors group-hover:text-[#0f5d35] mb-3">
                  <Link href={`/rehber/${guide.slug}/`}>
                    {guide.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm leading-relaxed text-[#464c47] line-clamp-3 mb-4">
                  {guide.shortDescription}
                </p>
              </div>

              {/* Card Footer */}
              <div className="border-t border-[#121713]/8 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#626760]/70">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(guide.updatedDate || guide.publishedDate)}</span>
                  </div>
                  <Link
                    href={`/rehber/${guide.slug}/`}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[.06em] text-[#0f5d35] group-hover:text-[#121713] transition-colors"
                  >
                    <span>İncele</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
