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
    const muiltServer = episodeURL.find(server => server.episode_server_name === 'muilt')
    httpClinet.get('/watch-link', {
      params: {
        link: muiltServer.episode_url
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
      {loading && <Loading />}
      <div className={styles.episodedetailsurl}>
        {!loading && urls.map(url => (<iframe key={url} src={url} />))}
      </div>
    </>
  )
}

EpisodeDetailsURL.propTypes = {
  episodeURL: propTypes.array.isRequired
}
