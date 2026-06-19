import SectionTitle from '@/components/ui/SectionTitle'

const PARTNERS = [
  { name: 'Next.js', logo: '⬡' },
  { name: 'Vercel', logo: '▲' },
  { name: 'Flutter', logo: '⛵' },
  { name: 'Laravel', logo: '🔺' },
  { name: 'Sanity', logo: '✦' },
  { name: 'Cloudflare', logo: '🔶' },
]

const TESTIMONIALS = [
  {
    quote:
      'Artgon MEDIA a transformé notre présence en ligne à Nador. Le site est rapide, beau et bien référencé sur Google. Je recommande vivement.',
    author: 'Karim B.',
    role: 'Directeur, immobilier Nador',
    initials: 'KB',
    color: '#028090',
  },
  {
    quote:
      'Excellent travail sur notre application mobile Flutter. L\'équipe est professionnelle, réactive et maîtrise parfaitement les technologies modernes.',
    author: 'Youssef M.',
    role: 'Fondateur, start-up e-commerce',
    initials: 'YM',
    color: '#6655A0',
  },
  {
    quote:
      'Grâce à leur stratégie SEO locale, notre cabinet apparaît maintenant en première position sur Google pour les recherches à Nador. Résultats en 3 mois.',
    author: 'Fatima H.',
    role: 'Gérante, cabinet conseil',
    initials: 'FH',
    color: '#F96167',
  },
]

export default function Partners() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Technologies maîtrisées
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
            {PARTNERS.map((p) => (
              <div key={p.name} className="flex items-center gap-2 text-gray-400">
                <span className="text-2xl" aria-hidden="true">{p.logo}</span>
                <span className="font-semibold">{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <SectionTitle
            eyebrow="Témoignages"
            title="Ce que disent nos clients"
            subtitle="La satisfaction de nos clients à Nador et au Maroc est notre meilleur indicateur de succès."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.author} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex gap-1 text-yellow-400" aria-label="5 étoiles sur 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: t.color }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-navy">{t.author}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
