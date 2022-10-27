import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import * as enTranslation from '../../public/locales/en/translation.json'
import * as ruTranslation from '../../public/locales/ru/translation.json'

const resources = {
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
}

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
