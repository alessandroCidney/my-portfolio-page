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
  const largerTitleStyle = `font-extrabold tracking-tight text-7xl ${headerTitleColorClass}`
  const smallerTitleStyle = `font-bold tracking-tight text-3xl ${headerSubTitleColorClass}`

  const finalBackgroundClass = backgroundClass ?? 'even:bg-gray-100 odd:bg-gray-50'

  return (
    <section
      id={id}
      className={`${finalBackgroundClass} not-first:py-40`}
    >
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
    </section>
  )
}