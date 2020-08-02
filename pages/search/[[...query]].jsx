import React from 'react'
import propTypes from 'prop-types'

import { useTranslation } from '../../i18n'
import Topbar from '../../components/Topbar'
import AnimeList from '../../components/AnimeList'
import Layout from '../../components/Layout'
import SearchBox from '../../components/SearchBox'

export default function SearchPage({ params }) {
  const { t } = useTranslation()

  const searchQuery = Object.keys(params).length ? params.query[0] : ''

  return (
    <Layout>
      <Topbar heading={t('animes-list')} />
      <SearchBox initialSearchValue={searchQuery} onValueChange={(e) => {
        console.log(e)
      }} />
      <AnimeList />
    </Layout>
  )
}

SearchPage.getInitialProps = async ({ query }) => ({
  namespacesRequired: ['common'],
  params: query
})

SearchPage.propTypes = {
  params: propTypes.object.isRequired
}
