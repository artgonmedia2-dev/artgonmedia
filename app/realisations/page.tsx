import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import SectionTitle from '@/components/ui/SectionTitle'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = generateMetadata({
  title: 'Nos réalisations web & digitales à Nador — Artgon MEDIA',
  description:
    'Découvrez les projets réalisés par Artgon MEDIA : sites web, applications mobiles Flutter et campagnes digitales pour des clients à Nador et en Europe.',
  path: '/realisations',
})

const PROJECTS = [
  {
    slug: 'nador-west-wood',
    title: 'Nador West Wood',
    category: 'Site web immobilier',
    client: 'Promoteur immobilier, Nador',
    year: '2024',
    description:
      'Plateforme web immobilière pour un grand projet à Nador : catalogue de biens, visuels HD, formulaires de contact qualifiés, SEO local avancé et intégration Google Maps.',
    results: ['Score Lighthouse 96/100', '+340% de trafic organique en 6 mois', '120 leads générés/mois'],
    tech: ['Next.js 15', 'Laravel', 'MySQL', 'Sanity CMS'],
    color: '#028090',
  },
  {
    slug: 'diaspora-immobilier-conseil',
    title: 'Diaspora Immobilier Conseil',
    category: 'Application mobile Flutter',
    client: 'Cabinet conseil, Belgique',
    year: '2024',
    description:
      'Application mobile Flutter cross-platform (iOS & Android) pour permettre à la diaspora marocaine en Europe de gérer et suivre leurs investissements immobiliers au Maroc en temps réel.',
    results: ['500+ téléchargements en 3 mois', '4.8/5 sur App Store et Play Store', 'Temps de chargement < 1.5s'],
    tech: ['Flutter 3', 'Dart', 'Laravel API', 'Firebase'],
    color: '#6655A0',
  },
]

export default function RealisationsPage() {
  const breadcrumbs = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Réalisations', url: `${SITE_URL}/realisations` },
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
              <li className="text-white">Réalisations</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Nos réalisations</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Des projets concrets, des résultats mesurables. Découvrez comment nous avons transformé la présence digitale de nos clients à Nador et au-delà.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {PROJECTS.map((project, idx) => (
              <article
                key={project.slug}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div
                  className="flex items-center justify-center rounded-2xl p-16 text-center text-white"
                  style={{ backgroundColor: project.color }}
                >
                  <div>
                    <div className="text-6xl font-extrabold opacity-20">{project.year}</div>
                    <div className="mt-4 text-2xl font-bold">{project.title}</div>
                    <div className="mt-2 text-white/70">{project.category}</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 w-fit">
                    {project.category}
                  </span>
                  <h2 className="mt-3 text-3xl font-bold text-brand-navy">{project.title}</h2>
                  <p className="mt-2 text-sm text-gray-500">{project.client} · {project.year}</p>
                  <p className="mt-4 leading-relaxed text-gray-600">{project.description}</p>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Résultats</h3>
                    <ul className="mt-3 space-y-2">
                      {project.results.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-sm font-medium text-brand-navy">
                          <svg className="h-5 w-5 text-brand-teal shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: project.color }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/realisations/${project.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-teal hover:underline"
                  >
                    Lire l&apos;étude de cas complète →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
