'use client'

import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Info, X } from 'lucide-react'
import { type ToastType } from '@/types'
import { cn } from '@/lib/utils'

interface ToastProps {
  type: ToastType
  message: string
  onClose?: () => void
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
}

const styles = {
  success: 'bg-success text-white',
  error: 'bg-danger text-white',
  info: 'bg-primary text-white',
}

export function Toast({ type, message, onClose }: ToastProps) {
  const Icon = icons[type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      className={cn(
        'flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[280px] max-w-[400px]',
        styles[type]
      )}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <p className="flex-1 text-sm font-medium">{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="닫기"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </motion.div>
  )
}
