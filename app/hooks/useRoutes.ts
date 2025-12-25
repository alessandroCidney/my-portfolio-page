import { useTranslations } from 'next-intl'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

export function useRoutes() {
  const t = useTranslations('hooks.use_routes')

  const landingPageRoutes = [
    {
      path: '/',
      title: t('landing_page_routes.start'),
    },
    {
      path: '#projects-and-companies',
      title: t('landing_page_routes.projects'),
    },
    {
      path: '#skills',
      title: t('landing_page_routes.skills'),
    },
    {
      path: '#about',
      title: t('landing_page_routes.about_me'),
    },
    {
      path: '#experience',
      title: t('landing_page_routes.experience'),
    },
    {
      path: '#contact',
      title: t('landing_page_routes.contact'),
    },
  ]

  const socialMediaLinks = [
    {
      title: t('social_media_links.linkedin'),
      url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
      icon: faLinkedin,
    },
    {
      title: t('social_media_links.medium'),
      url: process.env.NEXT_PUBLIC_MEDIUM_URL,
      icon: faMedium,
    },
    {
      title: t('social_media_links.github'),
      url: process.env.NEXT_PUBLIC_GITHUB_URL,
      icon: faGithub,
    },
  ]

  return {
    landingPageRoutes,
    socialMediaLinks,
  }
}