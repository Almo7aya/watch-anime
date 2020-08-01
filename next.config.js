const { nextI18NextRewrites } = require('next-i18next/rewrites')
const withSass = require('@zeit/next-sass')

const localeSubpaths = {
  en: 'en',
  ar: 'ar'
}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  },
  withSass: withSass()
}
