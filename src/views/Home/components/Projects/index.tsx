import React from 'react'
import { useTranslation } from 'react-i18next'

import Container from '../../../../components/Container'

import kinbox from '../../../../assets/images/project-kinbox.png'
import ganhomais from '../../../../assets/images/project-gannhomais.png'
import carmais from '../../../../assets/images/project-carmais.png'
import somapay from '../../../../assets/images/project-somapay.png'
import sympla from '../../../../assets/images/project-sympla.png'

const Projects: React.FC = () => {
    const { t } = useTranslation()
    
    const projectsData = [
        {src: kinbox, alt: 'Kinbox', href: 'https://www.kinbox.com.br', descKey: 'projects.kinbox.description', actionKey: 'projects.kinbox.action', featured: true},
        {src: ganhomais, alt: 'GanhoMais', href: 'https://play.google.com/store/apps/details?id=com.genpp.GanhoMais&hl=pt_BR', descKey: 'projects.gm.description', actionKey: 'projects.gm.action'},
        {src: carmais, alt: 'Carmais', href: 'https://www.carmais.com.br', descKey: 'projects.carmais.description', actionKey: 'projects.carmais.action'},
        {src: somapay, alt: 'Somapay', href: 'https://somapay.app.link/', descKey: 'projects.somapay.description', actionKey: 'projects.somapay.action', featured: true},
        {src: sympla, alt: 'Sympla', href: 'https://sympla.com.br', descKey: 'projects.sympla.description', actionKey: 'projects.sympla.action'}
    ]

    return (
        <div id="projects" className="session">
            <Container sessionClassName="no-margin relative overflow-hidden">
                {/* Background gradient e elementos decorativos */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pointer-events-none"></div>
                
                {/* Floating orbs para profundidade */}
                <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
                
                <div className="relative z-10 flex flex-col items-center p-6 max-w-7xl mx-auto w-full">
                    {/* Section header com elementos decorativos */}
                    <div className="relative z-10 text-center mb-8 md:mb-12 animate-fade-in-up">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl mb-4 shadow-lg">
                            <span className="text-3xl">🚀</span>
                        </div>
                        
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white relative group animate-fade-in-up delay-100">
                            {t('projects.title')}
                            <span className="absolute -inset-x-4 -bottom-2 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur"></span>
                        </h1>
                        
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
                            {t('projects.description')}
                        </p>
                        
                        <a href="mailto:bruno.rocha2008@gmail.com" className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 animate-fade-in-up delay-300">
                            <span className="mr-2">@</span>
                            bruno.rocha2008@gmail.com
                        </a>
                    </div>

                    {/* Projects grid */}
                    <div className="grid gap-6 md:gap-8 w-full animate-fade-in-up delay-400">
                        {projectsData.map((p, idx) => (
                            <figure 
                                key={idx} 
                                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${p.featured ? 'md:col-span-2 md:row-span-1' : ''}`}
                            >
                                {/* Featured badge */}
                                {p.featured && (
                                    <div className="absolute top-4 right-4 inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg animate-fade-in-up pointer-events-none">
                                        ⭐ Featured
                                    </div>
                                )}

                                {/* Image with overlay */}
                                <div className="relative overflow-hidden aspect-video md:aspect-auto z-0">
                                    <img 
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 brightness-95"
                                        src={p.src} 
                                        alt={p.alt} 
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null
                                            e.target.src = 'https://via.placeholder.com/800x450/1e293b/cbd5e1?text=' + encodeURIComponent(p.alt)
                                        }}
                                    />
                                    {/* Gradient overlay - pointer-events-none para não bloquear cliques */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>

                                    {/* Content overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 bg-gradient-to-t from-slate-900/95 via-slate-900/90 to-transparent z-10">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                            {p.alt}
                                        </h2>
                                        <p className="text-sm md:text-base text-gray-300 mb-4 line-clamp-2 md:line-clamp-none hidden md:block">
                                            {t(p.descKey)}
                                        </p>
                                        <a 
                                            href={p.href} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200 group/btn cursor-pointer"
                                        >
                                            {t(p.actionKey)}
                                            <span className="hidden md:inline mr-1">↗</span>
                                            <svg className="w-4 h-4 md:hidden fill-current" viewBox="0 0 24 24">
                                                <path d="M8.59 16.59L13.17 12M8.59 8.59L13.17 13.17" stroke="currentColor" strokeWidth={2}/>
                                            </svg>
                                        </a>

                                        {/* Mobile-only description */}
                                        <p className="text-sm text-gray-200 mb-4 line-clamp-2 md:hidden">
                                            {t(p.descKey)}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative gradient border */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-cyan-500/0 via-transparent to-purple-500/0 group-hover:border-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-purple-500/20 transition-all duration-500 pointer-events-none"></div>
                            </figure>
                        ))}
                    </div>

                    {/* Section footer */}
                    <div className="mt-12 text-center animate-fade-in-up delay-400">
                        <p className="text-sm text-gray-400 mb-2">
                            {t('projects.footer')}
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Projects