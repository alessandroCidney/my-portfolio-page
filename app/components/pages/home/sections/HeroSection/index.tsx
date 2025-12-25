import Image from 'next/image'

import { useTranslations } from 'next-intl'

import { DefaultButton } from '@/app/components/commons/DefaultButton'

export function HeroSection() {
  const t = useTranslations('components.pages.home.sections.hero')

  return (
    <section
      className={`
        flex
        items-center
        justify-center
        bg-[url(/images/backgrounds/background-pattern-icons.svg)]

        lg:max-h-250
        lg:h-[110dvh]
        lg:min-h-auto

        min-h-[95dvh]
      `}
    >
      <div
        className={`
          flex
          flex-col-reverse
          items-center
          justify-center
          gap-8

          mx-auto

          lg:flex-row

          lg:w-400
          lg:max-w-[80vw]
          w-full
          
          lg:text-start
          text-center

          lg:py-0
          py-20
        `}
      >
        <div
          className={`
            xl:w-[calc(100%-var(--spacing)*150)]
            lg:w-[calc(100%-var(--spacing)*100)]
            lg:max-w-none
            w-150
            max-w-9/10
          `}
        >
          <h2 className='sr-only'>
            { t('title') }
          </h2>

          <p className='flex flex-col mb-6'>
            {
              t.rich('large_description', {
                'small-text': (chunks) => <span className='text-white/80 lg:text-base text-sm'>{chunks}</span>,
                'bold-text': (chunks) => <span className='font-bold'>{chunks}</span>,
                'giant-text': (chunks) => (
                  <span
                    className={`
                      text-white
                      font-extrabold
                      tracking-tighter

                      xl:text-8xl
                      sm:text-6xl
                      text-4xl
                    `}
                  >
                    {chunks}
                  </span>
                ),
              })
            }
          </p>

          <p className='mb-6 text-white/70'>
            { t('small_description') }
          </p>

          <div className='inline-block'>
            <DefaultButton
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target='_blank'
              large
              link
            >
              { t('actions.hire') }
            </DefaultButton>
          </div>
        </div>

        <div
          className={`
            relative
            aspect-square

            xl:w-150
            lg:w-120
            sm:w-50
            w-40
          `}
        >
          <Image
            src='/images/photos/me1.png'
            alt={ t('images.portrait') }
            fill
          />
        </div>
      </div>
    </section>
  )
}