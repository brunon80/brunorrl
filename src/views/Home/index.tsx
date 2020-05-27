import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Clients from './components/Clients'
import './styles.scss'

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Clients />
        </>
    )
}

export default Home
