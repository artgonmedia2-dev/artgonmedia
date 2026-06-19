import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import Card from '@/components/ui/Card'
import { services } from '@/lib/services'
import { SITE_URL, WHATSAPP_CTA } from '@/lib/constants'

const SERVICE_COLORS: Record<string, string> = {
  'creation-site-web-nador': '#028090',
  'application-mobile-flutter': '#6655A0',
  'referencement-seo-nador': '#F96167',
  'marketing-digital-ads': '#F96167',
  'automatisation-ia': '#6655A0',
  'maintenance-support': '#028090',
}

export const metadata: Metadata = generateMetadata({
  title: 'Services web & digitaux à Nador — Artgon MEDIA',
  description:
    'Découvrez tous les services d\'Artgon MEDIA à Nador : création de sites web, applications mobiles Flutter, SEO, marketing digital, automatisation IA et maintenance. Devis gratuit.',
  path: '/services',
})

export default function ServicesPage() {
  const breadcrumbs = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Services', url: `${SITE_URL}/services` },
  ]

  const schemas = services.map((s) =>
    serviceSchema({
      name: s.title,
      description: s.directAnswer,
      url: `${SITE_URL}/services/${s.slug}`,
    })
  )

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), ...schemas]} />

      <section className="bg-gradient-to-br from-brand-navy to-brand-teal py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><a href="/" className="hover:text-white">Accueil</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Services</li>
            </ol>
          </nav>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Services web & digitaux à Nador
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Artgon MEDIA propose une gamme complète de services digitaux pour propulser votre entreprise en ligne, de la création de site web à l&apos;automatisation par l&apos;IA.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const color = SERVICE_COLORS[service.slug] ?? '#028090'
              return (
                <Card key={service.slug} hover>
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <div
                      className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
                      style={{ backgroundColor: `${color}18` }}
                    >
                      {service.icon}
                    </div>
                    <h2 className="text-xl font-bold text-brand-navy hover:text-brand-teal transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {service.directAnswer}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span
                      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold"
                      style={{ color }}
                    >
                      Découvrir ce service →
                    </span>
                  </Link>
                </Card>
              )
            })}
          </div>

          <div className="mt-20 rounded-2xl bg-gray-50 p-12 text-center">
            <h2 className="text-2xl font-bold text-brand-navy">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="mt-3 text-gray-600">
              Nous développons des solutions sur mesure adaptées à chaque besoin. Décrivez-nous votre projet.
            </p>
            <a
              href={WHATSAPP_CTA('Bonjour, j\'ai un besoin spécifique non listé sur votre site. Pouvez-vous m\'aider ?')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-teal px-8 py-3 font-semibold text-white hover:bg-teal-700"
            >
              Décrire mon projet sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
