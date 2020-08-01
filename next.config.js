const { nextI18NextRewrites } = require('next-i18next/rewrites')
const withSass = require('@zeit/next-sass')

module.exports = {
  rewrites: async () => nextI18NextRewrites(),
  withSass: withSass()
}
