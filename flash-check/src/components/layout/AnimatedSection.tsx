'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { sectionFadeIn } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  variants?: Variants
  once?: boolean
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  variants = sectionFadeIn,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-100px' })

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  )
}
