'use client'

import { useState } from 'react'

import { useTranslations } from 'next-intl'
import { faCheck, faCopy, faEnvelope, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { LandingPageSection } from '@/app/components/pages/home/core/LandingPageSection'
import { DefaultButton } from '@/app/components/commons/DefaultButton'
import { ContactMethod } from './components/ContactMethod'
import RichText from '@/app/components/commons/RichText'

export function ContactSection() {
  const t = useTranslations('components.pages.home.sections.contact')

  const [copySuccess, setCopySuccess] = useState(false)

  async function copyEmailAddress() {
    try {
      await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '')

      setCopySuccess(true)

      setTimeout(() => {
        setCopySuccess(false)
      }, 3000)
    } catch (err) {
      console.error('err', err)
    }
  }

  return (
    <LandingPageSection
      id='contact'
      title={t('title')}
      subtitle={t('subtitle')}
      backgroundClass='bg-secondary'
      headerTitleColorClass='text-white'
      headerSubTitleColorClass='text-white/60'
      contentWidthClass='max-w-[90vw] w-250'
    >
      <p className='text-white mb-6'>
        { t('description') }
      </p>

      <ul className='text-white'>
        <ContactMethod
          icon={faLinkedin}
          action={
            <DefaultButton
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target='_blank'
              appendIcon={
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                />
              }
              link
              block
            >
              { t('cards.linkedin.actions.access_website') }
            </DefaultButton>
          }
        >
          <RichText>
            { (tags) => t.rich('cards.linkedin.content', tags) }
          </RichText>
        </ContactMethod>

        <ContactMethod
          icon={faEnvelope}
          action={
            <DefaultButton
              className='min-w-51'
              appendIcon={
                <FontAwesomeIcon
                  icon={copySuccess ? faCheck : faCopy}
                />
              }
              block
              onClick={copyEmailAddress}
            >
              { copySuccess ? t('cards.email.actions.copy_text_successful') : t('cards.email.actions.copy_text') }
            </DefaultButton>
          }
        >
          <RichText>
            {
              (tags) => t.rich('cards.email.content', {
                ...tags,
                emailEnv: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
              })
            }
          </RichText>
        </ContactMethod>
      </ul>
    </LandingPageSection>
  )
}