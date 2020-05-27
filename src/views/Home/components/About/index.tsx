import React from 'react'
import Container from '../../../../components/Container'

// import { Container } from './styles';

const About: React.FC = () => {
    return (
        <Container sessionClassName="colored-session">
            <div className="column">
                <div className="about-wrapper">
                    <h1 className="title light-text">Olá, me chamo Bruno. Prazer em conhecer você</h1>
                    <h2 className="subtitle light-text">
                        Desde o início da minha jornada, sou apaixonado por tecnologia, me formei em engenharia de
                        computação e me tornei especialista em Front-end (Mobile e Web). Trabalho desenvolvendo
                        interfaces web usando React a cerca de 5 anos e React Native para dispositivos móveis a cerca de
                        3 anos, assim, satisfazendo clientes e criando aplicações hibridas para todas as plataformas.
                    </h2>
                </div>
            </div>
        </Container>
    )
}

export default About
