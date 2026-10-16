import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon, ServiceIcon } from '@/components/ui/Icons'
import JsonLd from '@/components/seo/JsonLd'
import { NAP, SITE_URL, WHATSAPP_CTA } from '@/lib/constants'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { generateMetadata } from '@/lib/seo'
import { services } from '@/lib/services'
import { projectWebsites } from '@/lib/project-websites'
import './maroc.css'

export const metadata: Metadata = generateMetadata({
  title: 'Agence web au Maroc — sites, apps & SEO',
  description: 'Agence web basée à Nador, active dans tout le Maroc : sites web, applications mobiles, SEO, Ads et IA. Sites dès 1 500 MAD, devis gratuit.',
  path: '/maroc',
})

const OFFERS = [
  { price: '1 500', period: 'MAD', description: 'Un site qui présente votre activité et transforme les visites en prises de contact.' },
  { price: '5 000', period: 'MAD', description: 'Votre service à portée de main, sur iOS et Android.' },
  { price: '1 500', period: 'MAD / mois', description: 'Rendez votre entreprise visible auprès des clients qui vous recherchent sur Google.' },
  { price: '1 500', period: 'MAD / mois', description: 'Des campagnes ciblées pour faire connaître votre offre et attirer des prospects.' },
  { price: '3 000', period: 'MAD', description: 'Simplifiez les tâches répétitives et fluidifiez vos échanges avec vos clients.' },
  { price: '500', period: 'MAD / mois', description: 'Gardez un site à jour, sécurisé et accompagné au quotidien.' },
]

const STEPS = [
  { title: 'Parlons de vos objectifs', text: 'Votre activité, vos clients et vos besoins : nous commençons par un échange simple.' },
  { title: 'Une proposition claire', text: 'Vous recevez un devis détaillé avec le périmètre, les étapes et les délais du projet.' },
  { title: 'Concevons ensemble', text: 'Vous validez les maquettes et suivez les avancées avec un interlocuteur unique.' },
  { title: 'Place à la mise en ligne', text: 'Nous préparons le lancement et vous accompagnons dans la prise en main.' },
]

const FAQ = [
  { question: 'Travaillez-vous avec des entreprises ailleurs qu’à Nador ?', answer: 'Oui. Notre bureau est à Nador, mais nous accompagnons des entreprises de tout le Maroc. Les échanges se font par WhatsApp, téléphone et visioconférence, avec des déplacements possibles selon le projet.' },
  { question: 'Combien coûte un site web au Maroc avec Artgon MEDIA ?', answer: 'Un site vitrine démarre à 1 500 MAD, un site professionnel multi-pages à 4 500 MAD et un site e-commerce à 9 000 MAD. Chaque projet fait l’objet d’un devis détaillé et gratuit.' },
  { question: 'Proposez-vous des sites bilingues français / arabe ?', answer: 'Oui, nous réalisons des sites bilingues français/arabe, avec affichage de droite à gauche pour l’arabe, afin de toucher l’ensemble de votre clientèle au Maroc.' },
]

const PROJECTS = ['nador-west-wood', 'abdesamie-car', 'diaspora-immobilier-conseil']
const PROJECT_NOTES: Record<string, string> = {
  'nador-west-wood': 'Une présence en ligne pour présenter les produits et faciliter les demandes professionnelles.',
  'abdesamie-car': 'Une vitrine digitale pour découvrir les véhicules et contacter une agence de location.',
  'diaspora-immobilier-conseil': 'Un site pour présenter une offre de conseil immobilier et accompagner les prises de contact.',
}
const whatsapp = WHATSAPP_CTA('Bonjour, j’ai un projet digital au Maroc. Pouvez-vous me faire un devis ?')

export default function MarocPage() {
  return (
    <div className="maroc-ui">
      <JsonLd data={[breadcrumbSchema([{ name: 'Accueil', url: SITE_URL }, { name: 'Maroc', url: `${SITE_URL}/maroc` }]), faqSchema(FAQ)]} />
      <section className="site-page-hero maroc-hero relative isolate overflow-hidden bg-brand-navy text-white" data-page-hero="">
        <div className="maroc-hero-visual" aria-hidden="true">
          <Image src="/hero-digital-services.webp" alt="" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
        </div>
        <div className="maroc-container relative">
          <div className="maroc-hero-copy">
            <span className="maroc-eyebrow maroc-eyebrow-light"><Icon name="pin" className="h-4 w-4" /> De Nador à tout le Maroc</span>
            <h1>Votre partenaire digital,<br />partout au Maroc.</h1>
            <p>Sites web, applications et stratégies digitales. Une équipe basée à Nador pour accompagner votre entreprise.</p>
            <div className="maroc-actions">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="maroc-button whatsapp-action"><Icon name="chat" className="h-5 w-5" /> Parlons de votre projet</a>
              <a href="#projets-maroc" className="maroc-button maroc-button-outline">Voir nos réalisations <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <div className="maroc-trust" aria-label="Notre accompagnement">
        <div className="maroc-container maroc-trust-grid">
          {([{ icon: 'pin', title: 'Basés à Nador', text: 'Une équipe de proximité' }, { icon: 'chat', title: 'Partout au Maroc', text: 'Un suivi à distance' }, { icon: 'shield', title: 'Devis détaillé', text: 'Un cadre clair dès le départ' }, { icon: 'globe', title: 'Français / arabe', text: 'Des sites adaptés à vos clients' }] as const).map((item) => (
            <div className="maroc-trust-item" key={item.title}><Icon name={item.icon} className="h-5 w-5" /><div><strong>{item.title}</strong><span>{item.text}</span></div></div>
          ))}
        </div>
      </div>

      <section className="maroc-section maroc-services" aria-labelledby="maroc-services-heading">
        <div className="maroc-container">
          <div className="maroc-section-heading"><div><span className="maroc-eyebrow">Des solutions pour votre activité</span><h2 id="maroc-services-heading">Le bon outil pour<br />votre prochaine étape.</h2></div><p>Commerces, professions libérales, immobilier ou PME : des services pensés pour vos besoins et le marché marocain.</p></div>
          <div className="maroc-services-grid">
            {services.map((service, index) => (
              <Link href={`/services/${service.slug}`} key={service.slug} className="maroc-service-card">
                <span className="maroc-service-icon"><ServiceIcon slug={service.slug} className="h-6 w-6" /></span>
                <h3>{service.navLabel}</h3><p>{OFFERS[index].description}</p>
                <div className="maroc-service-bottom"><div><span>À partir de</span><strong>{OFFERS[index].price} <small>{OFFERS[index].period}</small></strong></div><span className="maroc-service-link">Découvrir <span aria-hidden="true">↗</span></span></div>
              </Link>
            ))}
          </div>
          <p className="maroc-price-note">Chaque projet est unique. <Link href="/tarifs">Consultez nos tarifs détaillés <span aria-hidden="true">→</span></Link></p>
        </div>
      </section>

      <section className="maroc-section maroc-projects" id="projets-maroc" aria-labelledby="maroc-projects-heading">
        <div className="maroc-container">
          <div className="maroc-section-heading"><div><span className="maroc-eyebrow">Du concret, avant tout</span><h2 id="maroc-projects-heading">Des projets qui prennent vie.</h2></div><Link href="/realisations" className="maroc-text-link">Toutes nos réalisations <span aria-hidden="true">→</span></Link></div>
          <div className="maroc-project-grid">{PROJECTS.map((slug) => {
            const project = projectWebsites.find((item) => item.slug === slug)!
            return <Link href={`/realisations/${slug}`} className="maroc-project-card" key={slug}>
              <div className="maroc-project-image"><Image src={`/projects/${slug}.webp`} alt={`Aperçu du site ${project.title}`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover object-top" /></div>
              <div className="maroc-project-copy"><span>{project.category}</span><h3>{project.title}</h3><p>{PROJECT_NOTES[slug]}</p><span className="maroc-project-link">Découvrir le projet <span aria-hidden="true">↗</span></span></div>
            </Link>
          })}</div>
        </div>
      </section>

      <section className="maroc-section" aria-labelledby="maroc-process-heading">
        <div className="maroc-container">
          <div className="maroc-section-heading"><div><span className="maroc-eyebrow">Une collaboration simple</span><h2 id="maroc-process-heading">Proches de vous,<br />même à distance.</h2></div><p>WhatsApp, téléphone ou visioconférence : vous gardez le fil du projet, où que vous soyez au Maroc.</p></div>
          <ol className="maroc-steps">{STEPS.map((step, index) => <li key={step.title}><span className="maroc-step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
        </div>
      </section>

      <section className="maroc-section maroc-faq" aria-labelledby="maroc-faq-heading">
        <div className="maroc-container maroc-faq-layout"><div><span className="maroc-eyebrow">Les réponses à vos questions</span><h2 id="maroc-faq-heading">Avant de<br />nous lancer.</h2><p>Un besoin particulier ?<br /><Link href="/contact" className="maroc-text-link">Échangeons ensemble →</Link></p></div>
          <div className="maroc-faq-list">{FAQ.map((item, index) => <details key={item.question} open={index === 0}><summary>{item.question}<span className="maroc-faq-toggle" aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="maroc-section maroc-contact-section" aria-labelledby="maroc-contact-heading"><div className="maroc-container"><div className="maroc-contact-card"><div><span className="maroc-eyebrow maroc-eyebrow-light">Votre prochaine étape</span><h2 id="maroc-contact-heading">Parlons de votre projet au Maroc.</h2><p>Une idée, un besoin ou une question ? Commençons par un échange et un devis gratuit.</p></div><div className="maroc-contact-actions"><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="maroc-button whatsapp-action"><Icon name="chat" className="h-5 w-5" /> Discuter sur WhatsApp</a><a href={`tel:${NAP.telephone}`}>{NAP.telephoneDisplay}</a></div></div><p className="maroc-office"><Icon name="pin" className="h-4 w-4" /> Retrouvez-nous au {NAP.streetAddress}, {NAP.addressLocality}.</p></div></section>
    </div>
  )
}
