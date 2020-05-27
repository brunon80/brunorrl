import React from 'react'
import Container from '../../../../components/Container'

import kinbox from '../../../../assets/images/project-kinbox.png'
import ganhomais from '../../../../assets/images/project-gannhomais.png'
import carmais from '../../../../assets/images/project-carmais.png'

import './styles.scss'

const Projects: React.FC = () => {
    return (
        <Container sessionClassName="projects">
            <div className="column">
                <h1 className="title">Meu trabalho recente</h1>
                <h2 className="subtitle">
                    Esses são alguns dos projetos que trabalhei. Ficou curioso? me envie um{' '}
                    <a href="mailto:bruno.rocha2008@gmail.com">Email</a>
                </h2>
                <div className="projects-wrapper">
                    <figure className="card kinbox">
                        <img className="overlay" src={kinbox} alt="Kinbox" />
                        <figcaption className="caption">
                            <h1 className="title">
                                Kinbox é uma plataforma de comunicação que uni o atendimento de várias redes sociais
                            </h1>
                            <a href="https://www.kinbox.com.br" target="blank">
                                Visite o site
                            </a>
                        </figcaption>
                    </figure>
                    <figure className="card ganhomais">
                        <img className="overlay" src={ganhomais} alt="GanhoMais" />
                        <figcaption className="caption">
                            <h1 className="title">
                                O GanhoMais é um aplicativo de crédito consignado que otimiza suas dívidas e oferece
                                serviços
                            </h1>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.genpp.GanhoMais&hl=pt_BR"
                                target="blank"
                            >
                                Veja o app
                            </a>
                        </figcaption>
                    </figure>
                    <figure className="card carmais">
                        <img className="overlay" src={carmais} alt="Carmais" />
                        <figcaption className="caption">
                            <h1 className="title">
                                O aplicativo é usado internamente pelos funcionáros para aumentar a produtividade da
                                empresa
                            </h1>
                            <a target="blank" href="https://www.carmais.com.br">
                                Site da empresa
                            </a>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </Container>
    )
}

export default Projects
