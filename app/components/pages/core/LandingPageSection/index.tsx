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

  const finalBackgroundClass = backgroundClass ?? 'even:bg-gray-100 odd:bg-gray-50'

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
          max-w-[80vw]
          w-350

          lg:flex-row
        `}
      >
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
    </section>
  )
}