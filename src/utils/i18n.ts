import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { parse } from 'yaml';
import { initReactI18next } from 'react-i18next';

const langDetector = new LanguageDetector();
langDetector.addDetector({
	name: 'hash-custom',
	lookup({lookupFromPathIndex}) {
		if (typeof window === 'undefined') return undefined;
    const language = window.location.hash.match(/\/([a-zA-Z-]*)/g);
    if (!Array.isArray(language)) return undefined;
    const index = typeof lookupFromPathIndex === 'number' ? lookupFromPathIndex : 0;
		return language[index]?.replace('/', '');
	}
});

i18n
  .use(Backend)
	.use(initReactI18next)
  .use(langDetector)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    detection: {
      order: ['hash-custom', 'navigator'],
			//order: ['path', 'navigator'],
			lookupFromPathIndex: 0
    },
		backend: {
      loadPath: './locales/{{lng}}.yml',
      parse: (data: string) => parse(data)
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
