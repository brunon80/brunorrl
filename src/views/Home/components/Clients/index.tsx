import React from 'react'
import { useTranslation } from 'react-i18next'

import Container from '../../../../components/Container'
import carmaisLogo from '../../../../assets/images/logo-carmais.png'
import ganhomaisLogo from '../../../../assets/images/logo-ganhomais.png'
import korujaLogo from '../../../../assets/images/logo-koruja.png'
import somapayLogo from '../../../../assets/images/logo-somapay.png'
import symplaLogo from '../../../../assets/images/logo-sympla.png'

const Clients: React.FC = () => {
    const { t } = useTranslation()

    return (
        <Container sessionClassName="clients no-margin relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center p-6 max-w-6xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl mb-4 shadow-lg">
                        <span className="text-3xl">🤝</span>
                    </div>

                    <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white relative group animate-fade-in-up delay-100">
                        {t('clients.title')}
                        <span className="absolute -inset-x-4 -bottom-2 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur"></span>
                    </h1>

                    <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto animate-fade-in-up delay-200">
                        {t('clients.subtitle')}
                    </p>
                </div>

                {/* Logos grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 w-full mb-8 animate-fade-in-up delay-300">
                    {[
                        {src: carmaisLogo, alt: 'carmais'},
                        {src: ganhomaisLogo, alt: 'ganhomais'},
                        {src: korujaLogo, alt: 'koruja'},
                        {src: somapayLogo, alt: 'somapay'},
                        {src: symplaLogo, alt: 'sympla'}
                    ].map((logoData, i) => (
                        <div 
                            key={i} 
                            className="group relative flex justify-center items-center p-4 md:p-6 hover:bg-slate-800/50 rounded-xl transition-all duration-300 border border-slate-700/50 group-hover:border-cyan-500/50"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Logo container */}
                            <div className="relative z-10 w-full flex justify-center">
                                <div className="flex items-center justify-center p-4 md:p-6 bg-slate-800/80 backdrop-blur-md rounded-xl border-2 border-slate-600 group-hover:border-cyan-400 transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                                    <img 
                                    style={{
  filter: "brightness(0) saturate(100%) invert(100%) sepia(87%) saturate(754%) hue-rotate(220deg) brightness(124%) contrast(100%)"
}}
                                        src={logoData.src} 
                                        alt={logoData.alt} 
                                        className="h-12 md:h-16 w-auto object-contain drop-shadow-lg"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Shine effect */}
                            <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="text-center animate-fade-in-up delay-400">
                    <p className="text-sm text-gray-400 mb-2">
                        {t('clients.footer1')}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-cyan-400">
                        <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L9.19 8.63 2 9.27l5.46 4.73L5.82 22 12 18.42l6.18 3.58-1.64-6.01 5.46-4.73L14.81 8.63z"/>
                        </svg>
                        <span>{t('clients.footer2')}</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Clients