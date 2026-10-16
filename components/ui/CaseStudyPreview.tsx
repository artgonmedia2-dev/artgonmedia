import ProjectScreenshot from '@/components/ui/ProjectScreenshot'
import type { ReactNode } from 'react'
import { projectWebsites } from '@/lib/project-websites'

export default function CaseStudyPreview({ slug, children }: { slug: string; children: ReactNode }) {
  const project = projectWebsites.find((website) => website.slug === slug)
  if (!project) return null

  return (
    <section className="case-study-preview bg-white" aria-label={`Aperçu du site ${project.title}`}>
      <div className="case-study-overview mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="case-study-screenshot w-full overflow-hidden rounded-2xl border border-brand-navy/10 shadow-sm">
          <ProjectScreenshot project={project} />
        </div>
        <div className="case-study-context min-w-0">{children}</div>
      </div>
    </section>
  )
}
