import React from 'react'

import styles from './LanguageToggler.module.scss'
import { useTranslation } from 'next-i18next'

export default function LanguageToggler() {
  const { i18n } = useTranslation()

  return (<p className={styles.languagetoggler} onClick={() => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
    i18n.on('languageChanged', () => {
      document.querySelector('html').lang = i18n.language
    })
  }}>
    {
      i18n.language === 'en' ? 'عربي' : 'English'
    }
  </p>)
}
