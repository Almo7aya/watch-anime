import React from 'react'
import ReactDOM from 'react-dom'

import styles from './LightTheme.module.scss'

export default function LightTheme() {
  ReactDOM.createPortal(<div className={styles.lighttheme}>1</div>, document.getElementById('light-theme-holder'))
  return null
}
