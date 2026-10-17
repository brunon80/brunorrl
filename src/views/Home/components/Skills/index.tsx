import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMobileAlt, faUserTie, faBolt, faCubes, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

import Container from '../../../../components/Container'

const Skills: React.FC = () => {
    const { t } = useTranslation()
    
    const frontendWebTechs = ['React', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript (ES6+)']
    const mobileTechs = ['React Native', 'JavaScript', 'REST APIs', 'Git']
    const entrepreneurTechs = ['Business Acumen', 'Product Sense', 'Leadership', 'Problem Solving']

    return (
        <div id="skills">
            <Container sessionClassName="skills no-margin relative">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col items-center p-6 max-w-7xl mx-auto w-full">
                    {/* Section header */}
                    <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white relative group animate-fade-in-up delay-100">
                            {t('skills.title')}
                            <span className="absolute -inset-x-4 -bottom-2 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur"></span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                            {t('skills.subtitle')}
                        </p>
                    </div>

                    {/* Skills cards */}
                    <div className="grid gap-6 md:gap-8 w-full animate-fade-in-up delay-300">
                        {/* Frontend Web */}
                        <div 
                            className="group relative overflow-hidden rounded-2xl bg-slate-800/70 backdrop-blur-md border-2 border-slate-600 p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <FontAwesomeIcon className="text-4xl text-cyan-300" icon={faLaptopCode} />
                                </div>
                                
                                <h2 className="text-2xl font-bold mb-3 text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300">
                                    {t('skills.web.session1.title')}
                                </h2>
                                
                                <p className="text-gray-400 leading-relaxed max-w-xl animate-fade-in-up delay-100">
                                    {t('skills.web.session1.description')}
                                </p>

                                {/* Tech stack */}
                                <div className="mt-6 flex flex-wrap justify-center gap-2 animate-fade-in-up delay-200">
                                    {frontendWebTechs.map((tech) => (
                                        <span 
                                            key={tech}
                                            className="inline-flex items-center px-3 py-1.5 bg-slate-800/60 rounded-lg text-xs font-medium text-gray-300 border border-slate-700/50 group-hover:bg-slate-700 transition-colors duration-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Corner decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>

                        {/* Mobile */}
                        <div 
                            className="group relative overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <FontAwesomeIcon className="text-4xl text-purple-400" icon={faMobileAlt} />
                                </div>
                                
                                <h2 className="text-2xl font-bold mb-3 text-purple-400 group-hover:scale-105 transition-transform duration-300">
                                    {t('skills.mobile.session1.title')}
                                </h2>
                                
                                <p className="text-gray-400 leading-relaxed max-w-xl animate-fade-in-up delay-100">
                                    {t('skills.mobile.session1.description')}
                                </p>

                                {/* Tech stack */}
                                <div className="mt-6 flex flex-wrap justify-center gap-2 animate-fade-in-up delay-200">
                                    {mobileTechs.map((tech) => (
                                        <span 
                                            key={tech}
                                            className="inline-flex items-center px-3 py-1.5 bg-slate-800/60 rounded-lg text-xs font-medium text-gray-300 border border-slate-700/50 group-hover:bg-slate-700 transition-colors duration-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Corner decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>

                        {/* Entrepreneur */}
                        <div 
                            className="group relative overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <FontAwesomeIcon className="text-4xl text-orange-400" icon={faUserTie} />
                                </div>
                                
                                <h2 className="text-2xl font-bold mb-3 text-orange-400 group-hover:scale-105 transition-transform duration-300">
                                    {t('skills.entrepreneur.session1.title')}
                                </h2>
                                
                                <p className="text-gray-400 leading-relaxed max-w-xl animate-fade-in-up delay-100">
                                    {t('skills.entrepreneur.session1.description')}
                                </p>

                                {/* Tech stack */}
                                <div className="mt-6 flex flex-wrap justify-center gap-2 animate-fade-in-up delay-200">
                                    {entrepreneurTechs.map((tech) => (
                                        <span 
                                            key={tech}
                                            className="inline-flex items-center px-3 py-1.5 bg-slate-800/60 rounded-lg text-xs font-medium text-gray-300 border border-slate-700/50 group-hover:bg-slate-700 transition-colors duration-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Corner decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Section footer */}
                    <div className="mt-12 flex items-center gap-6 animate-fade-in-up delay-400">
                        <div className="flex -space-x-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/60 border-2 border-slate-900 relative hover:scale-110 transition-transform duration-200 cursor-pointer group">
                                <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">📚</span>
                            </div>
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/60 border-2 border-slate-900 relative hover:scale-110 transition-transform duration-200 cursor-pointer group">
                                <span className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors">🎯</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400">
                            {t('skills.footer')}
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Skills