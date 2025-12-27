import { useTranslations } from 'next-intl'

import { LandingPageSection } from '@/app/components/pages/home/core/LandingPageSection'
import { ProjectCard } from './components/ProjectCard'

export function ProjectsSection() {
  const t = useTranslations('components.pages.home.sections.projects_and_companies')

  const projectsArr = [
    {
      title: t('projects_list.santo_id.title'),
      company: t('projects_list.santo_id.company'),
      description: t('projects_list.santo_id.description'),

      companyColor: 'text-[#A229A4]',
      gradient: 'bg-linear-150 from-[#A229A4] to-[#001499]',

      url: process.env.NEXT_PUBLIC_SANTO_ID_URL ?? '',
    },
    {
      title: t('projects_list.santo_ai.title'),
      company: t('projects_list.santo_ai.company'),
      description: t('projects_list.santo_ai.description'),

      companyColor: 'text-blue-700',
      gradient: 'bg-linear-150 from-blue-700 to-sky-500',

      url: process.env.NEXT_PUBLIC_SANTO_AI_URL ?? '',
    },
    {
      title: t('projects_list.santo_id_saude.title'),
      company: t('projects_list.santo_id_saude.company'),
      description: t('projects_list.santo_id_saude.description'),

      companyColor: 'text-sky-500',
      gradient: 'bg-linear-150 from-sky-500 to-cyan-400',

      url: process.env.NEXT_PUBLIC_SANTOID_SAUDE_URL ?? '',
    },
  ]

  return (
    <LandingPageSection
      id='projects-and-companies'
      title={t('title')}
      subtitle={t('subtitle')}
      align='center'
      contentWidthClass='w-full'
    >
      <div
        className={`
          flex
          lg:items-center
          lg:justify-center
          lg:gap-8

          overflow-auto

          w-100vw
          lg:h-160
          h-140

          px-10
          pb-10
        `}
      >
        {
          projectsArr.map((projectData, projectIndex) => (
            <ProjectCard
              key={`projectKey${projectIndex}`}
              {...projectData}
            />
          ))
        }
      </div>
    </LandingPageSection>
  )
}