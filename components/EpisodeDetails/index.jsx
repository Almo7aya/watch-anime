import React from 'react'
import propTypes from 'prop-types'

import styles from './EpisodeDetails.module.scss'
import EpisodeDetailsURL from '../EpisodeDetailsURL'

export default function EpisodeDetails({ data }) {
  return (
    <section className={styles.episodedetails}>
      <h2>{data.episode_name}</h2>
      <EpisodeDetailsURL episodeURL={data.episode_urls} />
    </section>
  )
}

EpisodeDetails.propTypes = {
  data: propTypes.object.isRequired,
  animeId: propTypes.string.isRequired
}
