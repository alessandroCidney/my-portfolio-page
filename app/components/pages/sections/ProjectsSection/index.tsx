import { ProjectCard } from './components/ProjectCard'

export function ProjectsSection() {
  const projectsArr = [
    {
      title: 'Santo iD',
      company: 'SantoDigital',
      description: 'Plataforma para análise e validação de documentos utilizando inteligência artificial.',

      companyColor: 'text-[#A229A4]',
      gradient: 'bg-linear-150 from-[#A229A4] to-[#001499]',

      url: process.env.NEXT_PUBLIC_DOCUMENT_ANALYZER_URL ?? '',
    },
    {
      title: 'Santo AI',
      company: 'SantoDigital',
      description: 'Assistente baseado em IA generativa, com funções diversas como geração de texto, imagens e código.',

      companyColor: 'text-blue-700',
      gradient: 'bg-linear-150 from-blue-700 to-sky-500',

      url: process.env.NEXT_PUBLIC_AI_ASSISTANT_URL ?? '',
    },
    {
      title: 'Santo iD Saúde',
      company: 'SantoDigital',
      description: 'Assistente baseado em IA generativa, com funções diversas como geração de texto, imagens e código.',

      companyColor: 'text-sky-500',
      gradient: 'bg-linear-150 from-sky-500 to-cyan-400',

      url: process.env.NEXT_PUBLIC_AI_ASSISTANT_URL ?? '',
    },
  ]

  const personalProjectsArr = [
    {
      title: 'Super Planning Poker',
      description: 'Uma aplicação que permite a realização de estimativas de esforço para atividades por meio do Planning Poker, muito utilizado no Scrum.',

      imageSrc: '/images/logos/super-planning-poker-logo.svg',
      projectUrl: process.env.NEXT_PUBLIC_SUPER_PLANNING_POKER_URL ?? '',
    },
    {
      title: 'MoneySpy',
      description: 'Plataforma para organização e análise de gastos pessoais, com relatórios diversos e sistema de gamificação embutido.',

      imageSrc: '/images/illustrations/blue-money-spy.svg',
      projectUrl: process.env.NEXT_PUBLIC_MONEYSPY_URL ?? '',
    },
  ]

  return (
    <section
      id='projects'
      className='bg-gray-50'
    >
      <div className='section__content bg-gray-100 flex flex-col items-center justify-center'>
        <header className='text-center'>
          <h2 className='font-bold tracking-tight text-3xl text-primary'>
            Projetos e empresas
          </h2>

          <p className='font-extrabold tracking-tight text-7xl'>
            Veja onde trabalhei
          </p>
        </header>
        
        <div className='flex items-center justify-center gap-12'>
          {
            projectsArr.map((projectData, projectIndex) => (
              <ProjectCard
                key={`projectKey${projectIndex}`}
                {...projectData}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}