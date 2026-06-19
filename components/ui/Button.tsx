import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-teal text-white hover:bg-teal-700 focus-visible:ring-brand-teal',
  secondary: 'bg-brand-coral text-white hover:bg-red-600 focus-visible:ring-brand-coral',
  outline: 'border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white focus-visible:ring-brand-teal',
  ghost: 'text-brand-teal hover:bg-teal-50 focus-visible:ring-brand-teal',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: Variant
  size?: Size
  children: ReactNode
  external?: boolean
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  children,
  ...props
}: LinkButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  )
}
