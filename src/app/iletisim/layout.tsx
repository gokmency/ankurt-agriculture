import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'İletişim, Teklif ve Atölye Konumu',
  description: 'ANKURT Tarım Makinaları Serik atölyesine ulaşın; tarım ekipmanları için teknik bilgi, güncel fiyat ve yol tarifi alın.',
  path: '/iletisim/',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
