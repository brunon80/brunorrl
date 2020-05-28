import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './i18n/translation.en'
import pt_br from './i18n/translation.pt_br'
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
const availableLanguages = ['en-US', 'pt-BR', 'en', 'pt']
i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en-US',
        // lng: 'pt-BR',
        // debug: true,
        resources: {
            'en-US': en,
            en: en,
            'pt-BR': pt_br,
            pt: pt_br,
        },
        whitelist: availableLanguages,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    })

export default i18n
