'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAP, WHATSAPP_CTA } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Blog', href: '/blog' },
  { label: 'Agence', href: '/agence' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Artgon MEDIA — Accueil">
          <Image
            src="/logo-artgon.jpg"
            alt="Artgon MEDIA — Agence web Nador"
            width={140}
            height={56}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-brand-teal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={WHATSAPP_CTA()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-brand-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 lg:inline-flex lg:items-center lg:gap-2"
          aria-label="Devis gratuit sur WhatsApp"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path
              fillRule="evenodd"
              d="M12 0C5.373 0 0 5.373 0 12c0 2.106.547 4.087 1.508 5.807L.057 23.04a.75.75 0 00.904.904l5.233-1.451A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 1.5C18.065 1.5 23 6.435 23 12S18.065 22.5 12 22.5c-1.86 0-3.615-.48-5.145-1.325l-.298-.168-3.092.858.858-3.093-.168-.298A10.457 10.457 0 011.5 12C1.5 5.935 6.435 1.5 12 1.5z"
              clipRule="evenodd"
            />
          </svg>
          Devis gratuit
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          aria-expanded={menuOpen}
          aria-label="Menu de navigation"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1 pt-2" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-teal"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_CTA()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-brand-teal px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Devis gratuit sur WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
