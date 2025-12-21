import styles from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { DefaultButton } from '../../../commons/DefaultButton'
import { ScrollTimeline } from './components/ScrollTimeline'

export function ExperienceSection() {
  return (
    <section
      id='experience'
      className='bg-gray-100'
    >
      <div className='section__content bg-gray-50'>
        <div className='w-300 max-w-[80vw] mx-auto'>
          <header>
            <h2 className='font-bold tracking-tight text-3xl text-primary'>
              Experiência Profissional
            </h2>

            <p className='font-extrabold tracking-tight text-7xl'>
              Acompanhe minha trajetória
            </p>
          </header>

          <ScrollTimeline />
        </div>
      </div>
    </section>
  )
}