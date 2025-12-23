import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

export const landingPageRoutes = [
  {
    path: '#',
    title: 'Início',
  },
  {
    path: '#projects-and-companies',
    title: 'Projetos',
  },
  {
    path: '#skills',
    title: 'Skills',
  },
  {
    path: '#about',
    title: 'Sobre mim',
  },
  {
    path: '#experience',
    title: 'Experiência',
  },
  {
    path: '#contact',
    title: 'Contato',
  },
]

export const socialMediaArr = [
  {
    title: 'LinkedIn',
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    icon: faLinkedin,
  },
  {
    title: 'Medium',
    url: process.env.NEXT_PUBLIC_MEDIUM_URL,
    icon: faMedium,
  },
  {
    title: 'GitHub',
    url: process.env.NEXT_PUBLIC_GITHUB_URL,
    icon: faGithub,
  },
]