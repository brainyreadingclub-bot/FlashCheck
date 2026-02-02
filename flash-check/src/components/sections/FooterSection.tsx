'use client'

import Link from 'next/link'
import { Zap } from 'lucide-react'

const footerLinks = [
  { label: '이용약관', href: '#' },
  { label: '개인정보처리방침', href: '#' },
  { label: '문의하기', href: 'mailto:hello@flashcheck.io' },
]

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--ink)' }}>
      {/* Top border accent */}
      <div className="h-1" style={{ background: 'var(--lime)' }} />

      <div className="py-12 lg:py-16">
        <div className="container-narrow">
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{
                  background: 'var(--lime)',
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}
              >
                <Zap className="w-5 h-5" style={{ color: 'var(--ink)' }} />
              </div>
              <span
                className="font-display text-xl font-bold"
                style={{ color: 'var(--paper)' }}
              >
                FlashCheck
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-sm text-center mb-8 max-w-md"
              style={{ color: 'var(--ink-muted)' }}
            >
              아이디어 검증의 새로운 기준.
              <br />
              10분 만에 시장의 답을 얻으세요.
            </p>

            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-6 mb-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:opacity-100"
                  style={{ color: 'var(--ink-muted)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--lime)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-muted)'}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Legal notice */}
            <div
              className="px-6 py-4 text-center mb-8 max-w-lg"
              style={{ background: 'var(--ink-light)' }}
            >
              <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                본 페이지는 시장 수요 조사를 위한 테스트 페이지입니다.
                실제 결제가 이루어지지 않으며, 수집된 이메일은 서비스 출시 안내
                목적으로만 사용됩니다.
              </p>
            </div>

            {/* Divider */}
            <div
              className="w-24 h-px mb-8"
              style={{ background: 'linear-gradient(to right, transparent, var(--ink-muted), transparent)' }}
            />

            {/* Copyright */}
            <p className="text-xs" style={{ color: 'var(--ink-muted)' }}>
              &copy; {currentYear} FlashCheck. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
