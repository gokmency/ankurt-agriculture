import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 48, height: 48 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

const logoData = await readFile(
  join(process.cwd(), 'public/images/brand/ankurt_official_logo.png'),
  'base64'
);

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f5d35' }}>
        <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '8px', background: '#f2f0e9' }}>
          <div style={{ width: '28px', height: '36px', display: 'flex', position: 'relative', overflow: 'hidden' }}>
            <img
              src={`data:image/png;base64,${logoData}`}
              alt=""
              width="108"
              height="36"
              style={{ position: 'absolute', left: '2px', top: 0, width: '108px', height: '36px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    ),
    size
  );
}
