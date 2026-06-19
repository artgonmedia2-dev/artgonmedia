import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import ContactForm from '@/components/sections/ContactForm'
import { SITE_URL, NAP } from '@/lib/constants'

export const metadata: Metadata = generateMetadata({
  title: 'Contact — Artgon MEDIA Nador | WhatsApp +212 681 169 346',
  description:
    'Contactez Artgon MEDIA à Nador pour votre projet web ou digital. WhatsApp : +212 681 169 346. Adresse : 580 Bd Al Massira, Nador. Réponse sous 2h.',
  path: '/contact',
})

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Accueil', url: SITE_URL },
    { name: 'Contact', url: `${SITE_URL}/contact` },
  ]

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="bg-gradient-to-br from-brand-navy to-brand-teal py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><a href="/" className="hover:text-white">Accueil</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Contact</li>
            </ol>
          </nav>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">Parlons de votre projet</h1>
            <p className="mt-6 text-lg text-white/80">
              Notre équipe à Nador est disponible du lundi au vendredi de 9h à 18h et le samedi de 9h à 13h. Réponse garantie sous 2h en heures ouvrables.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <a href={`tel:${NAP.telephone}`} className="flex items-center gap-2 font-semibold hover:text-teal-300">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {NAP.telephoneDisplay}
              </a>
              <a href={`mailto:${NAP.email}`} className="flex items-center gap-2 font-semibold hover:text-teal-300">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {NAP.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy text-center">Nous trouver à Nador</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(NAP.streetAddress + ', ' + NAP.addressLocality + ', Maroc')}&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Artgon MEDIA — ${NAP.streetAddress}, ${NAP.addressLocality}`}
            />
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            {NAP.streetAddress}, {NAP.postalCode} {NAP.addressLocality}, Maroc
          </p>
        </div>
      </section>
    </>
  )
}
