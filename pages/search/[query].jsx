import React from 'react'

export default function Query () {
  return (<p>
    Query
  </p>)
}

Query.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
