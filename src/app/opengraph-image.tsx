// src/app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Tedi Lowney — Frontend Software Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#faf9f6',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 100px',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Top border line */}
        <div style={{
          position: 'absolute',
          top: '60px',
          left: '100px',
          right: '100px',
          height: '0.5px',
          background: '#bbb',
          display: 'flex',
        }} />

        {/* Bottom border line */}
        <div style={{
          position: 'absolute',
          bottom: '60px',
          left: '100px',
          right: '100px',
          height: '0.5px',
          background: '#bbb',
          display: 'flex',
        }} />

        {/* Chapter label */}
        <div style={{
          fontFamily: 'monospace',
          fontSize: '36px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#999',
          marginBottom: '28px',
          display: 'flex',
        }}>
          Interactive Resume
        </div>

        {/* Name */}
        <div style={{
          fontSize: '96px',
          fontWeight: 400,
          color: '#111',
          lineHeight: 1.05,
          marginBottom: '20px',
          display: 'flex',
        }}>
          Tedi Lowney
        </div>

        {/* Title */}
        <div style={{
          fontFamily: 'monospace',
          fontSize: '52px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#555',
          marginBottom: '40px',
          display: 'flex',
        }}>
           Software Engineer
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: '40px',
          color: '#888',
          fontStyle: 'italic',
          display: 'flex',
        }}>
          Click any bullet to learn more.
        </div>
      </div>
    ),
    { ...size }
  )
}