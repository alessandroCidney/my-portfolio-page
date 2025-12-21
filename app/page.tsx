import { Metadata, Viewport } from 'next'

import { DefaultHeader } from './components/pages/core/DefaultHeader'
import { DefaultFooter } from './components/pages/core/DefaultFooter'

import { HeroSection } from './components/pages/sections/HeroSection'
import { ProjectsSection } from './components/pages/sections/ProjectsSection'
import { HardSkillsSection } from './components/pages/sections/HardSkillsSection'
import { AboutSection } from './components/pages/sections/AboutSection'
import { ExperienceSection } from './components/pages/sections/ExperienceSection'

export const metadata: Metadata = {
  title: 'Portfólio - Alessandro Cídney',
}

export const viewport: Viewport = {
  colorScheme: 'light',
}

export default function Home() {
  return (
    <>
      <DefaultHeader />

      <main>
        <HeroSection/>

        <ProjectsSection />

        <AboutSection />

        <HardSkillsSection />

        <ExperienceSection />
      </main>

      <DefaultFooter />
    </>
  )
}
