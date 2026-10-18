import React, { useEffect } from 'react'
import Home from '../views/Home'
import { Contact } from '../views/Contact'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const siteUrl = 'https://brunorocha.netlify.app'

const PageMetadata: React.FC = () => {
    const { i18n, t } = useTranslation()
    const location = useLocation()

    useEffect(() => {
        const isContactPage = location.pathname === '/contact'
        const title = t(isContactPage ? 'seo.contactTitle' : 'seo.homeTitle')
        const description = t(isContactPage ? 'seo.contactDescription' : 'seo.homeDescription')
        const canonicalUrl = `${siteUrl}${isContactPage ? '/contact' : '/'}`
        const locale = i18n.language.startsWith('pt') ? 'pt_BR' : 'en_US'

        document.documentElement.lang = i18n.language.startsWith('pt') ? 'pt-BR' : 'en'
        document.title = title

        document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', description)
        document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', title)
        document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description)
        document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
        document.querySelector<HTMLMetaElement>('meta[property="og:locale"]')?.setAttribute('content', locale)
        document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute('content', title)
        document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute('content', description)
        document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
    }, [i18n.language, location.pathname, t])

    return null
}

const RootRouter: React.FC = () => {
    return (
        <Router>
            <div className="pb-16 lg:pb-0">
                <PageMetadata />
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
