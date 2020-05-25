import React from 'react'
import ItemText from './components/ItemText'

import './styles.css'

const itemLinks = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Diga olá',
        link: '/contact',
    },
]

const Header: React.FC = () => {
    return (
        <nav className="top-header-container">
            <ul className="top-header-wrapper">
                {itemLinks.map(({ name, link }) => (
                    <ItemText key={name} name={name} link={link} />
                ))}
            </ul>
        </nav>
    )
}

export default Header
