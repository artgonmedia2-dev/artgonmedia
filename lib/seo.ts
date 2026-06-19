import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME, META_DEFAULTS } from './constants'

export interface GenerateMetadataOptions {
  title: string
  description: string
  path?: string
  ogImage?: string
  noIndex?: boolean
  keywords?: string[]
}

export function generateMetadata({
  title,
  description,
  path = '',
  ogImage,
  noIndex = false,
  keywords = [],
}: GenerateMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`
  const image = ogImage ?? `/api/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: META_DEFAULTS.locale,
      type: META_DEFAULTS.type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: META_DEFAULTS.twitterCard,
      title,
      description,
      site: META_DEFAULTS.twitterSite,
      images: [image],
    },
  }
}

export const BREADCRUMB_HOME = { name: 'Accueil', url: SITE_URL }

export function buildBreadcrumbs(
  ...items: { name: string; url: string }[]
): { name: string; url: string }[] {
  return [BREADCRUMB_HOME, ...items]
}
