import React from 'react'
import Container from '../../../../components/Container'
import SectionKicker from '../../../../components/SectionKicker'
import { useTranslation } from 'react-i18next'

const About: React.FC = () => {
    const { t } = useTranslation()

    const achievements = [
        {
            icon: '🎓',
            label: t('about.achievements.computerEngineering'),
            color: 'text-cyan-400'
        },
        {
            icon: '💻',
            label: t('about.achievements.webMobile'),
            color: 'text-blue-400'
        },
        {
            icon: '🚀',
            label: t('about.achievements.productFocus'),
            color: 'text-purple-400'
        },
        {
            icon: '⚛️',
            label: t('about.achievements.reactEcosystem'),
            color: 'text-orange-400'
        }
    ]

    const highlights = [
        { label: t('about.badges.cleanCode'), color: 'text-cyan-400' },
        { label: t('about.badges.performance'), color: 'text-blue-400' },
        { label: t('about.badges.learnAlways'), color: 'text-purple-400' }
    ]

    return (
        <Container id="about" sessionClassName="colored-session">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-purple-950/10 to-transparent pointer-events-none"></div>
            <div className="absolute top-4 left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 right-4 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 flex flex-col items-center p-8 md:p-12 bg-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/30 max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
                    <SectionKicker number="02" label={t('sectionKickers.about')} />
                    <h2 className="mx-auto w-fit max-w-full text-3xl md:text-4xl font-bold mb-4 text-white relative group animate-fade-in-up delay-100">
                        {t('about.title')}
                        <span className="absolute inset-x-0 -bottom-2 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur"></span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                        {t('about.description')}
                    </p>
                </div>

                {/* Achievement badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full animate-fade-in-up delay-300">
                    {achievements.map((item, idx) => (
                        <div 
                            key={idx}
                            className="flex flex-col items-center p-4 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <span className="text-2xl mb-2">{item.icon}</span>
                            <span className={`text-sm font-semibold text-center ${item.color} group-hover:scale-105 transition-transform`}>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Additional info */}
                <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in-up delay-400">
                    {highlights.map((item, idx) => (
                        <span
                            key={idx}
                            className={`inline-flex items-center px-4 py-2 bg-slate-800/60 backdrop-blur-sm rounded-full text-sm border border-slate-700/50 shadow-lg ${item.color}`}
                        >
                            {idx === 0 ? '🔥 ' : idx === 1 ? '🎯 ' : '🤝 '}
                            {item.label}
                        </span>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default About