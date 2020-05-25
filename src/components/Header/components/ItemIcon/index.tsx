import React from 'react'
import { Link } from 'react-router-dom'

type ItemProps = {
    name: string
    link: string
}

const ItemIcon: React.FC<ItemProps> = ({ name, link }) => {
    return (
        <li className="top-nnav-icon">
            <Link to={link}>{name}</Link>
        </li>
    )
}

export default ItemIcon
