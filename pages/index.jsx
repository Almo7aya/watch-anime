import React from 'react'

import { useTranslation } from '../i18n'
import Topbar from '../components/Topbar'
import AnimeList from '../components/AnimeList'
import Layout from '../components/Layout'

export default function IndexPage() {
  const { t } = useTranslation()

  return (
    <Layout>
      <Topbar heading={t('latest-animes')} />
      <AnimeList />
    </Layout>
  )
}

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
