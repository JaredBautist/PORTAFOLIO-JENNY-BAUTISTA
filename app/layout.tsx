import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { siteConfig, CONTENT_LAST_MODIFIED } from '@/lib/site'
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
    default: 'Jenny Bautista García | Psicoterapia Online en Colombia',
    template: '%s | Dra. Jenny Bautista García',
  },
  description: 'Psicoterapia conductual online y presencial en Colombia. Tratamiento de ansiedad, estrés y depresión, y capacitaciones empresariales en bienestar laboral.',
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  category: 'salud y bienestar',
  classification: 'Psicoterapia, Psicología Clínica y Salud Mental',
  keywords: [
    'psicóloga online Colombia',
    'psicóloga online Bogotá',
    'psicoterapeuta conductual',
    'psicoterapia conductual online',
    'terapia psicológica online',
    'terapia cognitivo conductual',
    'consulta psicológica virtual',
    'psicóloga para adultos',
    'terapia individual online',
    'tratamiento para la ansiedad',
    'terapia para el estrés',
    'manejo del estrés laboral',
    'tratamiento para la depresión',
    'prevención del burnout',
    'autoestima y amor propio',
    'bienestar emocional',
    'estilos de vida saludables',
    'salud mental Colombia',
    'capacitaciones empresariales en salud mental',
    'talleres de bienestar laboral para empresas',
    'charlas de bienestar emocional para empresas',
    'psicóloga Jenny Bautista García',
    'agendar cita con psicóloga online',
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
    title: 'Jenny Bautista García | Psicoterapia Online en Colombia',
    description: 'Psicoterapia online y presencial en Colombia. Ansiedad, estrés, depresión y autoestima, más capacitaciones empresariales en bienestar laboral.',
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
    title: 'Jenny Bautista García | Psicoterapia Online en Colombia',
    description: 'Psicoterapeuta conductual en Colombia. Terapia online y presencial para ansiedad, estrés y depresión, y capacitaciones en salud mental para empresas.',
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
  interactiveWidget: 'resizes-content',
  themeColor: '#0d9488',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: siteConfig.name,
      description:
        'Sitio oficial de Jenny Bautista García, psicoterapeuta conductual en Colombia. Psicoterapia online y presencial para adultos y capacitaciones empresariales en bienestar laboral.',
      inLanguage: 'es-CO',
      publisher: {
        '@id': `${SITE_URL}/#person`,
      },
    },
    {
      '@type': 'MedicalWebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'Jenny Bautista García | Psicoterapia Online en Colombia',
      description:
        'Psicoterapia conductual online y presencial en Colombia. Tratamiento de ansiedad, estrés y depresión, y capacitaciones empresariales en bienestar laboral.',
      inLanguage: 'es-CO',
      isPartOf: {
        '@id': `${SITE_URL}/#website`,
      },
      about: [
        { '@id': `${SITE_URL}/#clinic` },
        { '@id': `${SITE_URL}/#person` },
      ],
      lastReviewed: CONTENT_LAST_MODIFIED,
      reviewedBy: {
        '@id': `${SITE_URL}/#person`,
      },
      medicalAudience: {
        '@type': 'MedicalAudience',
        audienceType: 'Pacientes adultos en Colombia y el exterior',
      },
    },
    {
      '@type': ['MedicalBusiness', 'ProfessionalService'],
      '@id': `${SITE_URL}/#clinic`,
      name: 'Consultorio Psicoterapéutico Dra. Jenny Bautista García',
      url: SITE_URL,
      logo: `${SITE_URL}/images/dra-jenny.jpg`,
      image: `${SITE_URL}/images/dra-jenny.jpg`,
      description:
        'Consultorio de psicoterapia conductual online y presencial en Colombia. Tratamiento de ansiedad, estrés, depresión y autoestima, y capacitaciones empresariales en salud mental y bienestar laboral.',
      telephone: siteConfig.phoneE164,
      email: siteConfig.email,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phoneE164,
        contactType: 'Reservas y consultas',
        availableLanguage: ['Spanish'],
        areaServed: 'CO',
      },
      currenciesAccepted: 'COP',
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
          description: 'Terapia online y presencial para adultos con ansiedad, estrés, depresión y dificultades de autoestima.',
        },
        {
          '@type': 'MedicalTherapy',
          name: 'Consulta Psicológica Online',
          description: 'Sesiones de psicoterapia virtual para Colombia y el exterior, con seguimiento personalizado.',
        },
        {
          '@type': 'EducationalOccupationalProgram',
          name: 'Capacitaciones Empresariales en Salud Mental',
          description: 'Talleres y charlas de bienestar laboral, manejo del estrés, prevención del burnout e inteligencia emocional para empresas e instituciones.',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de psicoterapia y bienestar laboral',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Psicoterapia conductual individual online y presencial',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Consulta psicológica online para Colombia y el exterior',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Capacitaciones empresariales en salud mental y bienestar laboral',
            },
          },
        ],
      },
      sameAs: Object.values(siteConfig.social),
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: siteConfig.name,
      jobTitle: 'Psicoterapeuta Conductual y Especialista en Salud Mental',
      description:
        'Psicoterapeuta conductual especializada en bienestar emocional, manejo de la ansiedad y el estrés, hábitos de vida saludables y salud ocupacional. Psicoterapia online y presencial en Colombia.',
      url: SITE_URL,
      image: `${SITE_URL}/images/dra-jenny.jpg`,
      telephone: siteConfig.phoneE164,
      email: `mailto:${siteConfig.email}`,
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: 'Terapeuta Ocupacional',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: 'Especialista en Alta Gerencia',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: 'Especialista en Gerencia en Salud Ocupacional',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'Psicoterapeuta Conductual',
        },
      ],
      knowsLanguage: ['es'],
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
        'Terapia online',
        'Prevención del burnout',
        'Manejo del estrés laboral',
        'Autoestima y amor propio',
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
