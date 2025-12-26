import { headers, cookies } from 'next/headers'

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const acceptedLocales = ['en', 'pt-BR']
const defaultLocale = 'pt-BR'

async function getBrowserPreferredLocale() {
  const headersList = await headers()

  const preferredLanguages = new Negotiator({ headers: { 'accept-language': headersList.get('accept-language') ?? undefined } }).languages()
  
  return match(preferredLanguages, acceptedLocales, defaultLocale)
}

export async function getCurrentLocale() {
  let locale!: string

  const cookieStore = await cookies()

  const preferredLocaleCookie = cookieStore.get('preferred_locale')?.value

  if (preferredLocaleCookie && acceptedLocales.includes(preferredLocaleCookie)) {
    locale = preferredLocaleCookie
  } else {
    locale = await getBrowserPreferredLocale()
  }

  return locale
}