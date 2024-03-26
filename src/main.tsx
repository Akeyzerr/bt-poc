import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'

import * as serviceWorkerRegistration from './serviceWorkerRegistration.ts';
import reportWebVitals from './reportWebVitals.ts';

import { BluetoothProvider } from './core/Bluetooth/BluetoothContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BluetoothProvider>
      <App />
    </BluetoothProvider>
  </React.StrictMode>,
)

serviceWorkerRegistration.register();
reportWebVitals();