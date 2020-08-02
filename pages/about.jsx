import React from 'react'

import Layout from '../components/Layout'

export default function AboutPage () {
  return (<Layout>About~</Layout>)
}

AboutPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
