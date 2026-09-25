import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { siteConfig } from '@/lib/site'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const SITE_URL = siteConfig.url

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Jenny Bautista García | Psicoterapeuta Conductual',
    template: '%s | Jenny Bautista García',
  },
  description: 'Psicoterapeuta conductual especializada en bienestar emocional, estilos de vida saludables y desarrollo personal. Terapia para personas y capacitaciones empresariales en Colombia.',
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: SITE_URL,
    siteName: siteConfig.name,
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d9488',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: 'Psicoterapeuta conductual especializada en bienestar emocional, estilos de vida saludables y desarrollo personal.',
  url: SITE_URL,
  image: `${SITE_URL}/images/dra-jenny.jpg`,
  telephone: siteConfig.phoneE164,
  email: `mailto:${siteConfig.email}`,
  address: {
    '@type': 'PostalAddress',
    addressCountry: siteConfig.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.phoneE164,
    contactType: 'customer service',
    availableLanguage: ['Spanish'],
    areaServed: 'CO',
  },
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Sesión Estándar de psicoterapia (90 minutos)',
      price: '300000',
      priceCurrency: 'COP',
    },
    {
      '@type': 'Offer',
      name: 'Sesión Extendida de psicoterapia (2 horas)',
      price: '360000',
      priceCurrency: 'COP',
    },
  ],
  knowsAbout: [
    'Terapia conductual',
    'Bienestar emocional',
    'Salud ocupacional',
    'Inteligencia emocional',
    'Terapia ocupacional',
  ],
  sameAs: Object.values(siteConfig.social),
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
