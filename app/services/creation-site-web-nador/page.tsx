import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getService } from '@/lib/services'
import ServicePage from '@/components/sections/ServicePage'

const service = getService('creation-site-web-nador')

export const metadata: Metadata = {
  title: service?.metaTitle,
  description: service?.metaDescription,
  alternates: { canonical: `/services/creation-site-web-nador` },
}

export default function Page() {
  if (!service) notFound()
  return <ServicePage service={service} />
}
