import type { MetadataRoute } from 'next';
import { company } from '@/data/company';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.nameFull} — ${company.tagline}`,
    short_name: company.nameShort,
    description: company.seo.defaultDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#f2f0e9',
    theme_color: '#0f5d35',
    lang: 'tr',
    categories: ['business', 'agriculture'],
    icons: [
      { src: '/icon', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
