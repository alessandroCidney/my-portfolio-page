import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LandingPageSection } from '../../core/LandingPageSection'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { DefaultButton } from '@/app/components/commons/DefaultButton'
import { ContactMethod } from './components/ContactMethod'

export function ContactSection() {
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
            <DefaultButton block>
              Acessar LinkedIn
            </DefaultButton>
          }
        >
          Mande uma mensagem pelo <span className='font-bold'>LinkedIn</span>
        </ContactMethod>

        <ContactMethod
          icon={faEnvelope}
          action={
            <DefaultButton block>
              Copiar Endereço
            </DefaultButton>
          }
        >
          Envie um e-mail para <span className='font-bold'>contato.acidn@gmail.com</span>
        </ContactMethod>
      </ul>
    </LandingPageSection>
  )
}