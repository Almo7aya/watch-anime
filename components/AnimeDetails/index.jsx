import React from 'react'
import propTypes from 'prop-types'

import styles from './AnimeDetails.module.scss'
import AnimeEpisodeList from '../AnimeEpisodeList'

export default function AnimeDetails({ data }) {
  return (
    <section className={styles.animedetails}>

      <div className={styles.animedetails_detailsholder}>
        <div className={styles.animedetails_detailsholder_image}>
          <img src={data.anime_cover_image_url} />
        </div>
        <div className={styles.animedetails_detailsholder_details}>
          <p>Name: {data.anime_name}</p>
          <p>Age Rating: {data.anime_age_rating}</p>
          <p>Rating: {data.anime_rating}</p>
          <div>
            <p>Year: {data.anime_release_year}</p>
            <p>Season: {data.anime_season}</p>
          </div>
          <p>Description: {data.anime_description}</p>
        </div>
      </div>

      <div className={styles.animedetails_episodesholder}>
        <h2>Episodes</h2>
        <AnimeEpisodeList animeId={data.anime_id} />
      </div>
    </section>
  )
}

AnimeDetails.propTypes = {
  data: propTypes.object.isRequired
}
