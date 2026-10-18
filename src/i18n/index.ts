import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationPTBR from './translation.pt_br'
import translationEN from './translation.en'

const resources = {
    pt: {
        translation: translationPTBR
    },
    en: {
        translation: translationEN
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n