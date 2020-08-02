import React from 'react'

export default function AboutPage () {
  return (<p>
    About~
  </p>)
}

AboutPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
