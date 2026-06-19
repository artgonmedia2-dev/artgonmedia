import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import Pricing from '@/components/sections/Pricing'
import { SITE_URL, WHATSAPP_CTA } from '@/lib/constants'

export const metadata: Metadata = generateMetadata({
  title: 'Tarifs création site web Nador — Artgon MEDIA | Prix transparents',
  description:
    'Tarifs clairs et transparents pour la création de site web, applications mobiles et SEO à Nador. Forfaits à partir de 1 500 MAD. Devis personnalisé gratuit.',
  path: '/tarifs',
})

const TARIF_FAQ = [
  {
    question: 'Les prix indiqués sont-ils TTC ?',
    answer: 'Oui, tous les prix affichés sont toutes taxes comprises (TTC) en dirhams marocains (MAD). Aucun frais caché ne s\'applique, le devis signé est le prix définitif.',
  },
  {
    question: 'Est-il possible de payer en plusieurs fois ?',
    answer: 'Oui, nous proposons un paiement en 2 ou 3 fois pour les projets supérieurs à 5 000 MAD. Les modalités sont : 40% à la signature, 40% à la livraison de la maquette et 20% à la mise en ligne.',
  },
  {
    question: 'L\'hébergement est-il inclus dans les tarifs ?',
    answer: 'Les forfaits Starter et Pro incluent 1 an d\'hébergement offert sur notre infrastructure. À partir de la 2e année, l\'hébergement est facturé 600 MAD/an (mutualisé) ou 1 200 MAD/an (VPS). Nous proposons aussi des déploiements Vercel ou sur votre propre hébergeur.',
  },
  {
    question: 'Que se passe-t-il si je dépasse le scope défini dans le devis ?',
    answer: 'Toute modification hors scope est chiffrée et soumise à votre accord avant réalisation. Notre facturation est transparente : jamais de surprise.',
  },
]

export default function TarifsPage() {
  const breadcrumbs = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Tarifs', url: `${SITE_URL}/tarifs` },
  ]

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(TARIF_FAQ)]} />

      <section className="bg-gradient-to-br from-brand-navy to-brand-teal py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><a href="/" className="hover:text-white">Accueil</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Tarifs</li>
            </ol>
          </nav>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">Tarifs transparents à Nador</h1>
            <p className="mt-6 text-lg text-white/80">
              Des prix clairs, sans surprise. Chaque forfait est détaillé et chaque dépassement de scope est soumis à votre accord avant facturation.
            </p>
          </div>
        </div>
      </section>

      <Pricing />

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy text-center">Questions sur nos tarifs</h2>
          <div className="mt-8 space-y-6">
            {TARIF_FAQ.map((item, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="font-bold text-brand-navy">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
