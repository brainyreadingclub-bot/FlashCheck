'use client'

import { motion } from 'framer-motion'
import { Clock, Code, BarChart3, Zap, ArrowRight, Gift } from 'lucide-react'

const comparisonItems = [
  {
    label: '랜딩페이지 제작',
    traditional: '1~2주',
    flashcheck: '10분',
    icon: Clock,
  },
  {
    label: '필요한 기술',
    traditional: '코딩, 디자인, 카피라이팅',
    flashcheck: 'XYZ 가설만 입력',
    icon: Code,
  },
  {
    label: '트래픽 확보',
    traditional: '별도 광고 대행 필요',
    flashcheck: '트래픽 부스터 연동',
    icon: Zap,
  },
  {
    label: '데이터 분석',
    traditional: '수동 취합 및 해석',
    flashcheck: 'AI 자동 판정 (Go/Drop)',
    icon: BarChart3,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--paper)' }}>
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-6"
            style={{ background: 'var(--lime)', color: 'var(--ink)' }}
          >
            왜 FlashCheck인가
          </span>

          <h2
            className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: 'var(--ink)' }}
          >
            기존 방식 vs FlashCheck
          </h2>

          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-muted)' }}>
            아이디어 검증에 몇 주, 수백만 원을 쓰지 마세요.
            <br />
            <strong style={{ color: 'var(--ink)' }}>10분이면 시장의 답을 얻습니다.</strong>
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {comparisonItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className="h-full p-6 lg:p-8"
                style={{
                  background: 'var(--paper)',
                  border: '2px solid var(--ink)',
                }}
              >
                {/* Icon & Label */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ background: 'var(--lime)' }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: 'var(--ink)' }} />
                  </div>
                  <span className="font-display text-lg font-bold" style={{ color: 'var(--ink)' }}>
                    {item.label}
                  </span>
                </div>

                {/* Comparison */}
                <div className="space-y-4">
                  {/* Traditional */}
                  <div className="flex items-center justify-between p-3" style={{ background: 'var(--paper-warm)' }}>
                    <span className="text-sm" style={{ color: 'var(--ink-muted)' }}>기존 방식</span>
                    <span className="text-sm line-through" style={{ color: 'var(--ink-muted)' }}>
                      {item.traditional}
                    </span>
                  </div>

                  {/* FlashCheck */}
                  <div
                    className="flex items-center justify-between p-3"
                    style={{ background: 'rgba(198, 241, 53, 0.15)' }}
                  >
                    <span className="text-sm font-medium" style={{ color: 'var(--ink)' }}>FlashCheck</span>
                    <span className="font-bold" style={{ color: 'var(--ink)' }}>
                      {item.flashcheck}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div
            className="relative p-6 lg:p-8 text-center"
            style={{
              background: 'var(--ink)',
              clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
            }}
          >
            {/* Corner accents */}
            <div
              className="absolute top-0 right-0 w-5 h-5"
              style={{ background: 'var(--lime)', clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
            />
            <div
              className="absolute bottom-0 left-0 w-5 h-5"
              style={{ background: 'var(--lime)', clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
            />

            <div className="flex items-center justify-center gap-2 mb-4">
              <Gift className="w-6 h-6" style={{ color: 'var(--lime)' }} />
              <span className="text-lg font-bold" style={{ color: 'var(--lime)' }}>
                얼리버드 혜택
              </span>
            </div>

            <p className="text-lg lg:text-xl mb-4" style={{ color: 'var(--paper)' }}>
              지금 사전 예약하시면 정식 출시 때
              <br />
              <span
                className="font-bold px-2 py-1 mt-2 inline-block"
                style={{ background: 'var(--lime)', color: 'var(--ink)' }}
              >
                50% 할인
              </span>
              {' '}혜택을 드립니다.
            </p>

            <p className="text-sm mb-6" style={{ color: 'var(--ink-muted)' }}>
              가격은 정식 출시 시 공개됩니다.
            </p>

            <a
              href="#final-cta"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold transition-all duration-200 hover:translate-x-1"
              style={{
                background: 'var(--lime)',
                color: 'var(--ink)',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}
            >
              <span>사전 예약하고 할인받기</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
