import { useTranslations } from 'next-intl'

import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'

import { LinkBanner } from './components/LinkBanner'

export function OtherLinksSection() {
  const t = useTranslations('components.pages.home.sections.other_links')

  return (
    <section
      id='other-links'
      className='py-40'
    >
      <header className='sr-only'>
        <h2>
          { t('title') }
        </h2>
      </header>

      <div className='max-w-[80vw] w-350 mx-auto [&>.link-banner]:mb-10'>
        <LinkBanner
          title={t('cards.github.title')}
          gradientClass='bg-linear-90 from-gray-700 to-gray-950'
          textColorClass='text-white'
          url={process.env.NEXT_PUBLIC_GITHUB_URL ?? ''}
          icon={faGithub}
        />

        <LinkBanner
          title={t('cards.medium.title')}
          gradientClass='bg-linear-90 from-gray-200 to-gray-300'
          textColorClass='text-black/70'
          url={process.env.NEXT_PUBLIC_MEDIUM_URL ?? ''}
          icon={faMedium}
        />
      </div>
    </section>
  )
}