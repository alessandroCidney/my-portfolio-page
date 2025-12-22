import Image from 'next/image'

import { LandingPageSection } from '../../core/LandingPageSection'

export function AboutSection() {
  return (
    <LandingPageSection
      id='about'
      title='Sobre mim'
      subtitle='Conheça minha história'
      append={
        <Image
          src='/images/photos/me2.jpg'
          alt='Selfie de Alessandro'
          className='rounded-full'
          width={600}
          height={800}
        />
      }
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ex alias vero reiciendis magni dolore consectetur, est rem, natus aut neque libero a error non maiores illum, dicta mollitia debitis.
        Facilis quis libero veritatis enim architecto ratione incidunt fugiat, inventore accusamus neque ipsum non similique suscipit! Quam sequi quos earum recusandae nihil, veniam reprehenderit vero sit officiis aliquam nostrum quisquam.
        Ad minima beatae ducimus repellendus exercitationem, nam accusamus et assumenda amet iste eligendi odio earum quibusdam laudantium itaque numquam eius distinctio! Libero in, nisi voluptates doloremque eveniet quo quas ipsum?
        Fugiat nemo, nobis quis atque saepe eum nulla expedita iste molestias magnam ad in temporibus sequi ex harum quas eius est at voluptatum, ab voluptates. Hic praesentium blanditiis libero ratione!
        Non natus dolores at in itaque quis officia eos quos corporis dolore sed impedit harum eaque iure et asperiores, ad ut, voluptate quia dolor dolorum. Sapiente culpa libero ipsam eaque!
      </p>
    </LandingPageSection>
  )
}