import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../../../components/Container'

import './styles.scss'

const Call: React.FC = () => {
    return (
        <Container sessionClassName="call-to-action colored-session no-margin">
            <div className="column centered">
                <div className="wrapper">
                    <div className="item text">Inicie um projeto</div>
                    <div className="item decription">
                        Interessado em trabalhar comigo? Nós deveríamos conversar. Eu pago o café.
                    </div>
                    <Link to="/contact" className="item action">
                        Vamos fazer isso
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Call
