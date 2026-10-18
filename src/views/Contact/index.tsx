import React, { useState, FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../../components/Container'


const encode = (data: any) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export const Contact: React.FC = () => {
    const { t } = useTranslation()

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
        <Container
            id="contact"
            containerClassName="contact-page-content"
            sessionClassName="contact contact-page relative overflow-hidden"
        >
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950 pointer-events-none"></div>
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 column centered w-full max-w-3xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-6 md:mb-8 animate-fade-in-up">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl mb-4 shadow-lg">
                        <span className="text-3xl">💬</span>
                    </div>

                    <h2 className="mx-auto w-fit max-w-full text-3xl md:text-4xl font-bold mb-4 text-white relative animate-fade-in-up delay-100">
                        {t('contact.title')}
                        <span className="absolute inset-x-0 -bottom-2 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur"></span>
                    </h2>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full space-y-3 animate-fade-in-up delay-200">
                    {/* Name Input */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                            {t('contact.form.name')}
                        </label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full px-4 py-3 bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                            placeholder={t('contact.form.namePlaceholder')}
                        />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            {t('contact.form.email')}
                        </label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                            placeholder={t('contact.form.emailPlaceholder')}
                        />
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-2">
                        <label htmlFor="details" className="block text-sm font-medium text-gray-300">
                            {t('contact.form.message')}
                        </label>
                        <textarea
                            onChange={handleChange}
                            name="details"
                            id="details"
                            rows={3}
                            required
                            className="w-full px-4 py-3 bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 resize-none"
                            placeholder={t('contact.form.messagePlaceholder')}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 border border-transparent hover:border-cyan-300 animate-fade-in-up delay-300"
                    >
                        {t('contact.form.submit')}
                    </button>

                    {/* Success Message */}
                    {isSent && (
                        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-center text-green-400 animate-fade-in-up delay-400">
                            {t('contact.success')}
                        </div>
                    )}
                </form>

                {/* Direct contact info */}
                <div className="mt-4 p-3 bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl text-center">
                    <p className="text-gray-300 mb-2">{t('contact.directContactLabel')}</p>
                    <a
                        href="mailto:bruno.rocha2008@gmail.com"
                        className="inline-flex items-center justify-center px-6 py-3 bg-slate-800/60 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-slate-700/80 border border-slate-600 hover:border-cyan-500 transition-all duration-200"
                    >
                        <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        bruno.rocha2008@gmail.com
                    </a>
                </div>
            </div>
        </Container>
    )
}