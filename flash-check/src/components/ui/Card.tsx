'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cardHover, staggerItem } from '@/lib/animations'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
  animate?: boolean
}

const paddings = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({
  children,
  className,
  hover = false,
  padding = 'md',
  animate = false,
}: CardProps) {
  const baseClasses = cn(
    'bg-white rounded-xl shadow-card',
    paddings[padding],
    hover && 'cursor-pointer transition-shadow hover:shadow-card-hover',
    className
  )

  if (animate) {
    return (
      <motion.div
        variants={staggerItem}
        whileHover={hover ? cardHover.hover : undefined}
        className={baseClasses}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={baseClasses}>{children}</div>
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: ReactNode
  className?: string
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn('text-lg font-semibold text-text', className)}>
      {children}
    </h3>
  )
}

interface CardDescriptionProps {
  children: ReactNode
  className?: string
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-text-muted', className)}>
      {children}
    </p>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={className}>{children}</div>
}
