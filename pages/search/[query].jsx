import React from 'react'

import styles from '../../styles/modules/Search.module.scss'
import { useTranslation } from '../../i18n'
import Topbar from '../../components/Topbar'
import AnimeList from '../../components/AnimeList'

export default function QueryPage() {
  const { t } = useTranslation()

  return (
    <main className={styles.main}>
      <Topbar heading={t('animes-list')} />
      <input />
      <AnimeList />
    </main>
  )
}

QueryPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
