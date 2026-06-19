export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.artgonmedia.com'
export const SITE_NAME = 'Artgon MEDIA'

export const NAP = {
  name: 'Artgon MEDIA',
  streetAddress: '580 Bd Al Massira, 2e étage, Appartement 3',
  addressLocality: 'Nador',
  addressRegion: 'Oriental',
  postalCode: '62000',
  addressCountry: 'MA',
  telephone: '+212681169346',
  telephoneDisplay: '+212 681 169 346',
  email: 'contact@artgonmedia.com',
  rc: 'RC 30499',
  ice: 'ICE 003821715000064',
  whatsapp: 'https://wa.me/212681169346',
  mapUrl: 'https://maps.google.com/?q=580+Boulevard+Al+Massira+Nador+Maroc',
} as const

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/artgonmedia',
  instagram: 'https://www.instagram.com/artgonmedia',
  linkedin: 'https://www.linkedin.com/company/artgonmedia',
  tiktok: 'https://www.tiktok.com/@artgonmedia',
  youtube: 'https://www.youtube.com/@artgonmedia',
} as const

export const COLORS = {
  teal: '#028090',
  tealLight: '#45C4BB',
  coral: '#F96167',
  violet: '#6655A0',
  navy: '#1E2761',
} as const

export const WHATSAPP_MESSAGE_DEFAULT =
  'Bonjour Artgon MEDIA, je souhaite obtenir un devis pour votre agence web à Nador.'

export const WHATSAPP_CTA = (message?: string) =>
  `${NAP.whatsapp}?text=${encodeURIComponent(message ?? WHATSAPP_MESSAGE_DEFAULT)}`

export const META_DEFAULTS = {
  locale: 'fr_FR',
  type: 'website' as const,
  siteName: SITE_NAME,
  twitterCard: 'summary_large_image' as const,
  twitterSite: '@artgonmedia',
} as const
