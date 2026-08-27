import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'ANKURT Mühendislik ve Tarım Makinaları — Tarla, bahçe ve sera için doğru ekipman';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

const heroData = await readFile(
  join(process.cwd(), 'public/images/hero/ankurt-industrial-hero-v2.jpg'),
  'base64'
);
const logoData = await readFile(
  join(process.cwd(), 'public/images/brand/ankurt_official_logo.png'),
  'base64'
);

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: '#121713',
          color: '#fff',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <img
          src={`data:image/png;base64,${heroData}`}
          alt=""
          width="1200"
          height="630"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background: 'linear-gradient(90deg, rgba(18,23,19,.98) 0%, rgba(18,23,19,.9) 48%, rgba(18,23,19,.25) 100%)',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', padding: '62px 72px', width: '760px' }}>
          <div style={{ display: 'flex', background: '#fbfaf6', padding: '12px 18px', borderRadius: '8px', width: '310px' }}>
            <img
              src={`data:image/png;base64,${logoData}`}
              alt="ANKURT"
              width="274"
              height="91"
              style={{ width: '274px', height: '91px', objectFit: 'contain' }}
            />
          </div>
          <div style={{ display: 'flex', marginTop: '64px', color: '#e7b23f', fontSize: 18, fontWeight: 700, letterSpacing: '3px' }}>
            SERİK / ANTALYA
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '16px', fontSize: 68, fontWeight: 800, lineHeight: .93, letterSpacing: '-2px' }}>
            <span>TOPRAĞA GÖRE</span>
            <span>TASARLANIR.</span>
            <span style={{ color: '#e7b23f' }}>YILLARCA ÇALIŞIR.</span>
          </div>
          <div style={{ display: 'flex', marginTop: '34px', fontSize: 22, color: 'rgba(255,255,255,.78)' }}>
            Tarla, bahçe ve sera için doğru ekipman.
          </div>
        </div>
        <div style={{ position: 'absolute', right: 0, bottom: 0, display: 'flex', background: '#0f5d35', color: '#fff', padding: '22px 32px', fontSize: 18, fontWeight: 700 }}>
          ankurt.com
        </div>
      </div>
    ),
    size
  );
}
