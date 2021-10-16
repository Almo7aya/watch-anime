const withSass = require('@zeit/next-sass')
const { i18n } = require('./next-i18next.config.js')

module.exports = {
  withSass: withSass(),
  i18n
}
