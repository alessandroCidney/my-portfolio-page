import { Metadata, Viewport } from 'next'

import { DefaultHeader } from './components/pages/core/DefaultHeader'
import { DefaultFooter } from './components/pages/core/DefaultFooter'

import { HeroSection } from './components/pages/sections/HeroSection'
import { ProjectsSection } from './components/pages/sections/ProjectsSection'

import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: 'Portfólio - Alessandro Cídney',
}

export const viewport: Viewport = {
  colorScheme: 'light',
}

export default function Home() {
  return (
    <div>
      <DefaultHeader />

      <main>
        <HeroSection />

        <ProjectsSection />
      </main>

    </div>
  )
}
