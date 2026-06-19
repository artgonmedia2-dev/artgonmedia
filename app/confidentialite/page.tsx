import type { Metadata } from 'next'
import { NAP, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Politique de confidentialité — ${SITE_NAME}`,
  description: `Politique de confidentialité d'Artgon MEDIA. Comment nous collectons et protégeons vos données personnelles.`,
  robots: { index: false, follow: false },
}

export default function ConfidentialitePage() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-brand-navy">Politique de confidentialité</h1>
        <p className="mt-2 text-sm text-gray-500">Dernière mise à jour : juin 2025</p>

        <div className="mt-10 space-y-10 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-brand-navy">1. Responsable du traitement</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Le responsable du traitement des données personnelles collectées sur ce site est :<br />
              <strong>{NAP.name}</strong> — {NAP.streetAddress}, {NAP.postalCode} {NAP.addressLocality}, Maroc<br />
              Email : {NAP.email} — Tél : {NAP.telephoneDisplay}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">2. Données collectées</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Nous collectons uniquement les données que vous nous communiquez volontairement via nos formulaires de contact : nom, prénom, adresse email, numéro de téléphone et contenu du message. Aucune donnée sensible (données bancaires, données de santé) n&apos;est collectée.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">3. Finalités du traitement</h2>
            <ul className="mt-4 text-sm space-y-2 list-disc pl-5 leading-relaxed">
              <li>Répondre à vos demandes de devis et d&apos;information</li>
              <li>Gérer la relation commerciale</li>
              <li>Envoyer des communications commerciales avec votre consentement</li>
              <li>Améliorer nos services via des statistiques anonymisées</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">4. Base légale</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Le traitement de vos données est fondé sur votre consentement (formulaires de contact) et sur l&apos;exécution d&apos;un contrat (projets en cours). Conformément à la loi marocaine 09-08 relative à la protection des personnes physiques à l&apos;égard du traitement des données à caractère personnel.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">5. Conservation des données</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Vos données sont conservées pour une durée de 3 ans à compter de notre dernière interaction, conformément aux délais légaux. Au-delà, elles sont supprimées ou anonymisées.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">6. Vos droits</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Conformément à la loi 09-08, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;opposition et de suppression de vos données. Pour exercer ces droits, contactez-nous à {NAP.email}. Nous répondrons dans un délai de 30 jours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">7. Cookies</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Ce site utilise des cookies essentiels au fonctionnement (session, sécurité) et des cookies analytiques anonymisés via Google Analytics 4. Vous pouvez refuser les cookies analytiques via les paramètres de votre navigateur. Le site reste pleinement fonctionnel sans cookies analytiques.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-navy">8. Contact</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Pour toute question relative à cette politique de confidentialité, contactez notre délégué à la protection des données : {NAP.email}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
