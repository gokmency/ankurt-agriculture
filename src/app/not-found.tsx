import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-[#eef2e3] flex items-center justify-center py-16 px-4">
      <div className="bg-[#fcfcfc] rounded-[16px] border border-[#000000]/10 p-8 sm:p-12 text-center max-w-md w-full">
        <span className="eyebrow-label text-[#043f2e]">404 HATA</span>
        <h1 className="font-editorial text-[36px] sm:text-[44px] text-[#043f2e] my-3">Sayfa Bulunamadı</h1>
        <p className="text-sm text-[#242423] mb-8 leading-relaxed">
          Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı kalmış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="primary" size="md">
            <Link href="/">Ana Sayfaya Dön</Link>
          </Button>
          <Button asChild variant="outline" size="md">
            <Link href="/urunler">Ürünler</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
