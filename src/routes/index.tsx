import React from 'react'
import Home from '../views/Home'
import { Contact } from '../views/Contact'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const RootRouter: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default RootRouter
