import React from 'react'
import Link from 'next/link'

import styles from './Header.module.scss'
import { useTranslation } from '../../i18n'
import LanguageToggler from '../LanguageToggler'
import ThemeToggler from '../ThemeToggler'

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
      <div className={styles.header_themetoggler}>
        <ThemeToggler isLight={false} />
      </div>
    </header>
  </>)
}
