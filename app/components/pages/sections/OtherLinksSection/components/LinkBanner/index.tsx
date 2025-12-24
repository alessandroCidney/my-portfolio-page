import { ReactNode } from 'react'

import { DefaultButton } from '@/app/components/commons/DefaultButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

interface LinkBannerProps {
  gradientClass: string
  textColorClass: string

  title: string

  url: string

  icon: ReactNode
}

export function LinkBanner({ title, url, icon, gradientClass, textColorClass }: LinkBannerProps) {
  return (
    <article className={`link-banner ${gradientClass} ${textColorClass} relative flex md:items-center justify-between p-9 md:p-12 rounded-4xl`}>
      <div>
        <header className='mb-10 max-w-150'>
          <h3 className='font-extrabold text-4xl md:text-6xl tracking-tight'>
            { title }
          </h3>
        </header>

        <div className='inline-block w-60'>
          <DefaultButton
            href={url}
            color='white'
            variant='flat'
            target='_blank'
            large
            link
            appendIcon={
              <div className='absolute size-12 top-1/2 right-1 transform-[translateY(-50%)] flex items-center justify-center bg-gray-600 text-white rounded-full'>
                <FontAwesomeIcon
                  icon={faChevronRight}
                />
              </div>
            }
          >
            Acessar
          </DefaultButton>  
        </div>
      </div>

      <div>
        { icon }
      </div>
    </article>
  )
}