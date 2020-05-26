import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMobileAlt, faUserTie } from '@fortawesome/free-solid-svg-icons'

import Container from '../../../../components/Container'
import './styles.scss'

// import { Container } from './styles';

const Skills: React.FC = () => {
    return (
        <Container sessionClassName="skills" containerClassName="is-narrow">
            <div className="skill-grid-container box">
                <div className="skill-grid-item column">
                    <FontAwesomeIcon className="icon" icon={faLaptopCode} />
                    <h1 className="title">Front-end Web</h1>
                    <p className="text">Gosto de codificar as coisas do zero e de dar vida a idéias no navegador.</p>
                    <div className="subtitle">Líguas que falo na Web</div>
                    <p className="text">HTML, CSS, SCSS, Javascript, Typescript, React</p>
                    <div className="subtitle">Web Dev Tools</div>
                    <p className="text">Visual Studio Code</p>
                    <p className="text">Git</p>
                    <p className="text">Linux/Unix like</p>
                    <p className="text">Gulp</p>
                    <p className="text">Webpack</p>
                    <p className="text">Terminal</p>
                </div>
                <div className="skill-grid-item column">
                    <FontAwesomeIcon className="icon" icon={faMobileAlt} />
                    <h1 className="title">Front-end Mobile</h1>
                    <p className="text">
                        Adoro a idéia de ter o mundo na palma da mão e ainda mais se eu puder construir esse mundo
                    </p>
                    <div className="subtitle">Líguas que falo no Mobile</div>
                    <p className="text">React Native, Javascript, Typescript, Swift</p>
                    <div className="subtitle">Mobile Dev Tools</div>
                    <p className="text">Xcode</p>
                    <p className="text">Android Studio</p>
                    <p className="text">Expo</p>
                    <p className="text">Visual Studio Code</p>
                    <p className="text">Git</p>
                    <p className="text">Linux/Unix like</p>
                </div>
                <div className="skill-grid-item column">
                    <FontAwesomeIcon className="icon" icon={faUserTie} />
                    <h1 className="title">Mais que código</h1>
                    <p className="text">
                        Quem já empreendeu pode tomar decisões importantes que garantem o seu sucesso
                    </p>
                    <div className="subtitle">Habilidades extras</div>
                    <p className="text">Gerência de projetos, Scrum, Kanban, interação com clientes</p>
                    <div className="subtitle">Experiência</div>
                    <p className="text">+5 anos de empresa própria</p>
                    <p className="text">2 grandes projetos</p>
                    <p className="text">Jira</p>
                    <p className="text">Trello</p>
                    <p className="text">Todoist</p>
                    <p className="text">Pomodoro</p>
                </div>
            </div>
        </Container>
    )
}

export default Skills
