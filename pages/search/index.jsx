import React from 'react'

import styles from '../../styles/modules/Search.module.scss'
import { useTranslation } from '../../i18n'
import Topbar from '../../components/Topbar'
import AnimeList from '../../components/AnimeList'

export default function SearchPage() {
  const { t } = useTranslation()

  return (
    <main className={styles.main}>
      <Topbar heading={t('animes-list')} />
      <input />
      <AnimeList />
    </main>
  )
}

SearchPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
