import React from 'react'
import Link from 'next/link'

import styles from './Header.module.scss'
import { useTranslation } from 'next-i18next'
import LanguageToggler from '../LanguageToggler'

export default function Header() {
  const { t } = useTranslation()
  return (<>
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <h1 className={styles.brand}>
            <span>{t('brand')}</span>
            <span>{t('brand')}</span>
            <span>{t('brand')}</span>
          </h1>
        </a>
      </Link>
      <div className={styles.header_languagetoggler}>
        <LanguageToggler />
      </div>
    </header>
  </>)
}
