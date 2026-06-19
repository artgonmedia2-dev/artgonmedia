import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema, articleSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import { LinkButton } from '@/components/ui/Button'
import { WHATSAPP_CTA, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = generateMetadata({
  title: 'Nador West Wood — Plateforme immobilière Next.js | Artgon MEDIA',
  description:
    'Étude de cas : création de la plateforme web immobilière Nador West Wood avec Next.js 15, Laravel et SEO local. +340% de trafic organique en 6 mois.',
  path: '/realisations/nador-west-wood',
})

export default function NadorWestWoodPage() {
  const breadcrumbs = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Réalisations', url: `${SITE_URL}/realisations` },
    { name: 'Nador West Wood', url: `${SITE_URL}/realisations/nador-west-wood` },
  ]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          articleSchema({
            title: 'Nador West Wood — Plateforme immobilière Next.js',
            description: 'Étude de cas : création de la plateforme web immobilière Nador West Wood avec Next.js 15 et SEO local.',
            url: `${SITE_URL}/realisations/nador-west-wood`,
            datePublished: '2024-09-01',
          }),
        ]}
      />

      <section className="bg-gradient-to-br from-brand-navy to-brand-teal py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li><a href="/" className="hover:text-white">Accueil</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/realisations" className="hover:text-white">Réalisations</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Nador West Wood</li>
            </ol>
          </nav>
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium">
            Site web immobilier · 2024
          </span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Nador West Wood</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Plateforme web immobilière pour l&apos;un des projets de référence à Nador, alliant performance Next.js 15 et SEO local de pointe.
          </p>
        </div>
      </section>

      <section className="py-16 bg-teal-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { label: 'Score Lighthouse', value: '96/100' },
              { label: 'Trafic organique', value: '+340%' },
              { label: 'Leads mensuels', value: '120+' },
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <div className="text-4xl font-extrabold text-brand-teal">{kpi.value}</div>
                <div className="mt-2 text-sm font-medium text-gray-600">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="py-24 bg-white prose-artgon">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy">Le contexte</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Nador West Wood est un promoteur immobilier développant un projet résidentiel et commercial d&apos;envergure à Nador. Le client avait besoin d&apos;une vitrine digitale capable de présenter le projet, capter des leads qualifiés et se positionner sur Google pour les recherches immobilières locales.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-brand-navy">Le défi</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Le marché immobilier à Nador est compétitif et peu digitalisé. La concurrence utilisait des sites statiques lents et non optimisés SEO. Notre mission : créer une plateforme ultra-rapide, visuellement impactante et capable de dominer les résultats de recherche locaux en moins de 6 mois.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-brand-navy">Notre solution</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Nous avons développé une plateforme Next.js 15 avec rendu statique (SSG) pour les pages catalogue et rendu serveur (SSR) pour les recherches dynamiques. Le backend Laravel expose une API REST consommée par le frontend et alimente un CMS Sanity permettant au client de gérer son catalogue de biens en autonomie.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li>Architecture Next.js 15 App Router avec SSG/ISR</li>
            <li>Galeries photos optimisées avec next/image et format WebP/AVIF</li>
            <li>JSON-LD LocalBusiness et RealEstateListing sur chaque fiche bien</li>
            <li>Formulaires de contact avec notifications WhatsApp instantanées</li>
            <li>Intégration Google Maps avec marqueurs de la localisation</li>
            <li>Audit SEO local mensuel et suivi des positions sur 50 mots-clés</li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-brand-navy">Les résultats</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            En 6 mois, le site Nador West Wood est passé de l&apos;invisibilité à la première page Google pour les requêtes &quot;immobilier Nador&quot; et &quot;appartement à vendre Nador&quot;. Le trafic organique a augmenté de 340% et le client reçoit désormais plus de 120 leads qualifiés par mois, générant un ROI significatif sur l&apos;investissement digital.
          </p>

          <div className="mt-12 rounded-2xl bg-brand-teal p-8 text-center text-white">
            <h3 className="text-xl font-bold">Vous avez un projet similaire ?</h3>
            <p className="mt-2 text-white/80 text-sm">Contactez-nous pour discuter de votre projet immobilier.</p>
            <a
              href={WHATSAPP_CTA('Bonjour, j\'ai vu la réalisation Nador West Wood et j\'ai un projet immobilier similaire.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-brand-teal hover:bg-gray-50"
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </article>
    </>
  )
}
