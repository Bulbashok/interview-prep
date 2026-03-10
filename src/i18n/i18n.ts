import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslate from './locales/en.json';
import ruTranslate from './locales/ru.json';

const translation = {
  en: { translation: enTranslate },
  ru: { translation: ruTranslate },
};

i18next.use(initReactI18next).init({
  lng: 'en',
  supportedLngs: ['ru', 'en'],
  resources: translation,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
