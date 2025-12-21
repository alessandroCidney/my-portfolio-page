import { ReactNode } from 'react'

interface LandingPageSectionProps {
  children: ReactNode
  append?: ReactNode

  id: string

  darkened?: boolean
  
  align?: 'start' | 'center'

  title: string
  subtitle?: string
}

export function LandingPageSection({
  children,
  append,

  id,

  darkened,

  align = 'start',

  title,
  subtitle,
}: LandingPageSectionProps) {
  const largerTitleStyle = 'font-extrabold tracking-tight text-7xl'
  const smallerTitleStyle = 'font-bold tracking-tight text-3xl text-primary'

  return (
    <section
      id={id}
      className={'group even:bg-gray-50 odd:bg-gray-100'}
    >
      <div className='group-even:bg-gray-100 group-odd:bg-gray-50 rounded-b-[80px] group-not-first:pt-40 group-not-first:pb-60'>
        <div className='flex items-center justify-center gap-16 w-350 max-w-[80vw] mx-auto'>
          <div>
            <header className={`${align === 'center' ? 'text-center' : ''} mb-16`}>
              <h2 className={subtitle ? smallerTitleStyle : largerTitleStyle}>
                { title }
              </h2>

              {
                subtitle && (
                  <p className={largerTitleStyle}>
                    { subtitle }
                  </p>
                )
              }
            </header>

            { children }
          </div>

          { append }
        </div>
      </div>
    </section>
  )
}