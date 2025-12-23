import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DefaultButton } from '@/app/components/commons/DefaultButton'

import { landingPageRoutes, socialMediaArr } from '@/app/utils/links'

export function DefaultFooter() {
  return (
    <footer
      id='contact'
      className='flex items-center justify-center py-20 bg-primary-darken-1 text-white'
    >
      <div className='flex lg:flex-row flex-col justify-between gap-16 max-w-[90vw] w-250 mx-auto min-h-30'>
        <div className='flex flex-col justify-between'>
          <p>
            Copyright©2025 Alessandro Cídney
          </p>

          <ul className='flex transform-[translateX(-0.60rem)]'>
            {
              socialMediaArr.map((socialMediaData, socialMediaIndex) => (
                <li
                  key={`socialMediaKey${socialMediaIndex}`}
                >
                  <DefaultButton
                    variant='text'
                    color='white'
                    icon
                  >
                    <FontAwesomeIcon
                      icon={socialMediaData.icon}
                      size='xl'
                    />
                  </DefaultButton>
                </li>
              ))
            }
          </ul>
        </div>

        <div className='flex flex-col lg:items-end items-start justify-between gap-16 lg:gap-0'>
          <ul className='flex lg:flex-row flex-col gap-4'>
            {
              landingPageRoutes.map((linkData, linkIndex) => (
                <li
                  key={`linkKey${linkIndex}`}
                >
                  <Link
                    href={linkData.path}
                    className='hover:underline text-white/60'
                  >
                    { linkData.title }
                  </Link>
                </li>
              ))
            }
          </ul>

          <div className='p-4 bg-secondary/20 text-white/90 rounded-xl'>
            Criado com <span className='font-bold'>React.js</span> e <span className='font-bold'>Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  )
}