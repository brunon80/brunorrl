import React from 'react'
import './styles.scss'
import homeBg from '../../assets/images/home-bg.png'

const Home: React.FC = () => {
    return (
        <section className="hero-body">
            <div className="container">
                <div className="column centered">
                    <h1 className="title">Desenvolvedor Front-end especialista em React e React Native</h1>
                    <h2 className="subtitle">Eu crio e desenvoldo interfaces, além de amar o que faço.</h2>
                </div>
                <div className="column centered">
                    <img src={homeBg} alt="background-home" />
                </div>
            </div>
        </section>
    )
}

export default Home
