import { DefaultButton } from '@/app/components/commons/DefaultButton'

interface ProjectCardProps {
  title: string
  company: string

  description: string
  url: string

  companyColor: string
  gradient: string
}

export function ProjectCard({
  title,
  company,
  gradient,
  companyColor,
  description,
}: ProjectCardProps) {
  return (
    <article
      className={`
        flex
        flex-col
        flex-[1_1_0]
      
        aspect-2/3
        p-8
      
        xl:rounded-[60px]
        lg:rounded-[45px]
        rounded-3xl
      
        ${gradient}
        bg-linear-135
      
        text-white

        shadow-2xl
      `}
    >
      <header className='relative flex items-center justify-center h-1/2 text-center'>
        <h3 className='transform-[translateY(48px)] text-7xl font-extrabold tracking-tight'>
          { title }
        </h3>

        <p className={`absolute top-0 left-0 flex items-center justify-center min-w-45 h-14 rounded-full bg-white ${companyColor} text-2xl tracking-tight`}>
          { company }
        </p>
      </header>

      <div className='flex flex-col flex-[1_1_0] gap-6 items-start justify-end'>
        <p>
          { description }
        </p>

        <DefaultButton
          color='white'
          variant='tonal'
          block
        >
          Visitar no site
        </DefaultButton>
      </div>
    </article>
  )
}