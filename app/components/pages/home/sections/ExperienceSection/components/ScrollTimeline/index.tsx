'use client'

import { useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

import { useScroll } from '@/app/hooks/useScroll'
import { ExperienceCard } from './components/ExperienceCard'
import RichText from '@/app/components/commons/RichText'

export function ScrollTimeline() {
  const t = useTranslations('components.pages.home.sections.experience.experience_list')

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

  useScroll({ onScroll, debounceTime: 5 })

  function generateExperienceItems(jobKey: string, amount: number) {
    return Array.from(Array(amount).keys())
      .map((n) => (
        <RichText key='experience_item_1_key'>
          { (tags) => t.rich(`${jobKey}.description_list.item_${n + 1}`, tags) }
        </RichText>
      ))
  }

  const experienceArr = [
    {
      job: t('mid_front_end_developer.title'),
      time: t('mid_front_end_developer.time'),
      company: t('mid_front_end_developer.company'),
      descriptionList: generateExperienceItems('mid_front_end_developer', 6),
    },
    {
      job: t('junior_front_end_developer.title'),
      time: t('junior_front_end_developer.time'),
      company: t('junior_front_end_developer.company'),
      descriptionList: generateExperienceItems('junior_front_end_developer', 3),
    },
    {
      job: t('front_end_trainee.title'),
      time: t('front_end_trainee.time'),
      company: t('front_end_trainee.company'),
      descriptionList: generateExperienceItems('front_end_trainee', 3),
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