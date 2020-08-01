import React from 'react'

import Layout from '../Layout'
import styles from './Home.module.scss'

export default function Home () {
  return (
    <Layout>
      <main className={styles.main}>
        This is main!!
      </main>
    </Layout>
  )
}
