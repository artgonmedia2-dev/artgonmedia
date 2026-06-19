'use client'

import { useState } from 'react'
import { NAP, WHATSAPP_CTA } from '@/lib/constants'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = `Bonjour Artgon MEDIA !

Nom : ${form.name}
Téléphone : ${form.phone}
Email : ${form.email}
Service souhaité : ${form.service || 'Non précisé'}

Message :
${form.message}`

    window.open(WHATSAPP_CTA(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-brand-teal">
              Contact
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy">
              Parlons de votre projet
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Décrivez-nous votre projet et nous vous recontactons sous 2h pour un premier échange gratuit et sans engagement.
            </p>

            <address className="mt-10 not-italic space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">📍</div>
                <div>
                  <div className="font-semibold text-brand-navy">Adresse</div>
                  <div className="text-sm text-gray-600">{NAP.streetAddress}</div>
                  <div className="text-sm text-gray-600">{NAP.postalCode} {NAP.addressLocality}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">📞</div>
                <div>
                  <div className="font-semibold text-brand-navy">Téléphone & WhatsApp</div>
                  <a href={`tel:${NAP.telephone}`} className="text-sm text-brand-teal hover:underline">
                    {NAP.telephoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">✉️</div>
                <div>
                  <div className="font-semibold text-brand-navy">Email</div>
                  <a href={`mailto:${NAP.email}`} className="text-sm text-brand-teal hover:underline">
                    {NAP.email}
                  </a>
                </div>
              </div>
            </address>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet <span className="text-brand-coral">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Téléphone <span className="text-brand-coral">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+212 6XX XXX XXX"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service souhaité
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="Création site web">Création site web</option>
                  <option value="Application mobile Flutter">Application mobile Flutter</option>
                  <option value="Référencement SEO">Référencement SEO</option>
                  <option value="Marketing digital & Ads">Marketing digital & Ads</option>
                  <option value="Automatisation IA">Automatisation IA</option>
                  <option value="Maintenance & support">Maintenance & support</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Décrivez votre projet <span className="text-brand-coral">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet, vos objectifs et vos délais..."
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-teal py-3.5 font-semibold text-white transition-colors hover:bg-teal-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 2.106.547 4.087 1.508 5.807L.057 23.04a.75.75 0 00.904.904l5.233-1.451A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 1.5C18.065 1.5 23 6.435 23 12S18.065 22.5 12 22.5c-1.86 0-3.615-.48-5.145-1.325l-.298-.168-3.092.858.858-3.093-.168-.298A10.457 10.457 0 011.5 12C1.5 5.935 6.435 1.5 12 1.5z" clipRule="evenodd"/>
              </svg>
              Envoyer via WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-gray-400">
              Ce formulaire ouvre WhatsApp avec votre message pré-rempli. Temps de réponse moyen : 2h.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
