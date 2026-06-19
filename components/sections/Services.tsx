import Link from 'next/link'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'
import { services } from '@/lib/services'

const SERVICE_COLORS: Record<string, string> = {
  'creation-site-web-nador': '#028090',
  'application-mobile-flutter': '#6655A0',
  'referencement-seo-nador': '#F96167',
  'marketing-digital-ads': '#F96167',
  'automatisation-ia': '#6655A0',
  'maintenance-support': '#028090',
}

export default function Services() {
  return (
    <section className="bg-gray-50 py-24" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nos services"
          title="Solutions digitales complètes à Nador"
          subtitle="De la création de votre site web à votre stratégie marketing, nous couvrons tous vos besoins digitaux."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const color = SERVICE_COLORS[service.slug] ?? '#028090'
            return (
              <Card key={service.slug} hover className="group">
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                    style={{ backgroundColor: `${color}18` }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
                    {service.navLabel}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {service.directAnswer.substring(0, 120)}...
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                    style={{ color }}
                  >
                    En savoir plus
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-teal px-8 py-3 font-semibold text-brand-teal transition-colors hover:bg-brand-teal hover:text-white"
          >
            Voir tous nos services
          </Link>
        </div>
      </div>
    </section>
  )
}
