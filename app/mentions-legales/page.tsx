import type { Metadata } from 'next'
import { NAP, SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Mentions légales — ${SITE_NAME}`,
  description: `Mentions légales d'Artgon MEDIA, agence web à Nador, Maroc. RC 30499 · ICE 003821715000064.`,
  robots: { index: false, follow: false },
}

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-brand-navy">Mentions légales</h1>
        <p className="mt-2 text-sm text-gray-500">Dernière mise à jour : juin 2025</p>

        <div className="mt-10 space-y-10 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-brand-navy">Éditeur du site</h2>
            <div className="mt-4 space-y-1 text-sm">
              <p><strong>Raison sociale :</strong> {NAP.name}</p>
              <p><strong>Forme juridique :</strong> SARL (Société à Responsabilité Limitée)</p>
              <p><strong>Adresse :</strong> {NAP.streetAddress}, {NAP.postalCode} {NAP.addressLocality}, {NAP.addressRegion}, Maroc</p>
              <p><strong>Téléphone :</strong> {NAP.telephoneDisplay}</p>
              <p><strong>Email :</strong> {NAP.email}</p>
              <p><strong>RC :</strong> {NAP.rc}</p>
              <p><strong>ICE :</strong> {NAP.ice}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Directeur de la publication</h2>
            <p className="mt-4 text-sm">Le directeur de la publication est le gérant d&apos;Artgon MEDIA, joignable à l&apos;adresse email : {NAP.email}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Hébergement</h2>
            <div className="mt-4 text-sm space-y-1">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p><strong>Site web :</strong> vercel.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Propriété intellectuelle</h2>
            <p className="mt-4 text-sm leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, code source) est la propriété exclusive d&apos;Artgon MEDIA ou de ses partenaires. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est strictement interdite et constitue une contrefaçon sanctionnée par la législation marocaine.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Responsabilité</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Artgon MEDIA s&apos;efforce de maintenir les informations publiées sur ce site à jour et exactes. Cependant, nous ne pouvons garantir l&apos;exhaustivité ou l&apos;exactitude des informations et déclinons toute responsabilité pour les erreurs ou omissions. Les liens hypertextes vers des sites tiers sont fournis à titre informatif uniquement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">Droit applicable</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Le présent site est soumis au droit marocain. En cas de litige, les tribunaux compétents de Nador, Maroc, seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
