import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client'; // usar import nomeado
import App from './App';
// import i18n (needs to be bundled ;))
import './i18n';

const rootElement = document.getElementById('root') as HTMLElement | null;
if (!rootElement) throw new Error('Root element not found: #root');

const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Suspense fallback={<div>loading</div>}>
            <App />
        </Suspense>
    </React.StrictMode>,
);