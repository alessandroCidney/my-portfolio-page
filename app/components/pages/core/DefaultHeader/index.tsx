'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { DefaultButton } from '@/app/components/commons/DefaultButton'

import { getScrollPosition, scrollToTop } from '@/app/utils/scroll'
import { debounce } from '@/app/utils'

import styles from './styles.module.scss'

export function DefaultHeader() {
  const [userScrolledDown, setUserScrolledDown] = useState(false)

  function checkScroll() {
    setUserScrolledDown(getScrollPosition() > 20)
  }

  const debouncedCheckScroll = debounce(checkScroll, 50)

  useEffect(() => {
    window.addEventListener('scroll', debouncedCheckScroll)

    return () => {
      window.removeEventListener('scroll', debouncedCheckScroll)
    }
  }, [debouncedCheckScroll])
  return (
    <header
      className='z-11 fixed flex items-center justify-between w-full h-16 px-4'
    >
      <h1 className='text-primary text-xl font-extrabold'>
        Portfólio
      </h1>

      <nav>
        <ul className='flex gap-6'>
          <li>
            <Link href='#'>
              <span>Início</span>
            </Link>
          </li>

          <li>
            <Link href='#about'>
              <span>Sobre mim</span>
            </Link>
          </li>

          <li>
            <Link href='#projects'>
              <span>Projetos</span>
            </Link>
          </li>

          <li>
            <Link href='#skills'>
              <span>Skills</span>
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
