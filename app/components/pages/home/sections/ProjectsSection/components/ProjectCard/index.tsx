'use client'

import { motion } from 'motion/react'

import { DefaultButton } from '@/app/components/commons/DefaultButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'

interface ProjectCardProps {
  title: string
  company: string

  description: string
  url: string

  companyColor: string
  gradient: string
}

export function ProjectCard({
  title,
  company,
  url,
  gradient,
  companyColor,
  description,
}: ProjectCardProps) {
  const t = useTranslations('components.pages.home.sections.projects_and_companies')

  return (
    <motion.article
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={`
        min-w-100
        h-full
      
        p-6
        aspect-2/3

        flex
        flex-col

        lg:mr-0
        mr-6
        
        rounded-4xl
      
        ${gradient}
        bg-linear-135
      
        text-white

        shadow-xl
      `}
    >
      <header className='relative flex items-center justify-center h-1/2 text-center whitespace-normal'>
        <h3 className='transform-[translateY(48px)] text-6xl sm:text-7xl font-extrabold tracking-tight'>
          { title }
        </h3>

        <p
          className={`
            ${companyColor}

            absolute
            top-0
            left-0
        
            flex
            items-center
            justify-center
        
            min-w-45
            h-14
        
            rounded-full
        
            bg-white
        
            sm:text-2xl
            text-xl
            tracking-tight
          `}
        >
          { company }
        </p>
      </header>

      <div className='flex flex-col h-1/2 gap-6 items-start justify-end'>
        <p className='whitespace-normal'>
          { description }
        </p>

        <DefaultButton
          href={url}
          target='_blank'
          color='white'
          variant='tonal'
          block
          large
          link
          appendIcon={
            <div className='absolute size-12 top-1/2 right-1 transform-[translateY(-50%)] flex items-center justify-center bg-white/90 text-black rounded-full'>
              <FontAwesomeIcon
                icon={faChevronRight}
              />
            </div>
          }
        >
          { t('actions.access_website') }
        </DefaultButton>
      </div>
    </motion.article>
  )
}