import React from 'react'
import propTypes from 'prop-types'
import App from 'next/app'
import { appWithTranslation } from '../i18n'

import Layout from '../components/Layout'

import '../styles/main.scss'

function MyApp ({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

MyApp.propTypes = {
  Component: propTypes.func.isRequired,
  pageProps: propTypes.object.isRequired
}

export default appWithTranslation(MyApp)
