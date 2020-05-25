import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import './styles.scss'

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
        </>
    )
}

export default Home
