import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = generateMetadata({
  title: 'Blog — Conseils web, SEO & digital à Nador | Artgon MEDIA',
  description:
    'Blog d\'Artgon MEDIA : conseils pratiques en création de site web, SEO local à Nador, marketing digital et automatisation IA pour les entrepreneurs marocains.',
  path: '/blog',
})

const ARTICLES = [
  {
    slug: 'comment-creer-site-web-professionnel-nador',
    title: 'Comment créer un site web professionnel à Nador en 2025',
    excerpt:
      'Guide complet pour créer un site web professionnel à Nador : choix de la technologie (Next.js, WordPress, Laravel), hébergement, SEO et budget.',
    date: '2025-03-15',
    category: 'Création web',
    readTime: '8 min',
    color: '#028090',
  },
  {
    slug: 'seo-local-nador-guide-complet',
    title: 'SEO local à Nador : le guide complet pour 2025',
    excerpt:
      'Toutes les techniques pour dominer les résultats Google locaux à Nador : Google Business Profile, citations NAP, mots-clés géolocalisés et avis clients.',
    date: '2025-02-20',
    category: 'SEO',
    readTime: '12 min',
    color: '#F96167',
  },
  {
    slug: 'chatbot-whatsapp-ia-entreprise-maroc',
    title: 'Chatbot WhatsApp IA : comment automatiser votre service client au Maroc',
    excerpt:
      'Découvrez comment déployer un chatbot WhatsApp alimenté par l\'IA pour répondre à vos clients 24h/24 au Maroc, avec des exemples concrets et des coûts réels.',
    date: '2025-01-10',
    category: 'Automatisation IA',
    readTime: '10 min',
    color: '#6655A0',
  },
]

export default function BlogPage() {
  const breadcrumbs = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
  ]

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="bg-gradient-to-br from-brand-navy to-brand-violet py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><a href="/" className="hover:text-white">Accueil</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Blog</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Blog Artgon MEDIA</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Conseils pratiques en création de site web, SEO, marketing digital et IA pour les entrepreneurs à Nador et au Maroc.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article) => (
              <article key={article.slug} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-2" style={{ backgroundColor: article.color }} aria-hidden="true" />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span
                      className="rounded-full px-2.5 py-1 font-semibold text-white"
                      style={{ backgroundColor: article.color }}
                    >
                      {article.category}
                    </span>
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <span>{article.readTime} de lecture</span>
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{article.excerpt}</p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-teal hover:underline"
                  >
                    Lire l&apos;article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
