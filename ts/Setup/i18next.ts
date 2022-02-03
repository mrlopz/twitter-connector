import i18next from 'i18next'
import en from '../Locale/en-US.json'

i18next.init({
  supportedLngs: ['en'],
  lng: 'en',
  resources: {
    en: {
      translation: en,
    },
  },
})
