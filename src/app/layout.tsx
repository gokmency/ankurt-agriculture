import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, Manrope } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyMobileBar } from '@/components/layout/StickyMobileBar';
import { company } from '@/data/company';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  weight: ['600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(company.seo.siteUrl),
  title: {
    template: `%s | ANKURT Tarım Makinaları`,
    default: `${company.name} | ${company.tagline}`,
  },
  description: company.seo.defaultDescription,
  keywords: company.seo.defaultKeywords as unknown as string[],
  applicationName: company.nameFull,
  authors: [{ name: company.nameFull, url: company.seo.siteUrl }],
  creator: company.nameFull,
  publisher: company.nameFull,
  category: 'Tarım Makinaları',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${company.name} | ${company.tagline}`,
    description: company.seo.defaultDescription,
    url: company.seo.siteUrl,
    siteName: company.nameFull,
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.name} | ${company.tagline}`,
    description: company.seo.defaultDescription,
  },
  verification: company.seo.googleSiteVerification
    ? { google: company.seo.googleSiteVerification }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: '#0f5d35',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${barlowCondensed.variable} ${manrope.variable} font-sans`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {company.analytics.gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${company.analytics.gaId}`}
              strategy="lazyOnload"
            />
            <Script id="google-tag-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${company.analytics.gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-[#f2f0e9] text-[#1c211d] antialiased" suppressHydrationWarning>
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-[6px] bg-[#e7b23f] px-4 py-3 text-xs font-bold uppercase tracking-[.08em] text-[#121713] transition-transform focus:translate-y-0"
        >
          Ana içeriğe geç
        </a>
        <Header />
        <div id="main-content" tabIndex={-1} className="flex-1 pt-[72px] pb-16 md:pb-0">
          {children}
        </div>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
