import React from 'react'
import { useTranslation } from 'react-i18next'
import useActiveSection from '../../hooks/useActiveSection'

const sections = [
    { id: 'home', label: 'sectionNavigation.home' },
    { id: 'about', label: 'sectionNavigation.about' },
    { id: 'skills', label: 'sectionNavigation.skills' },
    { id: 'projects', label: 'sectionNavigation.projects' },
    { id: 'clients', label: 'sectionNavigation.clients' },
    { id: 'contact', label: 'sectionNavigation.contact' }
]
const sectionIds = sections.map((section) => section.id)

const SectionNavigation: React.FC = () => {
    const { t } = useTranslation()
    const activeSection = useActiveSection(sectionIds, 'home')

    return (
        <nav
            aria-label={t('sectionNavigation.label')}
            className="section-navigation fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
        >
            {sections.map((section) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    aria-label={t(section.label)}
                    aria-current={activeSection === section.id ? 'location' : undefined}
                    className={`group relative flex h-5 w-5 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                        activeSection === section.id ? 'is-active' : ''
                    }`}
                >
                    <span className="section-navigation-tooltip pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                        {t(section.label)}
                    </span>
                    <span className="section-navigation-dot block h-2 w-2 rounded-full bg-slate-500 transition-all duration-300 group-hover:bg-cyan-300" />
                </a>
            ))}
        </nav>
    )
}

export default SectionNavigation
