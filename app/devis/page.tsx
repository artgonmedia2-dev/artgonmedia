'use client'

import { useState } from 'react'
import { WHATSAPP_CTA } from '@/lib/constants'

const SERVICES_OPTIONS = [
  { id: 'site-vitrine', label: 'Site vitrine', price: 'À partir de 1 500 MAD' },
  { id: 'site-ecommerce', label: 'Site e-commerce', price: 'À partir de 9 000 MAD' },
  { id: 'app-mobile', label: 'Application mobile Flutter', price: 'À partir de 5 000 MAD' },
  { id: 'seo', label: 'Référencement SEO', price: 'À partir de 1 500 MAD/mois' },
  { id: 'marketing', label: 'Marketing digital & Ads', price: 'À partir de 1 500 MAD/mois' },
  { id: 'ia', label: 'Automatisation IA', price: 'À partir de 3 000 MAD' },
  { id: 'maintenance', label: 'Maintenance & Support', price: 'À partir de 500 MAD/mois' },
]

const BUDGET_OPTIONS = [
  '< 3 000 MAD',
  '3 000 – 8 000 MAD',
  '8 000 – 20 000 MAD',
  '> 20 000 MAD',
  'À définir',
]

const TIMELINE_OPTIONS = [
  'Urgent (< 2 semaines)',
  'Normal (1 mois)',
  'Flexible (2-3 mois)',
  'Pas de contrainte',
]

export default function DevisPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    services: [] as string[],
    budget: '',
    timeline: '',
    name: '',
    phone: '',
    email: '',
    description: '',
  })

  function toggleService(id: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }))
  }

  function handleSubmit() {
    const selectedServices = SERVICES_OPTIONS
      .filter((s) => form.services.includes(s.id))
      .map((s) => s.label)
      .join(', ')

    const message = `Bonjour Artgon MEDIA !

Je souhaite obtenir un devis pour :
📋 Services : ${selectedServices || 'Non précisé'}
💰 Budget : ${form.budget || 'À définir'}
⏱ Délai : ${form.timeline || 'Flexible'}

👤 Nom : ${form.name}
📞 Téléphone : ${form.phone}
✉️ Email : ${form.email}

📝 Description du projet :
${form.description}`

    window.open(WHATSAPP_CTA(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-brand-navy">Configurez votre devis</h1>
          <p className="mt-3 text-gray-600">Réponse garantie sous 2h sur WhatsApp</p>
          <div className="mt-6 flex items-center justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                    step >= s ? 'bg-brand-teal text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && <div className={`h-0.5 w-12 ${step > s ? 'bg-brand-teal' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-brand-navy">Quels services vous intéressent ?</h2>
              <p className="mt-1 text-sm text-gray-500">Sélectionnez un ou plusieurs services</p>
              <div className="mt-6 space-y-3">
                {SERVICES_OPTIONS.map((service) => (
                  <label
                    key={service.id}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-colors ${
                      form.services.includes(service.id)
                        ? 'border-brand-teal bg-teal-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={form.services.includes(service.id)}
                        onChange={() => toggleService(service.id)}
                        className="h-4 w-4 text-brand-teal rounded border-gray-300"
                      />
                      <span className="font-medium text-brand-navy">{service.label}</span>
                    </div>
                    <span className="text-xs text-gray-500">{service.price}</span>
                  </label>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget estimé</label>
                  {BUDGET_OPTIONS.map((b) => (
                    <label key={b} className={`flex items-center gap-2 rounded-lg border p-3 mb-2 cursor-pointer ${form.budget === b ? 'border-brand-teal bg-teal-50' : 'border-gray-200'}`}>
                      <input type="radio" name="budget" value={b} checked={form.budget === b} onChange={() => setForm((p) => ({ ...p, budget: b }))} className="text-brand-teal" />
                      <span className="text-sm">{b}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Délai souhaité</label>
                  {TIMELINE_OPTIONS.map((t) => (
                    <label key={t} className={`flex items-center gap-2 rounded-lg border p-3 mb-2 cursor-pointer ${form.timeline === t ? 'border-brand-teal bg-teal-50' : 'border-gray-200'}`}>
                      <input type="radio" name="timeline" value={t} checked={form.timeline === t} onChange={() => setForm((p) => ({ ...p, timeline: t }))} className="text-brand-teal" />
                      <span className="text-sm">{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={form.services.length === 0}
                className="mt-8 w-full rounded-xl bg-brand-teal py-3.5 font-bold text-white disabled:opacity-50 hover:bg-teal-700 transition-colors"
              >
                Étape suivante →
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-brand-navy">Décrivez votre projet</h2>
              <div className="mt-6 space-y-4">
                <textarea
                  rows={5}
                  value={form.description}
                  onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                  placeholder="Décrivez votre projet, vos objectifs, votre activité, votre cible... Plus vous êtes précis, plus notre devis sera adapté."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                />
              </div>
              <div className="mt-6 flex gap-4">
                <button onClick={() => setStep(1)} className="flex-1 rounded-xl border-2 border-gray-300 py-3 font-semibold text-gray-700 hover:border-gray-400">
                  ← Retour
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 rounded-xl bg-brand-teal py-3 font-bold text-white hover:bg-teal-700"
                >
                  Étape suivante →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-brand-navy">Vos coordonnées</h2>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Votre nom"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Téléphone WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="+212 6XX XXX XXX"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="votre@email.com"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                  />
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <button onClick={() => setStep(2)} className="flex-1 rounded-xl border-2 border-gray-300 py-3 font-semibold text-gray-700 hover:border-gray-400">
                  ← Retour
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!form.name || !form.phone}
                  className="flex-1 rounded-xl bg-brand-coral py-3 font-bold text-white disabled:opacity-50 hover:bg-red-600 transition-colors"
                >
                  Envoyer sur WhatsApp →
                </button>
              </div>
              <p className="mt-3 text-center text-xs text-gray-400">
                Votre message s&apos;ouvrira dans WhatsApp. Aucune donnée n&apos;est envoyée à nos serveurs.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
