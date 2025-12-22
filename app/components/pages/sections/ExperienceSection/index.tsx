import { ScrollTimeline } from './components/ScrollTimeline'
import { LandingPageSection } from '../../core/LandingPageSection'

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