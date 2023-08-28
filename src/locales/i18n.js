import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import {enUS, heIL, ruRU} from '@mui/material/locale';
import enLocales from './en.json';
import heLocales from './he.json';
import ruLocales from './ru.json';
import en_flag from '../assets/icons/ic_flag_en.svg';
import he_flag from '../assets/icons/ic_flag_he.svg';
import ru_flag from '../assets/icons/ic_flag_ru.svg';

export const LANGS = [
  {
    value: 'en',
    systemValue: enUS,
    icon: en_flag,
  },
  {
    value: 'he',
    systemValue: heIL,
    icon: he_flag,
  },
  {
    value: 'ru',
    systemValue: ruRU,
    icon: ru_flag,
  },
];

const langStorage = localStorage.getItem('i18nextLng');
const currentLang = LANGS.find((lang) => lang.value === langStorage) || LANGS[0];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: enLocales },
      he: { translations: heLocales },
      ru: { translations: ruLocales },
    },
    lng: currentLang.value,
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
