import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import Link from 'next/link'

import Loading from '../Loading'
import httpClinet from '../../utils/http-client'

// TODO: Create a retry logic
export default function AnimeEpisodeList({ animeId }) {
  const [episodesList, setEpisodesList] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(null)

  useEffect(() => {
    httpClinet.get('anime-episodes', {
      params: {
        anime_id: animeId
      }
    })
      .then(({ data }) => {
        setEpisodesList(data.response.data)
        setIsLoading(false)
      })
      .catch((e) => {
        setHasError(e)
        setIsLoading(false)
      })
  }, [animeId])

  return (
    <>
      {hasError && <p>Error while loading</p>}
      {isLoading && <Loading />}
      {!hasError && !isLoading && episodesList.map(ep => (
        <Link href='/' key={ep.episode_id}>
          <a>
            <p>{ep.episode_name}</p>
          </a>
        </Link>
      )
      )}
    </>
  )
}

AnimeEpisodeList.propTypes = {
  animeId: propTypes.string.isRequired
}
