import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Plentyer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #4F46E5 0%, #9333EA 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              background: 'rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 120,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            P
          </div>
          
          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div
              style={{
                fontSize: 96,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Plentyer
            </div>
            <div
              style={{
                fontSize: 36,
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              풍요로운 지식, 계층화된 성장
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
              <div style={{ width: 200, height: 4, background: 'rgba(255, 255, 255, 0.7)', borderRadius: 2 }} />
              <div style={{ width: 160, height: 4, background: 'rgba(255, 255, 255, 0.5)', borderRadius: 2 }} />
              <div style={{ width: 120, height: 4, background: 'rgba(255, 255, 255, 0.3)', borderRadius: 2 }} />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


