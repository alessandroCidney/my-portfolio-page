import styles from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { DefaultButton } from '../../../commons/DefaultButton'
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