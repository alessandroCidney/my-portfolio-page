import { headers } from 'next/headers'
import { getRequestConfig } from 'next-intl/server'

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const acceptedLocales = ['en', 'pt-BR']
const defaultLocale = 'pt-BR'

async function getPreferredLocale() {
  const headersList = await headers()

  const preferredLanguages = new Negotiator({ headers: { 'accept-language': headersList.get('accept-language') ?? undefined } }).languages()
  
  return match(preferredLanguages, acceptedLocales, defaultLocale)
}
 
export default getRequestConfig(async () => {
  const locale = await getPreferredLocale()
 
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  }
})