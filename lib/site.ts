/**
 * Configuración central del sitio.
 * ⚠️ Cambia SITE_URL por el dominio real cuando esté registrado.
 */
export const SITE_URL = 'https://jennybautistagarcia.com'

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
