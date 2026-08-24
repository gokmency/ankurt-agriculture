'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { trackFormSubmission } from '@/lib/analytics';
import { Product, getActiveProducts } from '@/data/products';
import { CheckCircle2, Send } from 'lucide-react';

export function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getActiveProducts());
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    setTimeout(() => {
      setStatus('success');
      trackFormSubmission('inquiry_form');
    }, 600);
  };

  if (status === 'success') {
    return (
      <div className="bg-[#eef2e3] p-8 rounded-[16px] border border-[#000000]/10 text-center flex flex-col items-center justify-center min-h-[340px]">
        <div className="w-12 h-12 bg-[#043f2e]/10 rounded-[4px] flex items-center justify-center mb-4 text-[#043f2e]">
          <CheckCircle2 className="w-7 h-7 stroke-[1.5]" />
        </div>
        <h3 className="font-editorial text-2xl text-[#043f2e] mb-2">Talebiniz Alındı</h3>
        <p className="text-sm text-[#242423] mb-6 max-w-xs leading-relaxed">
          Mesajınız yetkilimize iletilmiştir. Belirttiğiniz telefon numarası üzerinden en kısa sürede dönüş sağlanacaktır.
        </p>
        <Button onClick={() => setStatus('idle')} variant="outline" size="sm">
          Yeni Mesaj Gönder
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-[#043f2e] uppercase tracking-wider mb-1.5">
            Ad Soyad <span className="text-[#9c4a28]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3.5 py-2.5 border border-[#000000]/15 rounded-[4px] focus:border-[#043f2e] outline-none bg-[#eef2e3]/40 text-[#043f2e] text-sm"
            placeholder="Adınız Soyadınız"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-[#043f2e] uppercase tracking-wider mb-1.5">
            Telefon Numarası <span className="text-[#9c4a28]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-3.5 py-2.5 border border-[#000000]/15 rounded-[4px] focus:border-[#043f2e] outline-none bg-[#eef2e3]/40 text-[#043f2e] text-sm"
            placeholder="05XX XXX XX XX"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="location" className="block text-xs font-medium text-[#043f2e] uppercase tracking-wider mb-1.5">
            Bulunduğunuz İl / İlçe
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full px-3.5 py-2.5 border border-[#000000]/15 rounded-[4px] focus:border-[#043f2e] outline-none bg-[#eef2e3]/40 text-[#043f2e] text-sm"
            placeholder="Örn: Serik / Antalya"
          />
        </div>

        <div>
          <label htmlFor="product" className="block text-xs font-medium text-[#043f2e] uppercase tracking-wider mb-1.5">
            İlgilendiğiniz Ekipman
          </label>
          <select
            id="product"
            name="product"
            className="w-full px-3.5 py-2.5 border border-[#000000]/15 rounded-[4px] focus:border-[#043f2e] outline-none bg-[#eef2e3]/40 text-[#043f2e] text-sm"
          >
            <option value="">Lütfen seçiniz (İsteğe bağlı)</option>
            {products.length > 0 ? (
              products.map(p => (
                <option key={p.id} value={p.id}>{p.title}</option>
              ))
            ) : (
              <>
                <option value="romork">Bahçe Tipi Römork</option>
                <option value="cizel">7'li Çizel Patlatma</option>
                <option value="sepet">Devirmeli Traktör Sepeti</option>
                <option value="diger">Diğer / Genel Bilgi</option>
              </>
            )}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[#043f2e] uppercase tracking-wider mb-1.5">
          Talebiniz / Araziniz Hakkında Not
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full px-3.5 py-2.5 border border-[#000000]/15 rounded-[4px] focus:border-[#043f2e] outline-none bg-[#eef2e3]/40 text-[#043f2e] text-sm resize-y placeholder:text-[#242423]/50"
          placeholder="Traktör modelinizi, arazi tipinizi veya sormak istediğiniz detayları belirtebilirsiniz..."
        ></textarea>
      </div>

      <div className="pt-2">
        <Button 
          type="submit" 
          variant="primary" 
          size="md"
          className="w-full"
          disabled={status === 'submitting'}
        >
          <Send className="w-3.5 h-3.5 mr-2 stroke-[1.5]" />
          {status === 'submitting' ? 'Talebiniz Gönderiliyor...' : 'Teklif Talebini Gönder'}
        </Button>
      </div>
    </form>
  );
}
