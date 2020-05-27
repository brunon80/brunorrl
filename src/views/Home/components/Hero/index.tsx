import React from 'react'
import Container from '../../../../components/Container'
import homeBg from '../../../../assets/images/home-bg.png'

// import { Container } from './styles';

const Hero: React.FC = () => {
    return (
        <Container sessionClassName="no-margin">
            <div className="column centered">
                <h1 className="title">Desenvolvedor Front-end especialista em React e React Native</h1>
                <h2 className="subtitle">
                    Desenvolvo soluções, sites e aplicativos, amo fazer isso
                    <span aria-label="heart" role="img">
                        ❤️
                    </span>
                    .
                </h2>
            </div>
            <div className="column centered">
                <img className="bg" src={homeBg} alt="background-home" />
            </div>
        </Container>
    )
}

export default Hero
