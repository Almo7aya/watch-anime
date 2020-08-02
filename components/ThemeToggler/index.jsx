import React, { useState } from 'react'
import propTypes from 'prop-types'

import styles from './ThemeToggler.module.scss'
import LightTheme from '../LightTheme'

export default function ThemeToggler({ isLight }) {
  const [isLightTheme, setIsLightTheme] = useState(isLight)

  return (<button className={styles.themetoggler} onClick={() => setIsLightTheme(!isLightTheme)} type='button'>
    {
      isLightTheme ? <><LightTheme isFull={false} /> 🌚 </> : <span>🌝</span>
    }
  </button>)
}

ThemeToggler.propTypes = {
  isLight: propTypes.bool
}
