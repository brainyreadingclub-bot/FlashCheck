'use client'

import { motion } from 'framer-motion'
import { Zap, Clock, Shield } from 'lucide-react'
import { EmailForm } from '@/components/forms/EmailForm'

const benefits = [
  { icon: Clock, text: '10분 안에 검증 시작' },
  { icon: Zap, text: '코딩 없이 완전 자동화' },
  { icon: Shield, text: '법적으로 안전한 테스트' },
]

export function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--ink)' }}
    >
      {/* Lime gradient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] rounded-full opacity-20"
        style={{ background: 'var(--lime)', filter: 'blur(120px)' }}
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
        <div className="text-center max-w-2xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 mb-8"
            style={{
              background: 'var(--lime)',
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
            }}
          >
            <Zap className="w-8 h-8" style={{ color: 'var(--ink)' }} />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: 'var(--paper)' }}
          >
            다음 아이디어,
            <br />
            <span style={{ color: 'var(--lime)' }}>몇 개월 투자하실 건가요?</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-semibold mb-8"
            style={{ color: 'var(--lime)' }}
          >
            10분이면 답이 나옵니다.
          </motion.p>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <EmailForm
              variant="cta"
              source="final_cta"
              buttonText="사전 예약 신청하기"
            />
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm mb-12"
            style={{ color: 'var(--ink-muted)' }}
          >
            출시 알림과 50% 할인 코드를 보내드립니다.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 lg:gap-8"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-8 h-8 flex items-center justify-center"
                  style={{ background: 'var(--ink-light)' }}
                >
                  <benefit.icon className="w-4 h-4" style={{ color: 'var(--lime)' }} />
                </div>
                <span className="text-sm" style={{ color: 'var(--paper)' }}>
                  {benefit.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div
            className="w-px h-16"
            style={{ background: 'linear-gradient(to bottom, var(--lime), transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
