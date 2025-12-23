'use client'

import { motion } from 'motion/react'

import { DefaultButton } from '@/app/components/commons/DefaultButton'

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
  gradient,
  companyColor,
  description,
}: ProjectCardProps) {
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
      
        p-8
        aspect-2/3

        flex
        flex-col

        lg:mr-0
        mr-6
        
        rounded-[45px]
      
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
          color='white'
          variant='tonal'
          block
        >
          Visitar no site
        </DefaultButton>
      </div>
    </motion.article>
  )
}