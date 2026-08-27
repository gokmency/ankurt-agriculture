import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 512, height: 512 };
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
        <div style={{ width: '440px', height: '440px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '96px', background: '#f2f0e9', border: '12px solid #e7b23f' }}>
          <div style={{ width: '300px', height: '400px', display: 'flex', position: 'relative', overflow: 'hidden' }}>
            <img
              src={`data:image/png;base64,${logoData}`}
              alt=""
              width="1201"
              height="400"
              style={{ position: 'absolute', left: '24px', top: 0, width: '1201px', height: '400px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    ),
    size
  );
}
