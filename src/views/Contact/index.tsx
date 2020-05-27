import React, { useState, FormEvent } from 'react'
import Container from '../../components/Container'
import './styles.scss'

const encode = (data: any) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export const Contact: React.FC = () => {
    const [state, setState] = useState({})
    const [isSent, setSent] = useState(false)
    function handleSubmit(event: FormEvent) {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'bruno-contact', ...state }),
        })
            .then(() => setSent(true))
            .catch((error) => console.log(error))

        event.preventDefault()
    }

    function handleChange(event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setState({
            ...state,
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    return (
        <Container sessionClassName="contact">
            <div className="column centered">
                <div className="wrapper is-three-quarters">
                    <h2 className="title">Estou muito empolgado para saber como é seu projeto. Pronto para começar?</h2>
                </div>
                <form onSubmit={handleSubmit} className="form" name="bruno-contact" method="post">
                    <div className="container-form">
                        <div className="input-group">
                            <label htmlFor="name">Name:</label>
                            <input onChange={handleChange} type="text" name="name" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input onChange={handleChange} type="email" name="email" />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="details">Detalhes:</label>
                        <textarea onChange={handleChange} className="details" name="details" cols={30} rows={10} />
                        {isSent && <p className="success">Obrigado! Sua mensagem foi enviada com sucesso!</p>}
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </Container>
    )
}
