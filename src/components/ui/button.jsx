import React from 'react'
import { cn } from '../../lib.js'

const variants = {
  default: 'bg-neutral-950 text-white hover:bg-neutral-800',
  secondary: 'bg-neutral-100 text-neutral-950 hover:bg-neutral-200',
  outline: 'border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50',
  ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100',
}

const sizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 px-3',
  icon: 'h-10 w-10',
}

export function Button({ className, variant = 'default', size = 'default', ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition disabled:pointer-events-none disabled:opacity-50',
        variants[variant] || variants.default,
        sizes[size] || sizes.default,
        className
      )}
      {...props}
    />
  )
}
