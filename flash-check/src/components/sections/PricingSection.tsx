'use client'

import { motion } from 'framer-motion'
import { Check, Gift, ArrowRight } from 'lucide-react'

const comparisonItems = [
  {
    label: '랜딩페이지 제작',
    traditional: '2주',
    flashcheck: '10분',
  },
  {
    label: '비용',
    traditional: '300~500만 원',
    flashcheck: '19,000원/월',
  },
  {
    label: '트래픽 확보',
    traditional: '별도 광고 대행',
    flashcheck: '자동 연동',
  },
  {
    label: '데이터 분석',
    traditional: '수동 취합',
    flashcheck: '실시간 대시보드',
  },
]

const features = [
  '신용카드 불필요',
  '7일 무료 체험',
  '언제든 취소 가능',
  '숨겨진 비용 없음',
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
            가격 비교
          </span>

          <h2
            className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: 'var(--ink)' }}
          >
            외주 맡기면{' '}
            <span className="line-through opacity-50">500만 원</span>,
            <br />
            FlashCheck는{' '}
            <span style={{ color: 'var(--electric)' }}>19,000원</span>
          </h2>

          <p style={{ color: 'var(--ink-muted)' }}>
            검증 비용을 99% 절감하세요.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div
            className="overflow-hidden"
            style={{
              background: 'var(--paper)',
              border: '2px solid var(--ink)',
            }}
          >
            {/* Table Header */}
            <div className="grid grid-cols-3" style={{ background: 'var(--ink)' }}>
              <div className="p-4 lg:p-6">
                <span className="text-sm font-semibold" style={{ color: 'var(--paper)' }}>
                  비교 항목
                </span>
              </div>
              <div className="p-4 lg:p-6 text-center border-l border-white/10">
                <span className="text-sm font-semibold" style={{ color: 'var(--ink-muted)' }}>
                  기존 방식
                </span>
              </div>
              <div className="p-4 lg:p-6 text-center border-l border-white/10" style={{ background: 'var(--lime)' }}>
                <span className="text-sm font-bold" style={{ color: 'var(--ink)' }}>
                  FlashCheck
                </span>
              </div>
            </div>

            {/* Table Body */}
            {comparisonItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="grid grid-cols-3"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <div className="p-4 lg:p-6 flex items-center">
                  <span className="font-medium" style={{ color: 'var(--ink)' }}>
                    {item.label}
                  </span>
                </div>
                <div className="p-4 lg:p-6 text-center flex items-center justify-center border-l" style={{ borderColor: 'var(--border)' }}>
                  <span className="line-through" style={{ color: 'var(--ink-muted)' }}>
                    {item.traditional}
                  </span>
                </div>
                <div
                  className="p-4 lg:p-6 text-center flex items-center justify-center border-l"
                  style={{ background: 'rgba(198, 241, 53, 0.1)', borderColor: 'var(--border)' }}
                >
                  <span className="font-bold" style={{ color: 'var(--ink)' }}>
                    {item.flashcheck}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
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
                특별 제안
              </span>
            </div>

            <p className="text-lg lg:text-xl" style={{ color: 'var(--paper)' }}>
              지금 사전 예약하시면 정식 출시 때{' '}
              <span
                className="font-bold px-2 py-1"
                style={{ background: 'var(--lime)', color: 'var(--ink)' }}
              >
                평생 50% 할인
              </span>{' '}
              혜택을 드립니다.
            </p>
          </div>
        </motion.div>

        {/* Features list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
              className="flex items-center gap-2 justify-center"
            >
              <div
                className="w-5 h-5 flex items-center justify-center"
                style={{ background: 'var(--lime)' }}
              >
                <Check className="w-3 h-3" style={{ color: 'var(--ink)' }} />
              </div>
              <span className="text-sm" style={{ color: 'var(--ink)' }}>
                {feature}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#final-cta"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold transition-all duration-200 hover:translate-x-1"
            style={{
              background: 'var(--lime)',
              color: 'var(--ink)',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
            }}
          >
            <span>사전 예약하고 50% 할인받기</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
