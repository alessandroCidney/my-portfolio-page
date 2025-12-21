'use client'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import { useCallback, useEffect, useMemo, useState } from 'react'

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
      reloadSelectedSkills()
    }

    setSearchStr(newStr)
  }

  function handleFocus(bool: boolean) {
    setSearchFocus(bool)

    if (bool) {
      setSelectedSkills([])
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
    <section
      id='skills'
      className='bg-gray-50'
    >
      <div className='section__content bg-gray-100'>
        <header className='text-center'>
          <h2 className='font-extrabold tracking-tight text-7xl'>
            Skills
          </h2>
        </header>

        <form className='flex items-center justify-start mx-auto w-200 max-w-9/10 h-18 mb-16 overflow-hidden border-2 border-gray-200 rounded-full'>
          <label className='relative flex items-center justify-start'>
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
              className='w-full h-full outline-none'
              onChange={(e) => handleUpdateSearch(e.target.value)}
              onFocus={(e) => handleFocus(true)}
              onBlur={(e) => handleFocus(false)}
            />
          </label>
        </form>

        <ul className='flex flex-wrap items-start justify-center gap-4 w-350 max-w-[80vw] mx-auto'>
          {
            skillsList.map((skillData, skillIndex) => (
              <li
                key={`skillKey${skillIndex}`}
                className={`flex items-center justify-center px-8 h-20 ${selectedSkills.includes(skillData.title) ? 'bg-primary' : 'bg-primary/20'} rounded-full text-2xl text-white tracking-tighter font-medium transition-colors`}
              >
                { skillData.title }
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}