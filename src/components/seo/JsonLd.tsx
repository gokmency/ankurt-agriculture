import React from 'react';
import { company } from '@/data/company';
import { Product } from '@/data/products';

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    image: `${company.seo.siteUrl}/og-image.jpg`,
    '@id': company.seo.siteUrl,
    url: company.seo.siteUrl,
    telephone: company.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.location.neighborhood,
      addressLocality: company.location.district,
      addressRegion: company.location.province,
      postalCode: company.location.postalCode,
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.9387,
      longitude: 31.0267
    }
  };
}

export function productJsonLd(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: product.images?.[0] ? `${company.seo.siteUrl}${product.images[0]}` : undefined,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: product.brand || company.nameShort
    }
  };
}

export function breadcrumbJsonLd(items: { label: string; href?: string }[]) {
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
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.href ? `${company.seo.siteUrl}${item.href}` : undefined
      }))
    ]
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}
