import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import './blog.css'
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
    <div className="blog-ui">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="site-page-hero blog-header relative isolate overflow-hidden bg-brand-navy text-white" data-page-hero="">
        <div className="blog-header-visual" aria-hidden="true">
          <Image
            src="/blog/blog-hero.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 72vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="blog-header-content relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold">Blog Artgon MEDIA</h1>
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-white/80">
            Conseils pratiques en création de site web, SEO, marketing digital et IA pour les entrepreneurs à Nador et au Maroc.
          </p>
        </div>
      </section>

      <section className="blog-listing bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article, index) => (
              <article key={article.slug} className="blog-card group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-brand-navy/10 bg-white">
                <div className="blog-cover relative aspect-[16/10] overflow-hidden border-b-2 bg-brand-navy" style={{ borderBottomColor: article.color }} aria-hidden="true">
                  <Image src={`/blog/${article.slug}.webp`} alt="" fill priority={index === 0} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover object-right" />
                </div>
                <div className="blog-card-body flex min-w-0 flex-1 flex-col p-6">
                  <div className="blog-meta flex flex-wrap items-center gap-x-3 gap-y-3 text-xs text-gray-500">
                    <span
                      className="w-fit rounded-full border px-3 py-1.5 font-semibold text-brand-navy"
                      style={{ backgroundColor: `${article.color}12`, borderColor: `${article.color}28` }}
                    >
                      {article.category}
                    </span>
                    <div className="blog-meta-secondary flex w-full flex-wrap items-center gap-x-4 gap-y-1">
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <span>{article.readTime} de lecture</span>
                    </div>
                  </div>
                  <h2 className="blog-card-title mt-5 text-xl font-bold text-brand-navy transition-colors group-hover:text-brand-teal">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="blog-excerpt mt-3 text-sm leading-relaxed text-gray-600">{article.excerpt}</p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="blog-read-link inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-brand-teal"
                  >
                    Lire l&apos;article <span className="blog-arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
