import { useTranslations } from 'next-intl'

import { LandingPageSection } from '@/app/components/pages/home/core/LandingPageSection'
import { ScrollTimeline } from './components/ScrollTimeline'

export function ExperienceSection() {
  const t = useTranslations('components.pages.home.sections.experience')

  return (
    <LandingPageSection
      id='experience'
      title={t('title')}
      subtitle={t('subtitle')}
      align='center'
    >
      <ScrollTimeline />
    </LandingPageSection>
  )
}