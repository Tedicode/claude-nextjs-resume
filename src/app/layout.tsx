import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tedi Lowney — Frontend Software Developer',
  description: 'Interactive resume for Tedi Lowney, Frontend Software Developer based in Philadelphia.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
