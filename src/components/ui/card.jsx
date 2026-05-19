import React from 'react'
import { cn } from '../../lib.js'

export function Card({ className, ...props }) {
  return <div className={cn('rounded-xl border bg-white text-neutral-950', className)} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div className={cn('p-6', className)} {...props} />
}
