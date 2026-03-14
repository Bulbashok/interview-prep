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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <Toaster position="top-center" reverseOrder={true} />
        <AppRouter />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
);
