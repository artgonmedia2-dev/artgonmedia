import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import { WHATSAPP_CTA, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = generateMetadata({
  title: 'Agence web pour la diaspora marocaine aux Pays-Bas — Artgon MEDIA',
  description:
    'Artgon MEDIA crée des sites web et apps mobiles pour les Marocains aux Pays-Bas (Amsterdam, Rotterdam, La Haye). Projets immobiliers, e-commerce et digital. Devis gratuit.',
  path: '/pays-bas',
})

const FAQ = [
  {
    question: 'Proposez-vous des sites web en néerlandais ?',
    answer: 'Nous développons principalement en français et en arabe. Pour le néerlandais, nous collaborons avec des traducteurs partenaires. La grande majorité de nos clients néerlandais préfèrent un site en français ou bilingue FR/AR ciblant le marché marocain.',
  },
  {
    question: 'Peut-on cibler les Marocains aux Pays-Bas avec vos campagnes publicitaires ?',
    answer: 'Oui. La communauté marocaine aux Pays-Bas compte plus de 400 000 personnes. Nous créons des campagnes Meta Ads et Google Ads ciblant précisément cette audience selon la ville, la langue et les intérêts.',
  },
]

export default function PaysBasPage() {
  const breadcrumbs = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Diaspora Pays-Bas', url: `${SITE_URL}/pays-bas` },
  ]

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(FAQ)]} />

      <section className="bg-gradient-to-br from-brand-navy to-brand-teal py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-4xl" aria-hidden="true">🇳🇱</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Agence web pour Marocains aux Pays-Bas
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Vous êtes marocain(e) aux Pays-Bas (Amsterdam, Rotterdam, La Haye) avec un projet digital ? Artgon MEDIA est votre agence web de confiance basée à Nador.
            </p>
            <a
              href={WHATSAPP_CTA('Bonjour, je suis basé(e) aux Pays-Bas et j\'ai un projet digital. Pouvez-vous m\'aider ?')}
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy">Pourquoi choisir Artgon MEDIA depuis les Pays-Bas ?</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            La communauté marocaine aux Pays-Bas est l&apos;une des plus importantes d&apos;Europe avec plus de 400 000 personnes. Artgon MEDIA comprend les besoins spécifiques de cette diaspora : projets immobiliers au Maroc, e-commerce entre les deux pays, marketing bilingue FR/AR/NL.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { stat: '400 000+', label: 'Marocains aux Pays-Bas' },
              { stat: '5', label: 'Grandes villes ciblées' },
              { stat: '< 2h', label: 'Réponse sur WhatsApp' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-teal-50 p-8 text-center">
                <div className="text-3xl font-extrabold text-brand-teal">{item.stat}</div>
                <div className="mt-2 text-sm font-medium text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-bold text-brand-navy">Questions fréquentes</h2>
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-brand-navy">{item.question}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
