import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import Link from 'next/link'

import styles from './AnimeEpisodeList.module.scss'
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
        setEpisodesList(data.response.data.reverse())
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
      <div className={styles.animeepisodelist}>
        {!hasError && !isLoading && episodesList.map(ep => (
          <Link href='/anime/[animeId]/[episodeId]' as={`/anime/${animeId}/${ep.episode_id}`} key={ep.episode_id}>
            <a>
              {ep.episode_name}
            </a>
          </Link>
        )
        )}
      </div>
    </>
  )
}

AnimeEpisodeList.propTypes = {
  animeId: propTypes.string.isRequired
}
