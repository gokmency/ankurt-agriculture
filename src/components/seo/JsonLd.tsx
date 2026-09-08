import React from 'react';
import { company } from '@/data/company';
import { Product } from '@/data/products';

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

function localBusinessNode() {
  const sameAs = [
    company.location.businessProfileUrl,
    company.social.instagram,
    company.social.facebook,
    company.social.sahibinden,
  ].filter(Boolean);

  return {
    '@type': ['LocalBusiness', 'Store'],
    name: company.name,
    image: `${company.seo.siteUrl}${company.heroImage}`,
    logo: `${company.seo.siteUrl}${company.logo}`,
    '@id': `${company.seo.siteUrl}/#business`,
    url: company.seo.siteUrl,
    hasMap: company.location.businessProfileUrl,
    telephone: '+902427297256',
    priceRange: '₺₺',
    currenciesAccepted: 'TRY',
    paymentAccepted: 'Nakit, Banka Havalesi, Kredi Kartı',
    description: company.seo.defaultDescription,
    sameAs,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.9388,
      longitude: 31.0256,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Antalya' },
      { '@type': 'AdministrativeArea', name: 'Serik' },
      { '@type': 'Country', name: 'Türkiye' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${company.location.neighborhood} ${company.location.streetAddress}`,
      addressLocality: company.location.district,
      addressRegion: company.location.province,
      postalCode: company.location.postalCode,
      addressCountry: 'TR',
    },
  };
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    ...localBusinessNode(),
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${company.seo.siteUrl}/#website`,
        url: company.seo.siteUrl,
        name: company.nameFull,
        alternateName: ['ANKURT', 'Ankurt Tarım', 'Ankurt Tarım Makinaları', 'Ankurt Tarım Market'],
        description: company.seo.defaultDescription,
        inLanguage: 'tr-TR',
        publisher: { '@id': `${company.seo.siteUrl}/#business` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${company.seo.siteUrl}/urunler/?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      localBusinessNode(),
    ],
  };
}

export function productJsonLd(product: Product) {
  const images = (product.images || []).map((image) => `${company.seo.siteUrl}${image}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    '@id': `${company.seo.siteUrl}/urunler/${product.slug}/#product`,
    url: `${company.seo.siteUrl}/urunler/${product.slug}/`,
    sku: product.id,
    image: images.length ? images : [`${company.seo.siteUrl}${company.heroImage}`],
    description: product.description,
    category: product.categoryId,
    brand: {
      '@type': 'Brand',
      name: product.brand || company.nameShort,
    },
    offers: {
      '@type': 'Offer',
      url: `${company.seo.siteUrl}/urunler/${product.slug}/`,
      priceCurrency: 'TRY',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: company.nameFull,
        url: company.seo.siteUrl,
      },
    },
  };
}

export function breadcrumbJsonLd(items: { label: string; href?: string }[]) {
  const normalizedItems = items.filter(
    (item, index) => !(index === 0 && (item.href === '/' || item.label === 'Ana Sayfa'))
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: `${company.seo.siteUrl}/`
      },
      ...normalizedItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.href ? new URL(item.href, `${company.seo.siteUrl}/`).toString() : undefined,
      }))
    ],
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  publishedDate: string;
  image?: string;
}) {
  const imageUrl = article.image
    ? (article.image.startsWith('http') ? article.image : `${company.seo.siteUrl}${article.image}`)
    : `${company.seo.siteUrl}${company.heroImage}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${company.seo.siteUrl}/rehber/${article.slug}/#article`,
    mainEntityOfPage: `${company.seo.siteUrl}/rehber/${article.slug}/`,
    headline: article.title,
    description: article.description,
    image: [imageUrl],
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    inLanguage: 'tr-TR',
    author: {
      '@type': 'Organization',
      name: company.nameFull,
      url: company.seo.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: company.nameFull,
      logo: {
        '@type': 'ImageObject',
        url: `${company.seo.siteUrl}${company.logo}`,
      },
    },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
