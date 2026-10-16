import { notFound } from 'next/navigation'
import JsonLd from '@/components/seo/JsonLd'
import CaseStudyPreview from '@/components/ui/CaseStudyPreview'
import './case-study.css'
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
    <div className="case-study-ui">
      <JsonLd data={breadcrumbSchema([
        { name: 'Accueil', url: SITE_URL },
        { name: 'Réalisations', url: `${SITE_URL}/realisations` },
        { name: website.title, url: `${SITE_URL}/realisations/${slug}` },
      ])} />
      <header className="case-study-header bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-brand-teal/10 bg-brand-teal/5 px-3 py-1 text-xs font-medium text-brand-teal">{website.category}</span>
          <h1 className="mt-3 font-bold text-brand-navy">{website.title}</h1>
          <p className="mt-3 text-base leading-relaxed text-gray-600">{study.description}</p>
        </div>
      </header>
      <CaseStudyPreview slug={slug}>
            <h2 className="text-2xl font-bold text-brand-navy">Le contexte</h2>
            <p className="mt-4 leading-relaxed text-gray-600">{study.context}</p>
      </CaseStudyPreview>
      <article className="case-study-article bg-white">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
          
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
          <div className="case-study-contact rounded-2xl bg-brand-navy p-6 text-center text-white sm:p-8">
            <h2 className="text-2xl font-bold">Vous avez un projet similaire ?</h2>
            <p className="mt-3 text-white/80">Discutons de votre projet sur WhatsApp.</p>
            <a href={WHATSAPP_CTA(`Bonjour, j’ai vu la réalisation ${website.title} et je souhaite discuter d’un projet similaire.`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-12 items-center rounded-xl bg-white px-6 py-3 font-bold text-brand-teal hover:bg-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}
