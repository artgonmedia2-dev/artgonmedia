import { NAP, SITE_URL, SITE_NAME, SOCIAL_LINKS } from './constants'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: NAP.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo-artgon.jpg`,
    image: `${SITE_URL}/og/home.png`,
    description:
      'Artgon MEDIA est une agence web et digitale à Nador, Maroc, spécialisée en création de sites web, applications mobiles Flutter, SEO, marketing digital et automatisation IA.',
    telephone: NAP.telephone,
    email: NAP.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      postalCode: NAP.postalCode,
      addressCountry: NAP.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.1681,
      longitude: -2.9288,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    sameAs: Object.values(SOCIAL_LINKS),
    priceRange: '$$',
    currenciesAccepted: 'MAD, EUR',
    paymentAccepted: 'Virement bancaire, Espèces, PayPal',
    areaServed: [
      { '@type': 'City', name: 'Nador' },
      { '@type': 'AdministrativeArea', name: 'Oriental' },
      { '@type': 'Country', name: 'Maroc' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Artgon MEDIA',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Création de site web' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Application mobile Flutter' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Référencement SEO' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketing digital & Ads' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisation IA' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance & Support' } },
      ],
    },
  }
}

export function serviceSchema({
  name,
  description,
  url,
  provider = SITE_NAME,
  areaServed = 'Nador, Maroc',
}: {
  name: string
  description: string
  url: string
  provider?: string
  areaServed?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      name: provider,
      '@id': `${SITE_URL}/#business`,
    },
    areaServed,
    serviceType: name,
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = SITE_NAME,
  imageUrl,
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  authorName?: string
  imageUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo-artgon.jpg`,
      },
    },
    image: imageUrl
      ? {
          '@type': 'ImageObject',
          url: imageUrl,
        }
      : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}
