import React from 'react'
import Home from '../views/Home'
import { Contact } from '../views/Contact'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const RootRouter: React.FC = () => {
    return (
        <Router>
            <div className="pb-16 lg:pb-0">
                <Header />
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default RootRouter
