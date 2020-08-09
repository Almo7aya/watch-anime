import React from 'react'

import styles from './Loading.module.scss'

export default function Loading() {
  return (
    <div className={styles.loading}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
