import SectionTitle from '@/components/ui/SectionTitle'

const WHY_US = [
  {
    icon: '📍',
    title: 'Basés à Nador',
    description:
      'Nous connaissons le marché local de Nador et de la région Orientale. Des rendez-vous en personne sont possibles.',
  },
  {
    icon: '🚀',
    title: 'Livraison rapide',
    description:
      'Nos process agiles garantissent des délais courts : site vitrine en 2-3 semaines, app mobile en 6-10 semaines.',
  },
  {
    icon: '📊',
    title: 'Résultats mesurables',
    description:
      'Chaque projet est suivi par des KPIs clairs : trafic, leads, classement Google et ROI des campagnes publicitaires.',
  },
  {
    icon: '🔒',
    title: 'Sécurité garantie',
    description:
      'SSL, HTTPS, headers sécurisés, sauvegardes quotidiennes et audit de sécurité inclus sur chaque projet.',
  },
  {
    icon: '🌍',
    title: 'Expertise diaspora',
    description:
      'Nous ciblons la diaspora marocaine en Europe (Belgique, France, Pays-Bas, Suisse) pour vos projets immobiliers et e-commerce.',
  },
  {
    icon: '🤝',
    title: 'Support WhatsApp',
    description:
      'Contactez-nous directement sur WhatsApp pour un suivi réactif. Temps de réponse moyen : moins de 2h en heures ouvrables.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Pourquoi nous choisir"
          title="L'agence digitale de référence à Nador"
          subtitle="Expertise technique, connaissance du marché local et accompagnement humain : voilà ce qui nous distingue."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item) => (
            <div key={item.title} className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
