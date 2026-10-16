interface ProjectCardDetailsProps {
  project: {
    client: string
    year: string | null
    description: string
    results: readonly string[]
    tech: readonly string[]
    color: string
  }
}

export default function ProjectCardDetails({ project }: ProjectCardDetailsProps) {
  return (
    <>
      <p className="mt-2 text-sm text-gray-500">
        {project.client}{project.year && <> · {project.year}</>}
      </p>
      <p className="mt-4 leading-relaxed text-gray-600">{project.description}</p>
      {project.results.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Résultats</h3>
          <ul className="mt-3 space-y-2">
            {project.results.map((result) => (
              <li key={result} className="flex items-start gap-2 text-sm font-medium text-brand-navy">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
      {project.tech.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span key={technology} className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: project.color }}>
              {technology}
            </span>
          ))}
        </div>
      )}
    </>
  )
}
