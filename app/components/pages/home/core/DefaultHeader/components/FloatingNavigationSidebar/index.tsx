'use client'

import Link from 'next/link'
import { Dispatch, SetStateAction, useRef } from 'react'

import { useTranslations } from 'next-intl'
import { AnimatePresence, motion } from 'motion/react'

interface FloatingNavigationSidebarProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>

  routes: Array<{
    path: string
    title: string
  }>

  className?: string
}

export function FloatingNavigationSidebar({ open, setOpen, routes, className }: FloatingNavigationSidebarProps) {
  const t = useTranslations('components.pages.home.core.default_header.components.floating_navigation_sidebar')
  
  const ulRef = useRef<HTMLUListElement>(null)

  return (
    <div className={className}>
      <AnimatePresence>
        {
          open && (
            <motion.div
              className={`
                z-2
                fixed
                top-0
                right-0

                w-8/10
                h-dvh

                bg-white
              `}
              initial={{
                top: 0,
                right: '-100%',
              }}
              animate={{
                top: 0,
                right: 0,
              }}
              exit={{
                top: 0,
                right: '-100%',
              }}
            >
              <h2 className='text-lg font-bold text-gray-800 p-6'>
                { t('title') }
              </h2>

              <nav>
                <ul
                  ref={ulRef}
                  className={`
                    flex
                    flex-col

                    w-full
                  `}
                >
                  {
                    routes.map((linkData, linkIndex) => (
                      <li
                        key={`linkKey${linkIndex}`}
                        className='w-full'
                      >
                        <Link
                          href={linkData.path}
                          className={`
                            flex
                            items-center

                            w-full
                            h-16

                            px-6

                            text-gray-800
                            hover:text-primary
                            hover:bg-primary/10
                          `}
                          onClick={() => setOpen(false)}
                        >
                          <span>{ linkData.title }</span>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </motion.div>
          )
        }
      </AnimatePresence>

      {
        open && (
          <button
            className='z-1 fixed top-0 left-0 h-dvh w-full bg-black/20 text-transparent'
            onClick={() => setOpen(false)}
          >
            { t('action.close') }
          </button>
        )
      }
    </div>
  )
}