import React from 'react'
import { useTranslation } from 'react-i18next'

import Container from '../../../../components/Container'

import kinbox from '../../../../assets/images/project-kinbox.png'
import ganhomais from '../../../../assets/images/project-gannhomais.png'
import carmais from '../../../../assets/images/project-carmais.png'
import somapay from '../../../../assets/images/project-somapay.png'

import './styles.scss'

const Projects: React.FC = () => {
    const { t } = useTranslation()
    return (
        <Container sessionClassName="projects">
            <div className="column">
                <h1 className="title">{t('projects.title')}</h1>
                <h2 className="subtitle">
                    {t('projects.description')}
                    <a href="mailto:bruno.rocha2008@gmail.com">Email</a>
                </h2>
                <div className="projects-wrapper">
                    <figure className="card kinbox">
                        <img className="overlay" src={kinbox} alt="Kinbox" />
                        <figcaption className="caption">
                            <h1 className="title">{t('projects.kinbox.description')}</h1>
                            <a href="https://www.kinbox.com.br" target="blank">
                                {t('projects.kinbox.action')}
                            </a>
                        </figcaption>
                    </figure>
                    <figure className="card ganhomais">
                        <img className="overlay" src={ganhomais} alt="GanhoMais" />
                        <figcaption className="caption">
                            <h1 className="title">{t('projects.gm.description')}</h1>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.genpp.GanhoMais&hl=pt_BR"
                                target="blank"
                            >
                                {t('projects.gm.action')}
                            </a>
                        </figcaption>
                    </figure>
                    <figure className="card carmais">
                        <img className="overlay" src={carmais} alt="Carmais" />
                        <figcaption className="caption">
                            <h1 className="title">{t('projects.carmais.description')}</h1>
                            <a target="blank" href="https://www.carmais.com.br">
                                {t('projects.carmais.action')}
                            </a>
                        </figcaption>
                    </figure>
                    <figure className="card somapay">
                        <img className="overlay" src={somapay} alt="Somapay" />
                        <figcaption className="caption">
                            <h1 className="title">{t('projects.somapay.description')}</h1>
                            <a target="blank" href="https://somapay.app.link/">
                                {t('projects.somapay.action')}
                            </a>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </Container>
    )
}

export default Projects
