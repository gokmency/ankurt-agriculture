import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

const logoData = await readFile(
  join(process.cwd(), 'public/images/brand/ankurt_official_logo.png'),
  'base64'
);

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f5d35' }}>
        <div style={{ width: '154px', height: '154px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '34px', background: '#f2f0e9', border: '4px solid #e7b23f' }}>
          <div style={{ width: '100px', height: '140px', display: 'flex', position: 'relative', overflow: 'hidden' }}>
            <img
              src={`data:image/png;base64,${logoData}`}
              alt=""
              width="420"
              height="140"
              style={{ position: 'absolute', left: '4px', top: 0, width: '420px', height: '140px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    ),
    size
  );
}
