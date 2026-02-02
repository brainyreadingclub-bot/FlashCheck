'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { type UTMParams } from '@/types'

export function useUTMParams(): UTMParams {
  const searchParams = useSearchParams()

  return useMemo(
    () => ({
      utm_source: searchParams.get('utm_source'),
      utm_medium: searchParams.get('utm_medium'),
      utm_campaign: searchParams.get('utm_campaign'),
      utm_term: searchParams.get('utm_term'),
      utm_content: searchParams.get('utm_content'),
    }),
    [searchParams]
  )
}
