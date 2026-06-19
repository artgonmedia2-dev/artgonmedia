import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import { LinkButton } from '@/components/ui/Button'
import { WHATSAPP_CTA, NAP, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = generateMetadata({
  title: 'Notre agence web à Nador — Artgon MEDIA',
  description:
    'Découvrez Artgon MEDIA, agence web & digitale fondée à Nador. Notre équipe crée des sites web, applications mobiles et stratégies digitales pour les entreprises du Maroc et la diaspora.',
  path: '/agence',
})

export default function AgencePage() {
  const breadcrumbs = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Notre agence', url: `${SITE_URL}/agence` },
  ]

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="bg-gradient-to-br from-brand-navy to-brand-violet py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><a href="/" className="hover:text-white">Accueil</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Agence</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Artgon MEDIA — L&apos;agence digitale de Nador
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Nous sommes une équipe de développeurs et marketeurs passionnés, basée au cœur de Nador, avec une vision claire : rendre le digital accessible et rentable pour les entreprises marocaines.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy">Notre histoire</h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Artgon MEDIA est née d&apos;un constat simple : les entreprises de Nador et de la région Orientale méritaient une agence web locale qui comprend leurs besoins, parle leur langue et connaît leur marché.
                </p>
                <p>
                  Fondée par des développeurs formés aux meilleures technologies (Next.js, Flutter, Laravel), notre agence s&apos;est rapidement imposée comme la référence digitale de Nador. En quelques années, nous avons livré plus de 50 projets allant du simple site vitrine à des plateformes e-commerce complexes.
                </p>
                <p>
                  Notre différence ? Nous combinons expertise technique internationale et connaissance profonde du marché marocain, notamment la dynamique de la diaspora en Europe — un atout majeur pour nos clients dans l&apos;immobilier et le commerce.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '50+', label: 'Projets livrés', color: '#028090' },
                { number: '5 ans', label: 'D\'expérience', color: '#6655A0' },
                { number: '98%', label: 'Satisfaction client', color: '#F96167' },
                { number: '3', label: 'Pays desservis', color: '#1E2761' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-6 text-center text-white"
                  style={{ backgroundColor: stat.color }}
                >
                  <div className="text-4xl font-extrabold">{stat.number}</div>
                  <div className="mt-2 text-sm font-medium text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-bold text-brand-navy text-center">Nos valeurs</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                {
                  title: 'Excellence technique',
                  icon: '⚡',
                  description: 'Nous utilisons les meilleures technologies du moment (Next.js 15, Flutter 3, Laravel 11) et restons en veille permanente.',
                },
                {
                  title: 'Transparence totale',
                  icon: '🔍',
                  description: 'Devis détaillés, reporting régulier et communication directe sur WhatsApp. Pas de surprise sur les délais ni les prix.',
                },
                {
                  title: 'Impact mesurable',
                  icon: '📈',
                  description: 'Chaque projet est cadré par des objectifs mesurables : trafic, leads, classement Google, ventes. Nous livrons des résultats, pas des promesses.',
                },
              ].map((value) => (
                <div key={value.title} className="rounded-2xl border border-gray-100 p-8 text-center">
                  <div className="text-4xl">{value.icon}</div>
                  <h3 className="mt-4 text-xl font-bold text-brand-navy">{value.title}</h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-brand-teal p-10 text-center text-white">
            <h2 className="text-2xl font-bold">Prêt à démarrer votre projet digital à Nador ?</h2>
            <p className="mt-3 text-white/80">Contactez-nous pour un premier échange gratuit et sans engagement.</p>
            <a
              href={WHATSAPP_CTA('Bonjour, j\'aimerais en savoir plus sur votre agence et discuter de mon projet.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-bold text-brand-teal hover:bg-gray-50"
            >
              Parlons de votre projet
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
