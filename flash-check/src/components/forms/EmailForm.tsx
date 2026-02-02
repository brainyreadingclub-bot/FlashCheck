'use client'

import { useState, type FormEvent, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useToast } from '@/providers/ToastProvider'
import { useUTMParams } from '@/hooks/useUTMParams'
import { isValidEmail } from '@/lib/utils'

type FormVariant = 'hero' | 'cta'

interface EmailFormProps {
  variant?: FormVariant
  source?: string
  placeholder?: string
  buttonText?: string
  onSuccess?: () => void
}

function EmailFormInner({
  variant = 'hero',
  source = 'landing_page',
  placeholder = '이메일을 입력하세요',
  buttonText = '사전 예약하고 50% 할인받기',
  onSuccess,
}: EmailFormProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { showToast } = useToast()
  const utmParams = useUTMParams()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validate email
    if (!email.trim()) {
      setError('이메일을 입력해주세요')
      return
    }

    if (!isValidEmail(email)) {
      setError('올바른 이메일 형식을 입력해주세요')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          source,
          ...utmParams,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.error?.code === 'LEAD_ALREADY_EXISTS') {
          showToast('info', '이미 등록된 이메일입니다. 출시 알림을 기다려주세요!')
        } else {
          showToast('error', data.error?.message || '등록에 실패했습니다. 다시 시도해주세요.')
        }
        return
      }

      showToast('success', '사전 예약이 완료되었습니다! 출시 알림을 보내드릴게요.')
      setEmail('')
      onSuccess?.()
    } catch {
      showToast('error', '네트워크 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsLoading(false)
    }
  }

  const isCta = variant === 'cta'

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Input */}
        <div className="flex-1 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (error) setError(null)
            }}
            placeholder={placeholder}
            aria-label="이메일 주소"
            className="w-full px-4 py-4 text-base transition-all duration-200 outline-none"
            style={{
              background: isCta ? 'var(--ink-light)' : 'var(--paper)',
              color: isCta ? 'var(--paper)' : 'var(--ink)',
              border: error
                ? '2px solid var(--coral)'
                : `2px solid ${isCta ? 'var(--ink-muted)' : 'var(--ink)'}`,
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--lime)'
            }}
            onBlur={(e) => {
              if (!error) {
                e.currentTarget.style.borderColor = isCta ? 'var(--ink-muted)' : 'var(--ink)'
              }
            }}
          />
          {error && (
            <p className="absolute -bottom-6 left-0 text-xs" style={{ color: 'var(--coral)' }}>
              {error}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-2 px-6 py-4 font-semibold transition-all duration-200 whitespace-nowrap disabled:opacity-70"
          style={{
            background: 'var(--lime)',
            color: 'var(--ink)',
            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.currentTarget.style.transform = 'translate(-2px, -2px)'
              e.currentTarget.style.boxShadow = '4px 4px 0 var(--ink)'
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(0, 0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>처리 중...</span>
            </>
          ) : (
            <>
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Trust badges */}
      <div
        className="mt-4 flex items-center justify-center gap-4 text-xs"
        style={{ color: isCta ? 'var(--ink-muted)' : 'var(--ink-muted)' }}
      >
        <span className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5"
            style={{ background: 'var(--lime)' }}
          />
          신용카드 불필요
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5"
            style={{ background: 'var(--lime)' }}
          />
          스팸 없음
        </span>
      </div>
    </motion.form>
  )
}

export function EmailForm(props: EmailFormProps) {
  return (
    <Suspense fallback={<div className="h-20" />}>
      <EmailFormInner {...props} />
    </Suspense>
  )
}
