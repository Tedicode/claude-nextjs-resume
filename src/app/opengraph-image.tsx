// src/app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Tedi Lowney — Frontend Software Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const [imFellEnglish, imFellEnglishItalic, dmMono] = await Promise.all([
    fetch('https://fonts.gstatic.com/s/imfellenglish/v14/Ktk1ALSLW8zDe0rthJysWrnLsAz3Fw.ttf').then((res) => res.arrayBuffer()),
    fetch('https://fonts.gstatic.com/s/imfellenglish/v14/Ktk3ALSLW8zDe0rthJysWrnLsAzHFaOd.ttf').then((res) => res.arrayBuffer()),
    fetch('https://fonts.gstatic.com/s/dmmono/v16/aFTU7PB1QTsUX8KYhh0.ttf').then((res) => res.arrayBuffer()),
  ])

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
          fontFamily: 'IM Fell English',
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
          fontFamily: 'DM Mono',
          fontSize: '36px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#999',
          marginBottom: '52px',
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
          marginBottom: '24px',
          display: 'flex',
        }}>
          Tedi Lowney
        </div>

        {/* Title */}
        <div style={{
          fontFamily: 'DM Mono',
          fontSize: '52px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#555',
          lineHeight: 1.1,
          marginBottom: '64px',
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
    {
      ...size,
      fonts: [
        { name: 'IM Fell English', data: imFellEnglish, weight: 400, style: 'normal' },
        { name: 'IM Fell English', data: imFellEnglishItalic, weight: 400, style: 'italic' },
        { name: 'DM Mono', data: dmMono, weight: 400, style: 'normal' },
      ],
    }
  )
}