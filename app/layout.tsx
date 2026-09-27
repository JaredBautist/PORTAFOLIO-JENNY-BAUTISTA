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
    default: 'Jenny Bautista García | Psicoterapeuta Conductual y Psicóloga en Colombia',
    template: '%s | Dra. Jenny Bautista García',
  },
  description: 'Psicoterapeuta conductual y psicóloga online en Colombia. Terapia para adultos, tratamiento de ansiedad, depresión, manejo del estrés laboral, estilos de vida saludables y capacitaciones empresariales en bienestar emocional.',
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  category: 'salud y bienestar',
  classification: 'Psicoterapia, Psicología Clínica y Salud Mental',
  keywords: [
    'psicóloga online Colombia',
    'psicoterapeuta conductual',
    'terapia psicológica en Bogotá',
    'consulta psicológica online',
    'terapia cognitivo conductual',
    'psicóloga clínica Colombia',
    'tratamiento para la ansiedad',
    'terapia para la depresión',
    'manejo del estrés laboral',
    'bienestar emocional',
    'salud mental Colombia',
    'capacitaciones empresariales bienestar laboral',
    'inteligencia emocional',
    'autoestima y amor propio',
    'estilos de vida saludables',
    'psicoterapia virtual',
    'terapia individual adultos',
    'atención psicológica virtual',
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
    title: 'Jenny Bautista García | Psicoterapeuta Conductual y Psicóloga en Colombia',
    description: 'Transformando vidas a través de la terapia conductual y clínica. Tratamiento de ansiedad, estrés, estilos de vida saludables y capacitaciones empresariales.',
    images: [
      {
        url: '/images/dra-jenny.jpg',
        width: 1200,
        height: 630,
        alt: 'Dra. Jenny Bautista García - Psicoterapeuta Conductual en Colombia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jenny Bautista García | Psicoterapeuta Conductual y Psicóloga en Colombia',
    description: 'Psicoterapeuta conductual especializada en bienestar emocional, manejo de la ansiedad y capacitaciones empresariales en Colombia.',
    images: ['/images/dra-jenny.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'UbCIO9-ZiOZ0FlIBsg0F0twCUCtC0HPOSjw_XGEbJWw',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d9488',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalBusiness', 'ProfessionalService'],
      '@id': `${SITE_URL}/#clinic`,
      name: 'Consultorio Psicoterapéutico Dra. Jenny Bautista García',
      url: SITE_URL,
      logo: `${SITE_URL}/images/dra-jenny.jpg`,
      image: `${SITE_URL}/images/dra-jenny.jpg`,
      description:
        'Servicios profesionales de psicoterapia conductual, consulta psicológica online y presencial, y capacitaciones empresariales en salud mental y bienestar laboral.',
      telephone: siteConfig.phoneE164,
      email: siteConfig.email,
      priceRange: '$$',
      isAcceptingNewPatients: true,
      medicalSpecialty: 'Psychotherapy',
      address: {
        '@type': 'PostalAddress',
        addressCountry: siteConfig.country,
        addressLocality: 'Bogotá',
      },
      areaServed: [
        { '@type': 'Country', name: 'Colombia' },
        { '@type': 'City', name: 'Bogotá' },
        { '@type': 'AdministrativeArea', name: 'Consulta Online Internacional' },
      ],
      availableService: [
        {
          '@type': 'MedicalTherapy',
          name: 'Psicoterapia Conductual Individual',
          description: 'Tratamiento personalizado para ansiedad, depresión, manejo del estrés y equilibrio emocional.',
        },
        {
          '@type': 'MedicalTherapy',
          name: 'Consulta Psicológica Online',
          description: 'Sesiones de terapia psicológica virtual disponibles para Colombia y el exterior.',
        },
        {
          '@type': 'EducationalOccupationalProgram',
          name: 'Capacitaciones Empresariales en Salud Mental',
          description: 'Talleres corporativos de bienestar laboral, manejo del estrés, prevención de burnout e inteligencia emocional.',
        },
      ],
      sameAs: Object.values(siteConfig.social),
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: siteConfig.name,
      jobTitle: 'Psicoterapeuta Conductual y Especialista en Salud Mental',
      description:
        'Psicoterapeuta conductual especializada en bienestar emocional, estilos de vida saludables, desarrollo personal y salud ocupacional.',
      url: SITE_URL,
      image: `${SITE_URL}/images/dra-jenny.jpg`,
      telephone: siteConfig.phoneE164,
      email: `mailto:${siteConfig.email}`,
      worksFor: {
        '@id': `${SITE_URL}/#clinic`,
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: siteConfig.country,
        addressLocality: 'Bogotá',
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
        'Terapia cognitivo conductual',
        'Manejo de la ansiedad y el estrés',
        'Tratamiento de la depresión',
        'Bienestar emocional',
        'Salud mental ocupacional',
        'Inteligencia emocional',
        'Estilos de vida saludables',
      ],
      sameAs: Object.values(siteConfig.social),
    },
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
