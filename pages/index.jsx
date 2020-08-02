import React from 'react'
import styles from '../styles/modules/Home.module.scss'

import { useTranslation } from '../i18n'
import Topbar from '../components/Topbar'
import AnimeList from '../components/AnimeList'

export default function IndexPage() {
  const { t } = useTranslation()

  return (
    <main className={styles.main}>
      <Topbar heading={t('latest-animes')} />
      <AnimeList />
    </main>
  )
}

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
