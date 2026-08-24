import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyMobileBar } from '@/components/layout/StickyMobileBar';
import { company } from '@/data/company';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.seo.siteUrl),
  title: {
    template: `%s | ${company.name}`,
    default: `${company.name} | ${company.tagline}`,
  },
  description: company.description,
  keywords: company.seo.defaultKeywords as unknown as string[],
  openGraph: {
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
    url: company.seo.siteUrl,
    siteName: company.name,
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${inter.variable} font-sans`} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col bg-[#eef2e3] text-[#043f2e] antialiased selection:bg-[#c8f169] selection:text-[#000000]">
        <Header />
        <div className="flex-1 pt-[72px] sm:pt-20 lg:pt-[106px] pb-16 md:pb-0">
          {children}
        </div>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
