import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/arimo/hebrew-400.css';
import '@fontsource/arimo/hebrew-500.css';
import '@fontsource/arimo/hebrew-700.css';
import '@fontsource/arimo/cyrillic-400.css';
import '@fontsource/arimo/cyrillic-500.css';
import '@fontsource/arimo/cyrillic-700.css';
import './locales/i18n';
import App from './App';
import {SettingsProvider} from "./contexts/SettingsContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>
);
