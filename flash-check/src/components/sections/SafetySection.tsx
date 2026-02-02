'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, CreditCard, CheckCircle, Scale } from 'lucide-react'

const safetyFeatures = [
  {
    icon: Shield,
    title: '법적 문제 없는 시나리오',
    description: "'품절' 또는 '사전예약' 시나리오를 자동 적용하여 소비자 보호법을 준수합니다.",
  },
  {
    icon: Lock,
    title: '개인정보 보호법 준수',
    description: '최소한의 정보만 수집하고, GDPR/PIPA 가이드라인을 자동으로 적용합니다.',
  },
  {
    icon: CreditCard,
    title: '실제 결제 기능 없음',
    description: '실제 결제는 원천 배제됩니다. 클릭 데이터만 수집하여 법적 리스크를 제거합니다.',
  },
]

const legalBadges = [
  '소비자보호법 준수',
  '개인정보보호법 준수',
  '전자상거래법 준수',
  '표시광고법 준수',
]

export function SafetySection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--ink)' }}>
      {/* Diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            var(--paper),
            var(--paper) 1px,
            transparent 1px,
            transparent 40px
          )`
        }}
      />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Scale className="w-5 h-5" style={{ color: 'var(--lime)' }} />
            <span
              className="text-xs font-semibold tracking-wider uppercase"
              style={{ color: 'var(--lime)' }}
            >
              법적 안전성
            </span>
          </div>

          <h2
            className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: 'var(--paper)' }}
          >
            고객을 속이는 게 아닙니다.
            <br />
            <span style={{ color: 'var(--lime)' }}>기회를 약속</span>하는 겁니다.
          </h2>

          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-muted)' }}>
            FlashCheck는 법적으로 완전히 안전한 방식으로 시장 검증을 수행합니다.
            <br />
            Fake Door 테스트의 윤리적 논란? 우리가 해결했습니다.
          </p>
        </motion.div>

        {/* Safety Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className="relative h-full p-6 lg:p-8 transition-all duration-300"
                style={{
                  background: 'var(--ink-light)',
                  borderTop: '3px solid var(--lime)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center mb-6"
                  style={{
                    background: 'rgba(198, 241, 53, 0.1)',
                  }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: 'var(--lime)' }} />
                </div>

                {/* Content */}
                <h3
                  className="font-display text-xl font-bold mb-3"
                  style={{ color: 'var(--paper)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                  {feature.description}
                </p>

                {/* Hover corner accent */}
                <div
                  className="absolute top-0 right-0 w-0 h-0 transition-all duration-300 group-hover:w-8 group-hover:h-8"
                  style={{
                    background: 'var(--lime)',
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/10"
        >
          <p className="text-center text-sm mb-6" style={{ color: 'var(--ink-muted)' }}>
            FlashCheck의 안전장치
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {legalBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="flex items-center gap-2 px-4 py-2"
                style={{ background: 'var(--ink-light)' }}
              >
                <CheckCircle className="w-4 h-4" style={{ color: 'var(--lime)' }} />
                <span className="text-sm" style={{ color: 'var(--paper)' }}>{badge}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div
            className="inline-block px-6 py-4 max-w-2xl"
            style={{
              background: 'rgba(198, 241, 53, 0.1)',
              border: '1px solid var(--lime)',
            }}
          >
            <p className="text-base" style={{ color: 'var(--paper)' }}>
              <span style={{ color: 'var(--lime)' }}>&quot;실제 제품이 없는 상태에서 고객 반응을 테스트하는 것&quot;</span>
              <br />
              이것은 속임수가 아닌, 린 스타트업의 핵심 방법론입니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
