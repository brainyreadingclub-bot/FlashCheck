import type { Metadata } from 'next'
import { ToastProvider } from '@/providers/ToastProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'FlashCheck - 10분 만에 아이디어 검증',
  description:
    '코딩 0줄, 디자인 0초. AI 자동화 프리토타입 빌더로 당신의 아이디어가 돈이 되는지 확인하세요.',
  keywords: ['스타트업', '아이디어 검증', 'MVP', '프리토타입', '시장 조사', 'AI'],
  authors: [{ name: 'FlashCheck' }],
  openGraph: {
    title: 'FlashCheck - 10분 만에 아이디어 검증',
    description:
      '코딩 0줄, 디자인 0초. AI 자동화 프리토타입 빌더로 당신의 아이디어가 돈이 되는지 확인하세요.',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlashCheck - 10분 만에 아이디어 검증',
    description:
      '코딩 0줄, 디자인 0초. AI 자동화 프리토타입 빌더로 당신의 아이디어가 돈이 되는지 확인하세요.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  )
}
