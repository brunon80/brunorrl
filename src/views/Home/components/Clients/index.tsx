import React from 'react'
import Container from '../../../../components/Container'
import carmaisLogo from '../../../../assets/images/logo-carmais.png'
import ganhomaisLogo from '../../../../assets/images/logo-ganhomais.png'
import korujaLogo from '../../../../assets/images/logo-koruja.png'

import './styles.scss'

const Clients: React.FC = () => {
    return (
        <Container sessionClassName="clients">
            <div className="column centered">
                <h1 className="title is-half">Eu tenho orgulho de ter colaborado com algumas incríveis empresas</h1>
            </div>
            <div className="client-grid">
                <div className="grid-container">
                    <div className="grid-item">
                        <img src={carmaisLogo} alt="cliente carmais" />
                    </div>
                    <div className="grid-item">
                        <img src={ganhomaisLogo} alt="cliente carmais" />
                    </div>
                    <div className="grid-item">
                        <img src={korujaLogo} alt="cliente carmais" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Clients
