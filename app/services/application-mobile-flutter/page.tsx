import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getService } from '@/lib/services'
import ServicePage from '@/components/sections/ServicePage'

const service = getService('application-mobile-flutter')

export const metadata: Metadata = {
  title: service?.metaTitle,
  description: service?.metaDescription,
  alternates: { canonical: `/services/application-mobile-flutter` },
}

export default function Page() {
  if (!service) notFound()
  return <ServicePage service={service} />
}
