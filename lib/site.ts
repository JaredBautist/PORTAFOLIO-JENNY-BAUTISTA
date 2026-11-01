function normalizeSiteUrl(value: string): string {
  const withProtocol = value.trim().startsWith('http')
    ? value.trim()
    : `https://${value.trim()}`
  return withProtocol.replace(/\/+$/, '')
}

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL)
  }
  if (process.env.VERCEL_URL) {
    return normalizeSiteUrl(process.env.VERCEL_URL)
  }
  return 'https://jennybautistagarcia.com'
}

export const SITE_URL = resolveSiteUrl()

/** Fecha de la última revisión de contenido (ISO 8601, solo fecha) */
export const CONTENT_LAST_MODIFIED = '2026-11-01'

export const siteConfig = {
  name: 'Jenny Bautista García',
  role: 'Psicoterapeuta Conductual',
  url: SITE_URL,
  phone: '+57 310 613 9879',
  phoneE164: '+573106139879',
  whatsappNumber: '573106139879',
  email: 'jennybautista28@hotmail.com',
  country: 'CO',
  locale: 'es_CO',
  social: {
    instagram: 'https://www.instagram.com/jennybautista_oficial/',
    facebook: 'https://www.facebook.com/jenny.bautista.garcia.2025',
    tiktok: 'https://www.tiktok.com/@jennybautistagarcia',
  },
} as const

/** Enlace de WhatsApp con mensaje predefinido opcional */
export function whatsappLink(text?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}
