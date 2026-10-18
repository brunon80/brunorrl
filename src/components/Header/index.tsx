import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Header: React.FC = () => {
    const location = useLocation()
    const { i18n, t } = useTranslation()
    const [theme, setTheme] = useState<'dark' | 'light' | 'system'>(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme === 'light' || savedTheme === 'system' ? savedTheme : 'dark'
    })

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const applyTheme = () => {
            const isDark = theme === 'system' ? mediaQuery.matches : theme === 'dark'
            document.documentElement.classList.toggle('dark', isDark)
            document.documentElement.classList.toggle('theme-light', !isDark)
            document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
        }

        applyTheme()
        localStorage.setItem('theme', theme)

        if (theme === 'system') {
            mediaQuery.addListener(applyTheme)
            return () => mediaQuery.removeListener(applyTheme)
        }
    }, [theme])

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    const changeTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTheme = event.currentTarget.value
        if (selectedTheme === 'dark' || selectedTheme === 'light' || selectedTheme === 'system') {
            setTheme(selectedTheme)
        }
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-700/30">
            <nav className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto">
                {/* Logo - Esquerda */}
                <Link to="/" className="flex items-center space-x-2 group" aria-label="Home">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 group-hover:-translate-y-1">
                        <span className="text-base font-bold text-white">BR</span>
                    </div>
                    <span className="hidden md:inline-block text-white font-semibold text-sm tracking-tight group-hover:text-cyan-400 transition-colors duration-200">
                        {t('header.brand')}
                    </span>
                </Link>

                {/* Navigation e CTA - Direita (Desktop) */}
                <div className="hidden lg:flex items-center space-x-3">
                    {location.pathname !== '/' && (
                        <Link 
                            to="/" 
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                location.pathname === '/' 
                                    ? 'text-white bg-slate-800/60 border border-slate-600' 
                                    : 'text-gray-400 hover:text-white hover:bg-slate-800/30'
                            }`}
                        >
                            {t('header.home')}
                        </Link>
                    )}
                    <Link 
                        to="/contact"
                        className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 border border-transparent hover:border-cyan-300 text-sm"
                    >
                        {t('header.callToAction')}
                    </Link>

                    {/* Language Selector */}
                    <div className="flex items-center space-x-2">
                        <button 
                            onClick={() => changeLanguage('en-US')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border ${
                                i18n.language === 'en-US'
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg border-transparent'
                                    : 'text-gray-400 hover:text-white hover:bg-slate-800/50 border-slate-700/50'
                            }`}
                            title="English"
                            aria-label="Switch to English"
                        >
                            EN
                        </button>
                        <button 
                            onClick={() => changeLanguage('pt-BR')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border ${
                                i18n.language === 'pt-BR'
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg border-transparent'
                                    : 'text-gray-400 hover:text-white hover:bg-slate-800/50 border-slate-700/50'
                            }`}
                            title="Português"
                            aria-label="Switch to Portuguese"
                        >
                            PT
                        </button>
                    </div>
                </div>

                <select
                    value={theme}
                    onChange={changeTheme}
                    className="ml-auto lg:ml-0 max-w-28 px-2 py-2 rounded-lg text-sm text-gray-400 bg-slate-900 border border-slate-700/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    aria-label={t('header.theme')}
                >
                    <option value="system">{t('header.themeSystem')}</option>
                    <option value="light">{t('header.themeLight')}</option>
                    <option value="dark">{t('header.themeDark')}</option>
                </select>

                {/* Mobile Menu Button */}
                <button className="lg:hidden ml-2 p-2 text-gray-400 hover:text-white transition-colors duration-200" aria-label="Menu">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Navigation - Hidden on Desktop */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-t border-slate-700/30 p-3">
                <nav className="flex items-center justify-between px-4">
                    <Link 
                        to="/" 
                        className={`flex-1 text-center py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            location.pathname === '/' 
                                ? 'text-white bg-slate-800/60 border border-slate-600' 
                                : 'text-gray-400 hover:text-white hover:bg-slate-800/30'
                        }`}
                    >
                        {t('header.home')}
                    </Link>
                    <Link 
                        to="/contact" 
                        className={`flex-1 text-center py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            location.pathname === '/contact' 
                                ? 'text-white bg-slate-800/60 border border-slate-600' 
                                : 'text-gray-400 hover:text-white hover:bg-slate-800/30'
                        }`}
                    >
                        {t('header.contact')}
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header