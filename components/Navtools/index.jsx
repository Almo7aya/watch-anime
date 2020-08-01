import React, { useState } from 'react'
import propTypes from 'prop-types'

import styles from './Navtools.module.scss'
import LightTheme from '../LightTheme'
import { useTranslation } from '../../i18n'

export default function Navtools({ isLight = false }) {
  const [isLightTheme, setIsLightTheme] = useState(isLight)
  const { i18n } = useTranslation()

  return (
    <section className={styles.navtools}>
      <ul className={styles.navtools_list}>
        <li className={styles.navtools_list_item}>
          <p onClick={() => {
            i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
            i18n.on('languageChanged', () => {
              document.querySelector('html').lang = i18n.language
            })
          }}>
            {
              i18n.language === 'en' ? 'عربي' : 'English'
            }
          </p>
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
