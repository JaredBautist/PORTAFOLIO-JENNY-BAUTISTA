import { SITE_URL, CONTENT_LAST_MODIFIED } from '@/lib/site'

export const dynamic = 'force-static'

type SitemapImage = {
  path: string
  title: string
  caption: string
}

const images: SitemapImage[] = [
  {
    path: '/images/dra-jenny.jpg',
    title: 'Jenny Bautista García, psicoterapeuta conductual en Colombia',
    caption:
      'Psicoterapia conductual online y presencial para adultos en Colombia.',
  },
  {
    path: '/images/capacitaciones.png',
    title: 'Capacitaciones empresariales en bienestar laboral',
    caption:
      'Talleres de manejo del estrés, prevención del burnout e inteligencia emocional para empresas e instituciones.',
  },
  {
    path: '/images/mision.png',
    title: 'Misión: acompañamiento psicoterapéutico',
    caption:
      'Cambiar emociones, hábitos y conductas para una vida más productiva, saludable y feliz.',
  },
  {
    path: '/images/vision.png',
    title: 'Visión: bienestar emocional para personas y empresas',
    caption:
      'Comportamientos físicos, emocionales y sociales adecuados para alcanzar el bienestar.',
  },
  {
    path: '/images/objetivos.png',
    title: 'Objetivos de la psicoterapia conductual',
    caption:
      'Equilibrio emocional, hábitos saludables y crecimiento personal con técnicas conductuales.',
  },
]

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function imageEntry(image: SitemapImage): string {
  return [
    '    <image:image>',
    `      <image:loc>${escapeXml(`${SITE_URL}${image.path}`)}</image:loc>`,
    `      <image:title>${escapeXml(image.title)}</image:title>`,
    `      <image:caption>${escapeXml(image.caption)}</image:caption>`,
    '    </image:image>',
  ].join('\n')
}

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${escapeXml(SITE_URL)}</loc>
    <lastmod>${CONTENT_LAST_MODIFIED}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
${images.map(imageEntry).join('\n')}
  </url>
</urlset>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
