import React from 'react'
import propTypes from 'prop-types'

import Header from '../Header'
import Navbar from '../Navbar'

export default function Layout ({ children }) {
  return (
    <div className="main-grid-container">
      <Header />
      <Navbar />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired
}
