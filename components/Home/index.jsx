import React from 'react'
import styles from './Home.module.scss'

import { useTranslation } from '../../i18n'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className={styles.main}>
      {t('latest-animes')}
    </main>
  )
}
