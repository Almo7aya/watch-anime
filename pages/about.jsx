import React from 'react'

export default function About () {
  return (<p>
    About~
  </p>)
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
