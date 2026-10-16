import { generateMetadata as projectMetadata } from '@/lib/seo'
import { projectCaseStudies } from '@/lib/project-case-studies'
import ProjectCaseStudy from '@/components/sections/ProjectCaseStudy'

export const metadata = projectMetadata({
  title: 'AbdesamieCar — Étude de cas | Artgon MEDIA',
  description: projectCaseStudies[2].description,
  path: '/realisations/abdesamie-car',
})

export default function AbdesamieCarPage() {
  return <ProjectCaseStudy slug="abdesamie-car" />
}
