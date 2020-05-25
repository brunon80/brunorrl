import React from 'react'
import Home from '../views/Home'
import { Contact } from '../views/Contact'
import Header from '../components/Header'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const RootRouter: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default RootRouter
