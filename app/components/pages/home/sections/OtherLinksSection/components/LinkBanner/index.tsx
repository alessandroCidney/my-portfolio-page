import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, IconDefinition } from '@fortawesome/free-solid-svg-icons'

import { DefaultButton } from '@/app/components/commons/DefaultButton'

interface LinkBannerProps {
  gradientClass: string
  textColorClass: string

  title: string

  url: string

  icon: IconDefinition
}

export function LinkBanner({ title, url, icon, gradientClass, textColorClass }: LinkBannerProps) {
  const t = useTranslations('components.pages.home.sections.other_links')

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
            { t('actions.access_website') }
          </DefaultButton>  
        </div>
      </div>

      <div>
        <FontAwesomeIcon
          icon={icon}
          className='hidden! md:block!'
          size='10x'
        />

        <FontAwesomeIcon
          icon={icon}
          className='block! md:hidden!'
          size='3x'
        />
      </div>
    </article>
  )
}