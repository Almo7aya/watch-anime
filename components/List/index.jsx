import React from 'react'

import styles from './List.module.scss'
import { useTranslation } from '../../i18n'
import Topbar from '../Topbar'
import AnimeList from '../AnimeList'

export default function List() {
  const { t } = useTranslation()

  return (
    <main className={styles.main}>
      <Topbar heading={t('animes-list')} />
      <AnimeList />
    </main>
  )
}
