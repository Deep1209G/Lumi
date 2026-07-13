import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en';
import hi from './translations/hi';
import gu from './translations/gu';

import { getLanguage } from '@src/utils/languageStorage';

const initI18n = async () => {
  const language = await getLanguage();

  await i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',

    lng: language,

    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translation: en,
      },
      hi: {
        translation: hi,
      },
      gu: {
        translation: gu,
      },
    },
  });
};

initI18n();

export default i18n;