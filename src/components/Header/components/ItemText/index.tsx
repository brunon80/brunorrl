import React from 'react'
import { Link } from 'react-router-dom'

type ItemProps = {
    name: string
    link: string
}

const Item: React.FC<ItemProps> = ({ name, link }) => {
    return (
        <li className="top-header-item">
            <Link to={link}>{name}</Link>
        </li>
    )
}

export default Item
