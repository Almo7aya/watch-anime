import React from 'react'
import propTypes from 'prop-types'
import styles from './Topbar.module.scss'

export default function Topbar({ heading }) {
  return (
    <section className={styles.topbar}>
      <h2 className={styles.heading}>
        {heading}
      </h2>
    </section>
  )
}

Topbar.propTypes = {
  heading: propTypes.string.isRequired
}
