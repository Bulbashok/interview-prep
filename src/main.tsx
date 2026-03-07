import './styles/reset.css';
import './styles/variables.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/contexts/AuthContext';
import AppRouter from './router/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
);
