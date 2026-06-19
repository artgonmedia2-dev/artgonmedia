import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import { LinkButton } from '@/components/ui/Button'
import { WHATSAPP_CTA, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = generateMetadata({
  title: 'Agence web pour la diaspora marocaine en Belgique — Artgon MEDIA',
  description:
    'Artgon MEDIA crée des sites web et applications mobiles pour la communauté marocaine en Belgique (Bruxelles, Liège, Anvers). Projets immobiliers, e-commerce et services. Devis gratuit.',
  path: '/belgique',
})

const FAQ = [
  {
    question: 'Artgon MEDIA peut-elle travailler avec des clients basés en Belgique ?',
    answer:
      'Oui, nous travaillons régulièrement avec des clients marocains en Belgique (Bruxelles, Liège, Anvers, Gand). Toutes nos communications se font par WhatsApp, email et visioconférence. La facturation peut se faire en MAD ou en EUR.',
  },
  {
    question: 'Pouvez-vous créer un site web pour mon entreprise en Belgique qui cible le marché marocain ?',
    answer:
      'C\'est notre spécialité. Nous créons des sites bilingues français/arabe optimisés pour les recherches depuis le Maroc, ciblant spécifiquement la clientèle marocaine intéressée par des services depuis la diaspora (immobilier, transferts, import/export).',
  },
  {
    question: 'Comment se passe la collaboration à distance avec une agence à Nador depuis la Belgique ?',
    answer:
      'Nous avons un process rodé pour la collaboration à distance : brief par Google Meet ou WhatsApp, validations asynchrones sur Figma, livrables partagés sur Drive. Nos clients belges apprécient notre réactivité et la qualité du suivi.',
  },
]

export default function BelgiquePage() {
  const breadcrumbs = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Diaspora Belgique', url: `${SITE_URL}/belgique` },
  ]

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(FAQ)]} />

      <section className="bg-gradient-to-br from-brand-navy to-brand-teal py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-4xl" aria-hidden="true">🇧🇪</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Agence web pour Marocains en Belgique
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Vous êtes marocain(e) en Belgique et vous avez un projet digital au Maroc ou en Europe ? Artgon MEDIA vous accompagne depuis Nador avec la même qualité qu&apos;une agence belge.
            </p>
            <a
              href={WHATSAPP_CTA('Bonjour, je suis basé(e) en Belgique et j\'ai un projet digital. Pouvez-vous m\'aider ?')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-coral px-8 py-4 font-bold text-white hover:bg-red-600"
            >
              Parler de mon projet sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy">Nos services pour la diaspora en Belgique</h2>
              <ul className="mt-8 space-y-5">
                {[
                  { title: 'Site web immobilier Maroc', desc: 'Vitrine de vos biens immobiliers au Maroc à destination des acheteurs locaux et de la diaspora.' },
                  { title: 'Application mobile', desc: 'App Flutter pour gérer vos biens ou services à distance depuis la Belgique.' },
                  { title: 'Boutique en ligne', desc: 'E-commerce pour vendre des produits marocains en Belgique ou en Europe.' },
                  { title: 'Marketing digital', desc: 'Campagnes Facebook & Instagram ciblant les Marocains en Belgique, France et Pays-Bas.' },
                  { title: 'Site bilingue FR/AR', desc: 'Sites web bilingues adaptés aux deux communautés linguistiques au Maroc et en Belgique.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-teal text-white text-sm">✓</div>
                    <div>
                      <div className="font-bold text-brand-navy">{item.title}</div>
                      <div className="text-sm text-gray-600 mt-0.5">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-brand-navy">Questions fréquentes</h2>
              {FAQ.map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-100 p-6">
                  <h3 className="font-bold text-brand-navy">{item.question}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
