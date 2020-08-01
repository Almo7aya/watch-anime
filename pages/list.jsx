import React from 'react'

import List from '../components/List'

export default function Index () {
  return <List />
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
