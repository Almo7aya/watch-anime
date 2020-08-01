import React, { useState } from 'react'
import propTypes from 'prop-types'

import styles from './Navtools.module.scss'
import LightTheme from '../LightTheme'

export default function Navtools({ isLight = false }) {
  const [isLightTheme, setIsLightTheme] = useState(isLight)

  return (
    <section className={styles.navtools}>
      <ul className={styles.navtools_list}>
        <li className={styles.navtools_list_item}>
          <p>عربي</p>
        </li>
        <li className={styles.navtools_list_item}>
          <button onClick={() => setIsLightTheme(!isLightTheme)} type='button'>
            {
              isLightTheme ? <><LightTheme /> 🌚 </> : <span>🌝</span>
            }
          </button>
        </li>
      </ul>
    </section>
  )
}

Navtools.propTypes = {
  isLight: propTypes.bool
}
