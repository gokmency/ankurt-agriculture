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
  weight: ['500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(company.seo.siteUrl),
  title: {
    template: `%s | ${company.name}`,
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

// Some browser security extensions add these attributes before React hydrates.
// Remove only the known extension-owned attributes; do not suppress genuine
// application hydration errors.
const extensionAttributeGuard = `
(() => {
  const isExtensionAttribute = (name) =>
    name === 'bis_skin_checked' ||
    name === 'bis_register';

  const cleanElement = (element) => {
    for (const attribute of Array.from(element.attributes || [])) {
      if (isExtensionAttribute(attribute.name)) {
        element.removeAttribute(attribute.name);
      }
    }
  };

  cleanElement(document.documentElement);

  const observer = new MutationObserver((records) => {
    for (const record of records) {
      if (
        record.type === 'attributes' &&
        record.attributeName &&
        isExtensionAttribute(record.attributeName)
      ) {
        record.target.removeAttribute(record.attributeName);
      }

      if (record.type === 'childList') {
        for (const node of record.addedNodes) {
          if (!(node instanceof Element)) continue;
          cleanElement(node);
          for (const element of node.querySelectorAll('*')) cleanElement(element);
        }
      }
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ['bis_skin_checked', 'bis_register'],
  });

  window.addEventListener('DOMContentLoaded', () => {
    for (const element of document.querySelectorAll('*')) {
      cleanElement(element);
    }
  }, { once: true });
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${barlowCondensed.variable} ${manrope.variable} font-sans`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <Script
          id="extension-attribute-guard"
          strategy="beforeInteractive"
        >
          {extensionAttributeGuard}
        </Script>
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
