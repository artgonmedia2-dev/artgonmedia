import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/seo/JsonLd'
import ProjectScreenshot from '@/components/ui/ProjectScreenshot'
import { Icon } from '@/components/ui/Icons'
import { projectWebsites } from '@/lib/project-websites'
import { projectCaseStudies } from '@/lib/project-case-studies'
import { breadcrumbSchema } from '@/lib/schema'
import { SITE_URL, WHATSAPP_CTA } from '@/lib/constants'

export default function ProjectCaseStudy({ slug }: { slug: string }) {
  const website = projectWebsites.find((project) => project.slug === slug)
  const study = projectCaseStudies.find((project) => project.slug === slug)
  if (!website || !study) notFound()

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Accueil', url: SITE_URL },
        { name: 'Réalisations', url: `${SITE_URL}/realisations` },
        { name: website.title, url: `${SITE_URL}/realisations/${slug}` },
      ])} />
      <section className="bg-gradient-to-br from-brand-navy to-brand-teal py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d’Ariane" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white">Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/realisations" className="hover:text-white">Réalisations</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{website.title}</li>
            </ol>
          </nav>
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium">{website.category}</span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">{website.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">{study.description}</p>
        </div>
      </section>
      <section className="bg-sand py-12 lg:py-16" aria-label={`Aperçu du site ${website.title}`}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-brand-navy/10 shadow-sm">
            <ProjectScreenshot project={website} />
          </div>
        </div>
      </section>
      <article className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-brand-navy">Le contexte</h2>
            <p className="mt-4 leading-relaxed text-gray-600">{study.context}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-navy">La présentation du site</h2>
            <p className="mt-4 leading-relaxed text-gray-600">{study.presentation}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-navy">Les points clés</h2>
            <ul className="mt-4 space-y-3">
              {study.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-600">
                  <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <a href={website.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-brand-teal px-6 py-3 font-semibold text-brand-teal transition-colors hover:bg-brand-teal hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal">
            Voir le site <span aria-hidden="true">↗</span>
          </a>
          <div className="rounded-2xl bg-brand-teal p-8 text-center text-white">
            <h2 className="text-2xl font-bold">Vous avez un projet similaire ?</h2>
            <p className="mt-3 text-white/80">Discutons de votre projet sur WhatsApp.</p>
            <a href={WHATSAPP_CTA(`Bonjour, j’ai vu la réalisation ${website.title} et je souhaite discuter d’un projet similaire.`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-12 items-center rounded-xl bg-white px-6 py-3 font-bold text-brand-teal hover:bg-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </article>
    </>
  )
}
