import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import WhyUs from '@/components/sections/WhyUs'
import Portfolio from '@/components/sections/Portfolio'
import Pricing from '@/components/sections/Pricing'
import Partners from '@/components/sections/Partners'
import FAQ from '@/components/sections/FAQ'
import ContactForm from '@/components/sections/ContactForm'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} — Agence web & digitale à Nador, Maroc`,
  description:
    'Artgon MEDIA : agence web à Nador spécialisée en création de sites web (Next.js, Laravel), applications mobiles Flutter, SEO local, marketing digital et automatisation IA. Devis gratuit.',
  alternates: { canonical: SITE_URL },
}

const HOME_FAQ = [
  {
    question: 'Artgon MEDIA est-elle une agence web basée à Nador ?',
    answer:
      'Oui, Artgon MEDIA est une agence web et digitale basée à Nador, au 580 Bd Al Massira, 2e étage, Appartement 3, 62000 Nador. Nous intervenons à Nador, dans la région Orientale et pour des clients en Europe (Belgique, France, Pays-Bas, Suisse).',
  },
  {
    question: 'Quels services propose Artgon MEDIA à Nador ?',
    answer:
      'Artgon MEDIA propose la création de sites web (Next.js, PHP, Laravel), le développement d\'applications mobiles Flutter (iOS & Android), le référencement SEO local à Nador, le marketing digital (Facebook Ads, Google Ads), l\'automatisation IA (chatbots, workflows n8n) et la maintenance de sites web.',
  },
  {
    question: 'Comment contacter Artgon MEDIA pour un devis ?',
    answer:
      'Vous pouvez contacter Artgon MEDIA par WhatsApp au +212 681 169 346 (le moyen le plus rapide), par email à contact@artgonmedia.com ou en remplissant notre formulaire de contact sur cette page. Nous répondons sous 2h en heures ouvrables.',
  },
  {
    question: 'Artgon MEDIA travaille-t-elle avec la diaspora marocaine en Europe ?',
    answer:
      'Oui, nous avons une expertise spécifique pour la diaspora marocaine en Belgique, France, Pays-Bas et Suisse. Nous créons des sites et applications pour les projets immobiliers, e-commerce et de services destinés à la communauté marocaine d\'Europe.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Pricing />
      <Partners />
      <FAQ items={HOME_FAQ} title="Questions fréquentes sur Artgon MEDIA" />
      <ContactForm />
    </>
  )
}
