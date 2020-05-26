import React from 'react'
import Container from '../../../../components/Container'

import kinbox from '../../../../assets/images/project-kinbox.png'

import './styles.scss'

const Projects: React.FC = () => {
    return (
        <Container>
            <div className="column">
                <h1 className="title">Meu trabalho recente</h1>
                <h2 className="subtitle">
                    Esses são alguns dos projetos que trabalhei. Ficou curioso? me envie um{' '}
                    <a href="mailto:bruno.rocha2008@gmail.com">Email</a>
                </h2>
                <div className="projects-wrapper">
                    <figure className="card">
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
                    <figure className="card">
                        <img
                            className="overlay"
                            src="https://mattfarley.ca/img/projects/wfdesignbuild.png"
                            alt="GanhoMais"
                        />
                        <figcaption className="caption">
                            <h1 className="title">
                                Kinbox é uma plataforma de comunicação que uni o atendimento de várias redes sociais
                            </h1>
                            <a href="https://ganhomais.com.br:5000">Visite o site</a>
                        </figcaption>
                    </figure>
                    <figure className="card">
                        <img
                            className="overlay"
                            src="https://mattfarley.ca/img/projects/wfdesignbuild.png"
                            alt="GanhoMais"
                        />
                        <figcaption className="caption">
                            <h1 className="title">
                                Kinbox é uma plataforma de comunicação que uni o atendimento de várias redes sociais
                            </h1>
                            <a href="https://ganhomais.com.br:5000">Visite o site</a>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </Container>
    )
}

export default Projects
