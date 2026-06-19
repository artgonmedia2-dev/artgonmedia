interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-brand-teal">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-gray-600 sm:mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
