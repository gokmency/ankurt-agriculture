// ANKURT TARIM MAKİNALARI — Company Data (Single Source of Truth)
// Update this file to change company info across the entire website.

export const company = {
  // Brand
  name: 'ANKURT MÜHENDİSLİK VE TARIM MAKİNALARI',
  nameShort: 'ANKURT',
  nameFull: 'Ankurt Mühendislik ve Tarım Makinaları',
  tagline: 'Toprağınıza ve Traktörünüze Uygun Tarım Ekipmanları',
  description:
    'Antalya Serik Yukarıkocayatak merkezli tarım makineleri imalatı ve satışı. Bahçe tipi römork, 7\'li çizel patlatma, sap toplama, kazayağı, traktör sepeti ve sera ekipmanları.',
  logo: '/images/brand/ankurt_official_logo.png',
  logoPlate: '/images/brand/ankurt_cizel_uzerindeki_logo_referansi.png',
  heroImage: '/images/hero/ankurt-storefront-hero.jpg',
  heroImageVertical: '/images/hero/ankurt-storefront-hero-vertical.jpg',
  workshopImage: '/images/products/ankurt_bahce_romork.jpg',

  // Location
  location: {
    neighborhood: 'Yukarıkocayatak Mah.',
    streetAddress: 'Poyrazlı Kümesi Küme Evler No: 14/Z102',
    district: 'Serik',
    province: 'Antalya',
    postalCode: '07535',
    country: 'Türkiye',
    short: 'Yukarıkocayatak, Serik / Antalya',
    full: 'YUKARIKOCAYATAK MAH. POYRAZLI KÜMESİ KÜME EVLER NO: 14/Z102, Serik / Antalya',
    formatted: 'Yukarıkocayatak Mah., Poyrazlı Kümesi Küme Evler No: 14/Z102, 07535 Serik / Antalya, Türkiye',
    mapEmbedUrl:
      'https://maps.google.com/maps?cid=10618117550608184619&t=&z=16&ie=UTF8&iwloc=&output=embed',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=YUKARIKOCAYATAK%20MAH.%20POYRAZLI%20K%C3%9CMES%C4%B0%20K%C3%9CME%20EVLER%20NO%3A14%2FZ102%20SER%C4%B0K%20ANTALYA',
    businessProfileName: 'Ankurt Mühendislik ve Tarım Makinaları',
    businessProfileUrl: 'https://share.google/HQAy0TeZh42PM1TQH',
  },

  // Contact
  contact: {
    phone: '0242 729 72 56',
    phoneHref: 'tel:+902427297256',
    mobile: '0532 171 96 16',
    mobileHref: 'tel:+905321719616',
    whatsappUrl: 'https://wa.me/905321719616',
    contactPerson: 'Ümit Yaşar Kurt',
    // Email — legacy/unverified, not published until confirmed
    // email: 'kurtziraat@hotmail.com',
  },

  // Social Media
  social: {
    instagram: 'https://www.instagram.com/ankurt_agriculturalmachinery/',
    instagramHandle: '@ankurt_agriculturalmachinery',
    facebook: 'https://www.facebook.com/umit.kurt.54/',
    sahibinden: 'https://ankurttarimmakinalari.sahibinden.com/',
    youtube: '',
    tiktok: '',
  },

  // SEO
  seo: {
    siteUrl: 'https://ankurt.com',
    defaultTitle: 'ANKURT Tarım Makinaları | Serik Antalya İmalat ve Satış',
    titleSuffix: ' | ANKURT Tarım Makinaları',
    defaultDescription:
      'ANKURT Tarım Makinaları — Yukarıkocayatak, Serik / Antalya. Bahçe tipi römork, 7\'li çizel patlatma, kazayağı, sap çıkarma, traktör sepeti ve sera ekipmanları imalatı ve satışı.',
    defaultKeywords: [
      'tarım makinaları',
      'serik tarım makinaları',
      'antalya tarım makinaları',
      'ankurt tarım',
      'ankurt tarım market',
      'bahçe tipi römork',
      'çizel patlatma',
      '7li patlatma',
      'kazayağı',
      'sap çıkarma',
      'pasaf toplama',
      'sera ekipmanları',
      'devirmeli traktör sepeti',
      'yukarıkocayatak tarım',
      'ankurt',
    ],
    ogImage: '/opengraph-image',
    googleSiteVerification: '',
  },

  // Analytics — Replace with actual IDs when ready
  analytics: {
    gaId: 'G-EGSH9FKMWM',
    gadsId: '', // e.g. 'AW-XXXXXXXXXX'
    gadsPhoneConversion: '', // e.g. 'AW-XXXXXXXXXX/XXXXXXXXXXXX'
    metaPixelId: '', // e.g. '1234567890'
  },

  // Footer credit
  digitalPartner: {
    name: 'GRAINZ DIGITAL',
    url: 'https://grainzdigital.com',
  },
} as const;

export type Company = typeof company;
