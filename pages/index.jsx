import React from 'react'
import propTypes from 'prop-types'

import AnimeList from '../components/AnimeList'
import httpClient from '../utils/http-client'
import config from '../config.json'

const ENDPOINT = 'homepage'

export default function IndexPage({ data, status }) {
  if (!data || status < 200) return <h1>SERVER IS OUT!</h1>

  const { response } = data

  return (
    <>
      <AnimeList initailAnimeData={response.data} endpoint={ENDPOINT} />
    </>
  )
}

IndexPage.getInitialProps = async () => {
  let res
  try {
    res = await httpClient.get(ENDPOINT, {
      params: {
        _limit: config.initialPageLimit
      }
    })
  } catch (e) {
    res = {
      data: null,
      status: 500
    }
  }

  return {
    namespacesRequired: ['common'],
    data: res.data,
    status: res.status
  }
}

IndexPage.propTypes = {
  data: propTypes.object.isRequired,
  status: propTypes.number.isRequired
}
