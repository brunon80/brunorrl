import React from 'react'
import { useTranslation } from 'react-i18next'

import Container from '../../../../components/Container'
import homeBg from '../../../../assets/images/home-bg.png'

const Hero: React.FC = () => {
    const { t, i18n } = useTranslation()
    return (
        <Container sessionClassName="no-margin">
            <div
                onClick={() => {
                    const language = i18n.language
                    i18n.changeLanguage(language === 'pt_br' ? 'en' : 'pt_br')
                }}
                className="column centered"
            >
                <h1 className="title">{t('hero.title')}</h1>
                <h2 className="subtitle">
                    Desenvolvo soluções, sites e aplicativos, amo fazer isso
                    <span aria-label="heart" role="img">
                        ❤️
                    </span>
                    .
                </h2>
            </div>
            <div className="column centered">
                <img className="bg" src={homeBg} alt="background-home" />
            </div>
        </Container>
    )
}

export default Hero
