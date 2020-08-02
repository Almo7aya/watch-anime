import React from 'react'

import { useTranslation } from '../../i18n'
import Topbar from '../../components/Topbar'
import AnimeList from '../../components/AnimeList'
import Layout from '../../components/Layout'

export default function QueryPage() {
  const { t } = useTranslation()

  return (
    <Layout>
      <Topbar heading={t('animes-list')} />
      <AnimeList />
    </Layout>
  )
}

QueryPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
