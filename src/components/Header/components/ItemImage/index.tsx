import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

type ItemProps = {
    image: string
    link: string
}

const ItemImage: React.FC<ItemProps> = ({ image, link }) => {
    return (
        <li className="top-nav-image">
            <Link to={link}>
                <img src={image} alt="logo" />
            </Link>
        </li>
    )
}

export default ItemImage
