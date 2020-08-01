import React from 'react'
export default function Search () {
  return (<p>
    Search
  </p>)
}

Search.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
