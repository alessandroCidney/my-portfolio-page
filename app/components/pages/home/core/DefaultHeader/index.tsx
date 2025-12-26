'use client'

import Link from 'next/link'

import { useEffect, useState } from 'react'

import { useTranslations } from 'next-intl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faLanguage } from '@fortawesome/free-solid-svg-icons'

import { useRoutes } from '@/app/hooks/useRoutes'

import { debounce } from '@/app/utils'
import { getScrollPosition } from '@/app/utils/scroll'

import { DefaultButton } from '@/app/components/commons/DefaultButton'
import { FloatingNavigationSidebar } from './components/FloatingNavigationSidebar'
import { InlineNavigationBar } from './components/InlineNavigationBar'
import { LanguageMenu } from './components/LanguageMenu'

export function DefaultHeader() {
  const t = useTranslations('components.pages.home.core.default_header')

  const { landingPageRoutes } = useRoutes()

  const [userScrolledDown, setUserScrolledDown] = useState(false)
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  function checkScroll() {
    setUserScrolledDown(getScrollPosition() > 20)
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
          <Link href='/'>
            {
              t.rich('title', {
                'sr-only': (chunks) => <span className='sr-only'>{chunks}</span>,
              })
            }
          </Link>
        </h1>
      
        <DefaultButton
          icon
          variant='text'
          color='white'
          position='absolute'
          className='block lg:hidden z-3 right-2 top-1/2 transform-[translateY(-50%)]'
          title={sidebarIsOpen ? t('actions.close_navigation_bar') : t('actions.open_navigation_bar')}
          aria-controls='floating-navigation-sidebar'
          aria-expanded={sidebarIsOpen}
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

        <div className='flex gap-2'>
          <LanguageMenu
            color={userScrolledDown ? 'primary' : 'white'}
            className='mr-12 lg:mr-0'
          />

          <DefaultButton
            className='hidden lg:flex'
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
            target='_blank'
            link
          >
            { t('actions.hire') }
          </DefaultButton>
        </div>
      </div>
    </header>
  )
}
