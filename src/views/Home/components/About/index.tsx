import React from 'react'
import Container from '../../../../components/Container'
import { useTranslation } from 'react-i18next'

// import { Container } from './styles';

const About: React.FC = () => {
    const { t } = useTranslation()
    return (
        <Container sessionClassName="colored-session">
            <div className="column">
                <div className="about-wrapper">
                    <h1 className="title light-text">{t('about.title')}</h1>
                    <h2 className="subtitle light-text">{t('about.description')}</h2>
                </div>
            </div>
        </Container>
    )
}

export default About
