import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslate from './locales/en.json';
import ruTranslate from './locales/ru.json';

const LANGUAGE_KEY = 'language';

const savedLanguage = localStorage.getItem(LANGUAGE_KEY) || 'en';

const translation = {
  en: { translation: enTranslate },
  ru: { translation: ruTranslate },
};

i18next.use(initReactI18next).init({
  lng: savedLanguage,
  supportedLngs: ['ru', 'en'],
  resources: translation,
  interpolation: {
    escapeValue: false,
  },
});

i18next.on('languageChanged', (lng) => {
  localStorage.setItem(LANGUAGE_KEY, lng);
});

export default i18next;
