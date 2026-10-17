import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import i18n (needs to be bundled ;))
import './i18n'

import './index.css'

const loadingElement = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-950 z-[9999]">
        <div className="text-center animate-fade-in-up">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500 mx-auto"></div>
            <p className="mt-4 text-gray-300 text-lg">Carregando...</p>
        </div>
    </div>
)

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<loadingElement />}>
            <App />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
)