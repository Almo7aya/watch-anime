import React from 'react'
import propTypes from 'prop-types'

import styles from './Navtools.module.scss'
import LanguageToggler from '../LanguageToggler'
import ThemeToggler from '../ThemeToggler'

export default function Navtools({ isLight = false }) {
  return (
    <section className={styles.navtools}>
      <ul className={styles.navtools_list}>
        <li className={styles.navtools_list_item}>
          <LanguageToggler />
        </li>
        <li className={styles.navtools_list_item}>
          <ThemeToggler isLight={isLight} />
        </li>
      </ul>
    </section>
  )
}

Navtools.propTypes = {
  isLight: propTypes.bool
}
