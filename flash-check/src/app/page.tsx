import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { TrafficBoosterSection } from '@/components/sections/TrafficBoosterSection'
import { SafetySection } from '@/components/sections/SafetySection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { FooterSection } from '@/components/sections/FooterSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TrafficBoosterSection />
      <SafetySection />
      <PricingSection />
      <FinalCTASection />
      <FooterSection />
    </main>
  )
}
