import React from 'react'
import propTypes from 'prop-types'

import AnimeList from '../../components/AnimeList'
import SearchBox from '../../components/SearchBox'
import httpClient from '../../utils/http-client'
import config from '../../config.json'

const ENDPOINT = 'search'

const getSearchData = async (query) => {
  let res
  try {
    res = await httpClient.get(ENDPOINT, {
      params: {
        _limit: config.initialPageLimit,
        query: query
      }
    })
  } catch (e) {
    res = {
      data: null,
      status: 500
    }
  }
  return res
}

export default function SearchPage({ query, data, status }) {
  if (!data || status < 200) return <h1>SERVER IS OUT!</h1>

  const { response } = data

  return (
    <>
      <SearchBox initialSearchValue={query} onValueChange={(newQuery) => {}} />
      <AnimeList key={query} initailAnimeData={response.data} endpoint={ENDPOINT + `?query=${query}`} />
    </>
  )
}

SearchPage.getInitialProps = async ({ query }) => {
  const searchQuery = Object.keys(query).length ? query.query[0] : ''

  const res = await getSearchData(searchQuery)

  return {
    namespacesRequired: ['common'],
    data: res.data,
    status: res.status,
    query: searchQuery
  }
}

SearchPage.propTypes = {
  data: propTypes.object.isRequired,
  status: propTypes.number.isRequired,
  query: propTypes.string
}
