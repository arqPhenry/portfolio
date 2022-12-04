import React, { createContext, useState } from 'react'
import englishMessages from '../lang/en-US.json'
import spanishMessages from '../lang/es-MX.json'
import { IntlProvider } from 'react-intl'

const langContext = createContext()

const LangProvider = ({ children }) => {
  const defaultLocale = 'es-MX'
  const defaultMessages = spanishMessages
  /* const lang = localStorage.getItem('lang')

  if (lang) {
    defaultLocale = lang

    if (lang === 'es-MX') {
      defaultMessages = spanishMessages
    } else if (lang === 'en-US') {
      defaultMessages = englishMessages
    } else {
      defaultLocale = 'en-US'
      defaultMessages = englishMessages
    }
  } */

  const establecerLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case 'es-MX':
        establecerMensajes(spanishMessages)
        establecerLocale('es-MX')
        // localStorage.setItem('lang', 'es-MX')
        break
      case 'en-US':
        establecerMensajes(englishMessages)
        establecerLocale('en-US')
        // localStorage.setItem('lang', 'en-US')
        break
      default:
        establecerMensajes(spanishMessages)
        establecerLocale('es-MX')
        // localStorage.setItem('lang', 'es-MX')
    }
  }

  const [mensajes, establecerMensajes] = useState(defaultMessages)
  const [locale, establecerLocale] = useState(defaultLocale)

  return (
        <langContext.Provider value={{ establecerLenguaje, locale }}>
            <IntlProvider locale={locale} messages={mensajes}>
                {children}
            </IntlProvider>
        </langContext.Provider>
  )
}

export { LangProvider, langContext }
