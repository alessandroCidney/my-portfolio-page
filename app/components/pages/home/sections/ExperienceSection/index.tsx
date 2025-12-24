import { LandingPageSection } from '@/app/components/pages/home/core/LandingPageSection'
import { ScrollTimeline } from './components/ScrollTimeline'

export function ExperienceSection() {
  return (
    <LandingPageSection
      id='experience'
      title='Experiência Profissional'
      subtitle='Acompanhe minha trajetória'
      align='center'
    >
      <ScrollTimeline />
    </LandingPageSection>
  )
}