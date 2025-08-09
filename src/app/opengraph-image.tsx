import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = siteConfig.description;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image(): Promise<ImageResponse> {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 32, opacity: 0.9, textAlign: 'center' }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
