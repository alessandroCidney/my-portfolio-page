'use client'

import { useState } from 'react'

import { faCheck, faCopy, faEnvelope, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { LandingPageSection } from '@/app/components/pages/home/core/LandingPageSection'
import { DefaultButton } from '@/app/components/commons/DefaultButton'
import { ContactMethod } from './components/ContactMethod'

export function ContactSection() {
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
      title='Entre em contato'
      subtitle='Vamos trabalhar juntos?'
      backgroundClass='bg-secondary'
      headerTitleColorClass='text-white'
      headerSubTitleColorClass='text-white/60'
      contentWidthClass='max-w-[90vw] w-250'
    >
      <p className='text-white mb-6'>
        Você pode entrar em contato por meio de um dos métodos abaixo:
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
              Acessar LinkedIn
            </DefaultButton>
          }
        >
          Mande uma mensagem pelo <span className='font-bold'>LinkedIn</span>
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
              { copySuccess ? 'Copiado' : 'Copiar Endereço' }
            </DefaultButton>
          }
        >
          Envie um e-mail para <span className='font-bold'>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</span>
        </ContactMethod>
      </ul>
    </LandingPageSection>
  )
}