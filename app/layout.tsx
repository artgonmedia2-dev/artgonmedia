import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import JsonLd from '@/components/seo/JsonLd'
import { localBusinessSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME, NAP, META_DEFAULTS } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Agence web & digitale à Nador, Maroc`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Artgon MEDIA, agence web à Nador : création de sites web Next.js/Laravel, applications mobiles Flutter, SEO local, marketing digital et automatisation IA. Devis gratuit.',
  keywords: [
    'agence web nador',
    'création site web nador',
    'référencement SEO nador',
    'application mobile flutter maroc',
    'marketing digital nador',
    'automatisation IA maroc',
    'agence digitale oriental maroc',
  ].join(', '),
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: { index: true, follow: true },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: META_DEFAULTS.type,
    locale: META_DEFAULTS.locale,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Agence web & digitale à Nador, Maroc`,
    description:
      'Agence web à Nador : sites web, apps mobiles Flutter, SEO local, marketing digital et IA. Contactez-nous sur WhatsApp.',
    images: [{ url: '/og/home.png', width: 1200, height: 630, alt: 'Artgon MEDIA — Agence web Nador' }],
  },
  twitter: {
    card: META_DEFAULTS.twitterCard,
    site: META_DEFAULTS.twitterSite,
    title: `${SITE_NAME} — Agence web Nador`,
    description: 'Agence web & digitale à Nador, Maroc.',
    images: ['/og/home.png'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <JsonLd data={localBusinessSchema()} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="geo.region" content="MA-09" />
        <meta name="geo.placename" content="Nador" />
        <meta name="geo.position" content="35.1681;-2.9288" />
        <meta name="ICBM" content="35.1681, -2.9288" />
      </head>
      <body className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
