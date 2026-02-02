'use client'

import { motion } from 'framer-motion'
import { FileText, Sparkles, BarChart3, ArrowDown } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: '가설 입력',
    description: '누가(X), 무엇을(Y), 얼마에(Z) 살 것인지 입력하세요.',
    time: '30초',
    color: 'var(--lime)',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'AI 파사드 생성',
    description: '고성과 패턴을 학습한 AI가 판매 페이지와 제품 이미지를 완성합니다.',
    time: '3분',
    color: 'var(--electric)',
  },
  {
    number: '03',
    icon: BarChart3,
    title: '시장 검증',
    description: "Fake Door로 고객의 '진짜 행동 데이터'를 수집합니다. 의견이 아닌 클릭 데이터입니다.",
    time: '실시간',
    color: 'var(--coral)',
  },
]

export function SolutionSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--paper)' }}>
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full opacity-10"
        style={{ background: 'var(--lime)', filter: 'blur(100px)' }}
      />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span
            className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-6"
            style={{ background: 'var(--lime)', color: 'var(--ink)' }}
          >
            XYZ 프레임워크
          </span>
          <h2
            className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: 'var(--ink)' }}
          >
            복잡한 기획서는 필요 없습니다.
          </h2>
          <p className="text-lg" style={{ color: 'var(--ink-muted)' }}>
            세 가지만 입력하세요. 나머지는 AI가 합니다.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line connector */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--ink), transparent)', opacity: 0.1 }}
          />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Content side */}
                <div className={`${index % 2 === 1 ? 'lg:order-2 lg:text-right' : ''}`}>
                  <div className="relative">
                    {/* Large number background */}
                    <span
                      className="absolute -top-4 font-display text-[8rem] lg:text-[12rem] font-bold leading-none select-none pointer-events-none"
                      style={{
                        color: step.color,
                        opacity: 0.08,
                        left: index % 2 === 1 ? 'auto' : '-1rem',
                        right: index % 2 === 1 ? '-1rem' : 'auto',
                        zIndex: 0
                      }}
                    >
                      {step.number}
                    </span>

                    {/* Content */}
                    <div className="relative z-10 py-8">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                        <div
                          className="w-12 h-12 flex items-center justify-center"
                          style={{
                            background: step.color,
                            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                          }}
                        >
                          <step.icon className="w-6 h-6" style={{ color: step.color === 'var(--lime)' ? 'var(--ink)' : 'white' }} />
                        </div>
                        <span
                          className="font-display text-sm font-semibold"
                          style={{ color: step.color }}
                        >
                          STEP {step.number}
                        </span>
                      </div>

                      <h3
                        className="font-display text-2xl lg:text-3xl font-bold mb-3"
                        style={{ color: 'var(--ink)' }}
                      >
                        {step.title}
                      </h3>

                      <p className="text-base lg:text-lg mb-4" style={{ color: 'var(--ink-muted)' }}>
                        {step.description}
                      </p>

                      <span
                        className="inline-block px-4 py-2 text-sm font-semibold"
                        style={{
                          background: 'var(--ink)',
                          color: 'var(--paper)',
                          clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                        }}
                      >
                        소요 시간: {step.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visual side */}
                <div className={`hidden lg:block ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div
                    className="relative aspect-[4/3] p-8 flex items-center justify-center"
                    style={{
                      background: 'var(--ink)',
                      clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)'
                    }}
                  >
                    {/* Corner accent */}
                    <div
                      className="absolute top-0 right-0 w-6 h-6"
                      style={{
                        background: step.color,
                        clipPath: 'polygon(100% 0, 0 100%, 100% 100%)'
                      }}
                    />

                    {/* Icon large */}
                    <step.icon className="w-24 h-24 opacity-20" style={{ color: step.color }} />

                    {/* Step indicator */}
                    <div
                      className="absolute bottom-4 left-4 px-3 py-1 text-xs font-semibold"
                      style={{ background: step.color, color: step.color === 'var(--lime)' ? 'var(--ink)' : 'white' }}
                    >
                      {index + 1} / 3
                    </div>
                  </div>
                </div>

                {/* Arrow between steps (mobile) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4 lg:hidden">
                    <ArrowDown className="w-6 h-6" style={{ color: 'var(--ink-muted)' }} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div
            className="inline-flex items-center gap-4 px-8 py-4"
            style={{
              background: 'var(--lime)',
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
            }}
          >
            <span className="font-display text-lg font-bold" style={{ color: 'var(--ink)' }}>
              총 소요 시간:
            </span>
            <span className="font-display text-3xl font-bold" style={{ color: 'var(--ink)' }}>
              약 10분
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
