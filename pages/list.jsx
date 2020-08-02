import React from 'react'

import styles from '../styles/modules/List.module.scss'
import { useTranslation } from '../i18n'
import Topbar from '../components/Topbar'
import AnimeList from '../components/AnimeList'

export default function ListPage() {
  const { t } = useTranslation()

  return (
    <main className={styles.main}>
      <Topbar heading={t('animes-list')} />
      <AnimeList />
    </main>
  )
}

ListPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
