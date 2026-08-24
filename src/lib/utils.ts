// ANKURT TARIM MAKİNALARI — Utility Functions

import { type ClassValue, clsx } from 'clsx';

// Simple clsx implementation (no external dep needed)
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

// Format phone number for display
export function formatPhone(phone: string): string {
  return phone;
}

// Generate phone href
export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, '').replace(/^\(0\)/, '+90')}`;
}

// Truncate text with ellipsis
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

// Simple slug generator (for reference, products already have slugs)
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
