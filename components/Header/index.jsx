import React from 'react'

import styles from './Header.module.scss'

export default function Header () {
  return (<>
    <header className={styles.header}>
      <h1 className={styles.brand}>
        <span>W</span>
        <span>W</span>
        <span>W</span>
      </h1>
    </header>
  </>)
}
