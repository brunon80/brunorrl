import React from 'react'
import Container from '../../components/Container'
import './styles.scss'

export const Contact: React.FC = () => {
    return (
        <Container sessionClassName="contact">
            <div className="column centered">
                <div className="wrapper is-three-quarters">
                    <h2 className="title">Estou muito empolgado para saber como é seu projeto. Pronto para começar?</h2>
                </div>
                <form className="form" name="bruno-contact" method="POST" data-netlify="true" hidden>
                    <div className="container-form">
                        <div className="input-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="details">Detalhes:</label>
                        <textarea className="details" name="details" id="details" cols={30} rows={10}></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </Container>
    )
}
