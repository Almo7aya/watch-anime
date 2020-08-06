import React from 'react'

import { useTranslation } from '../i18n'
import Topbar from '../components/Topbar'
import AnimeList from '../components/AnimeList'

export default function ListPage() {
  const { t } = useTranslation()

  return (
    <>
      <Topbar heading={t('animes-list')} />
      <AnimeList />
    </>
  )
}

ListPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
