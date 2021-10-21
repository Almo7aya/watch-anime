import React from 'react'
import propTypes from 'prop-types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AnimeList from '../../components/AnimeList'
import SearchBox from '../../components/SearchBox'

const ENDPOINT = 'search'

export default function SearchPage({ query }) {
  return (
    <>
      <SearchBox initialSearchValue={query} onValueChange={() => { }} />
      <AnimeList key={query} endpoint={ENDPOINT + `?query=${query}`} />
    </>
  )
}

export const getServerSideProps = async ({ query, locale }) => {
  const searchQuery = Object.keys(query).length ? query.query[0] : ''

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      query: searchQuery || ''
    }
  }
}

SearchPage.propTypes = {
  query: propTypes.string
}
