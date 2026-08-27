import type { Metadata } from 'next';
import { company } from '@/data/company';

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  index?: boolean;
  keywords?: string[];
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

export function absoluteUrl(path = '/') {
  return new URL(path, `${company.seo.siteUrl}/`).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  type = 'website',
  index = true,
  keywords,
  image,
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const socialImage = absoluteUrl(image || company.seo.ogImage);
  const socialTitle = title.includes('ANKURT')
    ? title
    : `${title} | ANKURT Tarım Makinaları`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    robots: {
      index,
      follow: true,
      googleBot: {
        index,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: company.nameFull,
      locale: 'tr_TR',
      type,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${company.nameFull} — ${company.tagline}`,
        },
      ],
      ...(type === 'article'
        ? { publishedTime, modifiedTime, authors: [company.nameFull] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [socialImage],
    },
  };
}
