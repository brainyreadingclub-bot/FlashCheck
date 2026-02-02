'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Clock, AlertCircle } from 'lucide-react'

const problems = [
  {
    icon: TrendingDown,
    number: '01',
    title: '몇 달 밤새워 개발했는데',
    highlight: '아무도 안 산다면?',
    detail: '42%의 스타트업이 시장 수요 부재로 실패합니다. 가장 흔한 실패 원인입니다.',
  },
  {
    icon: Clock,
    number: '02',
    title: '랜딩페이지, PG사, 광고...',
    highlight: '검증 전에 지치지 않나요?',
    detail: '아이디어 검증에 수 주, 수백만 원이 소요됩니다.',
  },
  {
    icon: AlertCircle,
    number: '03',
    title: '"좋은 것 같아요"라는',
    highlight: '의견을 믿으시나요?',
    detail: '친구, 가족의 응원은 시장 검증이 아닙니다. 실제 지갑을 열 사람을 찾아야 합니다.',
  },
]

export function ProblemSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--ink)' }}>
      {/* Diagonal accent */}
      <div
        className="absolute top-0 left-0 w-full h-2"
        style={{ background: 'var(--lime)' }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--paper) 1px, transparent 1px), linear-gradient(90deg, var(--paper) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <span
            className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-6"
            style={{ background: 'var(--coral)', color: 'var(--paper)' }}
          >
            문제 인식
          </span>
          <h2
            className="font-display text-3xl lg:text-5xl font-bold leading-tight"
            style={{ color: 'var(--paper)' }}
          >
            스타트업 실패의{' '}
            <span style={{ color: 'var(--coral)' }}>42%</span>는
            <br />
            &apos;시장 수요 부재&apos; 때문입니다.
          </h2>
        </motion.div>

        {/* Problem Cards */}
        <div className="space-y-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="relative flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-8 transition-all duration-300"
                style={{
                  background: 'var(--ink-light)',
                  borderLeft: '4px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeftColor = 'var(--lime)'
                  e.currentTarget.style.background = 'rgba(198, 241, 53, 0.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeftColor = 'transparent'
                  e.currentTarget.style.background = 'var(--ink-light)'
                }}
              >
                {/* Number */}
                <div
                  className="flex-shrink-0 w-16 h-16 flex items-center justify-center font-display text-2xl font-bold"
                  style={{ color: 'var(--ink-muted)' }}
                >
                  {problem.number}
                </div>

                {/* Icon */}
                <div
                  className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg"
                  style={{ background: 'rgba(255, 107, 91, 0.15)' }}
                >
                  <problem.icon className="w-7 h-7" style={{ color: 'var(--coral)' }} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="text-lg lg:text-xl font-medium mb-1"
                    style={{ color: 'var(--paper)' }}
                  >
                    {problem.title}
                  </h3>
                  <p
                    className="text-xl lg:text-2xl font-bold mb-2"
                    style={{ color: 'var(--lime)' }}
                  >
                    {problem.highlight}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
                    {problem.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg" style={{ color: 'var(--ink-muted)' }}>
            이 문제를 해결하려면 어떻게 해야 할까요?
          </p>
          <div
            className="mt-4 inline-block w-px h-12"
            style={{ background: 'linear-gradient(to bottom, var(--lime), transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
