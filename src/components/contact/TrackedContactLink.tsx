'use client';
import type { AnchorHTMLAttributes } from 'react';
import { trackPhoneClick, trackWhatsAppClick, trackSahibindenClick, trackDirectionsRequest } from '@/lib/analytics';
export function TrackedContactLink({ context = 'general', ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { context?: string }) {
  return <a {...props} onClick={() => {
    const href = props.href || '';
    if (href.startsWith('tel:')) trackPhoneClick(href.includes('90532') ? 'mobile' : 'main');
    else if (href.includes('wa.me/')) trackWhatsAppClick(context);
    else if (href.includes('sahibinden.com')) trackSahibindenClick(context);
    else if (href.includes('maps')) trackDirectionsRequest();
  }} />;
}
