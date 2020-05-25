import React from 'react'
import homeBg from '../../../../assets/images/home-bg.png'

// import { Container } from './styles';

const Hero: React.FC = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="column centered">
                    <h1 className="title">Desenvolvedor Front-end especialista em React e React Native</h1>
                    <h2 className="subtitle">Eu crio e desenvoldo interfaces, além de amar o que faço.</h2>
                </div>
                <div className="column centered">
                    <img className="bg" src={homeBg} alt="background-home" />
                </div>
            </div>
        </section>
    )
}

export default Hero
