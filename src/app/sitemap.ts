import { MetadataRoute } from 'next';
import { company } from '@/data/company';
import { getActiveProducts } from '@/data/products';
import { getAllGuides } from '@/data/guides';
import { categories } from '@/data/categories';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = company.seo.siteUrl;
  const buildDate = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 1,
      images: [`${baseUrl}${company.heroImage}`],
    },
    {
      url: `${baseUrl}/urunler/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hakkimizda/`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iletisim/`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rehber/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/site-haritasi/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/urunler/kategori/${category.slug}/`,
    lastModified: buildDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const products = getActiveProducts();
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/urunler/${product.slug}/`,
    lastModified: buildDate,
    changeFrequency: 'weekly',
    priority: 0.8,
    images: (product.images || []).map((image) => `${baseUrl}${image}`),
  }));

  const guides = getAllGuides();
  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => {
    const relatedProduct = guide.relatedProductSlugs?.[0]
      ? products.find((p) => p.slug === guide.relatedProductSlugs[0])
      : undefined;
    const guideImage = relatedProduct?.images?.[0] || company.heroImage;

    return {
      url: `${baseUrl}/rehber/${guide.slug}/`,
      lastModified: new Date(`${guide.publishedDate}T00:00:00+03:00`),
      changeFrequency: 'weekly',
      priority: 0.7,
      images: [`${baseUrl}${guideImage}`],
    };
  });

  return [...staticPages, ...categoryPages, ...productPages, ...guidePages];
}
