'use client'

import { useState } from 'react'
import JsonLd from '@/components/seo/JsonLd'
import { faqSchema } from '@/lib/schema'
import SectionTitle from '@/components/ui/SectionTitle'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
  subtitle?: string
  includeJsonLd?: boolean
}

function FAQAccordion({ item, open, onToggle }: { item: FAQItem; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-brand-navy">{item.question}</span>
        <svg
          className={`ml-4 h-5 w-5 shrink-0 text-brand-teal transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-sm leading-relaxed text-gray-600">{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ({
  items,
  title = 'Questions fréquentes',
  subtitle,
  includeJsonLd = true,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white" id="faq">
      {includeJsonLd && <JsonLd data={faqSchema(items)} />}

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="mt-12">
          {items.map((item, idx) => (
            <FAQAccordion
              key={idx}
              item={item}
              open={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
