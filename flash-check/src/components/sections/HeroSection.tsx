'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { EmailForm } from '@/components/forms/EmailForm'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--paper)]">
      {/* Geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large lime circle */}
        <div
          className="absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] rounded-full opacity-20"
          style={{ background: 'var(--lime)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Diagonal line */}
        <div
          className="absolute top-0 right-[20%] w-px h-full origin-top -rotate-12"
          style={{ background: 'var(--ink)', opacity: 0.1 }}
        />
      </div>

      <div className="container-narrow relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span
                className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase"
                style={{
                  background: 'var(--lime)',
                  color: 'var(--ink)',
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}
              >
                AI 시장 검증 도구
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-6"
              style={{ color: 'var(--ink)' }}
            >
              상상은 그만,
              <br />
              <span className="relative">
                <span
                  className="relative z-10"
                  style={{
                    background: 'linear-gradient(transparent 60%, var(--lime) 60%)',
                    padding: '0 4px'
                  }}
                >
                  10분 만에 증명
                </span>
              </span>
              하세요.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl leading-relaxed mb-8 max-w-lg"
              style={{ color: 'var(--ink-muted)' }}
            >
              코딩 없이 아이디어의 시장성을 검증하세요.
              <br />
              <strong style={{ color: 'var(--ink)' }}>&apos;의견&apos;이 아닌 &apos;클릭 데이터&apos;</strong>로
              진짜 수요를 확인합니다.
            </motion.p>

            {/* Email Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <EmailForm variant="hero" source="hero" />
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-6 text-sm"
              style={{ color: 'var(--ink-muted)' }}
            >
              {['코딩 불필요', '10분 내 검증', '결제 기능 없음'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: 'var(--lime)' }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div
              className="relative p-8"
              style={{
                background: 'var(--ink)',
                clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)'
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-6 h-6"
                style={{
                  background: 'var(--lime)',
                  clipPath: 'polygon(100% 0, 0 100%, 100% 100%)'
                }}
              />

              <div className="space-y-6">
                {/* Stat 1 */}
                <div className="border-b border-white/10 pb-6">
                  <p
                    className="text-xs uppercase tracking-wider mb-2"
                    style={{ color: 'var(--lime)' }}
                  >
                    스타트업 실패 원인 1위
                  </p>
                  <p
                    className="font-display text-4xl font-bold"
                    style={{ color: 'var(--paper)' }}
                  >
                    42%
                  </p>
                  <p className="text-sm text-white/60 mt-1">
                    시장 수요 부재
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="border-b border-white/10 pb-6">
                  <p
                    className="text-xs uppercase tracking-wider mb-2"
                    style={{ color: 'var(--lime)' }}
                  >
                    검증 소요 시간
                  </p>
                  <p
                    className="font-display text-4xl font-bold"
                    style={{ color: 'var(--paper)' }}
                  >
                    10분
                  </p>
                  <p className="text-sm text-white/60 mt-1">
                    기존 대비 99% 단축
                  </p>
                </div>

                {/* Stat 3 */}
                <div>
                  <p
                    className="text-xs uppercase tracking-wider mb-2"
                    style={{ color: 'var(--lime)' }}
                  >
                    비용 절감
                  </p>
                  <p
                    className="font-display text-4xl font-bold"
                    style={{ color: 'var(--paper)' }}
                  >
                    99%
                  </p>
                  <p className="text-sm text-white/60 mt-1">
                    외주 대비 비용
                  </p>
                </div>
              </div>

              {/* CTA link */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="#solution"
                  className="inline-flex items-center gap-2 text-sm font-medium group"
                  style={{ color: 'var(--lime)' }}
                >
                  <span>어떻게 작동하나요?</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 px-4 py-2 flex items-center gap-2"
              style={{
                background: 'var(--lime)',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}
            >
              <Zap className="w-4 h-4" style={{ color: 'var(--ink)' }} />
              <span className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                AI 자동화
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
