import { generateMetadata as projectMetadata } from '@/lib/seo'
import { projectCaseStudies } from '@/lib/project-case-studies'
import ProjectCaseStudy from '@/components/sections/ProjectCaseStudy'

export const metadata = projectMetadata({
  title: 'Therelec — Étude de cas | Artgon MEDIA',
  description: projectCaseStudies[0].description,
  path: '/realisations/therelec',
})

export default function TherelecPage() {
  return <ProjectCaseStudy slug="therelec" />
}
