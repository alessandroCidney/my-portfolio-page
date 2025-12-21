import Image from 'next/image'

import styles from './styles.module.scss'
import { DefaultButton } from '@/app/components/commons/DefaultButton'

export function HeroSection() {
  return (
    <section className='max-h-250 h-[110dvh] bg-gray-100'>
      <div className='section__content bg-primary h-full'>
        <div className='rounded-b-[80px] h-19/20 bg-gray-50 bg-[url(/images/backgrounds/background-pattern-icons.jpg)]'>
          <div className='flex items-center gap-10 w-400 max-w-[80vw] h-full mx-auto'>
            <div>
              <h2 className='flex flex-col mb-6'>
                <span className='text-white/80'>Olá! Me chamo <span className='font-bold'>Alessandro Cídney</span> e sou um</span>

                <span className='text-8xl text-white font-extrabold tracking-tighter'>Desenvolvedor Web e Front-End</span>
              </h2>

              <p className='mb-6 text-white/70'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque dignissimos rerum aliquam ipsa praesentium ducimus quos enim, assumenda illo exercitationem? Repellendus, vel facere. Optio quisquam quibusdam consequuntur ab voluptatum?
              </p>

              <DefaultButton>
                Contratar
              </DefaultButton>
            </div>

            <Image
              src='/images/photos/me1.png'
              alt='Retrato de Alessandro'
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}