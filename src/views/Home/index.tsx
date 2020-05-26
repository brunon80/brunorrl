import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import './styles.scss'

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
        </>
    )
}

export default Home
