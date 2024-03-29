import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'

import * as serviceWorkerRegistration from './serviceWorkerRegistration.ts';
import reportWebVitals from './reportWebVitals.ts';

import { BluetoothProvider } from './core/Bluetooth/BluetoothContext.tsx';
import { USBProvider } from './core/USB/USBContext.tsx';
import { StatusMessageProvider } from './shared/statusMessagesContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StatusMessageProvider>
      <USBProvider>
        <BluetoothProvider>
          <App />
        </BluetoothProvider>
      </USBProvider>
    </StatusMessageProvider>
  </React.StrictMode>,
)

serviceWorkerRegistration.register();
reportWebVitals();