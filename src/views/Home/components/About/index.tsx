import React from 'react'
import Container from '../Container'

// import { Container } from './styles';

const About: React.FC = () => {
    return (
        <Container sessionClassName="colored-session">
            <div className="column">
                <div className="about-wrapper">
                    <h1 className="title light-text">Olá, Me chamo Bruno. Prazer em conhecer você</h1>
                    <h2 className="subtitle light-text">
                        Sou engenheiro de computação com especialidade em Fontend (Mobile e Web) trabalho desenvolvendo
                        interfaces usando React (desde a versão 0.13 até a mais recente, cerca de 5 anos) para web e
                        React Native (desde a versão 0.40, cerca de 3 anos) para dispositivos móveis, assim, criando
                        aplicações hibridas para todas as plataformas.
                    </h2>
                </div>
            </div>
        </Container>
    )
}

export default About
