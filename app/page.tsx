import { Metadata, Viewport } from 'next'
import { DefaultFooter } from '@/app/components/pages/home/core/DefaultFooter'
import { DefaultHeader } from './components/pages/home/core/DefaultHeader'

import { HeroSection } from '@/app/components/pages/home/sections/HeroSection'
import { ProjectsSection } from '@/app/components/pages/home/sections/ProjectsSection'
import { HardSkillsSection } from '@/app/components/pages/home/sections/SkillsSection'
import { AboutSection } from '@/app/components/pages/home/sections/AboutSection'
import { ExperienceSection } from '@/app/components/pages/home/sections/ExperienceSection'
import { ContactSection } from '@/app/components/pages/home/sections/ContactSection'
import { OtherLinksSection } from '@/app/components/pages/home/sections/OtherLinksSection'

export const metadata: Metadata = {
  title: 'Portfólio - Alessandro Cídney',
}

export const viewport: Viewport = {
  colorScheme: 'light',
}

export default async function Home() {

  return (
    <>
      <DefaultHeader />

      <main>
        <HeroSection/>

        <ProjectsSection />

        <HardSkillsSection />

        <AboutSection />

        <ExperienceSection />

        <OtherLinksSection />

        <ContactSection />
      </main>

      <DefaultFooter />
    </>
  )
}
