import type { Metadata } from 'next'
import Image from 'next/image'
import './realisations.css'
import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import ProjectScreenshot from '@/components/ui/ProjectScreenshot'
import ProjectCardDetails from '@/components/ui/ProjectCardDetails'
import { projectWebsites } from '@/lib/project-websites'
import { projectCaseStudies } from '@/lib/project-case-studies'
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
    <div className="realisations-ui">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="site-page-hero portfolio-hero relative isolate bg-brand-navy text-white" data-page-hero="">
        <div className="portfolio-hero-visual" aria-hidden="true">
          <Image src="/hero-artgon-projects.webp" alt="" fill priority sizes="(min-width: 1024px) 72vw, 100vw" className="object-cover" />
        </div>
        <div className="portfolio-hero-content relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="portfolio-hero-copy">
          <h1 className="font-bold text-white">Nos réalisations</h1>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-white/80">
            Des projets concrets, des résultats mesurables. Découvrez comment nous avons transformé la présence digitale de nos clients à Nador et au-delà.
          </p>
          </div>
        </div>
      </section>

      <section className="portfolio-gallery bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="portfolio-projects space-y-8 lg:space-y-12">
            {projectWebsites.map((website, idx) => {
              const project = PROJECTS.find((item) => item.slug === website.slug)
              const study = projectCaseStudies.find((item) => item.slug === website.slug)
              return (
              <article
                key={website.slug}
                className="portfolio-project grid grid-cols-1 items-center gap-8 rounded-2xl border border-brand-navy/10 bg-white p-5 sm:p-8 lg:grid-cols-2 lg:gap-12"
              >
                <div className={`portfolio-screenshot-stage overflow-hidden rounded-2xl border border-brand-navy/5 bg-sand p-3 sm:p-4 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}><ProjectScreenshot project={website} /></div>
                <div className="portfolio-project-details flex min-w-0 flex-col justify-center">
                  <span className="portfolio-category inline-block w-fit rounded-full border border-brand-teal/10 bg-brand-teal/5 px-3 py-1.5 text-xs font-medium text-brand-teal">
                    {project?.category ?? website.category}
                  </span>
                  <h2 className="mt-3 text-3xl font-bold text-brand-navy">{website.title}</h2>
                  {project ? <>
                  <p className="mt-2 text-sm text-gray-500">{project.client} · {project.year}</p>
                  <p className="mt-4 leading-relaxed text-gray-600">{project.description}</p>

                  <div className="portfolio-results mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Résultats</h3>
                    <ul className="mt-3 space-y-2">
                      {project.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm font-medium text-brand-navy">
                          <svg className="mt-0.5 h-5 w-5 text-brand-teal shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full border px-3 py-1.5 text-xs font-medium text-brand-navy" style={{ backgroundColor: `${project.color}12`, borderColor: `${project.color}28` }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/realisations/${project.slug}`}
                    className="portfolio-case-link mt-7 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-xl border border-brand-teal/30 px-4 py-3 text-sm font-semibold text-brand-teal transition-colors hover:bg-brand-teal hover:text-white"
                  >
                    Lire l&apos;étude de cas complète →
                  </Link>
                  </> : <>
                    {study && <ProjectCardDetails project={study} />}
                    <Link href={`/realisations/${website.slug}`} className="portfolio-case-link mt-7 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-xl border border-brand-teal/30 px-4 py-3 text-sm font-semibold text-brand-teal transition-colors hover:bg-brand-teal hover:text-white">
                      Lire l&apos;&#233;tude de cas compl&#232;te <span aria-hidden="true">&#8594;</span>
                    </Link>
                  </>}
                </div>
              </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
