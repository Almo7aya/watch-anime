import React from 'react'

import Home from '../components/Home'

export default function Index () {
  return <Home />
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
