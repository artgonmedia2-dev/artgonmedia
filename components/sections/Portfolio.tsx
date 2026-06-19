import Link from 'next/link'
import SectionTitle from '@/components/ui/SectionTitle'

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
    <section className="bg-gray-50 py-24" id="realisations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Réalisations"
          title="Nos derniers projets"
          subtitle="Des projets concrets qui ont transformé la présence digitale de nos clients à Nador et en Europe."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <article key={project.slug} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div
                className="h-3 w-full"
                style={{ backgroundColor: project.color }}
                aria-hidden="true"
              />
              <div className="p-8">
                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {project.category}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                      style={{ backgroundColor: project.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/realisations/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-teal hover:underline"
                >
                  Voir l&apos;étude de cas
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
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
