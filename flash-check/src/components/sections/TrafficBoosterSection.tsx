'use client'

import { motion } from 'framer-motion'
import { Megaphone, MousePointer, PieChart, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Megaphone,
    title: '메타 광고 자동 연동',
    description: '복잡한 광고 세팅 없이 원클릭으로 연동',
  },
  {
    icon: MousePointer,
    title: '타겟 고객에게 도달',
    description: '당신의 제품에 관심 있을 잠재 고객을 찾아 광고',
  },
  {
    icon: PieChart,
    title: '클릭 데이터 수집',
    description: '실제 구매 의향을 나타내는 행동 데이터 확보',
  },
]

export function TrafficBoosterSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--paper-warm)' }}>
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(var(--ink) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="px-3 py-1 text-xs font-semibold tracking-wider uppercase"
                style={{ background: 'var(--electric)', color: 'white' }}
              >
                Coming Soon
              </span>
              <span
                className="px-3 py-1 text-xs font-semibold tracking-wider uppercase"
                style={{ border: '1px solid var(--ink)', color: 'var(--ink)' }}
              >
                Phase 2
              </span>
            </div>

            {/* Headline */}
            <h2
              className="font-display text-3xl lg:text-4xl font-bold leading-tight mb-4"
              style={{ color: 'var(--ink)' }}
            >
              페이지는 만들었는데,
              <br />
              <span style={{ color: 'var(--electric)' }}>검증할 사람이 없다고요?</span>
            </h2>

            {/* Description - 올바른 카피 (검증 중심) */}
            <p className="text-lg mb-6" style={{ color: 'var(--ink-muted)' }}>
              FlashCheck는 랜딩페이지만 만들어주지 않습니다.
              <br />
              <strong style={{ color: 'var(--ink)' }}>
                &apos;트래픽 부스터&apos;로 실제 타겟 고객의 반응을 테스트
              </strong>
              할 수 있습니다.
            </p>

            <p className="text-base mb-8" style={{ color: 'var(--ink-muted)' }}>
              메타 광고와 자동 연동하여, 3~5만원의 소액으로도
              당신의 아이디어가 시장에서 통하는지 확인할 수 있습니다.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    style={{ background: 'var(--lime)', color: 'var(--ink)' }}
                  >
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--ink)' }}>
                      {feature.title}
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right visual - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="relative p-6 lg:p-8"
              style={{
                background: 'var(--ink)',
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)'
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-5 h-5"
                style={{
                  background: 'var(--lime)',
                  clipPath: 'polygon(100% 0, 0 100%, 100% 100%)'
                }}
              />

              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 flex items-center justify-center"
                    style={{ background: 'var(--electric)' }}
                  >
                    <Megaphone className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold" style={{ color: 'var(--paper)' }}>
                    트래픽 부스터
                  </span>
                </div>
                <span
                  className="px-2 py-1 text-xs font-semibold"
                  style={{ background: 'var(--lime)', color: 'var(--ink)' }}
                >
                  실행 중
                </span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4" style={{ background: 'var(--ink-light)' }}>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--lime)' }}>
                    광고 도달
                  </p>
                  <p className="font-display text-2xl font-bold" style={{ color: 'var(--paper)' }}>
                    1,247
                  </p>
                  <p className="text-xs" style={{ color: 'var(--ink-muted)' }}>명</p>
                </div>
                <div className="p-4" style={{ background: 'var(--ink-light)' }}>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--lime)' }}>
                    클릭 수
                  </p>
                  <p className="font-display text-2xl font-bold" style={{ color: 'var(--paper)' }}>
                    89
                  </p>
                  <p className="text-xs" style={{ color: 'var(--ink-muted)' }}>회</p>
                </div>
                <div className="p-4" style={{ background: 'var(--ink-light)' }}>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--lime)' }}>
                    클릭률 (CTR)
                  </p>
                  <p className="font-display text-2xl font-bold" style={{ color: 'var(--paper)' }}>
                    7.1%
                  </p>
                  <p className="text-xs" style={{ color: 'var(--ink-muted)' }}>업계 평균 대비 2.3x</p>
                </div>
                <div className="p-4" style={{ background: 'var(--ink-light)' }}>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--lime)' }}>
                    구매 의향 클릭
                  </p>
                  <p className="font-display text-2xl font-bold" style={{ color: 'var(--lime)' }}>
                    23
                  </p>
                  <p className="text-xs" style={{ color: 'var(--ink-muted)' }}>Fake Door 클릭</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-2">
                  <span style={{ color: 'var(--ink-muted)' }}>광고 예산</span>
                  <span style={{ color: 'var(--paper)' }}>28,000 / 40,000원</span>
                </div>
                <div className="h-2" style={{ background: 'var(--ink-light)' }}>
                  <div
                    className="h-full transition-all duration-500"
                    style={{ width: '70%', background: 'var(--lime)' }}
                  />
                </div>
              </div>

              {/* Bottom note */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--ink-muted)' }}>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--lime)' }} />
                  <span>실시간 데이터 수집 중</span>
                </div>
              </div>
            </div>

            {/* Floating insight card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-4 p-4 flex items-center gap-3"
              style={{ background: 'var(--lime)', color: 'var(--ink)' }}
            >
              <PieChart className="w-5 h-5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold">
                  시장 검증 결과: 긍정적
                </p>
                <p className="text-xs opacity-80">
                  구매 의향 클릭률 2.6%는 업계 평균(1.5%)보다 높습니다.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm mb-4" style={{ color: 'var(--ink-muted)' }}>
            트래픽 부스터는 정식 출시 시 사용 가능합니다.
          </p>
          <a
            href="#final-cta"
            className="inline-flex items-center gap-2 text-sm font-semibold group"
            style={{ color: 'var(--electric)' }}
          >
            <span>사전 예약하고 먼저 사용하기</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
