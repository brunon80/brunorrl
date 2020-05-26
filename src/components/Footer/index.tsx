import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

const Footer: React.FC = () => {
    return (
        <footer className="session footer">
            <div className="container is-narrow">
                <div className="centered column">
                    <Link to="/">Logo Branca</Link>
                    <div className="title">Vivendo, aprendendo e aprimorando um dia de cada vez</div>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/bruno.rrl/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="icon" icon={faInstagram} />
                        </a>
                        <a href="https://www.facebook.com/bruno.r.rolim" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="icon" icon={faFacebook} />
                        </a>
                        <a href="https://twitter.com/BrunoRolim12" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="icon" icon={faTwitter} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/bruno-rolim-1a38a038/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                        </a>
                        <a href="mailto:bruno.rocha2008@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="icon" icon={faEnvelope} />
                        </a>
                    </div>
                    <div className="copyright">
                        <span>Feito do zero por mim</span>
                        <span>
                            <FontAwesomeIcon className="icon" icon={faCopyright} />
                        </span>
                        <span>2020</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
