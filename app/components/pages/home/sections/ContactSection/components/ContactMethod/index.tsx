import { ReactNode } from 'react'

import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ContactMethodProps {
  icon: IconDefinition

  children: ReactNode

  action: ReactNode
}

export function ContactMethod({ action, children, icon }: ContactMethodProps) {
  return (
    <li className='flex flex-col sm:flex-row sm:items-center items-start sm:justify-between gap-4 sm:gap-0 p-4 mb-4 bg-primary/20 rounded-xl'>
      <span className='flex items-center justify-center gap-4'>
        <span className='flex items-center justify-center size-10 p-7 bg-white/10 rounded-full'>
          <FontAwesomeIcon
            icon={icon}
            size={'xl'}
          />
        </span>

        <span>
          { children }
        </span>
      </span>

      <div className='max-w-full w-100 sm:w-auto'>
        { action }
      </div>
    </li>
  )
}