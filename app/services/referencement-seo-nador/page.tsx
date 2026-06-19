import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getService } from '@/lib/services'
import ServicePage from '@/components/sections/ServicePage'

const service = getService('referencement-seo-nador')

export const metadata: Metadata = {
  title: service?.metaTitle,
  description: service?.metaDescription,
  alternates: { canonical: `/services/referencement-seo-nador` },
}

export default function Page() {
  if (!service) notFound()
  return <ServicePage service={service} />
}
