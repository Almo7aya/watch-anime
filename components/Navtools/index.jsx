import React from 'react'
import propTypes from 'prop-types'

import styles from './Navtools.module.scss'
import LanguageToggler from '../LanguageToggler'

export default function Navtools() {
  return (
    <section className={styles.navtools}>
      <ul className={styles.navtools_list}>
        <li className={styles.navtools_list_item}>
          <LanguageToggler />
        </li>
      </ul>
    </section>
  )
}

Navtools.propTypes = {
  isLight: propTypes.bool
}
