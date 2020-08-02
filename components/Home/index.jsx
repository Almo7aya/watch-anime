import React from 'react'
import styles from './Home.module.scss'

import { useTranslation } from '../../i18n'
import Topbar from '../Topbar'
import AnimeList from '../AnimeList'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className={styles.main}>
      <Topbar heading={t('latest-animes')} />
      <AnimeList />
    </main>
  )
}
