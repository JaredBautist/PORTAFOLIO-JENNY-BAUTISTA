# Jenny Bautista García — Psicoterapeuta Conductual

Landing page profesional (one-page) construida con **Next.js 16**, **React 19**, **Tailwind CSS 4** y **framer-motion**.

## 🚀 Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # build de producción
```

## ✅ SEO implementado

- **Metadata completa**: title, description, Open Graph, Twitter Cards, canonical (`app/layout.tsx`)
- **Imagen Open Graph generada automáticamente** (1200×630) en `app/opengraph-image.tsx`
- **JSON-LD** (`Person` + `ContactPoint` + ofertas con precios COP) para resultados enriquecidos en Google
- **`robots.txt`** y **`sitemap.xml`** generados automáticamente (`app/robots.ts`, `app/sitemap.xml/route.ts`)
- **Sitemap de imágenes** con título y descripción para Google Imágenes (las 5 imágenes del sitio)
- **Fecha de revisión de contenido** centralizada en `CONTENT_LAST_MODIFIED` (`lib/site.ts`), usada por el sitemap y el schema `MedicalWebPage`
- **Manifest PWA** (`app/manifest.ts`) con iconos y theme-color
- **Viewport optimizado para móviles** (`export const viewport` en el layout)

## 🌐 Publicar en Google — checklist

### 1. Configura el dominio real
`lib/site.ts` toma el dominio en este orden: `NEXT_PUBLIC_SITE_URL` → `VERCEL_PROJECT_PRODUCTION_URL` → `VERCEL_URL` → `https://jennybautistagarcia.com`. Si usas dominio propio, define `NEXT_PUBLIC_SITE_URL` en Vercel. Esa constante alimenta metadata, canonical, sitemap, robots y JSON-LD.

### 2. Despliega el sitio
- **Vercel** (recomendado para Next.js): conecta el repo en [vercel.com](https://vercel.com) y despliega.
- Apunta el dominio propio en *Settings → Domains*.

### 3. Google Search Console (imprescindible)
1. Entra a [search.google.com/search-console](https://search.google.com/search-console)
2. Añade la propiedad con el dominio real (recomendado: propiedad de **Dominio** vía DNS)
3. Verifica la propiedad (registro TXT en el DNS de tu proveedor de dominio)
4. Envía el sitemap: en el menú **Sitemaps**, introduce `https://tudominio.com/sitemap.xml`
5. Solicita indexación de la página principal con la herramienta **Inspección de URLs**

### 4. Perfil de Empresa en Google (clave para negocio local)
1. Crea/afilia el perfil en [google.com/business](https://www.google.com/business)
2. Verifica la dirección o zona de servicio
3. Añade el sitio web, teléfono, horarios y fotos
4. Esto habilita que aparezca en el mapa y en búsquedas locales ("psicóloga cerca de mí")

### 5. Analítica (opcional pero recomendado)
- **Vercel Analytics** ya está integrado (solo en producción)
- Para Google Analytics 4: crea la propiedad en [analytics.google.com](https://analytics.google.com), obtén el ID de medición (`G-XXXXXXX`) e instálalo con `@next/third-parties`:

```bash
pnpm add @next/third-parties
```

```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'
// dentro de <body>:
<GoogleAnalytics gaId="G-XXXXXXX" />
```

## 📱 Responsive

- Uso de unidades `svh` en el hero (respeta la barra del navegador móvil)
- Paddings con `safe-area-inset` en el botón flotante de WhatsApp
- `scroll-margin-top` global para que las anclas no queden bajo el header fijo
- Menú móvil accesible (`aria-expanded`, cierre con Escape, `inert`)

## 📂 Estructura

```
app/
  layout.tsx    → metadata, JSON-LD, fuentes, skip-link
  page.tsx      → composición de secciones
  robots.ts     → robots.txt
  sitemap.xml/route.ts → sitemap.xml (incluye imágenes)
  manifest.ts   → manifest PWA
  opengraph-image.tsx → imagen social generada
components/     → secciones de la página + whatsapp-fab
lib/site.ts     → ⚙️ configuración central (dominio, contacto, redes)
styles/globals.css → tema Tailwind 4 + tokens
```
