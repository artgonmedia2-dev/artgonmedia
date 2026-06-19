import type { Service } from '@/lib/services'
import { services } from '@/lib/services'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import FAQ from '@/components/sections/FAQ'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, WHATSAPP_CTA } from '@/lib/constants'

const SERVICE_COLORS: Record<string, string> = {
  'creation-site-web-nador': '#028090',
  'application-mobile-flutter': '#6655A0',
  'referencement-seo-nador': '#F96167',
  'marketing-digital-ads': '#F96167',
  'automatisation-ia': '#6655A0',
  'maintenance-support': '#028090',
}

const CASE_STUDY_TITLES: Record<string, string> = {
  'nador-west-wood': 'Nador West Wood — Plateforme immobilière',
  'diaspora-immobilier-conseil': 'Diaspora Immobilier Conseil — App Flutter iOS & Android',
}

interface ServicePageProps {
  service: Service
}

export default function ServicePage({ service }: ServicePageProps) {
  const url = `${SITE_URL}/services/${service.slug}`
  const color = SERVICE_COLORS[service.slug] ?? '#028090'

  const breadcrumbs = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Services', url: `${SITE_URL}/services` },
    { name: service.navLabel, url },
  ]

  const related = services.filter((s) => service.relatedSlugs.includes(s.slug))

  const ctaMessage = `Bonjour Artgon MEDIA, je souhaite en savoir plus sur votre service "${service.title}". Pouvez-vous me faire un devis ?`

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: service.title, description: service.directAnswer, url }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(service.faq),
        ]}
      />

      <section
        className="py-24 text-white"
        style={{ background: `linear-gradient(135deg, #1E2761 0%, ${color} 100%)` }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li><a href="/" className="hover:text-white">Accueil</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{service.navLabel}</li>
            </ol>
          </nav>
          <div className="flex items-start gap-5">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-4xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              {service.icon}
            </div>
            <div>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{service.title}</h1>
              <p className="mt-4 max-w-2xl text-lg text-white/80 leading-relaxed">
                {service.metaDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-teal-50 p-8 border-l-4 border-brand-teal">
            <p className="text-base leading-relaxed text-gray-800 font-medium">
              {service.directAnswer}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy text-center">
            Les bénéfices pour votre entreprise
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-6">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white text-sm font-bold mb-4"
                  style={{ backgroundColor: color }}
                >
                  {i + 1}
                </div>
                <h3 className="font-bold text-brand-navy">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy text-center">Notre processus</h2>
          <div className="mt-12 space-y-8">
            {service.process.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white"
                  style={{ backgroundColor: color }}
                >
                  {step.step}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-brand-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy text-center">Stack technologique</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {service.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full px-5 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: color }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {service.caseStudySlug && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-navy text-center">Étude de cas</h2>
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8">
              <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                Réalisation client
              </span>
              <h3 className="mt-3 text-xl font-bold text-brand-navy">
                {CASE_STUDY_TITLES[service.caseStudySlug] ?? service.caseStudySlug}
              </h3>
              <p className="mt-3 text-gray-600">
                Découvrez comment nous avons appliqué notre expertise en {service.navLabel.toLowerCase()} pour transformer la présence digitale de ce client.
              </p>
              <Link
                href={`/realisations/${service.caseStudySlug}`}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-teal hover:underline"
              >
                Lire l&apos;étude de cas →
              </Link>
            </div>
          </div>
        </section>
      )}

      <FAQ
        items={service.faq}
        title={`FAQ — ${service.navLabel}`}
        includeJsonLd={false}
      />

      <section className="py-24" style={{ backgroundColor: color }}>
        <div className="mx-auto max-w-3xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Démarrez votre projet maintenant</h2>
          <p className="mt-4 text-white/80">
            Contactez-nous sur WhatsApp pour un devis gratuit et une réponse sous 2h.
          </p>
          <a
            href={WHATSAPP_CTA(ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold transition-colors hover:bg-gray-100"
            style={{ color }}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 2.106.547 4.087 1.508 5.807L.057 23.04a.75.75 0 00.904.904l5.233-1.451A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 1.5C18.065 1.5 23 6.435 23 12S18.065 22.5 12 22.5c-1.86 0-3.615-.48-5.145-1.325l-.298-.168-3.092.858.858-3.093-.168-.298A10.457 10.457 0 011.5 12C1.5 5.935 6.435 1.5 12 1.5z" clipRule="evenodd"/>
            </svg>
            Obtenir un devis gratuit
          </a>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-navy text-center">Services complémentaires</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="flex items-center gap-4 rounded-xl border border-gray-200 p-5 hover:border-brand-teal hover:shadow-sm transition-all"
                >
                  <span className="text-2xl">{r.icon}</span>
                  <div>
                    <div className="font-semibold text-brand-navy">{r.navLabel}</div>
                    <div className="text-xs text-gray-500 mt-0.5">Découvrir →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
