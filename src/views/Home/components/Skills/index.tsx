import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMobileAlt, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

import Container from '../../../../components/Container'
import './styles.scss'

// import { Container } from './styles';

const Skills: React.FC = () => {
    const { t } = useTranslation()
    return (
        <Container sessionClassName="skills" containerClassName="is-narrow">
            <div className="skill-grid-container box">
                <div className="skill-grid-item column">
                    <FontAwesomeIcon className="icon" icon={faLaptopCode} />
                    <h1 className="title">{t('skills.web.session1.title')}</h1>
                    <p className="text">{t('skills.web.session1.description')}</p>
                    <div className="subtitle">{t('skills.web.session2.title')}</div>
                    <p className="text">{t('skills.web.session2.description')}</p>
                    <div className="subtitle">{t('skills.web.session3.title')}</div>
                    <p className="text">{t('skills.web.session3.code')}</p>
                    <p className="text">{t('skills.web.session3.git')}</p>
                    <p className="text">{t('skills.web.session3.linux')}</p>
                    <p className="text">{t('skills.web.session3.gulp')}</p>
                    <p className="text">{t('skills.web.session3.webpack')}</p>
                    <p className="text">{t('skills.web.session3.terminal')}</p>
                </div>
                <div className="skill-grid-item column">
                    <FontAwesomeIcon className="icon" icon={faMobileAlt} />
                    <h1 className="title">{t('skills.mobile.session1.title')}</h1>
                    <p className="text">{t('skills.mobile.session1.description')}</p>
                    <div className="subtitle">{t('skills.mobile.session2.title')}</div>
                    <p className="text">{t('skills.mobile.session2.description')}</p>
                    <div className="subtitle">{t('skills.mobile.session3.title')}</div>
                    <p className="text">{t('skills.mobile.session3.xcode')}</p>
                    <p className="text">{t('skills.mobile.session3.android')}</p>
                    <p className="text">{t('skills.mobile.session3.expo')}</p>
                    <p className="text">{t('skills.mobile.session3.code')}</p>
                    <p className="text">{t('skills.mobile.session3.git')}</p>
                    <p className="text">{t('skills.mobile.session3.linux')}</p>
                </div>
                <div className="skill-grid-item column">
                    <FontAwesomeIcon className="icon" icon={faUserTie} />
                    <h1 className="title">{t('skills.entrepreneur.session1.title')}</h1>
                    <p className="text">{t('skills.entrepreneur.session1.description')}</p>
                    <div className="subtitle">{t('skills.entrepreneur.session2.title')}</div>
                    <p className="text">{t('skills.entrepreneur.session2.description')}</p>
                    <div className="subtitle">{t('skills.entrepreneur.session3.title')}</div>
                    <p className="text">{t('skills.entrepreneur.session3.experience')}</p>
                    <p className="text">{t('skills.entrepreneur.session3.projects')}</p>
                    <p className="text">{t('skills.entrepreneur.session3.jira')}</p>
                    <p className="text">{t('skills.entrepreneur.session3.trello')}</p>
                    <p className="text">{t('skills.entrepreneur.session3.todoist')}</p>
                    <p className="text">{t('skills.entrepreneur.session3.pomodoro')}</p>
                </div>
            </div>
        </Container>
    )
}

export default Skills
