import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

type ItemProps = {
    name: string
    link: string
}

const Item: React.FC<ItemProps> = ({ name, link }) => {
    return (
        <li className="top-nav-item rounded">
            <Link to={link}>{name}</Link>
        </li>
    )
}

export default Item
