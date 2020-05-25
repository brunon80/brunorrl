import React from 'react'
import ItemText from './components/ItemText'
import ItemImage from './components/ItemImage'

import './styles.css'

import logo from '../../assets/logo.png'

const itemLinks = [
    {
        name: 'Diga um Olá',
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
    return (
        <nav className="top-nav-container">
            <ul className="container top-nav-wrapper">
                <div>
                    {itemImages.map(({ image, link }) => (
                        <ItemImage key={image} link={link} image={image} />
                    ))}
                </div>
                <div className="top-nav-text-links-wrapper">
                    {itemLinks.map(({ name, link }) => (
                        <ItemText key={name} name={name} link={link} />
                    ))}
                </div>
            </ul>
        </nav>
    )
}

export default Header
