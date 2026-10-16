import { generateMetadata as projectMetadata } from '@/lib/seo'
import { projectCaseStudies } from '@/lib/project-case-studies'
import ProjectCaseStudy from '@/components/sections/ProjectCaseStudy'

export const metadata = projectMetadata({
  title: 'Luxury Suite — Étude de cas | Artgon MEDIA',
  description: projectCaseStudies[1].description,
  path: '/realisations/luxury-suite',
})

export default function LuxurySuitePage() {
  return <ProjectCaseStudy slug="luxury-suite" />
}
