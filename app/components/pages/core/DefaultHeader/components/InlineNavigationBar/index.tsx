import Link from 'next/link'

import { useState } from 'react'

import { motion } from 'motion/react'

interface InlineNavigationBar {
  routes: Array<{
    path: string
    title: string
  }>

  className?: string
}

export function InlineNavigationBar({ routes, className }: InlineNavigationBar) {
  const [hoveredItemId, setHoveredItemId] = useState<string>()

  return (
    <nav
      className={`${className} h-full absolute left-1/2 transform-[translateX(-50%)] font-medium`}
      onMouseLeave={() => setHoveredItemId(undefined)}
    >
      <ul className='flex items-center justify-center h-full'>
        {
          routes.map((routeData, routeIndex) => (
            <li
              key={`routeKey${routeIndex}`}
              className='h-8/10 min-w-20 text-center'
            >
              <Link
                href={routeData.path}
                className='relative h-full p-4 flex items-center justify-center hover:bg-primary/10 rounded-md'
                onMouseEnter={() => setHoveredItemId(`hover-identifier-${routeIndex}`)}
              >
                { routeData.title }

                {
                  `hover-identifier-${routeIndex}` === hoveredItemId && (
                    <motion.span
                      className='absolute h-1 w-full bg-white rounded-full'
                      layoutId='header-hover-animation-identifier'
                      style={{
                        top: '100%',
                      }}
                    />
                  )
                }
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}