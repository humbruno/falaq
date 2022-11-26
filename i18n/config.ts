import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from 'locales/en.json';
import translationES from 'locales/es.json';

export const resources = {
  es: {
    translation: translationES,
  },
  en: {
    translation: translationEN,
  },
} as const;

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});

export default i18n;
