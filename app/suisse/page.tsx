import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import { WHATSAPP_CTA, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = generateMetadata({
  title: 'Agence web pour la diaspora marocaine en Suisse — Artgon MEDIA',
  description:
    'Artgon MEDIA crée des sites web et applications mobiles pour les Marocains en Suisse (Genève, Zurich, Berne). Projets immobiliers et digitaux au Maroc et en Europe.',
  path: '/suisse',
})

const FAQ = [
  {
    question: 'Pouvez-vous facturer en CHF (francs suisses) ?',
    answer: 'Oui, nous acceptons les paiements en MAD, EUR et CHF par virement bancaire international ou via PayPal.',
  },
  {
    question: 'Travaillez-vous avec des entreprises suisses souhaitant cibler le marché marocain ?',
    answer: 'Oui, notamment pour les transferts de fonds, l\'immobilier et le commerce import/export. Nous connaissons parfaitement les deux marchés.',
  },
]

export default function SuissePage() {
  const breadcrumbs = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Diaspora Suisse', url: `${SITE_URL}/suisse` },
  ]

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(FAQ)]} />

      <section className="bg-gradient-to-br from-brand-navy to-brand-teal py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-4xl" aria-hidden="true">🇨🇭</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Agence web pour Marocains en Suisse
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Vous êtes marocain(e) en Suisse et vous avez un projet digital au Maroc ou en Europe ? Notre équipe à Nador vous accompagne avec expertise et réactivité.
            </p>
            <a
              href={WHATSAPP_CTA('Bonjour, je suis basé(e) en Suisse et j\'ai un projet digital. Pouvez-vous m\'aider ?')}
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
          <h2 className="text-3xl font-bold text-brand-navy">Services digitaux pour la communauté marocaine en Suisse</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            La diaspora marocaine en Suisse représente plus de 100 000 personnes, principalement à Genève, Zurich, Berne et Lausanne. Beaucoup investissent dans l&apos;immobilier au Maroc ou développent des activités commerciales entre les deux pays. Artgon MEDIA est le partenaire digital idéal pour ces projets transnationaux.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { icon: '🏡', title: 'Immobilier Maroc', desc: 'Site vitrine ou portail pour vos biens immobiliers à Nador, Casablanca ou Marrakech.' },
              { icon: '📱', title: 'App mobile cross-border', desc: 'Application connectant votre business en Suisse à votre clientèle au Maroc.' },
              { icon: '🛒', title: 'E-commerce', desc: 'Boutique en ligne pour vendre des produits marocains en Suisse et en Europe.' },
              { icon: '📣', title: 'Marketing ciblé', desc: 'Campagnes Meta Ads ciblant les Marocains en Suisse selon la ville et les intérêts.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-100 p-6">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-3 font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 space-y-4">
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
