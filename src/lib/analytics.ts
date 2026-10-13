// ANKURT TARIM MAKİNALARI — Analytics Event Helpers
// Replace IDs in src/data/company.ts when analytics accounts are ready.

import { company } from '@/data/company';

// Exclude search strings and form fields from measurement context.
function eventContext() {
  const page = window.location.pathname;
  const product = page.match(/^\/urunler\/(?!kategori\/)([^/]+)\/$/);
  return { page_path: page, ...(product ? { product_slug: product[1] } : {}) };
}

// Track phone click
export function trackPhoneClick(phoneType: 'main' | 'mobile') {
  if (typeof window === 'undefined') return;
  try { if (localStorage.getItem('ankurt:analytics-consent:v1') !== 'accepted') return; } catch { return; }
  const label = phoneType === 'main' ? company.contact.phone : company.contact.mobile;

  // GA4
  if (company.analytics.gaId && typeof window.gtag === 'function') {
    window.gtag('event', 'phone_click', {
      ...eventContext(),
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
export function trackWhatsAppClick(context: string = 'general') {
  if (typeof window === 'undefined') return;
  try { if (localStorage.getItem('ankurt:analytics-consent:v1') !== 'accepted') return; } catch { return; }
  if (company.analytics.gaId && typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      ...eventContext(),
      event_category: 'contact',
      ...(context !== 'general' ? { product_slug: context } : {}),
    });
  }
  if (company.analytics.metaPixelId && typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { content_name: 'WhatsApp' });
  }
}

// Track inquiry form submission
export function trackFormSubmission(productInterest?: string) {
  if (typeof window === 'undefined') return;
  try { if (localStorage.getItem('ankurt:analytics-consent:v1') !== 'accepted') return; } catch { return; }
  if (company.analytics.gaId && typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_handoff', {
      ...eventContext(),
      event_category: 'contact_intent',
      event_label: productInterest || 'general',
    });
  }
  if (company.analytics.metaPixelId && typeof window.fbq === 'function') {
    window.fbq('trackCustom', 'WhatsAppHandoff', { content_name: productInterest || 'general' });
  }
}

// Track product view
export function trackProductView(productTitle: string, productSlug: string) {
  if (typeof window === 'undefined') return;
  try { if (localStorage.getItem('ankurt:analytics-consent:v1') !== 'accepted') return; } catch { return; }
  if (company.analytics.gaId && typeof window.gtag === 'function') {
    window.gtag('event', 'view_item', {
      ...eventContext(),
      event_category: 'product',
      event_label: productTitle,
      items: [{ item_id: productSlug, item_name: productTitle }],
    });
  }
  if (company.analytics.metaPixelId && typeof window.fbq === 'function') {
    window.fbq('track', 'ViewContent', { content_name: productTitle });
  }
}

// Track Sahibinden outbound click
export function trackSahibindenClick(productTitle: string = 'general') {
  if (typeof window === 'undefined') return;
  try { if (localStorage.getItem('ankurt:analytics-consent:v1') !== 'accepted') return; } catch { return; }
  if (company.analytics.gaId && typeof window.gtag === 'function') {
    window.gtag('event', 'sahibinden_click', {
      ...eventContext(),
      event_category: 'outbound',
      event_label: productTitle,
    });
  }
}

// Track contact page visit
export function trackContactPageVisit() {
  if (typeof window === 'undefined') return;
  try { if (localStorage.getItem('ankurt:analytics-consent:v1') !== 'accepted') return; } catch { return; }
  if (company.analytics.gaId && typeof window.gtag === 'function') {
    window.gtag('event', 'contact_page_visit', {
      ...eventContext(),
      event_category: 'engagement',
    });
  }
}

// Track navigation/directions request
export function trackDirectionsRequest() {
  if (typeof window === 'undefined') return;
  try { if (localStorage.getItem('ankurt:analytics-consent:v1') !== 'accepted') return; } catch { return; }
  if (company.analytics.gaId && typeof window.gtag === 'function') {
    window.gtag('event', 'directions_request', {
      ...eventContext(),
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
