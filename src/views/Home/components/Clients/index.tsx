import React from 'react'
import { useTranslation } from 'react-i18next'

import Container from '../../../../components/Container'
import carmaisLogo from '../../../../assets/images/logo-carmais.png'
import ganhomaisLogo from '../../../../assets/images/logo-ganhomais.png'
import korujaLogo from '../../../../assets/images/logo-koruja.png'
import somapayLogo from '../../../../assets/images/logo-somapay.png'
import symplaLogo from '../../../../assets/images/logo-sympla.png'

import './styles.scss'

const Clients: React.FC = () => {
    const { t } = useTranslation()
    return (
        <Container sessionClassName="clients">
            <div className="column centered">
                <h1 className="title is-half">{t('clients.title')}</h1>
            </div>
            <div className="client-grid">
                <div className="grid-container">
                    <div className="grid-item">
                        <img src={carmaisLogo} alt="cliente carmais" />
                    </div>
                    <div className="grid-item">
                        <img src={ganhomaisLogo} alt="cliente ganhomais" />
                    </div>
                    <div className="grid-item">
                        <img src={korujaLogo} alt="cliente koruja" />
                    </div>
                    <div className="grid-item">
                        <img src={somapayLogo} alt="cliente somapay" />
                    </div>
                    <div className="grid-item">
                        <img src={symplaLogo} alt="cliente sympla" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Clients
