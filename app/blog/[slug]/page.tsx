import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL, WHATSAPP_CTA } from '@/lib/constants'

const ARTICLES: Record<string, {
  title: string
  description: string
  date: string
  category: string
  content: string
  color: string
}> = {
  'comment-creer-site-web-professionnel-nador': {
    title: 'Comment créer un site web professionnel à Nador en 2025',
    description: 'Guide complet pour créer un site web professionnel à Nador : choix de la technologie, hébergement, SEO et budget.',
    date: '2025-03-15',
    category: 'Création web',
    color: '#028090',
    content: `
## Pourquoi votre entreprise à Nador a besoin d'un site web professionnel

En 2025, plus de 85% des consommateurs marocains recherchent des produits et services en ligne avant d'acheter. À Nador, cette tendance s'accélère avec la démocratisation du smartphone et du haut débit. Un site web professionnel n'est plus un luxe : c'est une nécessité pour rester compétitif dans la région Orientale.

## Choisir la bonne technologie pour votre site web à Nador

### Next.js : pour les sites performants et SEO

Next.js est le choix idéal pour les entreprises qui veulent un site rapide, bien référencé sur Google et évolutif. C'est la technologie que nous utilisons chez Artgon MEDIA pour nos clients qui cherchent la performance maximale.

**Avantages :** Score Lighthouse > 90, SEO natif, Vercel hosting, TypeScript.
**Idéal pour :** Sites vitrines, portails, e-commerce avancé, blogs.

### WordPress : pour la gestion de contenu autonome

WordPress reste la solution la plus populaire au monde (43% des sites web). Sa facilité de gestion en fait un choix pertinent pour les petites entreprises à Nador qui souhaitent gérer leur contenu elles-mêmes.

### Laravel : pour les applications web sur mesure

Laravel PHP est notre choix pour les applications web avec logique métier complexe : gestion de commandes, tableaux de bord, portails client.

## Le budget pour un site web à Nador en 2025

| Type de site | Budget (MAD) | Délai |
|---|---|---|
| Site one-page | 1 500 - 3 000 | 1-2 semaines |
| Site vitrine multi-pages | 3 000 - 8 000 | 3-4 semaines |
| E-commerce | 8 000 - 20 000 | 6-10 semaines |
| Application web sur mesure | 15 000+ | 8-16 semaines |

## Les étapes pour créer votre site web à Nador

1. **Définir vos objectifs** : vitrine, vente en ligne, génération de leads, prise de rendez-vous ?
2. **Choisir votre technologie** : selon vos besoins de gestion de contenu et de performance.
3. **Préparer vos contenus** : textes, photos, logo, couleurs de votre charte graphique.
4. **Travailler le SEO dès le départ** : mots-clés locaux Nador, balises meta, données structurées.
5. **Choisir votre hébergement** : Vercel (Next.js), OVH (PHP/WordPress), serveur dédié.
6. **Lancer et analyser** : Google Search Console, Analytics 4, suivi des conversions.

## Conclusion

Créer un site web professionnel à Nador en 2025 est accessible à tout budget. L'essentiel est de partir avec une stratégie claire, de choisir la bonne technologie et d'investir dans le SEO dès le début. Artgon MEDIA vous accompagne de A à Z dans ce projet.
    `,
  },
  'seo-local-nador-guide-complet': {
    title: 'SEO local à Nador : le guide complet pour 2025',
    description: 'Toutes les techniques pour dominer les résultats Google locaux à Nador.',
    date: '2025-02-20',
    category: 'SEO',
    color: '#F96167',
    content: `
## Qu'est-ce que le SEO local à Nador ?

Le SEO local consiste à optimiser votre présence en ligne pour apparaître dans les résultats de recherche Google lorsqu'un internaute recherche un produit ou service à Nador. Par exemple : "agence web Nador", "restaurant Nador", "médecin Nador".

## Google Business Profile : le pilier du SEO local à Nador

La première étape absolue est de créer et optimiser votre fiche Google Business Profile (anciennement Google My Business). C'est gratuit et indispensable pour apparaître dans le "pack local" (les 3 fiches qui apparaissent en haut des résultats avec une carte).

**Optimisations essentielles :**
- Nom, adresse et téléphone (NAP) exacts et cohérents
- Catégorie principale et secondaires précises
- Photos de qualité (intérieur, extérieur, équipe, produits)
- Horaires d'ouverture à jour
- Description optimisée avec mots-clés locaux
- Réponse aux avis clients (positifs et négatifs)

## Mots-clés géolocalisés pour Nador

Identifiez les requêtes que vos clients potentiels utilisent à Nador. Exemples : "plombier Nador", "coiffeur centre ville Nador", "avocat Nador Oriental".

Outils à utiliser : Google Keyword Planner, SEMrush, Ahrefs, et simplement Google Autocomplete.

## Cohérence NAP : nom, adresse, téléphone

Votre NAP (Nom, Adresse, Téléphone) doit être strictement identique sur tous vos profils en ligne : site web, Google Business, Facebook, Instagram, annuaires locaux. La moindre différence pénalise votre référencement local.

## Contenu local sur votre site web

Créez des pages dédiées à votre localisation : "Service X à Nador", "Agence Y — Nador, Oriental, Maroc". Mentionnez des quartiers (Hay Salam, Hay Al Qods, Beni Nsar), des landmarks locaux et des références à la région Orientale.

## Résultats attendus à Nador

Pour les mots-clés locaux à Nador (faible à moyenne concurrence), nos clients observent des améliorations de positionnement en 4 à 8 semaines avec une stratégie SEO locale bien exécutée.
    `,
  },
  'chatbot-whatsapp-ia-entreprise-maroc': {
    title: 'Chatbot WhatsApp IA : comment automatiser votre service client au Maroc',
    description: 'Guide pour déployer un chatbot WhatsApp IA pour votre entreprise au Maroc.',
    date: '2025-01-10',
    category: 'Automatisation IA',
    color: '#6655A0',
    content: `
## Pourquoi WhatsApp est le canal incontournable au Maroc

Avec plus de 30 millions d'utilisateurs actifs au Maroc, WhatsApp est de loin le canal de communication préféré des Marocains, aussi bien pour les échanges personnels que professionnels. 78% des entreprises marocaines reçoivent leurs demandes clients via WhatsApp. Automatiser ce canal avec l'IA représente donc un levier de productivité massif.

## Qu'est-ce qu'un chatbot WhatsApp IA ?

Un chatbot WhatsApp IA est un programme connecté à votre numéro WhatsApp Business qui répond automatiquement aux messages de vos clients. Alimenté par des modèles de langage comme GPT-4o ou Claude, il comprend le contexte, répond en français et en darija, et peut effectuer des actions comme prendre un rendez-vous ou qualifier un prospect.

## Architecture technique pour le Maroc

### WhatsApp Business API

Pour déployer un chatbot, vous avez besoin d'accéder à l'API officielle WhatsApp Business (Meta). Deux options :
- **Solution hébergée** : via un fournisseur agréé (Twilio, 360dialog) — plus simple
- **Solution cloud Meta** : directement via Meta Business Suite — plus économique

### Le modèle IA

Nous intégrons généralement GPT-4o d'OpenAI ou Claude d'Anthropic pour la compréhension du langage naturel. Ces modèles comprennent parfaitement le français et gèrent le code switching franco-arabe typique des échanges marocains.

### L'orchestrateur (n8n ou Make)

n8n est notre outil préféré pour orchestrer les workflows : recevoir le message WhatsApp → l'envoyer à l'API IA → récupérer la réponse → la renvoyer au client, tout en loggant l'échange dans votre CRM.

## Coût d'un chatbot WhatsApp IA au Maroc

| Composant | Coût mensuel estimé |
|---|---|
| API WhatsApp Business | 0 (1 000 conversations gratuites/mois) |
| API OpenAI (GPT-4o) | 50-200 MAD selon le volume |
| n8n self-hosted | 0 (open source) |
| Hébergement n8n (VPS) | 100-200 MAD |
| **Total** | **150-400 MAD/mois** |

## Cas d'usage concrets à Nador

- **Cabinet médical** : réponses aux questions sur les horaires, prise de rendez-vous
- **Agence immobilière** : qualification des prospects, envoi de fiches biens
- **Commerce** : renseignements sur les produits, disponibilités et prix
- **Hôtel / Restaurant** : réservations, menus, tarifs et disponibilités

## Comment démarrer ?

Contactez Artgon MEDIA pour un audit gratuit de vos flux WhatsApp. Nous développons et déployons votre chatbot IA en 2 à 3 semaines, avec formation de votre équipe incluse.
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = ARTICLES[slug]
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = ARTICLES[slug]
  if (!article) notFound()

  const breadcrumbs = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
    { name: article.title, url: `${SITE_URL}/blog/${slug}` },
  ]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          articleSchema({
            title: article.title,
            description: article.description,
            url: `${SITE_URL}/blog/${slug}`,
            datePublished: article.date,
          }),
        ]}
      />

      <section className="py-24 text-white" style={{ background: `linear-gradient(135deg, #1E2761 0%, ${article.color} 100%)` }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li><a href="/" className="hover:text-white">Accueil</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{article.category}</li>
            </ol>
          </nav>
          <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
            {article.category}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">{article.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/60">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
            <span>·</span>
            <span>Artgon MEDIA</span>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose-artgon">
            {article.content.split('\n').filter(Boolean).map((line, i) => {
              if (line.startsWith('## ')) return <h2 key={i} className="mt-10 text-2xl font-bold text-brand-navy">{line.replace('## ', '')}</h2>
              if (line.startsWith('### ')) return <h3 key={i} className="mt-6 text-xl font-semibold text-brand-navy">{line.replace('### ', '')}</h3>
              if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="mt-3 font-semibold text-gray-800">{line.replace(/\*\*/g, '')}</p>
              if (line.startsWith('- ')) return <li key={i} className="mt-1 text-gray-700 ml-4 list-disc">{line.replace('- ', '')}</li>
              if (line.startsWith('| ')) return null
              return <p key={i} className="mt-4 text-gray-700 leading-relaxed">{line}</p>
            })}
          </div>

          <div className="mt-16 rounded-2xl bg-brand-teal p-8 text-center text-white">
            <h3 className="text-xl font-bold">Besoin d&apos;aide pour votre projet digital à Nador ?</h3>
            <p className="mt-2 text-white/80 text-sm">Artgon MEDIA vous accompagne de A à Z.</p>
            <a
              href={WHATSAPP_CTA(`Bonjour, j'ai lu votre article "${article.title}" et j'aimerais en discuter.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-brand-teal hover:bg-gray-50"
            >
              Contactez-nous sur WhatsApp
            </a>
          </div>
        </div>
      </article>
    </>
  )
}

export const revalidate = 3600
