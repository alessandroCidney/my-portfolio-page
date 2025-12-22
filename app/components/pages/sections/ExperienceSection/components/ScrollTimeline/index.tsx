'use client'

import { useRef, useState } from 'react'

import { useScroll } from '@/app/hooks/useScroll'
import { ExperienceCard } from './components/ExperienceCard'

export function ScrollTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timeLineProgressRef = useRef<HTMLDivElement>(null)
  const fullTimelineRef = useRef<HTMLDivElement>(null)

  const [timeLineProgress, setTimelineProgress] = useState(0)

  function onScroll() {
    if (timeLineProgressRef.current && fullTimelineRef.current) {
      const timelineClientRect = timeLineProgressRef.current.getBoundingClientRect()
      const backgroundClientRect = fullTimelineRef.current.getBoundingClientRect()

      const rawProgress = (timelineClientRect.top - window.innerHeight * 0.4) * -1

      const progressLimit = backgroundClientRect.height

      if (rawProgress < 0) {
        return setTimelineProgress(0)
      }

      if (rawProgress >= progressLimit) {
        return setTimelineProgress(100)
      }

      const progressPercentage = rawProgress / progressLimit * 100
      
      setTimelineProgress(progressPercentage)
    }
  }

  useScroll({ onScroll, debounceTime: 1 })

  const experienceArr = [
    {
      job: 'Desenvolvedor Front-End Pleno',
      time: '2024 - 2025',
      company: 'SantoDigital',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quo! Dolorem, suscipit culpa velit odit dolor minus numquam tenetur officia ullam nisi quia, amet eos magni reprehenderit unde corporis aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quo! Dolorem, suscipit culpa velit odit dolor minus numquam tenetur officia ullam nisi quia, amet eos magni reprehenderit unde corporis aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quo! Dolorem, suscipit culpa velit odit dolor minus numquam tenetur officia ullam nisi quia, amet eos magni reprehenderit unde corporis aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quo! Dolorem, suscipit culpa velit odit dolor minus numquam tenetur officia ullam nisi quia, amet eos magni reprehenderit unde corporis aspernatur?',
    },
    {
      job: 'Desenvolvedor Front-End Júnior',
      time: '2022 - 2023',
      company: 'SantoDigital',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quo! Dolorem, suscipit culpa velit odit dolor minus numquam tenetur officia ullam nisi quia, amet eos magni reprehenderit unde corporis aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quo! Dolorem, suscipit culpa velit odit dolor minus numquam tenetur officia ullam nisi quia, amet eos magni reprehenderit unde corporis aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quo! Dolorem, suscipit culpa velit odit dolor minus numquam tenetur officia ullam nisi quia, amet eos magni reprehenderit unde corporis aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quo! Dolorem, suscipit culpa velit odit dolor minus numquam tenetur officia ullam nisi quia, amet eos magni reprehenderit unde corporis aspernatur?',
    },
    {
      job: 'Estagiário de Programação Front-End',
      time: '2021 - 2022',
      company: 'SantoDigital',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quo! Dolorem, suscipit culpa velit odit dolor minus numquam tenetur officia ullam nisi quia, amet eos magni reprehenderit unde corporis aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quo! Dolorem, suscipit culpa velit odit dolor minus numquam tenetur officia ullam nisi quia, amet eos magni reprehenderit unde corporis aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quo! Dolorem, suscipit culpa velit odit dolor minus numquam tenetur officia ullam nisi quia, amet eos magni reprehenderit unde corporis aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quo! Dolorem, suscipit culpa velit odit dolor minus numquam tenetur officia ullam nisi quia, amet eos magni reprehenderit unde corporis aspernatur?',
    },
  ]

  return (
    <div
      ref={containerRef}
      className='relative flex gap-6'
    >
      <div className='hidden lg:block flex-[1_1_0]' />

      <div
        className='relative flex flex-col items-center rounded-full'
      >
        <div
          className='z-3 absolute bg-secondary size-6 rounded-full border-2 border-solid border-white outline-3 outline-secondary'
          style={{
            top: `${timeLineProgress}%`,
          }}
        />

        <div className='relative flex justify-center h-full w-8'>
          <div
            ref={timeLineProgressRef}
            className='absolute z-2 w-1 bg-primary rounded-full'
            style={{
              height: `${timeLineProgress}%`,
            }}
          />

          <div
            ref={fullTimelineRef}
            className='z-1 absolute top-0 h-full w-1 bg-gray-200 rounded-full'
          />
        </div>
      </div>

      <div className='flex-[1_1_0] py-20'>
        {
          experienceArr.map((experienceData, experienceIndex) => (
            <ExperienceCard
              key={`experienceKey${experienceIndex}`}
              containerRef={containerRef}
              fullTimelineRef={fullTimelineRef}
              experienceData={experienceData}
              timeLineProgress={timeLineProgress}
            />
          ))
        }
      </div>
    </div>
  )
}