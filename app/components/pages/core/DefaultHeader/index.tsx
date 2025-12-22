'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { DefaultButton } from '@/app/components/commons/DefaultButton'

import { getScrollPosition } from '@/app/utils/scroll'
import { debounce } from '@/app/utils'

export function DefaultHeader() {
  const [userScrolledDown, setUserScrolledDown] = useState(false)

  function checkScroll() {
    setUserScrolledDown(getScrollPosition() > 20)

    console.log('checkScroll')
  }

  const debouncedCheckScroll = debounce(checkScroll, 10)

  useEffect(() => {
    window.addEventListener('scroll', debouncedCheckScroll)

    return () => {
      window.removeEventListener('scroll', debouncedCheckScroll)
    }
  }, [debouncedCheckScroll])
  return (
    <header
      className={`${userScrolledDown ? 'bg-white/90 backdrop-blur-lg shadow-sm text-primary' : 'text-white'} z-11 fixed flex items-center justify-between w-full h-18 px-4 transition-all`}
    >
      <h1 className='text-xl font-extrabold pl-3'>
        Portfólio
      </h1>

      <nav className='font-medium'>
        <ul className='flex gap-6'>
          <li>
            <Link href='#'>
              <span>Início</span>
            </Link>
          </li>

          <li>
            <Link href='#projects-and-companies'>
              <span>Projetos</span>
            </Link>
          </li>

          <li>
            <Link href='#skills'>
              <span>Skills</span>
            </Link>
          </li>

          <li>
            <Link href='#about'>
              <span>Sobre mim</span>
            </Link>
          </li>

          <li>
            <Link href='#experience'>
              <span>Experiência</span>
            </Link>
          </li>

          <li>
            <Link href='#contact'>
              <span>Contato</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className='flex gap-2'>
        <DefaultButton
          icon
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size='xl'
          />
        </DefaultButton>

        <DefaultButton
          icon
        >
          <FontAwesomeIcon
            icon={faGithub}
            size='xl'
          />
        </DefaultButton>
      </div>
    </header>
  )
}
