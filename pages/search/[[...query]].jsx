import React from 'react'
import propTypes from 'prop-types'

import { useTranslation } from '../../i18n'
import Topbar from '../../components/Topbar'
import AnimeList from '../../components/AnimeList'
import SearchBox from '../../components/SearchBox'

export default function SearchPage({ params }) {
  const { t } = useTranslation()

  const searchQuery = Object.keys(params).length ? params.query[0] : ''

  return (
    <>
      <Topbar heading={t('search')} />
      <SearchBox initialSearchValue={searchQuery} onValueChange={(e) => {
        console.log(e)
      }} />
      <AnimeList />
    </>
  )
}

SearchPage.getInitialProps = async ({ query }) => ({
  namespacesRequired: ['common'],
  params: query
})

SearchPage.propTypes = {
  params: propTypes.object.isRequired
}
