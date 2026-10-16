import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import './services.css'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import Card from '@/components/ui/Card'
import { ServiceIcon } from '@/components/ui/Icons'
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
    <div className="services-ui">
      <JsonLd data={[breadcrumbSchema(breadcrumbs), ...schemas]} />

      <section className="services-hero relative isolate overflow-hidden bg-brand-navy text-white">
        <div className="services-hero-visual" aria-hidden="true">
          <Image src="/hero-digital-services.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="services-hero-content relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><a href="/" className="hover:text-white">Accueil</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Services</li>
            </ol>
          </nav>
          <div className="services-hero-copy max-w-2xl">
            <h1 className="font-sans text-4xl font-bold sm:text-5xl">
              Services web & digitaux à Nador
            </h1>
            <p className="mt-6 font-sans text-lg font-normal text-white/80">
              Artgon MEDIA propose une gamme complète de services digitaux pour propulser votre entreprise en ligne, de la création de site web à l&apos;automatisation par l&apos;IA.
            </p>
          </div>
        </div>
      </section>

      <section className="services-catalog bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const color = SERVICE_COLORS[service.slug] ?? '#028090'
              return (
                <Card key={service.slug} hover className="service-card group">
                  <Link href={`/services/${service.slug}`} className="service-card-link flex h-full flex-col items-start">
                    <div
                      className="service-icon mb-6 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${color}12`, color, borderColor: `${color}28` }}
                    >
                      <ServiceIcon slug={service.slug} className="h-7 w-7" />
                    </div>
                    <h2 className="service-card-title text-xl font-bold text-brand-navy transition-colors group-hover:text-brand-teal">
                      {service.title}
                    </h2>
                    <p className="service-card-description mt-3 text-sm leading-relaxed text-gray-600">
                      {service.directAnswer}
                    </p>
                    <div className="service-tech flex flex-wrap gap-2">
                      {service.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="rounded-full border border-brand-navy/5 bg-sand/70 px-3 py-1 text-xs text-brand-navy/75">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span
                      className="service-card-action mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal"
                    >
                      Découvrir ce service <span className="service-arrow" aria-hidden="true">→</span>
                    </span>
                  </Link>
                </Card>
              )
            })}
          </div>

          <div className="services-contact relative overflow-hidden rounded-2xl bg-brand-navy text-center">
            <h2 className="relative text-2xl font-bold text-white">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl leading-relaxed text-white/80">
              Nous développons des solutions sur mesure adaptées à chaque besoin. Décrivez-nous votre projet.
            </p>
            <a
              href={WHATSAPP_CTA('Bonjour, j\'ai un besoin spécifique non listé sur votre site. Pouvez-vous m\'aider ?')}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 font-semibold text-white transition-colors hover:bg-brand-teal-light hover:text-brand-navy sm:px-8"
            >
              Décrire mon projet sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
