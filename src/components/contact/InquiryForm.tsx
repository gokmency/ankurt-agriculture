'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { trackFormSubmission } from '@/lib/analytics';
import { Product, getActiveProducts } from '@/data/products';
import { Send } from 'lucide-react';
import Link from 'next/link';
import { validateInquiry, buildInquiryMessage } from '@/lib/inquiry';
import { company } from '@/data/company';

export function InquiryForm({ initialProductId = '' }: { initialProductId?: string }) {
  const [products] = useState<Product[]>(() => getActiveProducts());
  const [errors, setErrors] = useState<ReturnType<typeof validateInquiry>>({});
  const [preparedUrl, setPreparedUrl] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = { name: String(data.get('name') || ''), phone: String(data.get('phone') || ''),
      location: String(data.get('location') || ''), message: String(data.get('message') || ''), consent: data.get('privacyConsent') === 'on' };
    const nextErrors = validateInquiry(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      (form.elements.namedItem(Object.keys(nextErrors)[0]) as HTMLElement)?.focus();
      setPreparedUrl('');
      return;
    }
    const productId = String(data.get('product') || '');
    const selectedProduct = products.find(product => product.id === productId);
    const productTitle = selectedProduct?.title || 'Genel bilgi';
    const productUrl = selectedProduct ? `${company.seo.siteUrl}/urunler/${selectedProduct.slug}/` : undefined;
    const url = `${company.contact.whatsappUrl}?text=${encodeURIComponent(buildInquiryMessage(values, productTitle, productUrl))}`;
    setPreparedUrl(url);
    trackFormSubmission(productId || 'general');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form noValidate onSubmit={handleSubmit} onChange={() => setPreparedUrl('')} className="space-y-4">
      {Object.entries(errors).length > 0 && <div role="alert" className="rounded-md border border-[#9c4a28] bg-white p-4 text-sm text-[#7b351c]">
        {Object.entries(errors).map(([field, message]) => <p id={`${field}-error`} key={field}>{message}</p>)}
      </div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-[#0f5d35] uppercase tracking-wider mb-1.5">
            Ad Soyad <span className="text-[#9c4a28]">*</span>
          </label>
          <input
            type="text"
            id="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            name="name"
            required
            autoComplete="name"
            className="w-full px-3.5 py-2.5 border border-[#121713]/15 rounded-[4px] focus:border-[#0f5d35] outline-none bg-[#f2f0e9]/40 text-[#0f5d35] text-sm"
            placeholder="Adınız Soyadınız"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-[#0f5d35] uppercase tracking-wider mb-1.5">
            Telefon Numarası <span className="text-[#9c4a28]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            className="w-full px-3.5 py-2.5 border border-[#121713]/15 rounded-[4px] focus:border-[#0f5d35] outline-none bg-[#f2f0e9]/40 text-[#0f5d35] text-sm"
            placeholder="05XX XXX XX XX"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="location" className="block text-xs font-medium text-[#0f5d35] uppercase tracking-wider mb-1.5">
            Bulunduğunuz İl / İlçe
          </label>
          <input
            type="text"
            id="location"
            name="location"
            autoComplete="address-level2"
            className="w-full px-3.5 py-2.5 border border-[#121713]/15 rounded-[4px] focus:border-[#0f5d35] outline-none bg-[#f2f0e9]/40 text-[#0f5d35] text-sm"
            placeholder="Örn: Serik / Antalya"
          />
        </div>

        <div>
          <label htmlFor="product" className="block text-xs font-medium text-[#0f5d35] uppercase tracking-wider mb-1.5">
            İlgilendiğiniz Ekipman
          </label>
          {/* Native select is intentional for this short marketing inquiry, using OS keyboard and mobile pickers. */}
          <select
            id="product"
            name="product"
            defaultValue={initialProductId}
            className="w-full px-3.5 py-2.5 border border-[#121713]/15 rounded-[4px] focus:border-[#0f5d35] outline-none bg-[#f2f0e9]/40 text-[#0f5d35] text-sm"
          >
            <option value="">Lütfen seçiniz (İsteğe bağlı)</option>
            {products.length > 0 ? (
              products.map(p => (
                <option key={p.id} value={p.id}>{p.title}</option>
              ))
            ) : (
              <>
                <option value="romork">Bahçe Tipi Römork</option>
                <option value="cizel">7&apos;li Çizel Patlatma</option>
                <option value="sepet">Devirmeli Traktör Sepeti</option>
                <option value="diger">Diğer / Genel Bilgi</option>
              </>
            )}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[#0f5d35] uppercase tracking-wider mb-1.5">
          Traktörünüz veya Araziniz Hakkında Not
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full px-3.5 py-2.5 border border-[#121713]/15 rounded-[4px] focus:border-[#0f5d35] outline-none bg-[#f2f0e9]/40 text-[#0f5d35] text-sm resize-y placeholder:text-[#464c47]/50"
          placeholder="Örn: 55 beygir traktörüm var, sera içi için 7'li patlatma sormak istiyorum..."
        ></textarea>
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-[6px] border border-[#121713]/10 bg-[#f2f0e9]/55 p-3.5 text-xs leading-5 text-[#464c47]">
        <input
          type="checkbox"
          id="privacyConsent"
          name="privacyConsent"
          aria-invalid={!!errors.privacyConsent}
          aria-describedby={errors.privacyConsent ? "privacyConsent-error" : undefined}
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#0f5d35]"
        />
        <span>
          İletişim bilgilerimin talebime yanıt verilmesi amacıyla kullanılmasını kabul ediyorum.{' '}
          <Link href="/kvkk/" className="font-bold text-[#0f5d35] underline underline-offset-2">
            KVKK Aydınlatma Metni
          </Link>
        </span>
      </label>

      {preparedUrl && <div role="status" className="rounded-md border border-[#0f5d35]/30 bg-white p-4 text-sm text-[#0f5d35]">
        <p>Mesajınız hazır. WhatsApp açılmadıysa aşağıdaki bağlantıyı kullanın. Mesajı WhatsApp üzerinden siz göndereceksiniz.</p>
        <a href={preparedUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center font-bold underline">Hazır mesajı WhatsApp’ta aç</a>
      </div>}
      <div className="pt-2">
        <Button 
          type="submit" 
          variant="primary" 
          size="md"
          className="w-full"
        >
          <Send className="w-3.5 h-3.5 mr-2 stroke-[1.5]" />
          WhatsApp Mesajını Hazırla
        </Button>
        <p className="mt-2 text-center text-[11px] leading-4 text-[#464c47]/70">
          Bilgileriniz WhatsApp uygulamasında hazır mesaj olarak açılır; göndermeden önce düzenleyebilirsiniz.
        </p>
      </div>
    </form>
  );
}
