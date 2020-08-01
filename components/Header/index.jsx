import React from 'react'

import styles from './Header.module.scss'
import { useTranslation } from '../../i18n'

export default function Header () {
  const { t } = useTranslation()
  return (<>
    <header className={styles.header}>
      <h1 className={styles.brand}>
        <span>{t('brand')}</span>
        <span>{t('brand')}</span>
        <span>{t('brand')}</span>
      </h1>
    </header>
  </>)
}
