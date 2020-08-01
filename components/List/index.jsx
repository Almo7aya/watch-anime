import React from 'react'
import styles from './List.module.scss'

import { useTranslation } from '../../i18n'

export default function List() {
  const { t } = useTranslation()

  return (
    <main className={styles.main}>
      {t('animes-list')}
    </main>
  )
}
