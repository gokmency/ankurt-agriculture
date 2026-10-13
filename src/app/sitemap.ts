import { MetadataRoute } from 'next';
import { company } from '@/data/company';
import { getActiveProducts } from '@/data/products';
import { getAllGuides } from '@/data/guides';
import { categories } from '@/data/categories';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = company.seo.siteUrl;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: 'weekly',
      priority: 1,
      images: [`${baseUrl}${company.heroImage}`],
    },
    {
      url: `${baseUrl}/urunler/`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hakkimizda/`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iletisim/`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rehber/`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/site-haritasi/`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/urunler/kategori/${category.slug}/`,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const products = getActiveProducts();
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/urunler/${product.slug}/`,
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
      lastModified: new Date(`${(guide.updatedDate || guide.publishedDate)}T00:00:00+03:00`),
      changeFrequency: 'weekly',
      priority: 0.7,
      images: [`${baseUrl}${guideImage}`],
    };
  });

  return [...staticPages, ...categoryPages, ...productPages, ...guidePages];
}
