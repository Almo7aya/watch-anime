import React from 'react'
import propTypes from 'prop-types'

import styles from './Layout.module.scss'
import Header from '../Header'
import Navbar from '../Navbar'

export default function Layout ({ children }) {
  return (
    <>
      <div className="main-grid-container">
        <Header />
        <Navbar />
        <main className={styles.layout_main_section}>
          {children}
        </main>
      </div>
      <div id='light-theme-holder'></div>
    </>
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired
}
