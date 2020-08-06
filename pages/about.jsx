import React from 'react'

export default function AboutPage () {
  return (<h2>About~</h2>)
}

AboutPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
