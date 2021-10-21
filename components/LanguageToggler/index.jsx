import React from 'react'
import { useRouter } from 'next/router'

import styles from './LanguageToggler.module.scss'
import { useTranslation } from 'next-i18next'

export default function LanguageToggler() {
  const { i18n } = useTranslation()
  const router = useRouter()

  return (<p className={styles.languagetoggler} onClick={() => {
    router.push(router.asPath, router.asPath, { locale: i18n.language === 'en' ? 'ar' : 'en' })
  }}>
    {
      i18n.language === 'en' ? 'عربي' : 'English'
    }
  </p>)
}
