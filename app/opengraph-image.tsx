import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const alt = `${siteConfig.name} - ${siteConfig.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f0fdfa 0%, #ffffff 55%, #ccfbf1 100%)',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 12,
            background: 'linear-gradient(90deg, #0d9488, #2dd4bf)',
            display: 'flex',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #2dd4bf, #0d9488)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 36,
              fontWeight: 700,
              fontFamily: 'Georgia, serif',
              marginRight: 20,
            }}
          >
            J
          </div>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#0d9488',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            Psicoterapeuta Conductual
          </div>
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: '#0f172a',
            lineHeight: 1.1,
            fontFamily: 'Georgia, serif',
            display: 'flex',
          }}
        >
          Jenny Bautista García
        </div>
        <div
          style={{
            fontSize: 34,
            color: '#475569',
            marginTop: 28,
            lineHeight: 1.4,
            maxWidth: 900,
            display: 'flex',
          }}
        >
          Equilibrio emocional, hábitos saludables y capacitaciones empresariales
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 80,
            fontSize: 26,
            color: '#0d9488',
            fontWeight: 600,
            display: 'flex',
            gap: 24,
          }}
        >
          <span style={{ display: 'flex' }}>{siteConfig.phone}</span>
          <span style={{ display: 'flex' }}>{siteConfig.url.replace('https://', '')}</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
