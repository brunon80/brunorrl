import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
    const { t } = useTranslation()

    const socialLinks = [
        { icon: faInstagram, url: 'https://www.instagram.com/bruno.rrl/', label: 'Instagram', color: 'text-pink-500 hover:text-pink-400' },
        { icon: faFacebook, url: 'https://www.facebook.com/bruno.r.rolim', label: 'Facebook', color: 'text-blue-600 hover:text-blue-500' },
        { icon: faTwitter, url: 'https://twitter.com/BrunoRolim12', label: 'Twitter', color: 'text-sky-500 hover:text-sky-400' },
        { icon: faLinkedinIn, url: 'https://www.linkedin.com/in/bruno-rolim-1a38a038/', label: 'LinkedIn', color: 'text-blue-700 hover:text-blue-600' },
    ]

    return (
        <footer className="flex justify-center session footer relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden border-t border-slate-800/50">
            {/* Background decorations */}
            <div className="absolute top-4 left-4 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 right-4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>

            <div className="container is-narrow relative z-10 flex w-full items-center justify-between px-[clamp(1rem,4vw,2rem)] py-8 md:py-12">
                {/* Logo - Esquerda */}
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 group-hover:-translate-y-1">
                        <span className="text-base font-bold text-white">BR</span>
                    </div>
                </Link>

                {/* Social Links e Copyright - Agrupado à direita (igual ao header) */}
                <div className="hidden md:flex items-center space-x-6 justify-end ml-auto">
                    {/* Social Links */}
                    <div className="flex items-center gap-3 flex-wrap">
                        {socialLinks.map((social, idx) => (
                            <a 
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2.5 rounded-lg bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 hover:border-${social.color.split(' ')[0]}-500/50 transition-all duration-200 hover:bg-slate-800/60 group`}
                                aria-label={social.label}
                            >
                                <FontAwesomeIcon className={`w-4 h-4 ${social.color} group-hover:scale-110 transition-transform duration-200`} icon={social.icon} />
                            </a>
                        ))}
                        
                        {/* Email */}
                        <a 
                            href="mailto:bruno.rocha2008@gmail.com"
                            className="p-2.5 rounded-lg bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-200 hover:bg-slate-800/60 group"
                            aria-label="Email"
                        >
                            <FontAwesomeIcon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-200" icon={faEnvelope} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-xs sm:text-sm text-gray-500 flex flex-col items-end gap-1">
                        <span>{t('footer.ownner')}</span>
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon className="w-3 h-3" icon={faHeart} />
                            {t('footer.location')}
                        </span>
                    </div>
                </div>

                {/* Mobile-only version */}
                <div className="md:hidden flex flex-col items-center space-y-4">
                    {/* Social Links */}
                    <div className="flex items-center gap-3 flex-wrap justify-center w-full">
                        {socialLinks.map((social, idx) => (
                            <a 
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2.5 rounded-lg bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 hover:border-${social.color.split(' ')[0]}-500/50 transition-all duration-200 hover:bg-slate-800/60 group`}
                                aria-label={social.label}
                            >
                                <FontAwesomeIcon className={`w-4 h-4 ${social.color} group-hover:scale-110 transition-transform duration-200`} icon={social.icon} />
                            </a>
                        ))}
                        
                        {/* Email */}
                        <a 
                            href="mailto:bruno.rocha2008@gmail.com"
                            className="p-2.5 rounded-lg bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-200 hover:bg-slate-800/60 group"
                            aria-label="Email"
                        >
                            <FontAwesomeIcon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-200" icon={faEnvelope} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-xs sm:text-sm text-gray-500 flex flex-col items-center gap-1">
                        <span>{t('footer.ownner')}</span>
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon className="w-3 h-3" icon={faHeart} />
                            {t('footer.location')}
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll to top indicator - Mobile only */}
            <Link 
                to="/" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="absolute bottom-3 right-3 md:hidden p-2.5 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 text-gray-400 hover:text-cyan-400 transition-all duration-200 group"
                aria-label="Topo da página"
            >
                <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </Link>
        </footer>
    )
}

export default Footer