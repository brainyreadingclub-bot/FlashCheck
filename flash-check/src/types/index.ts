/**
 * Lead submission data
 */
export interface Lead {
  id?: string
  email: string
  source: string
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
  created_at?: string
}

/**
 * UTM parameters from URL
 */
export interface UTMParams {
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  utm_term?: string | null
  utm_content?: string | null
}

/**
 * API response format
 */
export interface APIResponse<T = unknown> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
}

/**
 * Toast notification type
 */
export type ToastType = 'success' | 'error' | 'info'

export interface Toast {
  id: string
  type: ToastType
  message: string
}
