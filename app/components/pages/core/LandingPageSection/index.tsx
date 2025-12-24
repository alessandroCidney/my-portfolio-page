import { ReactNode } from 'react'

interface LandingPageSectionProps {
  children: ReactNode
  append?: ReactNode

  id: string
  
  align?: 'start' | 'center'

  title: string
  subtitle?: string
  backgroundClass?: string,
  headerTitleColorClass?: string
  headerSubTitleColorClass?: string
  contentWidthClass?: string
}

export function LandingPageSection({
  children,
  append,

  id,

  align = 'start',

  title,
  subtitle,

  backgroundClass,
  headerTitleColorClass = 'text-black',
  headerSubTitleColorClass = 'text-primary',
  contentWidthClass = 'lg:w-400 lg:max-w-[80vw] w-full',
}: LandingPageSectionProps) {
  const largerTitleStyle = `
    ${headerTitleColorClass}
    font-extrabold
    tracking-tight

    xl:text-7xl
    sm:text-6xl
    text-4xl
  `

  const smallerTitleStyle = `
    ${headerSubTitleColorClass}
    font-bold
    tracking-tight

    sm:text-3xl
    text-2xl
  `

  const finalBackgroundClass = backgroundClass ?? 'odd:bg-gray-100 even:bg-gray-50'

  return (
    <section
      id={id}
      className={`${finalBackgroundClass} not-first:py-40`}
    >
      <div
        className={`
          flex
          flex-col
          items-center
          justify-center
          gap-16
          
          mx-auto
          ${contentWidthClass}

          lg:flex-row
        `}
      >
        <div className={append ? 'ld:w-1/2 w-full' : 'w-full'}>
          <header
            className={`
              ${align === 'center' ? 'text-center' : 'text-center lg:text-start'}
              sm:mb-16
              mb-8
            `}
          >
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

        {
          append && (
            <div className='ld:w-1/2 w-full'>
              { append }
            </div>
          )
        }
      </div>
    </section>
  )
}