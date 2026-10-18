import React from 'react'
import { useTranslation } from 'react-i18next'

import Container from '../../../../components/Container'
import SectionKicker from '../../../../components/SectionKicker'

const Hero: React.FC = () => {
    const { t } = useTranslation()
    
    // Dynamic badges based on tech stack
    const techStacks = [
        { name: 'React', icon: '⚛️', color: 'text-cyan-400' },
        { name: 'TypeScript', icon: '💙', color: 'text-blue-400' },
        { name: 'Vite', icon: '⚡', color: 'text-orange-400' },
        { name: 'Tailwind', icon: '🎨', color: 'text-pink-500' }
    ]

    // Scroll smooth para projetos (ID do Projects)
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects')
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' })
        } else {
            console.warn('Seção #projects não encontrada')
        }
    }

    // Scroll smooth para contato (ID do Call/Contact)
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        } else {
            console.warn('Seção #contact não encontrada')
        }
    }

    return (
        <Container id="home" sessionClassName="no-margin relative overflow-hidden">
            {/* Animated background with multiple layers */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

            {/* Floating orbs for depth */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            </div>

            {/* Content with glassmorphism */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 py-20 min-h-screen justify-center">
                {/* Animated title */}
                <SectionKicker number="01" label={t('sectionKickers.intro')} />
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white relative group animate-fade-in-up">
                    {t('hero.title')}
                    <span className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                    {t('hero.description')}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up delay-300">
                    {techStacks.map((tech) => (
                        <span 
                            key={tech.name} 
                            className={`inline-flex items-center px-5 py-2.5 bg-slate-800/60 backdrop-blur-sm rounded-full text-sm font-medium ${tech.color} border border-slate-700/50 shadow-lg hover:bg-slate-700/70 transition-all duration-300 cursor-default`}
                        >
                            <span className="mr-2">{tech.icon}</span>
                            {tech.name}
                        </span>
                    ))}
                </div>

                {/* Dual CTA buttons - COM SCROLL FUNCIONAL */}
                <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-400">
                    <a 
                        href="#projects"
                        onClick={(e) => { 
                            e.preventDefault() 
                            scrollToProjects() 
                        }}
                        className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-xl overflow-hidden shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
                        <span className="relative flex items-center">
                            {t('hero.projects')}
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </a>

                    <a 
                        href="#contact"
                        onClick={(e) => { 
                            e.preventDefault() 
                            scrollToContact() 
                        }}
                        className="group relative inline-flex items-center justify-center px-10 py-4 bg-slate-800/60 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:bg-slate-700/80 hover:-translate-y-1 shadow-lg"
                    >
                        <span className="relative flex items-center">
                            {t('hero.contact')}
                            <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </Container>
    )
}

export default Hero