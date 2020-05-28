import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Container from '../../../../components/Container'

import './styles.scss'

const Call: React.FC = () => {
    const { t } = useTranslation()
    return (
        <Container sessionClassName="call-to-action colored-session no-margin">
            <div className="column centered">
                <div className="wrapper">
                    <div className="item text">{t('call.title')}</div>
                    <div className="item decription">{t('call.description')}</div>
                    <Link
                        onClick={() => {
                            window.scrollTo({ top: 0 })
                        }}
                        to="/contact"
                        className="item action"
                    >
                        {t('call.action')}
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Call
