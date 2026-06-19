import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema, articleSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import { WHATSAPP_CTA, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = generateMetadata({
  title: 'Diaspora Immobilier Conseil — App Flutter iOS & Android | Artgon MEDIA',
  description:
    'Étude de cas : développement de l\'application mobile Flutter Diaspora Immobilier Conseil pour la gestion d\'actifs immobiliers au Maroc depuis l\'Europe. 4.8/5 sur les stores.',
  path: '/realisations/diaspora-immobilier-conseil',
})

export default function DiasporaImmobilierPage() {
  const breadcrumbs = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Réalisations', url: `${SITE_URL}/realisations` },
    { name: 'Diaspora Immobilier Conseil', url: `${SITE_URL}/realisations/diaspora-immobilier-conseil` },
  ]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          articleSchema({
            title: 'Diaspora Immobilier Conseil — App Flutter iOS & Android',
            description: 'Application mobile Flutter pour la gestion d\'actifs immobiliers au Maroc depuis l\'Europe.',
            url: `${SITE_URL}/realisations/diaspora-immobilier-conseil`,
            datePublished: '2024-06-01',
          }),
        ]}
      />

      <section className="bg-gradient-to-br from-brand-navy to-brand-violet py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li><a href="/" className="hover:text-white">Accueil</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/realisations" className="hover:text-white">Réalisations</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Diaspora Immobilier</li>
            </ol>
          </nav>
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium">
            Application mobile Flutter · 2024
          </span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Diaspora Immobilier Conseil</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Application mobile iOS & Android permettant à la diaspora marocaine en Europe de gérer et investir dans l&apos;immobilier marocain depuis leur smartphone.
          </p>
        </div>
      </section>

      <section className="py-16 bg-violet-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { label: 'Téléchargements', value: '500+' },
              { label: 'Note moyenne', value: '4.8/5' },
              { label: 'Temps de chargement', value: '< 1.5s' },
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <div className="text-4xl font-extrabold text-brand-violet">{kpi.value}</div>
                <div className="mt-2 text-sm font-medium text-gray-600">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-brand-navy">Le contexte</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Diaspora Immobilier Conseil est un cabinet belge spécialisé dans l&apos;accompagnement de la diaspora marocaine pour l&apos;investissement immobilier au Maroc. Leurs clients, résidant en Belgique, France et Pays-Bas, avaient besoin d&apos;un outil mobile pour suivre leurs biens, documents et rendez-vous à distance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-navy">Le défi</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Développer une application disponible simultanément sur iOS et Android, avec un accès sécurisé aux données sensibles (actes notariés, documents administratifs), une interface en français et en arabe, et une expérience fluide même avec une connexion internet instable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-navy">Notre solution Flutter</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Nous avons opté pour Flutter 3 avec une architecture BLoC pour la gestion d&apos;état, garantissant une performance maximale et une séparation claire de la logique métier. Le backend Laravel fournit une API REST sécurisée avec authentification JWT et stockage chiffré des documents.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li className="flex gap-2"><span className="text-brand-violet font-bold">▪</span> Flutter 3 avec architecture BLoC et navigation GoRouter</li>
              <li className="flex gap-2"><span className="text-brand-violet font-bold">▪</span> Interface bilingue français/arabe (RTL support complet)</li>
              <li className="flex gap-2"><span className="text-brand-violet font-bold">▪</span> Notifications push Firebase pour les alertes administratives</li>
              <li className="flex gap-2"><span className="text-brand-violet font-bold">▪</span> Stockage offline avec Hive pour consultation sans connexion</li>
              <li className="flex gap-2"><span className="text-brand-violet font-bold">▪</span> Visionneuse de documents PDF et galerie photos intégrées</li>
              <li className="flex gap-2"><span className="text-brand-violet font-bold">▪</span> Chiffrement AES-256 pour les documents sensibles</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-navy">Les résultats</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              L&apos;application a été publiée simultanément sur App Store et Google Play en juin 2024. En 3 mois, elle a été téléchargée par plus de 500 utilisateurs et maintient une note de 4.8/5 grâce à son interface intuitive et sa fiabilité. Le temps de chargement moyen des données est inférieur à 1.5 seconde.
            </p>
          </div>

          <div className="rounded-2xl bg-brand-violet p-8 text-center text-white">
            <h3 className="text-xl font-bold">Vous avez un projet d&apos;application mobile ?</h3>
            <p className="mt-2 text-white/80 text-sm">Discutons de votre idée sur WhatsApp.</p>
            <a
              href={WHATSAPP_CTA('Bonjour, j\'ai vu la réalisation Diaspora Immobilier et j\'ai un projet d\'application mobile Flutter.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-brand-violet hover:bg-gray-50"
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </article>
    </>
  )
}
