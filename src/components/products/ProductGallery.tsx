'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
export function ProductGallery({ images, productName, reference = false }: { images: string[]; productName: string; reference?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  if (!images.length) return <div className="flex min-h-[300px] flex-col justify-center rounded-xl border border-[#121713]/10 bg-[#f2f0e9] p-8 text-center">
    <p className="font-editorial text-2xl text-[#0f5d35]">{productName}</p>
    <p className="mt-3 text-sm text-[#464c47]">Güncel modelin fotoğrafını ve teknik bilgilerini atölyemizden isteyin.</p>
    <a href="#teklif" className="mt-5 inline-flex min-h-11 items-center justify-center font-bold text-[#0f5d35] underline">Fotoğraf ve bilgi iste</a>
  </div>;
  return <div className="space-y-3">
    <button type="button" onClick={() => dialog.current?.showModal()} aria-label={`${productName} fotoğrafını büyüt`} className="relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#121713]/10 bg-[#f2f0e9]">
      <Image src={images[activeIndex]} alt={reference ? "Temsili ekipman kullanım görseli" : `${productName}, görünüm ${activeIndex + 1}`} fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" priority />
      <span className="absolute bottom-3 right-3 flex gap-2 rounded-md bg-[#fbfaf6] p-2 text-xs text-[#0f5d35]"><ZoomIn size={16} /> Büyüt</span>
    </button>
    {reference && <p className="text-xs leading-5 text-[#464c47]">Temsili kullanım görselidir; satılan modelin fotoğrafı değildir. Güncel ürün fotoğrafını atölyeden isteyin.</p>}
    {images.length > 1 && <div className="flex gap-3">{images.map((src, index) => <button type="button" key={src} onClick={() => setActiveIndex(index)} aria-label={`Görünüm ${index + 1}`} aria-pressed={index === activeIndex} className={`relative h-20 w-20 overflow-hidden rounded-md border-2 ${index === activeIndex ? 'border-[#0f5d35]' : 'border-transparent'}`}>
      <Image src={src} alt="" fill className="object-contain" sizes="80px" />
    </button>)}</div>}
    <dialog ref={dialog} aria-label={`${productName} büyütülmüş fotoğraf`} className="fixed inset-0 m-auto max-h-[90dvh] w-[94vw] max-w-5xl rounded-xl bg-[#fbfaf6] p-3 backdrop:bg-black/70">
      <form noValidate method="dialog" className="flex justify-end"><button autoFocus className="inline-flex min-h-11 items-center gap-2 px-3 text-sm font-bold" aria-label="Büyütülmüş fotoğrafı kapat"><X size={20}/> Kapat</button></form>
      {/* Native dialog supplies Escape, focus containment and focus restoration. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={images[activeIndex]} alt={reference ? "Temsili ekipman kullanım görseli" : productName} className="mx-auto max-h-[75dvh] max-w-full object-contain" />
    </dialog>
  </div>;
}
