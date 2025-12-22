import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LandingPageSection } from '../../core/LandingPageSection'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { DefaultButton } from '@/app/components/commons/DefaultButton'

export function ContactSection() {
  return (
    <LandingPageSection
      id='contact'
      title='Entre em contato'
      subtitle='Vamos trabalhar juntos?'
      backgroundClass='bg-secondary'
      headerTitleColorClass='text-white'
      headerSubTitleColorClass='text-white/60'
    >
      <p className='text-white mb-6'>
        Você pode entrar em contato por meio de um dos métodos abaixo:
      </p>

      <ul className='text-white'>
        <li className='flex items-center justify-between p-4 mb-4 bg-primary/20 rounded-full'>
          <span className='flex items-center justify-center gap-4'>
            <span className='flex items-center justify-center size-10 p-7 bg-white/10 rounded-full'>
              <FontAwesomeIcon
                icon={faLinkedin}
                size={'xl'}
              />
            </span>

            <span>
              Mande uma mensagem pelo <span className='font-bold'>LinkedIn</span>
            </span>
          </span>

          <DefaultButton>
            Acessar LinkedIn
          </DefaultButton>
        </li>

        <li className='flex items-center justify-between p-4 mb-4 bg-primary/20 rounded-full'>
          <span className='flex items-center justify-center gap-4'>
            <span className='flex items-center justify-center size-10 p-7 bg-white/10 rounded-full'>
              <FontAwesomeIcon
                icon={faEnvelope}
                size={'xl'}
              />
            </span>

            <span>
              Envie um e-mail para <span className='font-bold'>contato.acidn@gmail.com</span>
            </span>
          </span>

          <DefaultButton>
            Copiar Endereço
          </DefaultButton>
        </li>
      </ul>
    </LandingPageSection>
  )
}