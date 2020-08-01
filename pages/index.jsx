import React from 'react'
import Head from 'next/head'

import { useTranslation } from '../i18n'

export default function Home () {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{t('name')}</h1>

    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
