import { RefObject, useMemo, useRef, useState } from 'react'

import { AnimatePresence, motion } from 'motion/react'

import { useScroll } from '@/app/hooks/useScroll'

interface ExperienceCardProps {
  experienceData: {
    job: string
    time: string
    company: string
    description: string
  }

  timeLineProgress: number

  containerRef: RefObject<HTMLDivElement | null>
  fullTimelineRef: RefObject<HTMLDivElement | null>
}

export function ExperienceCard({ experienceData, timeLineProgress, containerRef, fullTimelineRef }: ExperienceCardProps) {
  const [active, setActive] = useState(false)
  const [overtaken, setOvertaken] = useState(false)
  
  const articleRef = useRef<HTMLDivElement>(null)
  
  function onScroll() {
    if (containerRef.current && fullTimelineRef.current && articleRef.current) {
      const articleRect = articleRef.current.getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()
      const fullTimelineRect = fullTimelineRef.current.getBoundingClientRect()

      const startTop = articleRect.top - containerRect.top
      const endTop = startTop + articleRect.height

      const startPercentage = startTop / fullTimelineRect.height * 100
      const endPercentage = endTop / fullTimelineRect.height * 100

      setActive(timeLineProgress >= startPercentage && timeLineProgress <= endPercentage)
      setOvertaken(timeLineProgress >= startPercentage)
    }
  }

  useScroll({ onScroll, debounceTime: 10 })

  return (
    <article
      ref={articleRef}
      className='mb-20'
    >
      <header className='mb-4'>
        <h3 className={`${overtaken ? 'text-primary' : ''} text-2xl font-bold tracking-tight`}>
          { experienceData.job }
        </h3>

        <div
          className={`absolute z-2 transform-[translate(calc((50%+40px)*-1),-50%)] size-4 rounded-full ${overtaken ? 'bg-primary border-2 border-white outline-3 outline-primary' : 'bg-white border-4 border-gray-200'}`}
        />

        <p>
          { experienceData.company }
        </p>

        <AnimatePresence>
          {
            active && (
              <motion.p
                key={`pKey${experienceData.time}`}
                className='absolute inline-block transform-[translate(calc((100%+80px)*-1),-25%)] bg-primary font-medium p-4 rounded-xl text-white'
                style={{
                  top: `${timeLineProgress}%`,
                }}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
              >
                { experienceData.time }
              </motion.p>
            )
          }
        </AnimatePresence>
      </header>

      <p>
        { experienceData.description }
      </p>
    </article>
  )
}