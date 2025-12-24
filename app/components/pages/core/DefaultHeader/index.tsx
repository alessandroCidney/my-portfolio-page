'use client'

import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

import { DefaultButton } from '@/app/components/commons/DefaultButton'
import { FloatingNavigationSidebar } from './components/FloatingNavigationSidebar'

import { debounce } from '@/app/utils'
import { getScrollPosition } from '@/app/utils/scroll'
import { landingPageRoutes } from '@/app/utils/links'
import { InlineNavigationBar } from './components/InlineNavigationBar'

export function DefaultHeader() {
  const [userScrolledDown, setUserScrolledDown] = useState(false)
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

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
      className={`
        ${userScrolledDown ? 'bg-white/95 backdrop-blur-lg shadow-sm text-primary' : 'text-white'}

        z-11
      
        fixed
      
        w-full
        h-18
      
        px-4
      `}
    >
      <div className='lg:w-400 lg:max-w-[80vw] h-full flex items-center justify-between mx-auto'>
        <h1 className='text-2xl font-extrabold'>
          Portfólio <span className='sr-only'>de Alessandro Cídney - Desenvolvedor Web e Front-end</span>
        </h1>
      
        <DefaultButton
          icon
          variant='text'
          color='white'
          position='absolute'
          className='block lg:hidden z-3 right-2 top-1/2 transform-[translateY(-50%)]'
          onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
        >
          <FontAwesomeIcon
            icon={sidebarIsOpen ? faClose : faBars}
            className={sidebarIsOpen || userScrolledDown ? 'text-primary' : 'text-white'}
            size='xl'
          />
        </DefaultButton>

        <FloatingNavigationSidebar
          className='block lg:hidden'
          open={sidebarIsOpen}
          setOpen={setSidebarIsOpen}
          routes={landingPageRoutes}
        />

        <InlineNavigationBar
          className='hidden lg:block'
          routes={landingPageRoutes}
        />

        <div className='hidden lg:flex gap-2'>
          <DefaultButton
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
            target='_blank'
            link
          >
            Contratar
          </DefaultButton>
        </div>
      </div>
    </header>
  )
}
