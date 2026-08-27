import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Tarım Makinaları ve Ekipman Kataloğu',
  description: 'ANKURT imalatı römork, çizel, traktör sepeti ve sera ekipmanları ile seçili diskaro, rotovatör ve tarım makinalarını inceleyin.',
  path: '/urunler/',
  keywords: [
    'tarım makinaları kataloğu',
    'tarım ekipmanları',
    'Serik tarım makinaları',
    'Antalya tarım ekipmanları',
  ],
});

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
