type IconName = 'pin' | 'bolt' | 'chart' | 'shield' | 'globe' | 'chat' | 'browser' | 'phone' | 'search' | 'megaphone' | 'spark' | 'cog' | 'mail'

const SERVICE_ICONS: Record<string, IconName> = {
  'creation-site-web-nador': 'browser',
  'application-mobile-flutter': 'phone',
  'referencement-seo-nador': 'search',
  'marketing-digital-ads': 'megaphone',
  'automatisation-ia': 'spark',
  'maintenance-support': 'cog',
}

export function Icon({ name, className = 'h-6 w-6' }: { name: IconName; className?: string }) {
  const props = {
    className,
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }

  switch (name) {
    case 'pin':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.25" />
        </svg>
      )
    case 'bolt':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 2.5L4.5 13.5H11l-1 8 9-11.5H13V2.5z" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5h16M7 16V10M12 16V6M17 16v-4" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5l7 2.5v6.2c0 4.2-2.8 6.8-7 8.3-4.2-1.5-7-4.1-7-8.3V6l7-2.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.2l2 2 4-4.2" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.25" />
          <path strokeLinecap="round" d="M3.75 12h16.5M12 3.75c2.2 2.4 3.3 5.2 3.3 8.25S14.2 17.85 12 20.25C9.8 17.85 8.7 15.05 8.7 12S9.8 6.15 12 3.75z" />
        </svg>
      )
    case 'chat':
      return (
        <svg {...props}>
          <path d="M20 16a2 2 0 01-2 2H8l-5 3V6a2 2 0 012-2h13a2 2 0 012 2z" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      )
    case 'browser':
      return (
        <svg {...props}>
          <rect x="3" y="4.5" width="18" height="15" rx="2" />
          <path strokeLinecap="round" d="M3 9h18" />
          <path d="M6 6.75h.01M9 6.75h.01M9 12l-2 2 2 2M15 12l2 2-2 2" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...props}>
          <rect x="7.25" y="2.75" width="9.5" height="18.5" rx="2" />
          <path strokeLinecap="round" d="M10.5 18.25h3" />
        </svg>
      )
    case 'search':
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="6.25" />
          <path strokeLinecap="round" d="M15.8 15.8L20.25 20.25" />
        </svg>
      )
    case 'megaphone':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5v3.2a1.5 1.5 0 001.4 1.5l3.6.4V8.6L5.9 9a1.5 1.5 0 00-1.4 1.5zM9.5 8.7l8.2-3.2v13.2L9.5 15.5" />
        </svg>
      )
    case 'spark':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.2l1.15 4.05L17.2 8.4l-4.05 1.15L12 13.6l-1.15-4.05L6.8 8.4l4.05-1.15L12 3.2zM17.6 14.2l.55 1.85 1.85.55-1.85.55-.55 1.85-.55-1.85-1.85-.55 1.85-.55.55-1.85z" />
        </svg>
      )
    case 'cog':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M10 3h4l.5 2.3 1.5.9 2.2-.7 2 3.5-1.7 1.6v1.8l1.7 1.6-2 3.5-2.2-.7-1.5.9L14 21h-4l-.5-2.3-1.5-.9-2.2.7-2-3.5 1.7-1.6v-1.8L3.8 10l2-3.5 2.2.7 1.5-.9L10 3z" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...props}>
          <rect x="3" y="5.5" width="18" height="13" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 6 8-6" />
        </svg>
      )
  }
}

export function ServiceIcon({ slug, className }: { slug: string; className?: string }) {
  return <Icon name={SERVICE_ICONS[slug] ?? 'browser'} className={className} />
}
