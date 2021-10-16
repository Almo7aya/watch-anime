import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'

import styles from './EpisodeDetailsURL.module.scss'
import httpClinet from '../../utils/http-client'
import Loading from '../Loading'

export default function EpisodeDetailsURL({ episodeURL }) {
  const [urls, setUrls] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: solve the CDN encryption
    const cdnServer = episodeURL.find(server => server.episode_server_name === 'cdn')
    console.log(cdnServer)

    httpClinet.get('/stream-link', {
      params: {
        link: cdnServer.episode_url
      }
    }).then(({ data }) => {
      setUrls(data)
      console.log(data)

      setLoading(false)
    }).catch(e => {
      setLoading(false)
      console.log(e)
    })
  }, [])

  return (
    <>
      {loading ? <Loading />
        : <div className={styles.episodedetailsurl}>
          <video autoPlay controls src={urls[0]} />
        </div>
      }
    </>
  )
}

EpisodeDetailsURL.propTypes = {
  episodeURL: propTypes.array.isRequired
}
