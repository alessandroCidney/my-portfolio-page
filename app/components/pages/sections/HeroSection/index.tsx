import Image from 'next/image'

import styles from './styles.module.scss'
import { DefaultButton } from '@/app/components/commons/DefaultButton'

export function HeroSection() {
  return (
    <section className='z-10 relative h-[90dvh] max-h-300 rounded-b-[150px] bg-white'>
      <div className='flex items-center gap-16 w-350 max-w-[80vw] h-full mx-auto'>
        <div>
          <h2 className='flex flex-col mb-6'>
            <span>Olá! Sou <span className='font-bold'>Alessandro Cídney</span> um</span>

            <span className='text-8xl font-extrabold tracking-tight'>Front-end</span>

            <span className='text-6xl font-extrabold tracking-tight'>Developer</span>
          </h2>

          <p className='mb-6'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque dignissimos rerum aliquam ipsa praesentium ducimus quos enim, assumenda illo exercitationem? Repellendus, vel facere. Optio quisquam quibusdam consequuntur ab voluptatum?
            Iure accusamus, nesciunt quam quaerat et modi quo error quis magnam deleniti unde voluptatibus sint accusantium corporis! Quae, est labore beatae totam reprehenderit atque odit soluta ut magnam. Dolorem, consequuntur.
            Ab, dolor eum, quaerat non iusto modi animi eius dignissimos corporis totam, eligendi incidunt provident? Explicabo provident a obcaecati nemo officia, fuga laudantium ut porro animi unde quidem corrupti inventore?
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
    </section>
  )
}