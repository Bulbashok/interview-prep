import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/contexts/AuthContext';
import AppRouter from './router/router';
import './i18n/i18n';
import { Toaster } from 'react-hot-toast';
import ThemeInitializer from './components/ThemeSwitcher/ThemeInitializer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <ThemeInitializer />
        <Toaster position="top-center" reverseOrder={true} />
        <AppRouter />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
);
