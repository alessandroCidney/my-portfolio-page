import { useState } from 'react'

import { useTranslations } from 'next-intl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

import { DefaultButton } from '@/app/components/commons/DefaultButton'
import { FloatingMenu } from '@/app/components/commons/FloatingMenu'

interface LanguageMenuProps {
  color: 'primary' | 'white'

  className?: string
}

export function LanguageMenu({ color, className }: LanguageMenuProps) {
  const t = useTranslations('components.pages.home.core.default_header')

  const [languageMenu, setLanguageMenu] = useState(false)

  const languageOptions = [
    {
      id: 'pt-BR',
      title: 'Português (Brasil)',
    },
    {
      id: 'en',
      title: 'English',
    },
  ]

  function setCookie(name: string, value: string, days?: number) {
    let expires = ''

    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
      expires = '; expires=' + date.toUTCString()
    }

    document.cookie = name + '=' + (value || '')  + expires + '; path=/'
  }

  function updateLanguage(languageId: string) {
    setCookie('preferred_locale', languageId, 100)

    window.location.reload()
  }

  return (
    <FloatingMenu
      menuId='language-floating-menu'
      activatorId='language-floating-menu-activator'

      className={className}

      open={languageMenu}
      setOpen={setLanguageMenu}

      options={languageOptions}
      setOption={updateLanguage}

      activator={
        <DefaultButton
          id='language-floating-menu-activator'
          title={t('actions.change_language')}
          color={color}
          variant='text'
          icon
          aria-controls='language-floating-menu'
          className='block'
          aria-haspopup='menu'
          onClick={() => setLanguageMenu(!languageMenu)}
        >
          <FontAwesomeIcon
            icon={faLanguage}
          />
        </DefaultButton>
      }
    />
  )
}