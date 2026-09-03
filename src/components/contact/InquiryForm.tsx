'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { trackFormSubmission } from '@/lib/analytics';
import { Product, getActiveProducts } from '@/data/products';
import { Send } from 'lucide-react';
import Link from 'next/link';
import { company } from '@/data/company';

export function InquiryForm() {
  const [products] = useState<Product[]>(() => getActiveProducts());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const productId = String(formData.get('product') || '');
    const productTitle = products.find((product) => product.id === productId)?.title || 'Genel bilgi';
    const message = [
      'Selamlar ANKURT, web siteniz üzerinden yazıyorum.',
      '',
      `Ad Soyad: ${String(formData.get('name') || '')}`,
      `Telefon: ${String(formData.get('phone') || '')}`,
      `Konum: ${String(formData.get('location') || 'Belirtilmedi')}`,
      `İlgilendiğim Makine: ${productTitle}`,
      `Not / Sorularım: ${String(formData.get('message') || 'Yok')}`,
    ].join('\n');

    trackFormSubmission(productId || 'general');
    window.open(`${company.contact.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-[#0f5d35] uppercase tracking-wider mb-1.5">
            Ad Soyad <span className="text-[#9c4a28]">*</span>
          </label>
          <input
            type="text"
            id="name"
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
          <select
            id="product"
            name="product"
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
          name="privacyConsent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#0f5d35]"
        />
        <span>
          İletişim bilgilerimin talebime yanıt verilmesi amacıyla kullanılmasını kabul ediyorum.{' '}
          <Link href="/kvkk" className="font-bold text-[#0f5d35] underline underline-offset-2">
            KVKK Aydınlatma Metni
          </Link>
        </span>
      </label>

      <div className="pt-2">
        <Button 
          type="submit" 
          variant="primary" 
          size="md"
          className="w-full"
        >
          <Send className="w-3.5 h-3.5 mr-2 stroke-[1.5]" />
          WhatsApp ile Mesaj Gönder
        </Button>
        <p className="mt-2 text-center text-[11px] leading-4 text-[#464c47]/70">
          Bilgileriniz WhatsApp uygulamasında hazır mesaj olarak açılır; göndermeden önce düzenleyebilirsiniz.
        </p>
      </div>
    </form>
  );
}
