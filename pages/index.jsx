import React from 'react'

import { useTranslation } from '../i18n'
import Topbar from '../components/Topbar'
import AnimeList from '../components/AnimeList'

export default function IndexPage() {
  const { t } = useTranslation()

  return (
    <>
      <Topbar heading={t('latest-animes')} />
      <AnimeList />
    </>
  )
}

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
