import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const SITE_URL = 'https://jennybautistagarcia.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Jenny Bautista García | Psicoterapeuta Conductual',
    template: '%s | Jenny Bautista García',
  },
  description: 'Psicoterapeuta conductual especializada en bienestar emocional, estilos de vida saludables y desarrollo personal. Terapia para personas y capacitaciones empresariales en Colombia.',
  keywords: [
    'psicoterapeuta',
    'terapia conductual',
    'bienestar emocional',
    'salud mental',
    'psicóloga Colombia',
    'capacitaciones empresariales',
    'manejo del estrés',
    'inteligencia emocional',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: SITE_URL,
    siteName: 'Jenny Bautista García',
    title: 'Jenny Bautista García | Psicoterapeuta Conductual',
    description: 'Transformando vidas a través de la terapia conductual. Equilibrio emocional, hábitos saludables y capacitaciones empresariales.',
    images: [
      {
        url: '/images/dra-jenny.jpg',
        width: 1200,
        height: 630,
        alt: 'Dra. Jenny Bautista García - Psicoterapeuta Conductual',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jenny Bautista García | Psicoterapeuta Conductual',
    description: 'Psicoterapeuta conductual especializada en bienestar emocional y capacitaciones empresariales.',
    images: ['/images/dra-jenny.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jenny Bautista García',
  jobTitle: 'Psicoterapeuta Conductual',
  description: 'Psicoterapeuta conductual especializada en bienestar emocional, estilos de vida saludables y desarrollo personal.',
  url: SITE_URL,
  image: `${SITE_URL}/images/dra-jenny.jpg`,
  telephone: '+57 310 613 9879',
  email: 'mailto:jennybautista28@hotmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CO',
  },
  knowsAbout: [
    'Terapia conductual',
    'Bienestar emocional',
    'Salud ocupacional',
    'Inteligencia emocional',
    'Terapia ocupacional',
  ],
  sameAs: [
    'https://www.instagram.com/jennybautista_oficial/',
    'https://www.facebook.com/jenny.bautista.garcia.2025',
    'https://www.tiktok.com/@jennybautistagarcia',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
