import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_CTA } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="hero-photo-section relative overflow-hidden bg-brand-navy text-white">
      <div className="hero-backdrop" aria-hidden="true">
        <Image src="/hero-desktop-mobile.webp" alt="" fill priority sizes="100vw" className="hero-photo" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-24 lg:px-8">
        <div className="lg:col-span-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-sans text-sm text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-teal-light" />
            Agence web & digitale — Nador, Oriental, Maroc
          </div>

          <h1 className="font-sans text-4xl font-bold leading-snug tracking-normal text-white sm:text-5xl lg:text-[3.25rem]">
            Votre présence digitale{' '}
            <span className="text-brand-teal-light">propulsée à Nador</span>
          </h1>

          <p className="mt-6 max-w-xl font-sans text-lg font-normal leading-relaxed text-white">
            Artgon MEDIA crée des sites web performants, des applications mobiles Flutter et des stratégies digitales
            pour les entreprises de Nador, du Maroc et de la diaspora en Europe.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_CTA('Bonjour, je souhaite un devis gratuit pour mon projet digital.')}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-action inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-coral px-8 py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-red-600"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 2.106.547 4.087 1.508 5.807L.057 23.04a.75.75 0 00.904.904l5.233-1.451A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 1.5C18.065 1.5 23 6.435 23 12S18.065 22.5 12 22.5c-1.86 0-3.615-.48-5.145-1.325l-.298-.168-3.092.858.858-3.093-.168-.298A10.457 10.457 0 011.5 12C1.5 5.935 6.435 1.5 12 1.5z" clipRule="evenodd" />
              </svg>
              Devis gratuit sur WhatsApp
            </a>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-white/40 px-8 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Voir nos services
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4">
            {[
              { value: '50+', label: 'Projets livrés' },
              { value: '98%', label: 'Clients satisfaits' },
              { value: '5 ans', label: "D'expérience" },
              { value: '24h', label: 'Support réactif' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-sans text-sm text-white">{stat.label}</dt>
                <dd className="mt-1 font-sans text-3xl font-bold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-device-space" aria-hidden="true" />
      </div>
    </section>
  )
}
