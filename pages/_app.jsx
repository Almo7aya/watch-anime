import React from 'react'
import propTypes from 'prop-types'
import { appWithTranslation } from 'next-i18next'

import '../styles/main.scss'
import Layout from '../components/Layout'
import { isServer } from '../utils/helpers'

if (!isServer) {
  document.querySelector(':root').style
    .setProperty('--vh', window.innerHeight / 100 + 'px')
  window.addEventListener('resize', () => {
    document.querySelector(':root').style
      .setProperty('--vh', window.innerHeight / 100 + 'px')
  })
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.propTypes = {
  Component: propTypes.func.isRequired,
  pageProps: propTypes.object.isRequired
}

export default appWithTranslation(MyApp)
