import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'

import { LinkBanner } from './components/LinkBanner'

export function OtherLinksSection() {
  return (
    <section
      id='other-links'
      className='py-40'
    >
      <header className='sr-only'>
        <h2>
          Outros links
        </h2>
      </header>

      <div className='max-w-[90vw] w-350 mx-auto [&>.link-banner]:mb-10'>
        <LinkBanner
          title='Veja meus projetos pessoais no GitHub'
          gradientClass='bg-linear-90 from-gray-700 to-gray-950'
          textColorClass='text-white'
          url={process.env.NEXT_PUBLIC_GITHUB_URL ?? ''}
          icon={
            <>
              <FontAwesomeIcon
                icon={faGithub}
                className='hidden! md:block!'
                size='10x'
              />

              <FontAwesomeIcon
                icon={faGithub}
                className='block! md:hidden!'
                size='5x'
              />
            </>
          }
        />

        <LinkBanner
          title='Veja meus artigos no Medium'
          gradientClass='bg-linear-90 from-gray-200 to-gray-300'
          textColorClass='text-black/70'
          url={process.env.NEXT_PUBLIC_MEDIUM_URL ?? ''}
          icon={
            <>
              <FontAwesomeIcon
                icon={faMedium}
                className='hidden! md:block!'
                size='10x'
              />

              <FontAwesomeIcon
                icon={faMedium}
                className='block! md:hidden!'
                size='5x'
              />
            </>
          }
        />
      </div>
    </section>
  )
}