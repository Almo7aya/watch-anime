import React from 'react'
import propTypes from 'prop-types'

import httpClient from '../../../utils/http-client'
import EpisodeDetails from '../../../components/EpisodeDetails'

const ENDPOINT = 'episode-details'

export default function EpisodePage({ animeId, data, status }) {
  if (!data || status < 200) return <h1>SERVER IS OUT!</h1>

  const { response: { data: [dataArray] } } = data

  return (
    <>
      <EpisodeDetails data={dataArray} animeId={animeId} />
    </>
  )
}

EpisodePage.getInitialProps = async ({ query }) => {
  const { animeId, episodeId } = query
  let res
  try {
    res = await httpClient.get(ENDPOINT, {
      params: {
        anime_id: animeId,
        episode_id: episodeId
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
    animeId,
    data: res.data,
    status: res.status
  }
}

EpisodePage.propTypes = {
  data: propTypes.object.isRequired,
  status: propTypes.number.isRequired,
  animeId: propTypes.string,
  episodeId: propTypes.string
}
