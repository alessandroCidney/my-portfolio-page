import Image from 'next/image'

import { useTranslations } from 'next-intl'

import { LandingPageSection } from '@/app/components/pages/home/core/LandingPageSection'
import { DefaultButton } from '@/app/components/commons/DefaultButton'

export function AboutSection() {
  const t = useTranslations('components.pages.home.sections.about_me')

  return (
    <LandingPageSection
      id='about'
      title={t('title')}
      subtitle={t('subtitle')}
      append={
        <Image
          src='/images/photos/me2.jpg'
          alt={t('images.selfie')}
          className='rounded-full mx-auto border-solid border-6 border-transparent outline-8 outline-primary/10'
          width={600}
          height={800}
        />
      }
    >
      <p className='mb-8'>
        {
          t.rich('content', {
            'line-break': () => <><br /><br /></>,
          })
        }
      </p>
      
      <div className='inline-block'>
        <DefaultButton
          href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
          color='primary'
          variant='flat'
          target='_blank'
          link
          large
        >
          { t('actions.contact') }
        </DefaultButton>
      </div>
    </LandingPageSection>
  )
}