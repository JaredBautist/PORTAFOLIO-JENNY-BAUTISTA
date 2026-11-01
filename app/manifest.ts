import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} | ${siteConfig.role}`,
    short_name: siteConfig.name,
    description: 'Psicoterapia conductual online y presencial en Colombia: ansiedad, estrés, depresión y capacitaciones empresariales en bienestar laboral.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    lang: 'es-CO',
    dir: 'ltr',
    categories: ['health', 'medical', 'lifestyle'],
    background_color: '#ffffff',
    theme_color: '#0d9488',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
