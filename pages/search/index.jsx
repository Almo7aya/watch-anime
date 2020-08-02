import React from 'react'

import { useTranslation } from '../../i18n'
import Topbar from '../../components/Topbar'
import AnimeList from '../../components/AnimeList'
import Layout from '../../components/Layout'
import SearchBox from '../../components/SearchBox'

export default function SearchPage() {
  const { t } = useTranslation()

  return (
    <Layout>
      <Topbar heading={t('animes-list')} />
      <SearchBox initialSearchValue='' onValueChange={(e) => {
        console.log(e)
      }} />
      <AnimeList />
    </Layout>
  )
}

SearchPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
