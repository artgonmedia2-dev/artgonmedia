import type { Metadata } from 'next'
import Image from 'next/image'
import './agence.css'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import { Icon } from '@/components/ui/Icons'
import { WHATSAPP_CTA, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = generateMetadata({
  title: 'Notre agence web à Nador — Artgon MEDIA',
  description:
    'Découvrez Artgon MEDIA, agence web & digitale fondée à Nador. Notre équipe crée des sites web, applications mobiles et stratégies digitales pour les entreprises du Maroc et la diaspora.',
  path: '/agence',
})

const STATS = [
  { number: '50+', label: 'Projets livrés', color: '#028090' },
  { number: '5 ans', label: "D'expérience", color: '#6655A0' },
  { number: '98%', label: 'Satisfaction client', color: '#F96167' },
  { number: '3', label: 'Pays desservis', color: '#1E2761' },
]

const VALUES = [
  {
    title: 'Excellence technique',
    icon: 'bolt' as const,
    description:
      'Nous utilisons les meilleures technologies du moment (Next.js 15, Flutter 3, Laravel 11) et restons en veille permanente.',
  },
  {
    title: 'Transparence totale',
    icon: 'search' as const,
    description:
      'Devis détaillés, reporting régulier et communication directe sur WhatsApp. Pas de surprise sur les délais ni les prix.',
  },
  {
    title: 'Impact mesurable',
    icon: 'chart' as const,
    description:
      'Chaque projet est cadré par des objectifs mesurables : trafic, leads, classement Google, ventes. Nous livrons des résultats, pas des promesses.',
  },
]

export default function AgencePage() {
  const breadcrumbs = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Notre agence', url: `${SITE_URL}/agence` },
  ]

  return (
    <div className="agence-ui">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="site-page-hero agence-hero relative isolate overflow-hidden bg-brand-navy text-white" data-page-hero="">
        <div className="agence-hero-visual" aria-hidden="true">
          <Image
            src="/hero-agency-studio.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 72vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="agence-hero-content relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="agence-hero-copy">
            <h1>Artgon MEDIA — L&apos;agence digitale de Nador</h1>
            <p>
              Nous sommes une équipe de développeurs et marketeurs passionnés, basée au cœur de Nador, avec une vision
              claire : rendre le digital accessible et rentable pour les entreprises marocaines.
            </p>
          </div>
        </div>
      </section>

      <section className="agence-story">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="agence-story-copy">
              <h2 className="text-3xl font-bold text-brand-navy">Notre histoire</h2>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  Artgon MEDIA est née d&apos;un constat simple : les entreprises de Nador et de la région Orientale
                  méritaient une agence web locale qui comprend leurs besoins, parle leur langue et connaît leur marché.
                </p>
                <p>
                  Fondée par des développeurs formés aux meilleures technologies (Next.js, Flutter, Laravel), notre
                  agence s&apos;est rapidement imposée comme la référence digitale de Nador. En quelques années, nous
                  avons livré plus de 50 projets allant du simple site vitrine à des plateformes e-commerce complexes.
                </p>
                <p>
                  Notre différence ? Nous combinons expertise technique internationale et connaissance profonde du
                  marché marocain, notamment la dynamique de la diaspora en Europe — un atout majeur pour nos clients
                  dans l&apos;immobilier et le commerce.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="agence-stat text-center">
                  <strong style={{ color: stat.color }}>{stat.number}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="agence-values">
            <h2 className="text-center text-3xl font-bold text-brand-navy">Nos valeurs</h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {VALUES.map((value) => (
                <div key={value.title} className="agence-value">
                  <div className="agence-value-icon">
                    <Icon name={value.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-brand-navy">{value.title}</h3>
                  <p className="mt-3 text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="agence-close">
            <h2>Prêt à démarrer votre projet digital à Nador ?</h2>
            <p>Contactez-nous pour un premier échange gratuit et sans engagement.</p>
            <a className="whatsapp-action"
              href={WHATSAPP_CTA("Bonjour, j'aimerais en savoir plus sur votre agence et discuter de mon projet.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Parlons de votre projet
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
