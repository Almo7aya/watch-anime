import React from 'react'
import propTypes from 'prop-types'

import { useTranslation } from '../../i18n'
import Topbar from '../../components/Topbar'
import AnimeList from '../../components/AnimeList'
import Layout from '../../components/Layout'
import SearchBox from '../../components/SearchBox'

export default function QueryPage({ query }) {
  const { t } = useTranslation()
  const { query: searchQuery } = query

  console.log(searchQuery + '??')

  console.log('RENDERING ~ QueryPage')

  return (
    <Layout>
      <Topbar heading={t('animes-list')} />
      <SearchBox initialSearchValue={searchQuery} onValueChange={(e) => {
        // console.log(e)
      }} />
      <AnimeList />
    </Layout>
  )
}

QueryPage.getInitialProps = async ({ query }) => ({
  namespacesRequired: ['common'],
  query: query
})

QueryPage.propTypes = {
  query: propTypes.object.isRequired
}
