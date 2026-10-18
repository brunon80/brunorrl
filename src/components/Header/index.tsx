import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useActiveSection from '../../hooks/useActiveSection'

const homeSectionIds = ['home', 'about', 'skills', 'projects', 'clients', 'contact']
const mobileHomeSections = [
    { id: 'home', label: 'sectionNavigation.home' },
    { id: 'projects', label: 'sectionNavigation.projects' },
    { id: 'contact', label: 'sectionNavigation.contact' }
]

const Header: React.FC = () => {
    const location = useLocation()
    const { i18n, t } = useTranslation()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const activeSection = useActiveSection(homeSectionIds, 'home')
    const [theme, setTheme] = useState<'dark' | 'light' | 'system'>(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme === 'light' || savedTheme === 'system' ? savedTheme : 'dark'
    })

    useEffect(() => {
        setMobileMenuOpen(false)
    }, [location.pathname])

    useEffect(() => {
        let animationFrame = 0

        const updateProgress = () => {
            cancelAnimationFrame(animationFrame)
            animationFrame = requestAnimationFrame(() => {
                const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
                const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
                setScrollProgress(Math.min(1, Math.max(0, progress)))
            })
        }

        updateProgress()
        window.addEventListener('scroll', updateProgress, { passive: true })
        window.addEventListener('resize', updateProgress)

        return () => {
            cancelAnimationFrame(animationFrame)
            window.removeEventListener('scroll', updateProgress)
            window.removeEventListener('resize', updateProgress)
        }
    }, [])

    useEffect(() => {
        if (!mobileMenuOpen) {
            return
        }

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMobileMenuOpen(false)
            }
        }

        document.addEventListener('keydown', closeOnEscape)
        return () => document.removeEventListener('keydown', closeOnEscape)
    }, [mobileMenuOpen])

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
        <>
        <header className="fixed top-0 left-0 right-0 z-50 flex min-h-16 flex-col justify-center bg-slate-950/80 backdrop-blur-xl border-b border-slate-700/30 sm:min-h-[4.5rem]">
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                role="progressbar"
                aria-label={t('header.scrollProgress')}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(scrollProgress * 100)}
                style={{ transform: `scaleX(${scrollProgress})` }}
            />
            <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
                {/* Logo - Esquerda */}
                <Link to="/" className="flex items-center space-x-2 group" aria-label="Home">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 group-hover:-translate-y-1">
                        <span className="text-base font-bold text-white">BR</span>
                    </div>
                    <span className="hidden md:inline-block text-white font-semibold text-sm tracking-tight group-hover:text-cyan-400 transition-colors duration-200">
                        {t('header.brand')}
                    </span>
                </Link>

                <div className="ml-auto flex shrink-0 items-center gap-4 lg:gap-5">
                    {/* Navigation and CTA */}
                    <div className="hidden items-center gap-3 lg:flex">
                        {location.pathname !== '/' && (
                            <Link
                                to="/"
                                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-slate-800/30 hover:text-white"
                            >
                                {t('header.home')}
                            </Link>
                        )}
                        <Link
                            to="/contact"
                            className="inline-flex items-center rounded-lg border border-transparent bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:border-cyan-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/25"
                        >
                            {t('header.callToAction')}
                        </Link>
                    </div>

                    {/* Language Selector */}
                    <div className="hidden items-center space-x-2 border-l border-slate-700/60 pl-4 lg:flex">
                        <button
                            onClick={() => changeLanguage('en-US')}
                            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                                i18n.language === 'en-US'
                                    ? 'border-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                                    : 'border-slate-700/50 text-gray-400 hover:bg-slate-800/50 hover:text-white'
                            }`}
                            title="English"
                            aria-label="Switch to English"
                        >
                            EN
                        </button>
                        <button
                            onClick={() => changeLanguage('pt-BR')}
                            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                                i18n.language === 'pt-BR'
                                    ? 'border-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                                    : 'border-slate-700/50 text-gray-400 hover:bg-slate-800/50 hover:text-white'
                            }`}
                            title="Português"
                            aria-label="Switch to Portuguese"
                        >
                            PT
                        </button>
                    </div>

                    <select
                        value={theme}
                        onChange={changeTheme}
                        className="theme-select max-w-28 rounded-lg border border-slate-700/70 bg-slate-900 py-2 pl-3 pr-2 text-sm hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        aria-label={t('header.theme')}
                    >
                        <option value="system">{t('header.themeSystem')}</option>
                        <option value="light">{t('header.themeLight')}</option>
                        <option value="dark">{t('header.themeDark')}</option>
                    </select>
                    <span aria-hidden="true" className="h-7 border-l border-slate-700/60 lg:hidden" />

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="rounded-lg border border-slate-700/50 p-2 text-gray-400 transition-colors duration-200 hover:border-slate-600 hover:bg-slate-800/50 hover:text-white lg:hidden"
                        aria-label={mobileMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="lg:hidden border-t border-slate-700/30 bg-slate-950/95 px-5 py-4 shadow-2xl backdrop-blur-xl"
                >
                    <nav aria-label={t('sectionNavigation.label')} className="grid gap-1">
                        {location.pathname === '/' ? (
                            [
                                { id: 'about', label: 'sectionNavigation.about' },
                                { id: 'skills', label: 'sectionNavigation.skills' },
                                { id: 'projects', label: 'sectionNavigation.projects' },
                                { id: 'clients', label: 'sectionNavigation.clients' },
                                { id: 'contact', label: 'sectionNavigation.contact' }
                            ].map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-slate-800/70 hover:text-cyan-300"
                                >
                                    {t(section.label)}
                                </a>
                            ))
                        ) : (
                            <>
                                <Link to="/" className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-slate-800/70 hover:text-cyan-300">
                                    {t('header.home')}
                                </Link>
                                <Link to="/contact" className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-slate-800/70 hover:text-cyan-300">
                                    {t('header.contact')}
                                </Link>
                            </>
                        )}
                    </nav>

                    <div className="mt-3 flex gap-2 border-t border-slate-700/50 pt-3" aria-label={t('header.language')}>
                        <button
                            type="button"
                            onClick={() => {
                                changeLanguage('en-US')
                                setMobileMenuOpen(false)
                            }}
                            aria-pressed={i18n.language === 'en-US'}
                            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                                i18n.language === 'en-US'
                                    ? 'border-transparent bg-cyan-600 text-white'
                                    : 'border-slate-700/50 text-gray-400 hover:text-white'
                            }`}
                        >
                            EN
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                changeLanguage('pt-BR')
                                setMobileMenuOpen(false)
                            }}
                            aria-pressed={i18n.language === 'pt-BR'}
                            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                                i18n.language === 'pt-BR'
                                    ? 'border-transparent bg-cyan-600 text-white'
                                    : 'border-slate-700/50 text-gray-400 hover:text-white'
                            }`}
                        >
                            PT
                        </button>
                    </div>
                </div>
            )}

        </header>
            {/* Mobile Navigation - Hidden on Desktop */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-slate-700/30 bg-slate-950/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl">
                <nav className="flex items-center justify-between px-4">
                    {location.pathname === '/' ? (
                        mobileHomeSections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                onClick={(event) => {
                                    if (section.id === 'home') {
                                        event.preventDefault()
                                        window.scrollTo({ top: 0, behavior: 'smooth' })
                                    }
                                }}
                                aria-current={activeSection === section.id ? 'location' : undefined}
                                className={`flex-1 rounded-lg py-2 text-center text-sm font-medium transition-all duration-200 ${
                                    activeSection === section.id
                                        ? 'border border-slate-600 bg-slate-800/60 text-white'
                                        : 'text-gray-400 hover:bg-slate-800/30 hover:text-white'
                                }`}
                            >
                                {t(section.label)}
                            </a>
                        ))
                    ) : (
                        <>
                            <Link
                                to="/"
                                aria-current={location.pathname === '/' ? 'page' : undefined}
                                className="flex-1 rounded-lg py-2 text-center text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-slate-800/30 hover:text-white"
                            >
                                {t('header.home')}
                            </Link>
                            <Link
                                to="/contact"
                                aria-current={location.pathname === '/contact' ? 'page' : undefined}
                                className="flex-1 rounded-lg border border-slate-600 bg-slate-800/60 py-2 text-center text-sm font-medium text-white"
                            >
                                {t('header.contact')}
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </>
    )
}

export default Header