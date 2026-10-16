import type { Metadata } from 'next'
import Image from 'next/image'
import './tarifs.css'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import Pricing from '@/components/sections/Pricing'
import { SITE_URL } from '@/lib/constants'

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
    <div className="tarifs-ui">
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(TARIF_FAQ)]} />

      <section className="site-page-hero tarifs-hero relative isolate overflow-hidden bg-brand-navy text-white" data-page-hero="">
        <div className="tarifs-hero-visual" aria-hidden="true">
          <Image
            src="/hero-digital-services.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 72vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="tarifs-hero-content relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="tarifs-hero-copy">
            <h1 className="font-bold text-white">Tarifs transparents à Nador</h1>
            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-white/80">
              Des prix clairs, sans surprise. Chaque forfait est détaillé et chaque dépassement de scope est soumis à votre accord avant facturation.
            </p>
          </div>
        </div>
      </section>

      <Pricing />

      <section className="tarifs-faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-brand-navy">Questions sur nos tarifs</h2>
          <div className="tarifs-faq-list mt-8">
            {TARIF_FAQ.map((item) => (
              <div key={item.question} className="tarifs-faq-item">
                <h3 className="font-bold text-brand-navy">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
