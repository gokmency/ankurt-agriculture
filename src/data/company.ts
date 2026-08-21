// ANKURT TARIM MAKİNALARI — Company Data (Single Source of Truth)
// Update this file to change company info across the entire website.

export const company = {
  // Brand
  name: 'ANKURT TARIM MAKİNALARI',
  nameShort: 'ANKURT',
  nameFull: 'Ankurt Tarım Makinaları',
  tagline: 'Tarla, Bahçe ve Sera İçin Doğru Ekipman',
  description:
    'Serik / Antalya merkezli tarım makineleri ve ekipmanları. Römork, çizel, kazayağı, çapa, sap çıkarma, traktör sepeti ve sera ekipmanları.',

  // Location
  location: {
    neighborhood: 'Yukarıkocayatak',
    district: 'Serik',
    province: 'Antalya',
    postalCode: '07535',
    country: 'Türkiye',
    full: 'Yukarıkocayatak, Serik / Antalya',
    formatted: 'Yukarıkocayatak, 07535 Serik/Antalya, Türkiye',
    // Map embed placeholder — replace with actual Google Maps embed URL
    mapEmbedUrl: '',
    // Google Maps directions link placeholder
    directionsUrl:
      'https://www.google.com/maps/search/Ankurt+Tarım+Makinaları+Yukarıkocayatak+Serik+Antalya',
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
    // YouTube — architecture ready, no verified active channel yet
    youtube: '',
  },

  // SEO
  seo: {
    siteUrl: 'https://ankurttarim.com', // Placeholder — update with actual domain
    defaultTitle: 'ANKURT Tarım Makinaları | Serik / Antalya',
    titleSuffix: ' | ANKURT Tarım Makinaları',
    defaultDescription:
      'ANKURT Tarım Makinaları — Serik / Antalya. Bahçe tipi römork, çizel, kazayağı, çapa, sap çıkarma, traktör sepeti ve sera ekipmanları. Tarla, bahçe ve sera için doğru ekipman.',
    defaultKeywords: [
      'tarım makinaları',
      'serik tarım makinaları',
      'antalya tarım makinaları',
      'bahçe tipi römork',
      'çizel patlatma',
      'kazayağı',
      'çapa makinesi',
      'sera ekipmanları',
      'traktör sepeti',
      'ankurt',
    ],
    ogImage: '/og-image.jpg',
  },

  // Analytics — Replace with actual IDs when ready
  analytics: {
    gaId: '', // e.g. 'G-XXXXXXXXXX'
    gadsId: '', // e.g. 'AW-XXXXXXXXXX'
    gadsPhoneConversion: '', // e.g. 'AW-XXXXXXXXXX/XXXXXXXXXXXX'
    metaPixelId: '', // e.g. '1234567890'
  },

  // Footer credit
  digitalPartner: {
    name: 'GRAINZ DIGITAL',
    url: 'https://grainz.digital',
  },
} as const;

export type Company = typeof company;
