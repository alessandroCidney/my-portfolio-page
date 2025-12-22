import Image from 'next/image'

import { DefaultButton } from '@/app/components/commons/DefaultButton'

export function HeroSection() {
  return (
    <section
      className={`
        flex
        items-center
        justify-center
        bg-[url(/images/backgrounds/background-pattern-icons.jpg)]

        lg:max-h-250
        lg:h-[110dvh]
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

          lg:w-400
          lg:max-w-[80vw]
          lg:text-start
          lg:flex-row
          lg:py-0

          w-full
          text-center
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
          <h2 className='flex flex-col mb-6'>
            <span className='text-white/80'>Olá! Me chamo <span className='font-bold'>Alessandro Cídney</span> e sou um</span>

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
              Desenvolvedor Web e Front-End
            </span>
          </h2>

          <p className='mb-6 text-white/70'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque dignissimos rerum aliquam ipsa praesentium ducimus quos enim, assumenda illo exercitationem? Repellendus, vel facere. Optio quisquam quibusdam consequuntur ab voluptatum?
          </p>

          <DefaultButton>
            Contratar
          </DefaultButton>
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
            alt='Retrato de Alessandro'
            fill
          />
        </div>
      </div>
    </section>
  )
}