import React from 'react'
import ItemText from './components/ItemText'
import ItemImage from './components/ItemImage'

import { useTranslation } from 'react-i18next'

import './styles.scss'

import logo from '../../assets/logo.png'

const itemLinks = [
    {
        link: '/contact',
    },
]

const itemImages = [
    {
        link: '/',
        image: logo,
    },
]

const Header: React.FC = () => {
    const { t, i18n } = useTranslation()
    function changeLanguage(location: string) {
        i18n.changeLanguage(location)
    }
    return (
        <nav className="top-nav-container">
            <ul className="container top-nav-wrapper">
                <div>
                    {itemImages.map(({ image, link }) => (
                        <ItemImage key={image} link={link} image={image} />
                    ))}
                </div>
                <div className="top-nav-text-links-wrapper">
                    <div className="flags">
                        <span
                            aria-label="united states flag"
                            role="img"
                            onClick={() => changeLanguage('en-US')}
                            className="us"
                        >
                            🇺🇸
                        </span>
                        <span
                            aria-label="brazil flag"
                            role="img"
                            onClick={() => changeLanguage('pt-BR')}
                            className="br"
                        >
                            🇧🇷
                        </span>
                    </div>
                    {itemLinks.map(({ link }) => (
                        <ItemText key={link} name={t('header.callToAction')} link={link} />
                    ))}
                </div>
            </ul>
        </nav>
    )
}

export default Header
