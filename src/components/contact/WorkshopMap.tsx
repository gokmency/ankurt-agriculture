'use client';
import { useState } from 'react';
import { company } from '@/data/company';
export function WorkshopMap() {
  const [enabled, setEnabled] = useState(false);
  return enabled ? <iframe title="ANKURT atölye konumu" src={company.location.mapEmbedUrl} className="h-full w-full border-0" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /> : <div className="flex h-full flex-col items-center justify-center gap-3 p-4 text-center text-xs text-white">
    <span>{company.location.short}</span>
    <button type="button" onClick={() => setEnabled(true)} className="min-h-11 rounded-md bg-[#e7b23f] px-4 font-bold text-[#121713]">Google Haritasını yükle</button>
    <span className="text-[11px]">Tıklayınca Google Maps bağlantısı kurulur.</span>
  </div>;
}
