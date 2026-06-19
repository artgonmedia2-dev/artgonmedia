import SectionTitle from '@/components/ui/SectionTitle'
import { WHATSAPP_CTA } from '@/lib/constants'

const PLANS = [
  {
    name: 'Starter',
    price: '1 500',
    currency: 'MAD',
    period: 'unique',
    description: 'Site vitrine one-page idéal pour les indépendants et petites entreprises à Nador.',
    features: [
      '1 page responsive (sections multiples)',
      'Design personnalisé',
      'Formulaire de contact WhatsApp',
      'Optimisation SEO de base',
      'Hébergement 1 an offert',
      'Formation à la gestion',
    ],
    cta: 'Démarrer avec Starter',
    highlight: false,
    color: 'border-gray-200',
  },
  {
    name: 'Pro',
    price: '4 500',
    currency: 'MAD',
    period: 'unique',
    description: 'Site multi-pages professionnel avec CMS pour PME et commerces de la région Orientale.',
    features: [
      'Jusqu\'à 10 pages',
      'CMS intégré (gestion autonome)',
      'Blog et articles SEO',
      'Optimisation SEO avancée',
      'Google Analytics 4 + Search Console',
      'Hébergement 1 an offert',
      '3 mois de support inclus',
      'Formation complète',
    ],
    cta: 'Choisir le plan Pro',
    highlight: true,
    color: 'border-brand-teal',
  },
  {
    name: 'E-commerce',
    price: '9 000',
    currency: 'MAD',
    period: 'unique',
    description: 'Boutique en ligne complète avec paiement, gestion des stocks et tableau de bord.',
    features: [
      'Catalogue produits illimité',
      'Paiement en ligne (CMI, PayPal)',
      'Gestion des stocks',
      'Espace client',
      'SEO e-commerce avancé',
      'Intégration réseaux sociaux',
      '6 mois de support inclus',
    ],
    cta: 'Créer ma boutique',
    highlight: false,
    color: 'border-gray-200',
  },
]

export default function Pricing() {
  return (
    <section className="py-24 bg-white" id="tarifs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nos tarifs"
          title="Des prix transparents à Nador"
          subtitle="Tous les prix sont en dirhams marocains (MAD), TVA incluse. Devis personnalisé gratuit sur demande."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 bg-white p-8 shadow-sm ${plan.color} ${
                plan.highlight ? 'ring-2 ring-brand-teal ring-offset-2' : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-brand-teal px-4 py-1.5 text-sm font-bold text-white">
                    Le plus populaire
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-brand-navy">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-brand-navy">{plan.price}</span>
                  <span className="text-lg text-gray-500">{plan.currency}</span>
                  <span className="text-sm text-gray-400">/{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-gray-600">{plan.description}</p>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_CTA(`Bonjour, je suis intéressé par le plan ${plan.name} à ${plan.price} MAD.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block w-full rounded-xl py-3 text-center font-semibold transition-colors ${
                  plan.highlight
                    ? 'bg-brand-teal text-white hover:bg-teal-700'
                    : 'border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Besoin d&apos;un devis sur mesure pour un projet plus complexe ?{' '}
          <a
            href={WHATSAPP_CTA('Bonjour, j\'ai un projet sur mesure. Pouvez-vous me faire un devis ?')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-teal hover:underline"
          >
            Contactez-nous sur WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}
