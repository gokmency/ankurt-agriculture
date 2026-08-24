// ANKURT TARIM MAKİNALARI — Analytics Event Helpers
// Replace IDs in src/data/company.ts when analytics accounts are ready.

import { company } from '@/data/company';

// Track phone click
export function trackPhoneClick(phoneType: 'main' | 'mobile') {
  if (typeof window === 'undefined') return;
  const label = phoneType === 'main' ? company.contact.phone : company.contact.mobile;

  // GA4
  if (company.analytics.gaId && typeof window.gtag === 'function') {
    window.gtag('event', 'phone_click', {
      event_category: 'contact',
      event_label: label,
      phone_type: phoneType,
    });
  }

  // Google Ads conversion
  if (company.analytics.gadsPhoneConversion && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: company.analytics.gadsPhoneConversion,
    });
  }

  // Meta Pixel
  if (company.analytics.metaPixelId && typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { content_name: label });
  }
}

// Track WhatsApp click
export function trackWhatsAppClick() {
  if (typeof window === 'undefined') return;
  if (company.analytics.gaId && typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'contact',
    });
  }
  if (company.analytics.metaPixelId && typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { content_name: 'WhatsApp' });
  }
}

// Track inquiry form submission
export function trackFormSubmission(productInterest?: string) {
  if (typeof window === 'undefined') return;
  if (company.analytics.gaId && typeof window.gtag === 'function') {
    window.gtag('event', 'form_submission', {
      event_category: 'lead',
      event_label: productInterest || 'general',
    });
  }
  if (company.analytics.metaPixelId && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', { content_name: productInterest || 'general' });
  }
}

// Track product view
export function trackProductView(productTitle: string, productSlug: string) {
  if (typeof window === 'undefined') return;
  if (company.analytics.gaId && typeof window.gtag === 'function') {
    window.gtag('event', 'view_item', {
      event_category: 'product',
      event_label: productTitle,
      product_slug: productSlug,
    });
  }
  if (company.analytics.metaPixelId && typeof window.fbq === 'function') {
    window.fbq('track', 'ViewContent', { content_name: productTitle });
  }
}

// Track Sahibinden outbound click
export function trackSahibindenClick(productTitle: string = 'general') {
  if (typeof window === 'undefined') return;
  if (company.analytics.gaId && typeof window.gtag === 'function') {
    window.gtag('event', 'sahibinden_click', {
      event_category: 'outbound',
      event_label: productTitle,
    });
  }
}

// Track contact page visit
export function trackContactPageVisit() {
  if (typeof window === 'undefined') return;
  if (company.analytics.gaId && typeof window.gtag === 'function') {
    window.gtag('event', 'contact_page_visit', {
      event_category: 'engagement',
    });
  }
}

// Track navigation/directions request
export function trackDirectionsRequest() {
  if (typeof window === 'undefined') return;
  if (company.analytics.gaId && typeof window.gtag === 'function') {
    window.gtag('event', 'directions_request', {
      event_category: 'contact',
    });
  }
}

// Extend Window interface for analytics globals
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
