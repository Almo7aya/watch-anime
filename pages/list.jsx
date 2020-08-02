import React from 'react'

import { useTranslation } from '../i18n'
import Layout from '../components/Layout'
import Topbar from '../components/Topbar'
import AnimeList from '../components/AnimeList'

export default function ListPage() {
  const { t } = useTranslation()

  return (
    <Layout>
      <Topbar heading={t('animes-list')} />
      <AnimeList />
    </Layout>
  )
}

ListPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
