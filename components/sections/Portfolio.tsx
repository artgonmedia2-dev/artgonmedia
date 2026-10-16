import Link from 'next/link'
import SectionTitle from '@/components/ui/SectionTitle'
import ProjectScreenshot from '@/components/ui/ProjectScreenshot'
import ProjectCardDetails from '@/components/ui/ProjectCardDetails'
import { projectWebsites } from '@/lib/project-websites'
import { projectCaseStudies } from '@/lib/project-case-studies'

const PROJECTS = [
  {
    slug: 'nador-west-wood',
    title: 'Nador West Wood',
    category: 'Plateforme immobilière',
    description:
      'Plateforme web immobilière pour le projet Nador West Wood : catalogue de biens, formulaires de contact qualifiés et SEO local optimisé.',
    tech: ['Next.js', 'Laravel', 'MySQL'],
    color: '#028090',
  },
  {
    slug: 'diaspora-immobilier-conseil',
    title: 'Diaspora Immobilier Conseil',
    category: 'Application mobile Flutter',
    description:
      'Application mobile Flutter (iOS & Android) permettant à la diaspora marocaine en Europe de gérer et suivre leurs biens immobiliers au Maroc.',
    tech: ['Flutter', 'Laravel', 'Firebase'],
    color: '#6655A0',
  },
]

export default function Portfolio() {
  return (
    <section className="bg-sand py-24" id="realisations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Réalisations"
          title="Nos derniers projets"
          subtitle="Des projets concrets qui ont transformé la présence digitale de nos clients à Nador et en Europe."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projectWebsites.slice(0, 2).map((website) => {
            const project = PROJECTS.find((item) => item.slug === website.slug)
            const study = projectCaseStudies.find((item) => item.slug === website.slug)
            return (
            <article key={website.slug} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <ProjectScreenshot project={website} />
              <div className="p-8">
                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {project?.category ?? website.category}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
                  {website.title}
                </h3>
                {study ? <ProjectCardDetails project={study} /> : <p className="mt-3 leading-relaxed text-gray-600">{project?.description}</p>}
                {project && <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-brand-navy">
                      {t}
                    </span>
                  ))}
                </div>}
                <Link href={`/realisations/${website.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-teal hover:underline">
                  Lire l&apos;&#233;tude de cas compl&#232;te <span aria-hidden="true">&#8594;</span>
                </Link>
              </div>
            </article>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-teal px-8 py-3 font-semibold text-brand-teal transition-colors hover:bg-brand-teal hover:text-white"
          >
            Voir toutes les réalisations
          </Link>
        </div>
      </div>
    </section>
  )
}
