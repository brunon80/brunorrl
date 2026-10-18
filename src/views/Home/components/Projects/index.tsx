import React from 'react'
import { useTranslation } from 'react-i18next'

import Container from '../../../../components/Container'
import SectionKicker from '../../../../components/SectionKicker'

import kinbox from '../../../../assets/images/project-kinbox.png'
import ganhomais from '../../../../assets/images/project-gannhomais.png'
import carmais from '../../../../assets/images/project-carmais.png'
import somapay from '../../../../assets/images/project-somapay.png'
import sympla from '../../../../assets/images/project-sympla.png'
import deelLogo from '../../../../assets/images/logo-deel.png'

const Projects: React.FC = () => {
    const { t } = useTranslation()
    
    const projectsData = [
        {src: deelLogo, alt: 'Deel', href: 'https://www.deel.com/', descKey: 'projects.deel.description', actionKey: 'projects.deel.action', featured: true, logo: true},
        {src: sympla, alt: 'Sympla', href: 'https://sympla.com.br', descKey: 'projects.sympla.description', actionKey: 'projects.sympla.action', featured: true},
        {src: kinbox, alt: 'Kinbox', href: 'https://www.kinbox.com.br', descKey: 'projects.kinbox.description', actionKey: 'projects.kinbox.action'},
        {src: ganhomais, alt: 'GanhoMais', href: 'https://play.google.com/store/apps/details?id=com.genpp.GanhoMais&hl=pt_BR', descKey: 'projects.gm.description', actionKey: 'projects.gm.action'},
        {src: carmais, alt: 'Carmais', href: 'https://www.carmais.com.br', descKey: 'projects.carmais.description', actionKey: 'projects.carmais.action'},
        {src: somapay, alt: 'Somapay', href: 'https://somapay.app.link/', descKey: 'projects.somapay.description', actionKey: 'projects.somapay.action'}
    ]

    return (
        <div className="session">
            <Container id="projects" sessionClassName="no-margin relative overflow-hidden">
                {/* Background gradient e elementos decorativos */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pointer-events-none"></div>
                
                {/* Floating orbs para profundidade */}
                <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
                
                <div className="relative z-10 flex flex-col items-center p-6 max-w-7xl mx-auto w-full">
                    {/* Section header com elementos decorativos */}
                    <div className="relative z-10 text-center mb-8 md:mb-12 animate-fade-in-up">
                        <SectionKicker number="04" label={t('sectionKickers.projects')} />
                        <h2 className="mx-auto w-fit max-w-full text-3xl md:text-5xl font-bold mb-4 text-white relative group animate-fade-in-up delay-100">
                            {t('projects.title')}
                            <span className="absolute inset-x-0 -bottom-2 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur"></span>
                        </h2>
                        
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
                            {t('projects.description')}
                        </p>
                        
                        <a href="mailto:bruno.rocha2008@gmail.com" className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 animate-fade-in-up delay-300">
                            <span className="mr-2">@</span>
                            bruno.rocha2008@gmail.com
                        </a>
                    </div>

                    {/* Projects grid */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 w-full animate-fade-in-up delay-400">
                        {projectsData.map((p, idx) => (
                            <figure 
                                key={p.alt}
                                data-reveal-item
                                style={{ transitionDelay: `${Math.min(idx, 4) * 90}ms` }}
                                className={`project-card group relative grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/60 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/30 focus-within:border-cyan-500/60 focus-within:shadow-xl focus-within:shadow-cyan-950/30 ${p.featured ? 'md:col-span-2 md:grid-cols-2' : ''}`}
                            >
                                <a
                                    href={p.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${t(p.actionKey)}: ${p.alt}`}
                                    className={`project-card-image group/image relative block overflow-hidden aspect-video focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400 ${p.featured ? 'md:aspect-auto md:min-h-[280px]' : ''} ${p.logo ? 'bg-[#c4b2f5]' : ''}`}
                                >
                                    <img
                                        className={`absolute inset-0 h-full w-full ${p.logo ? 'object-contain' : 'object-cover transition-transform duration-700 group-hover:scale-105 group-focus-within:scale-105'}`}
                                        src={p.src}
                                        alt=""
                                        loading="lazy"
                                    />
                                    {!p.logo && (
                                        <span className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-transparent to-cyan-950/10 transition-colors duration-500 group-hover/image:from-slate-950/20" />
                                    )}
                                    <span className="absolute bottom-4 left-4 font-mono text-xs tracking-[0.2em] text-white/75">
                                        {String(idx + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}
                                    </span>
                                    {p.featured && (
                                        <span className="absolute top-4 left-4 inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                                            ⭐ {t('projects.featured')}
                                        </span>
                                    )}
                                </a>

                                <div className="flex flex-col items-start justify-center p-6 md:p-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                        {p.alt}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                                        {t(p.descKey)}
                                    </p>
                                    <a
                                        href={p.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center mt-auto rounded-sm text-cyan-400 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900 font-semibold transition-colors duration-200 group/btn"
                                    >
                                        {t(p.actionKey)}
                                        <span aria-hidden="true" className="ml-2 transition-transform duration-200 group-hover/btn:translate-x-1 group-focus-visible/btn:translate-x-1">↗</span>
                                    </a>
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