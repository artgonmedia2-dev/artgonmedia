import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') ?? 'Artgon MEDIA — Agence web à Nador'

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1E2761 0%, #028090 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '60px 64px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          <span style={{ fontSize: 32, fontWeight: 900, color: '#ffffff' }}>Artgon</span>
          <span
            style={{
              background: '#F96167',
              color: '#ffffff',
              padding: '4px 12px',
              borderRadius: 8,
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            MEDIA
          </span>
        </div>

        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 22,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          Agence web & digitale · Nador, Maroc · +212 681 169 346
        </div>

        <div
          style={{
            position: 'absolute',
            top: 60,
            right: 64,
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'rgba(69,196,187,0.2)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 120,
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'rgba(249,97,103,0.2)',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
