import Image from 'next/image'
import type { ProjectWebsite } from '@/lib/project-websites'

export default function ProjectScreenshot({ project }: { project: ProjectWebsite }) {
  return (
    <div
      className="project-preview block overflow-hidden rounded-t-2xl border-b border-brand-navy/10 bg-white"
    >
      <div className="flex h-11 items-center gap-3 border-b border-brand-navy/10 bg-sand px-4">
        <span className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-brand-coral/70" />
          <span className="h-2 w-2 rounded-full bg-brand-violet/50" />
          <span className="h-2 w-2 rounded-full bg-brand-teal/60" />
        </span>
      </div>
      <div className="relative aspect-[36/25] overflow-hidden bg-sand">
        <Image
          src={`/projects/${project.slug}.webp`}
          alt={`Capture du site ${project.title}`}
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  )
}
