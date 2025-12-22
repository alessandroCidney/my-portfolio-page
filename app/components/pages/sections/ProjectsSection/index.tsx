import { LandingPageSection } from '../../core/LandingPageSection'
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

  return (
    <LandingPageSection
      id='projects-and-companies'
      title='Projetos e empresas'
      subtitle='Veja onde trabalhei'
      align='center'
    >
      <div className='flex items-center justify-center gap-8'>
        {
          projectsArr.map((projectData, projectIndex) => (
            <ProjectCard
              key={`projectKey${projectIndex}`}
              {...projectData}
            />
          ))
        }
      </div>
    </LandingPageSection>
  )
}