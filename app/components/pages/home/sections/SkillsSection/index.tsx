'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LandingPageSection } from '@/app/components/pages/home/core/LandingPageSection'

export function HardSkillsSection() {
  const [searchStr, setSearchStr] = useState('')
  const [searchFocus, setSearchFocus] = useState(false)
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const skillsList = useMemo(() => [
    { title: 'JavaScript' },
    { title: 'TypeScript' },

    { title: 'React.js' },
    { title: 'Next.js' },
    { title: 'Vue.js' },
    { title: 'Nuxt.js' },
    { title: 'Vuetify' },

    { title: 'HTML5' },
    { title: 'CSS3' },
    { title: 'Sass / Scss' },

    { title: 'Node.js' },
    { title: 'MongoDB' },
    { title: 'MySQL' },
    { title: 'Express' },
    { title: 'Docker' },
    { title: 'Webpack' },

    { title: 'Firebase' },
    { title: 'Google Cloud Platform (GCP)' },

    { title: 'APIs RESTful' },
    { title: 'WebSocket' },
    { title: 'Socket.IO' },

    { title: 'Jest' },
    { title: 'Cypress' },
    { title: 'Selenium' },
    { title: 'Vitest' },

    { title: 'Git' },
    { title: 'Github' },
    { title: 'Github Actions' },
    { title: 'Bitbucket' },
    { title: 'Bitbucket Pipelines' },
    { title: 'Jira' },

    { title: 'Figma' },
    { title: 'Scrum' },
    { title: 'Kanban' },
  ], [])

  function getRandomItem<T>(arr: T[]) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  const getXRandomItems = useCallback((arr: string[], x: number) => {
    const items: string[] = []

    while (items.length < x) {
      const newRandomItem = getRandomItem(arr)

      if (!items.includes(newRandomItem)) {
        items.push(newRandomItem)
      }
    }

    return items
  }, [])

  const reloadSelectedSkills = useCallback(() => {
    if (searchStr) {
      setSelectedSkills([])
    }

    setSelectedSkills(getXRandomItems(skillsList.map(skillData => skillData.title), 5))
  }, [getXRandomItems, searchStr, skillsList])

  function handleUpdateSearch(newStr: string) {
    if (newStr) {
      setSelectedSkills(
        skillsList
          .map((skillData) => skillData.title)
          .filter(skillTitle => skillTitle.toLowerCase().includes(newStr.toLowerCase())),
      )
    } else {
      setSelectedSkills([])
    }

    setSearchStr(newStr)
  }

  function handleFocus(bool: boolean) {
    setSearchFocus(bool)

    if (bool) {
      setSelectedSkills([])
    } else {
      reloadSelectedSkills()
    }
  }

  useEffect(() => {
    const intervalKey = setInterval(() => {
      if (!searchStr && !searchFocus) {
        reloadSelectedSkills()
      }
    }, 2000)

    return () => {
      clearInterval(intervalKey)
    }
  }, [selectedSkills, searchStr, getXRandomItems, skillsList, reloadSelectedSkills, searchFocus])

  return (
    <LandingPageSection
      id='skills'
      title='Minhas Skills'
      align='center'
    >
      <form
        className='flex items-center justify-start mx-auto w-200 max-w-[80vw] h-18 mb-16 overflow-hidden bg-white border-2 border-gray-200 rounded-full'
        onSubmit={(e) => e.preventDefault()}
      >
        <label className='relative h-full w-full flex items-center justify-start'>
          <span className='sr-only'>
            Nome da Skill
          </span>

          <span className='text-gray-500 pl-4 pr-3'>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
            />
          </span>

          <input
            type='text'
            placeholder='Digite uma habilidade'
            name='skill'
            className='h-full outline-none flex-[1_1_0]'
            onChange={(e) => handleUpdateSearch(e.target.value)}
            onFocus={(e) => handleFocus(true)}
            onBlur={(e) => handleFocus(false)}
          />
        </label>
      </form>

      <ul className='flex flex-wrap items-start justify-center md:gap-4 gap-3 w-350 max-w-[80vw] mx-auto'>
        {
          skillsList.map((skillData, skillIndex) => (
            <li
              key={`skillKey${skillIndex}`}
              className={`
                ${selectedSkills.includes(skillData.title) ? 'bg-primary' : 'bg-primary/20'}

                flex
                items-center
                justify-center
                rounded-full
                text-white
                tracking-tighter
                font-medium
                transition-colors

                md:px-8
                px-4

                md:h-20
                h-12

                md:text-2xl
                text-base
              `}
            >
              { skillData.title }
            </li>
          ))
        }
      </ul>
    </LandingPageSection>
  )
}