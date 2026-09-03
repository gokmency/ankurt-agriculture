// ANKURT TARIM MAKİNALARI — Guide / Article Data
// 30 Comprehensive Technical Guides for /rehber section.
import guidesJson from './guidesData.json';

export interface Guide {
  id: string;
  order: number;
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  shortDescription: string;
  focusKeyword?: string;
  secondaryKeywords?: string[];
  searchIntent?: string;
  category: string;
  readingTime: string;
  publishedDate: string;
  relatedProductSlugs: string[];
  content: string;
}

export const guides: Guide[] = guidesJson as Guide[];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuides(): Guide[] {
  return [...guides].sort((a, b) => a.order - b.order);
}

export function getGuidesByCategory(category: string): Guide[] {
  if (!category || category === 'Tümü') return getAllGuides();
  return guides.filter((g) => g.category === category);
}

export function getGuideCategories(): string[] {
  const cats = new Set(guides.map((g) => g.category));
  return ['Tümü', ...Array.from(cats)];
}

export function getFeaturedGuide(): Guide {
  return guides[0];
}
