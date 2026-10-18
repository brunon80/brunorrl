import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Container from '../../../../components/Container'
import SectionKicker from '../../../../components/SectionKicker'

const Call: React.FC = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Container id="contact" sessionClassName="call-to-action colored-session no-margin relative overflow-hidden">
                {/* Background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950 pointer-events-none"></div>
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col items-center p-8 md:p-12 max-w-5xl mx-auto">
                    {/* Content */}
                    <div className="text-center animate-fade-in-up">
                        <SectionKicker number="06" label={t('sectionKickers.contact')} />
                        <h2 className="mx-auto w-fit max-w-full text-2xl md:text-4xl font-bold mb-4 text-white relative group animate-fade-in-up delay-100">
                            {t('call.title')}
                            <span className="absolute inset-x-0 -bottom-2 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur"></span>
                        </h2>

                        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
                            {t('call.description')}
                        </p>

                        {/* Main CTA */}
                        <Link 
                            onClick={() => { window.scrollTo({ top: 0 }) }}
                            to="/contact"
                            className="group relative inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-xl overflow-hidden shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up delay-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
                            <span className="relative flex items-center">
                                {t('call.action')}
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </Link>

                        {/* Secondary CTA */}
                        <div className="mt-6 animate-fade-in-up delay-400">
                            <a 
                                href="mailto:bruno.rocha2008@gmail.com"
                                className="inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-slate-800 transition-all duration-200 border border-slate-700 hover:border-cyan-500 group"
                            >
                                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>bruno.rocha2008@gmail.com</span>
                            </a>
                        </div>

                        {/* Additional info */}
                        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-400 animate-fade-in-up delay-400">
                            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Respondo rapidamente</span>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                </div>
            </Container>
        </div>
    )
}

export default Call