import { MetadataRoute } from 'next';
import { company } from '@/data/company';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${company.seo.siteUrl}/sitemap.xml`,
    host: company.seo.siteUrl,
  };
}
